// Import the Environment Variables (This is other endpoint for the server)
import "dotenv/config";
// Import Queues and Jobs
import Queue from "./app/tasks/Queue";
import SubscriptionEmail from "./app/jobs/SubscriptionEmail";
// Process Queues
Queue.process(SubscriptionEmail.handle);
