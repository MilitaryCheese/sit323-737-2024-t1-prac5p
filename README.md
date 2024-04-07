Calculator Microservice

This project implements a simple calculator microservice using Node.js and Express, with logging functionality powered by Winston. The microservice provides basic arithmetic operations (addition, subtraction, multiplication, division) through API endpoints, and handles incoming requests effectively while ensuring error logging for meaningful error messages to clients.

Features:

-Four arithmetic operations: addition, subtraction, multiplication, division.
-Error logging using Winston for detailed error messages.
-Modular architecture with separate components for routes, controllers, services, and logging.
-Middleware for parsing JSON and URL-encoded data.
-Graceful error handling with generic error middleware.

Project Structure:

-app.js: Entry point of the application. Configures Express server, middleware, routes, and error handling.
-controllers/: Contains controller functions for handling HTTP requests.
-routes/: Defines API endpoints and routes using Express Router.
-services/: Contains business logic for calculator operations.
-winstonLogger.js: Manages the Winston logger instance for logging.
-logs/: Directory for storing log files.
-package.json: Manages project dependencies and scripts.
-README.md: Documentation for the project.

Setup:

-Install dependencies: npm install.
-Start the server: npm start.

Usage:

-Send POST requests to the following endpoints:
-/api/calculator/add: Perform addition.
-/api/calculator/subtract: Perform subtraction.
-/api/calculator/multiply: Perform multiplication.
-/api/calculator/divide: Perform division.
-Provide input numbers in the request body as JSON: { "num1": 5, "num2": 3 }.

Error Handling:

-Invalid input parameters: Both parameters must be valid numbers.
-Division by zero: Cannot divide by zero.

Logging:

-Errors are logged to logs/error.log file.
-Informational logs are logged to logs/combined.log file.
