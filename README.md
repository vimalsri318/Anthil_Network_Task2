# 🚌 Bus Booking System API

## 🎥 Demo
[Click here to watch the demo](https://drive.google.com/file/d/15Y_Jm-CY0dhHmhghNVymJjaW8F3p8JV-/view?usp=sharing)

## 📌 Overview
This project is part of the **Anthill Networks SDE Intern Tasks**. It is a backend API designed to support a bus booking system.

## 🎯 Objective
Develop a secure and scalable backend API to manage bus bookings, ensuring authentication and authorization with JWT.

## 🛠 Technology Stack
- **Backend Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT (with refresh token functionality)

## 🚀 Features
### 🔒 Security
- Implements JWT for authentication and authorization
- Uses refresh tokens to allow seamless session renewal

### 👨‍💼 Admin Role
- **Bus Management**: Add and update buses
- **Route Management**: Add and update bus routes

### 👤 User Role
- **Bus Search**: Search and view available buses
- **Booking and Cancellation**: Book buses and cancel bookings

## 📦 Deployment
### 🐳 Containerization
- The application is containerized using Docker for consistent deployment

### ☁️ Deployment Platform
- The containerized application is deployed on an **Amazon EC2 instance**
- Ensures a **secure** and **optimized** setup for performance

## 📜 API Documentation
### 📘 Comprehensive API Documentation
- Each endpoint is well-documented with request methods, parameters, and example requests/responses

### 🛠 Postman Collection
- A Postman collection is available to facilitate endpoint testing and demonstration

## 🛠 Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/bus-booking-api.git
   ```
2. Navigate to the project directory:
   ```bash
   cd bus-booking-api
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables in `.env`:
   ```plaintext
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   REFRESH_SECRET=your_refresh_token_secret
   ```
5. Start the development server:
   ```bash
   node server.js
   ```
6. Build and run with Docker:
   ```bash
   docker build -t bus-booking-api .
   docker run -p 3000:3000 bus-booking-api
   ```

## 📞 Contact
For any queries, feel free to reach out at [vimalsrinivasansn@gmail.com](mailto:vimalsrinivasansn@gmail.com).
