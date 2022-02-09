const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51K0G9FJTtLLmsdsqtHWd0FjeF3JCKIqk16hDEFrsacAikYxpE6Y2OdMM5Vg2PhcyQb0guXXN2Q9Ull15Jrbwa8Kk00mOZK6LXj')

//App config
const app = express();

//Middlewares
app.use(cors({origin:true}));
app.use(express.json());


//API routes
app.get('/', (req, res) => res.status(200).send('hello world'))

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
  
    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "usd",
    });
  
    // OK - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });

exports.api = functions.https.onRequest(app)