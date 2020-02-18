import Queue from "bull";
import redisConfig from "../../config/redis";
// Import Jobs
import SubscriptionEmail from "../jobs/SubscriptionEmail";
// Create the Queue for the jobs
const mailQueue = new Queue(SubscriptionEmail.key, redisConfig);
// Export the Queues
export default mailQueue;
