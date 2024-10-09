import React, { useState, useContext } from 'react';
import { auth, signInWithEmailAndPassword, signInWithPopup, googleProvider } from '../firebaseConfig';
import { useNavigate, Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { Modal, Button, Spinner } from 'react-bootstrap';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      login(userCredential.user);
      setShowModal(true);
    } catch (error) {
      setError('Invalid email or password');
      console.error('Error logging in:', error.message);
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      const result = await signInWithPopup(auth, googleProvider);
      login(result.user);
      setShowModal(true);
    } catch (error) {
      setError('Error with Google sign-in');
      console.error('Error with Google sign-in:', error.message);
    }
    setLoading(false);
  };

  const handleReload = () => {
    setShowModal(false);
    navigate('/');
    window.location.reload();
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h2 style={styles.title}>Welcome Back</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3" style={styles.inputContainer}>
            <label htmlFor="email" className="form-label" style={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-control"
              aria-label="Email"
              style={styles.input}
            />
          </div>
          <div className="mb-3" style={styles.inputContainer}>
            <label htmlFor="password" className="form-label" style={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-control"
              aria-label="Password"
              style={styles.input}
            />
          </div>
          {error && <div className="alert alert-danger" style={styles.errorMessage}>{error}</div>}
          <button
            type="submit"
            className="btn btn-primary"
            style={styles.button}
            disabled={loading}
          >
            {loading ? <Spinner animation="border" size="sm" /> : 'Login'}
          </button>
        </form>
        <Button
          className="btn btn-light mt-3"
          style={styles.googleButton}
          onClick={handleGoogleLogin}
          disabled={loading}
        >
          {loading ? <Spinner animation="border" size="sm" /> : 'Sign in with Google'}
        </Button>
        <div className="text-center mt-3">
          <p style={styles.linkText}>Don’t have an account? <Link to="/signup" style={styles.link}>Sign up here</Link></p>
        </div>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)} style={styles.modal}>
        <div style={styles.modalContent}>
          <Modal.Header style={styles.modalHeader}>
            <Modal.Title style={styles.modalTitle}>Login Successful</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p style={styles.modalText}>Your login was successful. For the changes to take effect, please reload the page.</p>
          </Modal.Body>
          <Modal.Footer style={styles.modalFooter}>
            <Button variant="light" onClick={() => setShowModal(false)} style={styles.modalButton}>
              Close
            </Button>
            <Button variant="dark" onClick={handleReload} style={styles.modalButton}>
              Reload Page
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
};

// Styles
const styles = {
  container: {
    backgroundColor: '#f5f5f5',
    color: '#333',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBox: {
    maxWidth: '400px',
    width: '100%',
    padding: '30px',
    borderRadius: '12px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  title: {
    color: '#333',
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '20px',
  },
  inputContainer: {
    marginBottom: '20px',
  },
  label: {
    color: '#666',
    fontSize: '14px',
    marginBottom: '5px',
    textAlign: 'left',
  },
  input: {
    backgroundColor: '#f9f9f9',
    borderColor: '#ddd',
    borderRadius: '8px',
    padding: '10px',
    width: '100%',
    outline: 'none',
  },
  button: {
    backgroundColor: '#333',
    color: '#fff',
    borderColor: '#333',
    width: '100%',
    padding: '10px',
    borderRadius: '8px',
    transition: 'background-color 0.3s ease',
  },
  googleButton: {
    backgroundColor: '#4285F4',
    color: '#fff',
    borderColor: '#4285F4',
    width: '100%',
    padding: '10px',
    borderRadius: '8px',
    transition: 'background-color 0.3s ease',
  },
  errorMessage: {
    backgroundColor: '#fce4e4',
    color: '#d9534f',
    borderRadius: '8px',
    padding: '10px',
    textAlign: 'center',
  },
  linkText: {
    fontSize: '14px',
    color: '#666',
  },
  link: {
    color: '#333',
    textDecoration: 'underline',
    fontWeight: '600',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    borderRadius: '12px',
    padding: '20px',
  },
  modalHeader: {
    borderBottom: 'none',
  },
  modalTitle: {
    color: '#000',
    fontWeight: '600',
  },
  modalText: {
    color: '#000',
  },
  modalFooter: {
    borderTop: 'none',
    display: 'flex',
    justifyContent: 'space-between',
  },
  modalButton: {
    backgroundColor: '#fff',
    borderColor: '#333',
    color: '#333',
    borderRadius: '8px',
    padding: '10px 20px',
    transition: 'background-color 0.3s ease',
    boxShadow: '0 2px 6px rgba(0, 0, 0)',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  },
};

// End of styles
export default Login;
