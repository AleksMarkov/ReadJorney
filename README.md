# Read Journey

Read Journey is an application designed to facilitate a seamless reading
experience by allowing users to manage their book library, track reading
progress, and explore recommended books. The platform supports users in their
reading journey, providing both statistical and diary-like views of their
reading history.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Pages and Features](#pages-and-features)
- [Technical Specifications](#technical-specifications)
- [Setup Instructions](#setup-instructions)
- [Contributions](#contributions)
- [License](#license)

## Project Overview

Read Journey is a responsive web application designed to help users create and
manage their personal libraries, track reading progress, and explore new book
recommendations. The application features five main pages:

- **Register**: New users can register by providing their name, email, and
  password.
- **Login**: Registered users can log in to access their personal library and
  reading history.
- **Recommended**: Displays recommended books, allowing users to filter and
  explore new reading material.
- **My Library**: A personalized library where users can add, view, and manage
  their books.
- **Reading**: Tracks the user's reading progress with both statistical and
  diary views.

## Technologies Used

- **Frontend**: React, React Router, styled-components
- **State Management**: Redux
- **Form Handling and Validation**: react-hook-form, yup
- **Authentication**: Custom authentication using Axios and JWT
- **Backend**: REST API provided by the GoIT study backend
- **Design**: Responsive layout with support for mobile, tablet, and desktop
  views

## Pages and Features

### Register Page

- **Functionality**: Users can create a new account by entering their name,
  email, and password. Form validation ensures all inputs are correctly
  formatted before submission.
- **Redirection**: Upon successful registration, users are automatically logged
  in and redirected to the Recommended page.

### Login Page

- **Functionality**: Registered users can log in by providing their email and
  password. Form validation checks for correct input before submission.
- **Redirection**: Upon successful login, users are redirected to the
  Recommended page.

### Recommended Page

- **Functionality**: Users can view a list of recommended books with pagination
  support. Books can be filtered by title and author.
- **Features**:
  - **Book Details Modal**: Clicking on a book opens a modal with detailed
    information and an option to add the book to the user's library.

### My Library Page

- **Functionality**: Users can view and manage books in their personal library.
  Books can be filtered by reading status (Unread, In Progress, Done).
- **Features**:
  - **Add Book Form**: Users can manually add books to their library by entering
    the title, author, and total number of pages.
  - **Delete Book**: Users can remove books from their library.
  - **Book Details Modal**: Clicking on a book opens a modal with detailed
    information and an option to start or stop reading.

### Reading Page

- **Functionality**: Tracks the user's reading progress and provides detailed
  views in two modes:
  - **Statistics**: Visual representation of reading progress.
  - **Diary**: A chronological log of reading activities.
- **Features**:
  - **Start/Stop Reading**: Users can log their current reading page, starting
    or stopping the reading session.

## Technical Specifications

1. **Responsive Design**:

   - The application is fully responsive, supporting:
     - Mobile: 320px - 767px
     - Tablet: 768px - 1439px
     - Desktop: 1440px and above
   - Includes retina-ready images and optimized asset loading.

2. **Authentication**:

   - Registration and login are handled via JWT authentication.
   - Users are automatically redirected to appropriate pages based on their
     authentication status.

3. **State Management**:

   - State is managed using Redux for global state, ensuring consistency across
     the application.
   - The user's library and reading progress are stored and retrieved from a
     backend API.

4. **Form Validation**:

   - Forms throughout the application are validated using react-hook-form and
     yup to ensure data integrity before interacting with the backend.

5. **Modal Management**:
   - Modals for book details and notifications are controlled via state,
     allowing users to interact seamlessly with the application without page
     reloads.

## Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/AleksMarkov/readjourney.git
   cd readjourney
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the application**:

   ```bash
   npm start
   ```

4. **Visit the application**:
   - The application will be running on `http://localhost:3000`.

## Contributions

Contributions are welcome! Please feel free to submit a pull request or open an
issue.

## License

This project is licensed under the MIT License.
