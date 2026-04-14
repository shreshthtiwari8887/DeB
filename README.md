# Darshan E-Bharat

A full-stack, cloud-connected platform designed to explore and embrace the rich cultural heritage and diversity of India. 

## 🚀 Quick Start Guide

This repository has been fully configured for "Zero-Setup" execution. You do not need to install MongoDB locally or configure any `.env` secrets—the live cloud database connection has been embedded directly into the repository!

### Prerequisites
- You must have [Node.js](https://nodejs.org/) installed on your computer.

### Installation

1. **Clone the Repository**
   Download the code to your local machine:
   ```bash
   git clone https://github.com/shreshthtiwari8887/DeB.git
   cd DeB
   ```

2. **Start the Backend Server (Termimal 1)**
   Open a terminal and start the main API server.
   ```bash
   cd backend
   npm install
   npm start
   ```
   *The terminal should say "Connected to Database" and "Server running on port 8080".*

3. **Start the Frontend Website (Terminal 2)**
   Open a *second* terminal window and launch the React interface.
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

4. **View the Website!**
   Open your browser and navigate to the localhost link provided by terminal 2 (usually `http://localhost:5173`).

---

### ⚠️ Security Notice
> This repository contains hardcoded `.env` connection strings dynamically linked to a live production database for educational/demonstration purposes. Because anyone can clone this repository and connect to the database, **All user data is effectively public.**
> 
> *Warning:* If you accidentally delete the database tables while testing locally, you can easily recover the data by running the included `seed.js` script in the backend folder!
