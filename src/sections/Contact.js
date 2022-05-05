import "../styles/Contact.css";
import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [{ name, user_email, message }, setFormState] = useState({
    name: "",
    user_email: "",
    message: "",
  });

  const [errors, setErrors] = useState(null);

  const handleInputChange = (e) => {
    setErrors(null);
    setFormState((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const sendEmail = async (e) => {
    try {
      e.preventDefault();
      if (!name || !user_email || !message) {
        if (!name) {
          setErrors((prev) => ({ ...prev, name: "Name is required" }));
        }
        if (!user_email) {
          setErrors((prev) => ({ ...prev, user_email: "Email is required" }));
        }
        if (!message) {
          setErrors((prev) => ({ ...prev, message: "Message is required" }));
        }
        return;
      }
      const res = await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      );
      console.log(res);
      setFormState({ name: "", user_email: "", message: "" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="contact-section">
      <div className="title">
        <h2>Contact</h2>
        <h3>Get in touch!</h3>
      </div>
      <div className="container">
        <div className="left">Information</div>
        <div className="right">
          <label htmlFor="name">
            Your name
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setFormState(e.target.value)}
            />
          </label>
          <label htmlFor="email">
            Your E-Mail
            <input
              type="text"
              id="email"
              name="email"
              value={user_email}
              onChange={(e) => setFormState(e.target.value)}
            />
          </label>
          <label htmlFor="message">
            Your message
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setFormState(e.target.value)}
            />
          </label>
          <button type="submit" className="contactButton">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
