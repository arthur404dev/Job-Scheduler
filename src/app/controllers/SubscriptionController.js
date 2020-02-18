import Mail from "../tasks/Mail";

export default {
  async store(req, res) {
    const { name, email } = req.body;
    // As this is a boilerplate app, i'll not be creating a separate model
    const newsletterSubscription = {
      name,
      email
    };

    // Send confirmation e-mail to the subscriber


    return res.json(newsletterSubscription);
  }
};
