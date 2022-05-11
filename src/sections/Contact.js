import "../styles/Contact.css";
import { useState } from "react";
import emailjs from "emailjs-com";
import ContactMap from "../components/Map";
import { TextField } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

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
          <div className="contactIconSection phone">
            <LocalPhoneOutlinedIcon
              sx={{ fontSize: "2.5rem" }}
              className="contactIcon"
            />
            <h4>+49 174 0000 000</h4>
          </div>
          <div className="contactIconSection">
            <EmailOutlinedIcon
              sx={{ fontSize: "2.5rem" }}
              className="contactIcon"
            />
            <h4>info@know-it.de</h4>
          </div>
          <div className="contactIconSection">
            <LocationOnOutlinedIcon
              sx={{ fontSize: "2.5rem" }}
              className="contactIcon"
            />
            <h4>Berlin, Germany</h4>
          </div>
        </div>
        <div className="right">
          <form onSubmit={sendEmail}>
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
            <button type="submit" className="contactButton">
              Send
            </button>
          </form>
        </div>
      </div>
      <div>
        <ContactMap />
      </div>
    </div>
  );
};

export default Contact;
