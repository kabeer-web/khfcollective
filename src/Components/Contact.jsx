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
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>Get In Touch</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div style={styles.formGroup}>
              <label style={styles.label}>
                <FontAwesomeIcon icon={faUser} /> Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>
                <FontAwesomeIcon icon={faEnvelope} /> Email
              </label>
              <input
                type="email"
                name="user_email"
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>
                <FontAwesomeIcon icon={faPhone} /> Phone
              </label>
              <input
                type="text"
                name="user_phone"
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>
                <FontAwesomeIcon icon={faCommentDots} /> Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                style={styles.textarea}
              ></textarea>
            </div>
            <button
              type="submit"
              style={styles.button}
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
                <h5 style={styles.modalTitle}>Message Sent</h5>
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
                  style={styles.closeButton}
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

// Internal styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f8f9fa', // Light background
  },
  card: {
    maxWidth: '400px',
    width: '100%',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
  },
  title: {
    color: "black",
    fontWeight: "bold",
    fontSize: "1.5rem",
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  formGroup: {
    marginBottom: '1rem',
  },
  label: {
    color: "black",
    fontSize: "0.9rem",
  },
  input: {
    color: "black",
    backgroundColor: "white",
    borderColor: "black",
    borderRadius: "10px",
    padding: "10px",
    width: '100%',
  },
  textarea: {
    color: "black",
    backgroundColor: "white",
    borderColor: "black",
    borderRadius: "10px",
    padding: "10px",
    width: '100%',
  },
  button: {
    color: "white",
    backgroundColor: "black",
    borderRadius: "10px",
    padding: "12px",
    fontWeight: "bold",
    fontSize: "1rem",
    width: '100%',
    border: 'none',
  },
  modalTitle: {
    color: "green",
  },
  closeButton: {
    borderRadius: "10px",
  },
};

export default ContactForm;
