import Queue from "../tasks/Queue";

export default {
  async store(req, res) {
    const { name, email } = req.body;
    // As this is a boilerplate app, i'll not be creating a separate model
    const subscriber = {
      name,
      email
    };

    // Send confirmation e-mail to the subscriber
    await Queue.add("SubscriptionEmail", { subscriber });

    return res.json(subscriber);
  }
};
