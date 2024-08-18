# Transaction History Client

This is the frontend client application for managing transaction history, built with React, Vite, and Redux Toolkit. It allows users to sign up, log in, and manage their financial transactions.

## Table of Contents

- [Project Setup](#project-setup)
- [Features](#features)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Project Setup

### Prerequisites

Make sure you have the following installed:

- Node.js
- Yarn
- Git

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Devendra-1997/transaction-history-client.git
   cd transaction-history-client
   ```

2. **Install Dependencies**

   Use Yarn to install the necessary packages:

   ```bash
   yarn install
   ```

3. **Start the Development Server**

   To run the project locally, start the development server with:

   ```bash
   yarn dev
   ```

   The application should now be running at `http://localhost:5173`.

4. **Build for Production**
   To create a production-ready build, use:

```bash
yarn build
```

The output will be in the `dist` directory.

## Features

- **User Authentication**

  - Sign Up: Create a new account.
  - Login: Access your account with email and password.

- **Transaction Management**
  - Create new transactions (income or expense).
  - View a list of all transactions.
  - Delete selected transactions or all transactions.
  - View total balance (income minus expenses).

## Project Structure

transaction-history-client/
│
├── src/
│ ├── components/ # Reusable components like forms, input fields, etc.
│ ├── pages/ # Page components (Signup, Login, Transactions)
│ ├── redux/ # Redux slices and actions
│ ├── axios/ # Axios API call functions
│ ├── App.jsx # Main application component
│ ├── main.jsx # Application entry point
│ └── index.css # Global styles
│
├── public/ # Public assets
├── .gitignore # Git ignore file
├── index.html # Main HTML file
└── vite.config.js # Vite configuration

## Usage

1. Sign Up
   Users can create a new account by providing their name, email, and password.

2. Log In
   Users can log in using their email and password.

3. Manage Transactions
   Once logged in, users can add new transactions (income or expense), view their transaction history, and delete selected transactions or all transactions.

## Dependencies

React: A JavaScript library for building user interfaces.
Vite: A fast build tool and development server.
Redux Toolkit: A set of tools to simplify Redux development.
React Router: For routing and navigation.
React-Bootstrap: UI components built with Bootstrap.
React Toastify: For displaying toast notifications.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please fork the repository and create a new branch for your feature or bug fix. Then, submit a pull request for review.

1. Fork the Repository
   Click the "Fork" button on the top right of the repository page.

2. Clone Your Fork
   bash
   Copy code
   Contributing

Contributions are welcome! If you would like to contribute to this project, please fork the repository and create a new branch for your feature or bug fix. Then, submit a pull request for review.

Fork the Repository
Click the "Fork" button on the top right of the repository page.
Clone Your Fork

Copy code
git clone https://github.com/YourUsername/transaction-history-client.git

cd transaction-history-client

3. Create a New Branch

Copy code
git checkout -b feature/your-feature-name

4. Make Changes
   Implement your feature or bug fix.

5. Commit and Push

Copy code
git add .
git commit -m "Add your commit message"
git push origin feature/your-feature-name

6. Submit a Pull Request
   Go to the original repository and open a pull request from your forked branch.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

This `README.md` provides a comprehensive guide to setting up, using, and contributing to your project. You can modify or expand sections as needed to fit your specific requirements.
