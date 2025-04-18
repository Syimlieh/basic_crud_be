
Description: This is a basic RESTful API built with Node.js, Express, and Joi for input validation. It supports CRUD operations for user management. For simplicity, user data is stored in-memory using a JavaScript array (no database required).


Setup: 
    Clone the repository:  https://github.com/Syimlieh/basic_crud_be
    Go to the cloned directory and run " npm install "
    Start the application by running: " npm run dev "


API Base URL: http://localhost:4000/api/v1


Available Endpoints
    GET /users – Fetch all users

    GET /users/:id – Get user by ID

    POST /users – Add a new user

    PUT /users/:id – Update a user

    DELETE /users/:id – Delete a user