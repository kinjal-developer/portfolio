import { useState } from "react";

const WhatsAppForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // WhatsApp number (Include country code without +)
    const phoneNumber = "919876543210"; 
    
    // Construct message
    const text = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    
    // WhatsApp API URL
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${text}`;
    
    // Open WhatsApp
    window.open(whatsappURL, "_blank");
  };

  return (
    <div>
      <h2>Contact Us on WhatsApp</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send on WhatsApp</button>
      </form>
    </div>
  );
};

export default WhatsAppForm;
