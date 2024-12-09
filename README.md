
---

# Project Name: React TypeScript Signup/Login Application

Welcome to the **React TypeScript Signup/Login Application** repository! This project allows users to register (signup), and log in with stored credentials. It includes features such as form validation, password strength display, and the option to store credentials locally for autofill.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Features](#features)
4. [Getting Started](#getting-started)
5. [Running the Application](#running-the-application)
6. [Debugging Issues & Solutions](#debugging-issues-solutions)
7. [Contributing](#contributing)
8. [License](#license)

---

## Project Overview

This React application enables users to sign up and log in to an account. The main functionalities include:

- **Sign Up**: Users can input their details such as name, email, and password. Password validation ensures strong passwords.
- **Login**: Users can log in using the credentials they previously entered during sign-up.
- **Password Strength Indicator**: A visual indicator is shown to guide users in creating a stronger password.
- **Autofill Option**: Users can choose to autofill their login credentials on future visits.

---

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: For adding type safety to the project.
- **Formik**: For handling form submissions and validations.
- **Yup**: For validating form fields.
- **React Router DOM**: For navigation between pages (login, signup).
- **CSS**: For styling the components.
- **LocalStorage**: For storing user credentials and autofill settings.

---

## Features

1. **User Signup**:
   - Name, email, password, and confirm password are required.
   - Strong password validation with checks for uppercase letters, lowercase letters, numbers, and special characters.
   - Password strength meter to guide users in creating a strong password.

2. **User Login**:
   - Users can log in with their previously saved credentials.
   - Option to toggle password visibility.
   - Autofill functionality for login credentials.

3. **Form Validation**:
   - Real-time validation for name, email, password, and confirm password using Yup.

4. **Local Storage**:
   - Users' credentials are stored in localStorage to persist login details for future use, based on the "Remember Me" option.

5. **Redirection**:
   - After a successful signup, users are redirected to the login page for easy access.

---

## Getting Started

Follow these steps to set up and run the project on your local system:

### Prerequisites

Ensure you have the following installed:

- **Node.js** (version 14.x or later)
- **npm** or **yarn**

### Clone the Repository

To clone the repository, run:

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
```

### Install Dependencies

Once you have the repository cloned, install the necessary dependencies:

```bash
npm install
# or
yarn install
```

### Set Up React and TypeScript Environment

Ensure that you have React and TypeScript installed as the project uses both:

```bash
npx create-react-app my-app --template typescript
```

### Running the Application

To run the application locally, use:

```bash
npm start
# or
yarn start
```

This will start the application on [http://localhost:3000](http://localhost:3000).

---

## Running Tests

To run the tests for this project, you can use the following command:

```bash
npm test
# or
yarn test
```

This will run any test files if you've added tests using **Jest** or other testing libraries.

---

## Debugging Issues & Solutions

Here is a list of common issues encountered while setting up or running the project, along with solutions to resolve them:

### 1. **Error: "Module not found: Can't resolve 'react-router-dom'"**

**Solution**: Make sure to install `react-router-dom` by running:

```bash
npm install react-router-dom
# or
yarn add react-router-dom
```

### 2. **Error: "TypeScript error: TS2345: Argument of type 'string' is not assignable to parameter of type 'SetStateAction<...>'"**

**Solution**: This error occurs when the state is not typed correctly. Make sure to type your `useState` hooks properly, for example:

```tsx
const [email, setEmail] = useState<string>('');
const [password, setPassword] = useState<string>('');
```

### 3. **Login form not submitting or incorrect validation**

**Solution**: Ensure you have correctly set up **Formik** with appropriate validation from **Yup**. The `onSubmit` function should correctly handle form submission, and make sure that form validation triggers properly before submission.

### 4. **Password strength not updating on every keystroke**

**Solution**: Ensure that the `handlePasswordChange` function is linked to both the Formik `handleChange` function and the password strength calculation.

### 5. **LocalStorage Data Not Persisting on Reload**

**Solution**: Check that you are setting and getting the localStorage values correctly. For example, after user login or signup, check whether `localStorage.setItem('key', value)` is being called, and verify retrieval with `localStorage.getItem('key')`.

### 6. **Redirect after Successful Signup Not Working**

**Solution**: Make sure you are using the **useNavigate** hook from **react-router-dom** to programmatically navigate after a successful form submission. For example:

```tsx
const navigate = useNavigate();
navigate('/login');
```

---

## Contributing

If you'd like to contribute to the project, feel free to fork the repository and create a pull request. When submitting a pull request, make sure to:

- Follow the project's coding style and conventions.
- Ensure tests are included for new features or bug fixes.
- Provide clear and concise commit messages.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- **React**: For building the user interface.
- **Formik**: For simplifying form handling in React.
- **Yup**: For schema validation.
- **React Router DOM**: For navigation between pages.

---


