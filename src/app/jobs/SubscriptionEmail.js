import Mail from "../tasks/Mail";

export default {
  key: "SubscriptionEmail",
  options: {
  delay: 1000,
  },
  async handle({ data }) {
    //   return subscriber from data
    const { subscriber } = data;
    await Mail.sendMail({
      from: "Newsletter Handler <newsletter@yoursite.com>",
      to: `${subscriber.name} <${subscriber.email}>`,
      subject: `Newsletter Subscription`,
      html: `Hello, ${subscriber.name}, you're subscribed to our newsletter!`
    });
  }
};
