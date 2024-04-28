const express = require("express");
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const stripe = require("stripe")(process.env.STRIPE_TOKEN);

// middleware
app.use(
  cors({
    origin: ["http://localhost:5173", "https://chasa-vai.web.app"],
    credentials: true,
  })
);
app.use(express.json());

const verifyToken = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "unauthorized access" });
  }

  const token = req.headers.authorization.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "unauthorized access" });
    }
    req.decoded = decoded;
    next();
  });
};

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@jafardipu.hwlq4pv.mongodb.net/?retryWrites=true&w=majority&appName=jafardipu`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const userCollection = client.db("FarmEr").collection("users");
    const productsCollection = client.db("FarmEr").collection("products");
    const cartCollection = client.db("FarmEr").collection("cart");
    const paymentsCollection = client.db("FarmEr").collection("payment");
    const farmerReqCollection = client.db("FarmEr").collection("farmerReq");

    //middle
    const verifyAdmin = async (req, res, next) => {
      const email = req?.decoded?.email;
      const query = { email: email };
      const user = await userCollection.findOne(query);
      const isAdmin = user?.role === "admin";
      if (!isAdmin) {
        return res.status(403).send({ message: "forbidden" });
      }
      next();
    };


    //jwt related apis
    app.post("/jwt", async (req, res) => {
      try {
        const user = req?.body;
        const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: "1h",
        });
        res.send({ token });
      } catch {
        (err) => {
          res.send(err);
        };
      }
    });

    // admin related api
    app.get("/users/admin/:email", verifyToken, async (req, res) => {
      try {
        const email = req.params.email;
        if (email !== req.decoded.email) {
          return res.status(403).send({ message: "forbidden" });
        }

        const query = { email: email };
        const user = await userCollection.findOne(query);
        let admin = false;
        if (user) {
          admin = user?.role === "admin";
        }
        res.send({ admin });
      } catch {
        (err) => {
          res.send(err);
        };
      }
    });

    app.put("/users/admin/:email",  async (req, res) => {
      try {
        const email = req.params.email;
        const query = { email: email };
        const options = { upsert: true };
        const updateDoc = {
          $set: {
            role: "admin",
          },
        };
        const result = await userCollection.updateOne(
          query,
          updateDoc,
          options
        );
        res.send(result);
      } catch {
        (err) => {
          res.send(err);
        };
      }
    });

    // get all product api
    app.get("/allProducts", verifyToken, verifyAdmin, async(req, res)=>{
      try{
        const result = await productsCollection.find().toArray()
        res.send(result);
      }
      catch {
        (err) => {
          res.send(err);
        };
      }
    }) 

    //Farmer related apis
    app.get("/users/farmer/:email", verifyToken, async (req, res) => {
      try {
        const email = req.params.email;
        if (email !== req.decoded.email) {
          return res.status(403).send({ message: "forbidden" });
        }

        const query = { email: email };
        const user = await userCollection.findOne(query);
        let farmer = false;
        if (user) {
          teacher = user?.role === "farmer";
        }
        res.send({ farmer });
      } catch {
        (err) => {
          res.send(err);
        };
      }
    });

    // get farmer Request data 
    app.get("/farmerReq",verifyToken, verifyAdmin, async(req,res)=>{
      try{
        const result = await farmerReqCollection.find().toArray()
        res.send(result);
      }
      catch {
        (err) => {
          res.send(err);
        };
      }
    })

    // insert farmer Request data
    app.post("/farmerReq", verifyToken, async(req, res)=>{
      try{
        const reqData = req?.body;
        const result = await farmerReqCollection.insertOne(reqData);
        res.send(result)
      }
      catch {
        (err) => {
          res.send(err);
        };
      }
    })

    //products api
    app.get("/products", async (req, res) => {
      try {
        const result = await productsCollection.find().toArray();
        res.send(result);
      } catch {
        (err) => {
          res.send(err);
        };
      }
    });

    //user related
    app.get("/users", verifyToken, verifyAdmin, async (req, res) => {
      try {
        const result = await userCollection.find().toArray();
        res.send(result);
      } catch {
        (err) => {
          res.send(err);
        };
      }
    });

    app.post("/users", async (req, res) => {
      try {
        const user = req.body;

        const query = { email: user.email };
        const existingUser = await userCollection.findOne(query);
        if (existingUser) {
          return res.send({ message: "user already exist", insertedId: null });
        }
        const result = await userCollection.insertOne(user);
        res.send(result);
      } catch {
        (err) => {
          res.send(err);
        };
      }
    });

    // cart related apis

    app.get("/cart/:email", verifyToken, async (req, res) => {
      try {
        const email = req?.params?.email;
        const query = { email: email };
        const result = await cartCollection.find(query).toArray();
        res.send(result);
      } catch {
        (err) => {
          res.send(err);
        };
      }
    });

    app.post("/cart", verifyToken, async (req, res) => {
      try {
        const productsData = req?.body;
        const result = await cartCollection.insertOne(productsData);
        res.send(result);
      } catch {
        (err) => {
          res.send(err);
        };
      }
    });

    app.delete("/cart/:id", async (req, res) => {
      try {
        const id = req?.params?.id;
        const query = { _id: new ObjectId(id) };
        const result = await cartCollection.deleteOne(query);
        res.send(result);
      } catch {
        (err) => {
          res.send(err);
        };
      }
    });

    // payment intent
    app.post("/create-payment-intent", async (req, res) => {
      try {
        const { price } = req.body;
        const amount = parseInt(price * 100);

        const paymentIntent = await stripe.paymentIntents.create({
          amount: amount,
          currency: "usd",
          payment_method_types: ["card"],
        });

        res.send({
          clientSecret: paymentIntent.client_secret,
        });
      } catch {
        (err) => {
          res.send(err);
        };
      }
    });

    // payments related apis

    app.get("/payments/:email", verifyToken, async (req, res) => {
      try {
        const email = req?.params?.email;
        const query = { email: email };
        const result = await paymentsCollection.find(query).toArray();
        res.send(result);
      } catch {
        (err) => {
          res.send(err);
        };
      }
    });

    app.post("/payments", verifyToken, async (req, res) => {
      try {
        const payment = req.body;
        const paymentResult = await paymentsCollection.insertOne(payment);

        const query = {
          _id: {
            $in: payment?.cartIds?.map((id) => new ObjectId(id)),
          },
        };

        const deleteResult = await cartCollection.deleteMany(query);
        res.send({ paymentResult, deleteResult });
      } catch {
        (err) => {
          res.send(err);
        };
      }
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Cashi Vai is on");
});

app.listen(port, () => {
  console.log("Cashi Vai is on port 5000");
});
