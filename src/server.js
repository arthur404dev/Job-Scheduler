// Setup dotenv Config
import "dotenv/config";
// Setup the Server
import express from "express";
import SubscriptionController from "./app/controllers/SubscriptionController";
import BullBoard from "bull-board";
import Queue from "./app/tasks/Queue";

const app = express();
// Adding BullBoard for visualization of the Queues
BullBoard.setQueues(Queue.queues.map(queue => queue.bull));
// Set express to use JSON
app.use(express.json());
// As this is a boilerplate app, i'll be using the Route inside the server file, but feel free to import your router
app.post("/subscribe", SubscriptionController.store);
// Creating the Admin route
// !Remember to add Authentication for this route
app.use("/admin/jobs", BullBoard.UI); 
// Listen to port (Change for your Environment Variables if needed)
app.listen(5050, () => {
  console.log("Server Running - Listening to Port: 5050");
});
