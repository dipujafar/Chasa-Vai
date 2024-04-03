const express = require("express");
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require("mongodb");

// middleware
app.use(cors({
  origin: ["http://localhost:5173"],
  credentials: true 
}));
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
    await client.connect();

    const userCollection = client.db("FarmEr").collection("users");
    const productsCollection = client.db("FarmEr").collection("products");
    const cartCollection = client.db("FarmEr").collection("cart");

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

    app.get("/cart/:email", verifyToken, async(req,res)=>{
      try{
        const email = req?.params?.email;
        const query = {email: email}
        const result = await cartCollection.find(query).toArray();
        res.send(result)
      }
      catch {
        (err) => {
          res.send(err);
        };
      }
    })

    app.post("/cart", verifyToken, async(req,res)=>{
      try{
        const productsData = req?.body;
        const result = await cartCollection.insertOne(productsData);
        res.send(result)
       
      }
      catch {
        (err) => {
          res.send(err);
        };
      }
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
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
