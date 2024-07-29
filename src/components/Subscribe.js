import React, { useState } from 'react';
import './Subscribe.css';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="subscribe">
      <div className="container">
        {!submitted ? (
          <>
            <h2>Subscribe to our Newsletter</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </>
        ) : (
          <h2>Thank you for subscribing!</h2>
        )}
      </div>
    </section>
  );
};

export default Subscribe;
