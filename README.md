# Savannah Informatics Web Developer Assessment

This is an api  for handling users, albums, and photos. It is built using Node.js, Express, and MongoDB for the backend, and integrates JWT authentication. The frontend is built using React.js and in a separate repository.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Project](#running-the-project)


---

## Project Overview

This application provides users with the ability to:
- Sign up and authenticate via JWT tokens.
- View user profiles, albums, and photos.
- Update personal information and edit photo details.
- Fetch all users, albums, and photos.


---

## Technologies Used

- **Backend**: Node.js, Express
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT for securing API endpoints
- **Other Libraries**: 
  - `bcrypt`: For password hashing
  - `jsonwebtoken`: For generating and verifying JWT tokens
  - `dotenv`: For managing environment variables
  - `cors`: For handling cross-origin requests
  - `body-parser` and `cookie-parser`: For handling request bodies and cookies

---

## Features

- **Authentication**: 
  - User signup, sign in with JWT authentication.
  - Protected routes requiring a valid token.
  
- **User Management**: 
  - Create users, fetch all users, view individual user profiles.
  - Update and delete users.

- **Album & Photo Management**:
  - Fetch all albums and photos.
  - View details of a specific album or photo.
  - Edit the title of a photo.

---

## Project Structure

```bash
.
├── config             # Database configuration
├── controllers        # Application logic (users, albums, photos)
├── middlewares        # Middleware functions (authentication, validation)
├── models             # MongoDB models (User, Album, Photo)
├── routes             # Express route definitions (users, albums, photos)
├── index.js           # Entry point to the application
├── .env               # Environment variables
├── package.json       # Dependencies and scripts
└── README.md          # Project documentation
```

--- 

## Getting Started

### Prerequisites

- Node.js installed on your local machine
- MongoDB installed on your local machine or a cloud service like MongoDB Atlas
- A code editor like Visual Studio Code
- Postman or Insomnia for testing API endpoints

### Installation

1. Clone the repository

```bash
git clone git@github.com:geoffreykithuku/savannah_task_backend.git
```

2. Install dependencies

```bash
cd savannah-task_backend
npm install
```

### Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```bash
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

### Running the Project

To start the server, run:

```bash
npm start
```

The server should be running on `http://localhost:5000`.

---



