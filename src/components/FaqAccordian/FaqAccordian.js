import React, { useState } from "react";
import "./FaqAccordian.scss";
const data = [
  {
    title: "What is your return policy and warranty?",
    description:
      "Right off the bat, we give you a full 30 days to try our products out — to make sure they fit correctly, match your personal style, and most importantly...sound amazing! n\
            n\
            We are confident our products will meet and exceed customer expectations. If for whatever reason a customer isn’t satisfied, we offer a no-questions-asked refund within 30 days of purchase. U.S customers will get free return shipping. Customers outside the U.S. are required to pay for return shipping costs.",
  },

  {
    title:
      "I’m not satisfied by the sound, fit, or style of the headphones. What are my options?",

    description:
      "If you are within 30 days of receiving your headphones, we offer a no-questions-asked return/refund.n\
            Past 30 days, we can’t accept returns simply on the grounds of dissatisfaction with the product.",
  },
  {
    title:
      "My headphones have lost sound on one side, or the sound has become crackling and distorted. What should I do?",
    description:
      "Send us a note using the contact form, describing the problem with as much detail as possible. Including your order # (from the original confirmation email) always speeds things up. Pro tip: if your CB-1 has lost sound on one side, try a different cable - that will clarify if there's a problem with the cable, or the headphones themselves",
  },
  {
    title:
      "My headphones are physically damaged (e.g. snapped headband). What are my options?",
    description:
      "In the case of physical damage, we offer our customers a 50% discount towards a brand new set of headphones. We consider most physical damage to be user-inflicted, but still help out our customers with a partial credit.n\
            If you believe damage occurred due to a defective product, or the headphones have any other problems that aren't a result to misuse, we will certainly hear you out.n\
            Regardless, the contact form is the best way to get the problem solved.",
  },
  {
    title: "I have another issue that's not covered here.",
    description:
      "Not to worry. Again, the best way to reach us is through the contact form below. Please provide as much detail about your issue as possible. We are known for personalized, efficient support and look forward to helping you out.",
  },
];
const FaqAccordian = (items = data) => {
  const [active, setActive] = useState([]);
  const changeActive = (index) => {
    if (active.includes(index)) {
      setActive(active.filter((ind) => index !== ind));
    } else setActive([...active, index]);
  };
  return (
    <div className="accordian-holder">
      {data.map((item, index) => (
        <div className="accordian-item">
          <div
            className={`accordian-item_title${
              active.includes(index) ? " active-title" : ""
            }`}
            onClick={() => {
              changeActive(index);
            }}
          >
            {item.title}
          </div>
          <div
            className={`accordian-item_description${
              active.includes(index) ? " active" : ""
            }`}
          >
            <div>{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordian;
