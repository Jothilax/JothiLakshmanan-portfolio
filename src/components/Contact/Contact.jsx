// import React from "react";

// import styles from "./Contact.module.css";
// import { getImageUrl } from "../../utils";

// export const Contact = () => {
//   return (
//     <footer id="contact" className={styles.container}>
//       <div className={styles.text}>
//         <h2>Contact</h2>
//         <p>Feel free to reach out!</p>
//       </div>
//       <ul className={styles.links}>
//         <li className={styles.link}>
//           <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
//           <a href="mailto:jothilakshmi2162000@gmail.com">jothilakshmi2162000@gmail.com</a>

//           {/* <a href="mailto:jothilakshmi2162000@gmail.com" target="_blank" >jothilakshmi2162000@gmail.com</a> */}
//         </li>
//         <li className={styles.link}>
//           <img
//             src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
//             <a href="https://www.linkedin.com/in/jothi-lakshmanan" target="_blank"  rel="noopener noreferrer">www.linkedin.com/in/jothi-lakshmanan</a>
//         </li>
//         <li className={styles.link}>
//           <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
//           <a href="https://github.com/Jothilax?tab=repositories" target="_blank"  rel="noopener noreferrer">https://github.com/Jothilax?tab=repositories</a>
//         </li>
//       </ul>
//     </footer>
//   );
// };


// import React, { useState } from "react";
// import styles from "./Contact.module.css";

// export const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     message: ""
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { name, phone, email, message } = formData;

//     const whatsappMessage = `
// Hello Jothi,

// Name: ${name}
// Phone: ${phone}
// Email: ${email}
// Message: ${message}
//     `;

//     const encodedMessage = encodeURIComponent(whatsappMessage);

//     // 👇 Replace with your WhatsApp number (country code + number)
//     const whatsappNumber = "916383061117";

//     window.open(
//       `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
//       "_blank"
//     );
//   };

//   return (
//     <footer id="contact" className={styles.container}>
//       <h2>Contact Me</h2>

//       <form className={styles.form} onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           required
//           onChange={handleChange}
//         />

//         <input
//           type="tel"
//           name="phone"
//           placeholder="Your Phone Number"
//           required
//           onChange={handleChange}
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           required
//           onChange={handleChange}
//         />

//         <textarea
//           name="message"
//           placeholder="Your Message"
//           required
//           onChange={handleChange}
//         />

//         <button type="submit">Send Message</button>
//       </form>
//     </footer>
//   );
// };


import React, { useState } from "react";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔹 Send Email Automatically
    emailjs.send(
      "service_trrewok",
      "template_ndcjj1n",
      formData,
      "0fZIjVsGdyAdAnEJC"
    )
    .then(() => {
      setSuccess(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: ""
      });

      setTimeout(() => setSuccess(false), 3000);
    })
    .catch((error) => {
      console.log("FAILED...", error);
    });

    // 🔹 WhatsApp Open (User clicks send)
    const whatsappMessage = `
Hello Jothi,

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Message: ${formData.message}
    `;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = "916383061117";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <footer id="contact" className={styles.container}>
      <h2>Contact Me</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          required
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit">Send Message</button>

        {success && (
          <p className={styles.success}>
            ✅ Message Sent Successfully!
          </p>
        )}
      </form>
    </footer>
  );
};