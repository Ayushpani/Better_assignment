

---

# React TypeScript Signup/Login Application

Welcome to the **React TypeScript Signup/Login Application** repository! This project allows users to register (signup), and log in with stored credentials. It includes features such as form validation, password strength display, and the option to store credentials locally for autofill.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Features](#features)
4. [Design Choices](#design-choices)
5. [Limitations](#limitations)
6. [Getting Started](#getting-started)
7. [Running the Application](#running-the-application)
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

## Design Choices

1. **User Interface (UI)**:
   - The design focuses on simplicity and ease of use, making the signup and login process straightforward.
   - Form fields are clearly labeled, and error messages are shown next to the respective fields for quick feedback.
   - The password strength meter is integrated directly below the password field to provide users with immediate visual feedback on password quality.

2. **Password Validation**:
   - The password validation is designed to ensure users choose strong passwords, with checks for at least one uppercase letter, one lowercase letter, one number, and one special character.
   - This design choice aims to enhance security by preventing weak passwords.

3. **Autofill**:
   - The "Remember Me" checkbox is provided so users can save their credentials locally, allowing them to skip re-entering their details on future visits.
   - The decision to use localStorage ensures that credentials are retained even if the user closes or refreshes the page.

4. **Responsiveness**:
   - The form layout is designed to be responsive and adjusts based on the screen size. This ensures a smooth experience on both desktop and mobile devices.

5. **State Management**:
   - Form validation, password strength calculation, and login handling are managed using React state and Formik for form handling, which simplifies managing form data and validation logic.

---

## Limitations

1. **LocalStorage Security**:
   - The project uses localStorage to store user credentials for autofill. While this can provide convenience, it’s not the most secure way to store sensitive data. In a production environment, it's advisable to use more secure methods, such as tokens stored in HTTP-only cookies.
   
2. **No Backend Integration**:
   - This project is a front-end application and does not have any backend integration. Users’ credentials are stored locally, meaning they cannot be used to log in on different devices or persist across multiple sessions if the browser data is cleared.
   
3. **Password Strength Meter**:
   - The password strength meter only checks for basic password components (uppercase, lowercase, numbers, and special characters). More advanced password strength checking methods could be implemented in a production environment.
   
4. **No Email Verification**:
   - There is no email verification process implemented for user sign-up. This would be an important step to ensure the validity of user-provided email addresses.

5. **Limited Validation**:
   - While the project performs basic validation (name, email, password), it does not include checks for the uniqueness of the email during signup or more comprehensive form error handling.

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

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- **React**: For building the user interface.
- **Formik**: For simplifying form handling in React.
- **Yup**: For schema validation.
- **React Router DOM**: For navigation between pages.

---
