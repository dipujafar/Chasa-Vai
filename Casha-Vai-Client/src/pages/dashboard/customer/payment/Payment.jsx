import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutFrom from "./CheckOutFrom";
import SectionTitle from "../../../../components/SectionTitle";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK); 

const Payment = () => {
    return (
        <div>
            <SectionTitle heading={"Payment"} subHeading={"payment to confirm your oder!!"}></SectionTitle>
            <div className="mt-10">
                <Elements stripe={stripePromise}>
                    <CheckOutFrom></CheckOutFrom>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;