import Queue from "bull";
import redisConfig from "../../config/redis";
// Import All Jobs
import * as jobs from "../jobs";
// Transform jobs into queues
const queues = Object.values(jobs).map(job => ({
  bull: new Queue(job.key, redisConfig),
  name: job.key,
  handle: job.handle,
  options: job.options
}));
// Find the Queue needed and export it to Redis
export default {
  queues,
  add(name, data) {
    const queue = this.queues.find(queue => queue.name == name);
    return queue.bull.add(data, queue.options);
  },
  process() {
    return this.queues.forEach(queue => {
      // Passing the Handle for each queue
      queue.bull.process(queue.handle);
      // Creating the Error Handler for each Queue
      queue.bull.on("failed", (job, err) => {
        console.log("An Error Ocurred: ", queue.key, job.data);
        console.log(err);
      });
    });
  }
};
