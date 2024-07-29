import React from 'react';
import './Main.css';
import Subscribe from './Subscribe';

const Main = () => {
  return (
    <main className="main">
      <section id="home" className="home">
        <h2>Welcome to Our Landing Page</h2>
        <p>We are glad to have you here. Explore our services and feel free to contact us for more information.</p>
      </section>
      <div className="container">
        <section id="about">
          <h2>About Us</h2>
          <p>We are a company dedicated to providing top-notch services to our clients. Our team of experts is always ready to help you achieve your goals.</p>
          <p>Our mission is to deliver high-quality solutions that meet the needs of our diverse client base.</p>
        </section>
        <section id="services">
          <h2>Our Services</h2>
          <ul>
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>Cloud Services</li>
            <li>Consulting</li>
          </ul>
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <form>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
        <Subscribe />
      </div>
    </main>
  );
}

export default Main;
