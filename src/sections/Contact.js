import "../styles/Contact.css";
import { useState } from "react";
import emailjs from "emailjs-com";
import Googlemap from "../components/Googlemap";
import { TextField } from "@mui/material";

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
        <h2 className="contacth2">Contact</h2>
        <h3 className="contacth3">Get in touch!</h3>
      </div>
      <div className="container">
        <div className="left">
          <Googlemap />
          <h5>We are here</h5>
          <p>12459, Berlin</p>
          <a href="https://www.google.com/maps/place/WBS+CODING+SCHOOL+Hybrid+Coding+Bootcamp/@52.4571306,13.5378842,17z/data=!3m1!4b1!4m5!3m4!1s0x47a845aaa1e6aaf5:0x4a9c655f0b058b03!8m2!3d52.4571306!4d13.5400729">
            Open in maps
          </a>
        </div>
        <div className="right">
          <form onSubmit={sendEmail}>
            <label htmlFor="name">
              Your name
              <TextField
                className="input"
                type="text"
                id="name"
                name="name"
                label="Your Name"
                size="small"
                margin="normal"
                value={name}
                onChange={handleInputChange}
                error={Boolean(errors?.name)}
                helperText={errors?.name}
              />
            </label>
            <label htmlFor="email">
              Your E-Mail
              <TextField
                className="input"
                type="email"
                id="user_email"
                name="user_email"
                label="Your E-Mail"
                size="small"
                margin="normal"
                value={user_email}
                onChange={handleInputChange}
                error={Boolean(errors?.user_email)}
                helperText={errors?.user_email}
              />
            </label>
            <label htmlFor="message">
              Your message
              <TextField
                className="textarea"
                multiline
                type="text"
                id="message"
                name="message"
                label="Your Message"
                margin="normal"
                value={message}
                onChange={handleInputChange}
                error={Boolean(errors?.message)}
                helperText={errors?.message}
              />
            </label>
            <button type="submit" className="contactButton">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
