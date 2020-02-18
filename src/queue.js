// Import the Environment Variables (This is other endpoint for the server)
import "dotenv/config";
// Import Queues and Jobs
import Queue from "./app/tasks/Queue";
// Process Queues
Queue.process();
