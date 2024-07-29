import React from 'react';
import './Main.css';
import Subscribe from './Subscribe';

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <section id="home">
          <h2>Home</h2>
          <p>This is the home section.</p>
        </section>
        <section id="about">
          <h2>About</h2>
          <p>This is the about section.</p>
        </section>
        <section id="services">
          <h2>Services</h2>
          <p>This is the services section.</p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>This is the contact section.</p>
        </section>
        <Subscribe />
      </div>
    </main>
  );
}

export default Main;
