
# Authentication Next.js

This project is a simple authentication system built with Next.js. It uses `next-auth` for handling authentication, `bcryptjs` for password hashing, and MongoDB for storing user data.

## Features

- User authentication with email and password.
- Secure password storage using bcrypt.
- MongoDB as the database for storing user data.
- Next.js framework for building the application.

## Technologies Used

- **Next.js**: A React framework for building server-side rendered (SSR) applications.
- **next-auth**: A library for adding authentication to Next.js apps.
- **bcryptjs**: A library to hash and compare passwords securely.
- **MongoDB**: A NoSQL database for storing user data.

## Setup

To set up the project locally, follow these steps:

1. Clone this repository:

   ```bash
   git clone <repository-url>
   cd AuthenticationNextJS
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up MongoDB:
   - Create a MongoDB database.
   - Set up your MongoDB URI in the `.env.local` file.

   Example `.env.local` configuration:
   ```bash
   MONGODB_URI=mongodb://localhost:27017/your-database-name
   NEXTAUTH_URL=http://localhost:3000
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

   Visit `http://localhost:3000` in your browser.

## Folder Structure

- **components/**: Contains React components such as login forms, registration forms, etc.
- **lib/**: Utility functions for interacting with the MongoDB database and hashing passwords.
- **pages/**: Contains the pages for the Next.js app, including authentication-related routes.
- **public/**: Static assets like images or icons.
- **styles/**: Custom CSS styles for the application.

## Dependencies

This project uses the following dependencies:

- `bcryptjs`: For password hashing.
- `mongodb`: MongoDB client for interacting with the database.
- `next`: The React framework for building SSR applications.
- `next-auth`: Authentication library for Next.js.
- `react`: The React library for building user interfaces.
- `react-dom`: React's package for the DOM renderer.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
