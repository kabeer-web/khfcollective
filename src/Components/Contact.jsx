// ContactForm.js
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faCommentDots } from '@fortawesome/free-solid-svg-icons';

const ContactForm = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t3tj2bi",    // Your actual EmailJS Service ID
        "template_ql58ig6",   // Your actual EmailJS Template ID
        form.current,
        "L_nT0Z0Vqx-XM1a3J"  // Replace with your actual EmailJS User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowModal(true);  // Show modal when message is sent successfully
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        }
      );
    e.target.reset(); // Reset form after sending
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card shadow p-4 border-0" style={{ maxWidth: '100%', width: '100%', maxWidth: '400px' }}>
          <h2 className="text-center mb-4" style={{ color: "black", fontWeight: "bold", fontSize: "1.5rem" }}>
            Get In Touch
          </h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group mb-3">
              <label style={{ color: "black", fontSize: "0.9rem" }}>
                <FontAwesomeIcon icon={faUser} /> Name
              </label>
              <input
                type="text"
                className="form-control"
                name="user_name"
                required
                style={{
                  color: "black",
                  backgroundColor: "white",
                  borderColor: "black",
                  borderRadius: "10px",
                  padding: "10px",
                }}
              />
            </div>
            <div className="form-group mb-3">
              <label style={{ color: "black", fontSize: "0.9rem" }}>
                <FontAwesomeIcon icon={faEnvelope} /> Email
              </label>
              <input
                type="email"
                className="form-control"
                name="user_email"
                required
                style={{
                  color: "black",
                  backgroundColor: "white",
                  borderColor: "black",
                  borderRadius: "10px",
                  padding: "10px",
                }}
              />
            </div>
            <div className="form-group mb-3">
              <label style={{ color: "black", fontSize: "0.9rem" }}>
                <FontAwesomeIcon icon={faPhone} /> Phone
              </label>
              <input
                type="text"
                className="form-control"
                name="user_phone"
                style={{
                  color: "black",
                  backgroundColor: "white",
                  borderColor: "black",
                  borderRadius: "10px",
                  padding: "10px",
                }}
              />
            </div>
            <div className="form-group mb-4">
              <label style={{ color: "black", fontSize: "0.9rem" }}>
                <FontAwesomeIcon icon={faCommentDots} /> Message
              </label>
              <textarea
                className="form-control"
                name="message"
                rows="4"
                required
                style={{
                  color: "black",
                  backgroundColor: "white",
                  borderColor: "black",
                  borderRadius: "10px",
                  padding: "10px",
                }}
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-dark btn-block"
              style={{
                color: "white",
                backgroundColor: "black",
                borderRadius: "10px",
                padding: "12px",
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Modal for success message */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", background: "rgba(0, 0, 0, 0.5)" }}
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" style={{ color: "green" }}>Message Sent</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Your message was sent successfully. We will get back to you soon!</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={() => setShowModal(false)}
                  style={{ borderRadius: "10px" }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
