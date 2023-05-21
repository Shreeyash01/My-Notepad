# My Notepad

This is a full-stack web application designed to help users create and manage quick notes. It utilizes the MERN stack (MongoDB, Express.js, React.js, and Node.js) for building a robust and scalable application. The app features a user authentication system, allowing users to securely sign up, log in, and manage their notes with privacy.

## Features

- User authentication: Users can sign up and log in to the application securely.
- Create notes: Users can create new notes by providing a title and content.
- Update notes: Users can edit the title and content of their existing notes.
- Delete notes: Users can delete their notes if they no longer need them.
- Responsive design: The application is optimized for various screen sizes and devices.

## Technologies used
- FrontEnd
  - React.js: JavaScript library for building user interfaces.
  - React Router: Declarative routing for React applications.
  - Axios: Promise-based HTTP client for making API requests.
  - Bootstrap: CSS framework for responsive design.
- BackEnd
  - Node.js: JavaScript runtime environment.
  - Express.js: Web application framework for Node.js.
  - MongoDB: NoSQL database for storing user information and notes.
  - Mongoose: MongoDB object modeling for Node.js.
  - JSON Web Tokens (JWT): Used for user authentication and authorization.


## Prerequisites

Before running the application, ensure that you have the following prerequisites installed on your system:

- Node.js: Make sure you have Node.js installed. You can download it from [https://nodejs.org](https://nodejs.org).
- MongoDB: Install MongoDB to set up the database. You can download it from [https://www.mongodb.com](https://www.mongodb.com).

## Getting Started

Follow the steps below to get the application up and running on your system:

1. Clone the repository:

   ```
   git clone https://github.com/Shreeyash01/my-notepad.git
   ```
2. Navigate to project directory:

   ```
   cd mern-notes-app
   ```
3. Install the dependencies:
- Open a new terminal window.
- Change the directory to my-notepad.
- Run the following command to install frontend dependencies:
   ```
   npm install
   ```
- Change the directory to backend.
- Run the same command to install backend dependencies:
4. Setup environment variables:
- Create a .env file in the root directory of the project.
- Add the following variables to the .env file:

   ```
   PORT=3000
   MONGODB_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   ```
5. Start the MongoDB server:
- Open a new terminal window..
- Run the following command to start the MongoDB server:
   ```
   mongod
   ```
6. Start the Node.js server for the backend:
- Open a new terminal window.
- Change the directory to backend.
- Run the following command to start the MongoDB server:
   ```
   nodemon index.js
   ```
7. Start the application:
- Change the directory to my-notepad.
- Run the following command to start the frontend server:
   ```
   npm start
   ```
## Contributing
Contributions to the project are welcome. If you find any issues or would like to add new features, please follow these steps:

1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine.
3. Create a new branch for your feature or bug fix.
4. Make the necessary changes and commit them.
5. Push your changes to your forked repository.
6. Submit a pull request to the main repository.

Please ensure that your pull request includes a clear description of the changes and the motivation behind them. Additionally, make sure your code follows the established coding conventions and includes appropriate tests.

## Happy note-taking!
