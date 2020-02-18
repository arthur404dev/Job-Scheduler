// Setup dotenv Config
import "dotenv/config";
// Setup the Server
import express from "express";
import SubscriptionController from "./app/controllers/SubscriptionController";
const app = express();

app.use(express.json());
// As this is a boilerplate app, i'll be using the Route inside the server file, but feel free to import your router
app.post("/subscribe", SubscriptionController.store);

// Listen to port (Change for your Environment Variables if needed)
app.listen(5050, () => {
  console.log("Server Running - Listening to Port: 5050");
});
