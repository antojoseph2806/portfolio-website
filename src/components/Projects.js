import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    { name: 'Ac Repairing System', description: 'A web-based platform for managing AC service bookings and technician assignments. Developed using HTML, CSS, JavaScript on the frontend, with a PHP backend and MySQL database to store service requests, customer details, and repair statuses efficiently.'},
    { name: 'Pneumonia Detection System', description: 'A web-based diagnostic tool that leverages machine learning (CNN model) to detect pneumonia from chest X-ray images. Built with HTML, CSS, JavaScript, and Bootstrap on the frontend, and Python Django on the backend, the system uses a SQLite database and a dataset sourced from Kaggle to deliver accurate, automated medical predictions.'},
    { name: 'Room Booking System', description: 'A backend-focused application for managing room reservations, built with Node.js and MongoDB.This project handles booking logic, room availability, and user data purely through APIs—no frontend interface included. Ideal for integration with web or mobile platforms.'},
    { name: 'Car Rental System', description: 'A full-stack web application that streamlines the car rental process. Built with HTML, CSS, and JavaScript on the frontend, featuring interactive UI and Toastify alerts for real-time feedback. The backend is powered by Node.js, with MongoDB handling data storage for users, bookings, and vehicles. This project demonstrates my ability to build scalable, responsive, and user-friendly systems from scratch.'},
    // Add more projects as needed
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
