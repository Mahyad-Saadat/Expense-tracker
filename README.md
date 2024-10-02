# Expense Tracker App

![React Badge](https://img.shields.io/badge/React-18.0.0-blue)
![TypeScript Badge](https://img.shields.io/badge/TypeScript-4.4.0-blue?logo=typescript)
![Zod Badge](https://img.shields.io/badge/Zod-3.11.6-green?logo=javascript)
![React Hook Form Badge](https://img.shields.io/badge/React--Hook--Form-7.20.0-orange?logo=react)
![CSS Badge](https://img.shields.io/badge/CSS-3-blue)

Welcome to the **Expense Tracker App**! This project allows you to track your expenses effortlessly with features like adding, filtering, and deleting expenses. Built using **React**, **TypeScript**, **Zod** for validation, and **React Hook Form** for efficient form handling.

## Features

- **Add Expenses**: Add new expenses with description, amount, and category.
- **Filter by Category**: Filter the displayed expenses based on categories.
- **Delete Expenses**: Easily remove expenses from the list.
- **Validation**: Form validation is handled using Zod, ensuring accurate data input.

## Tech Stack

This app utilizes the following technologies:

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/): Typed JavaScript that improves code quality and readability.
- [Zod](https://github.com/colinhacks/zod): A TypeScript-first schema declaration and validation library.
- [React Hook Form](https://react-hook-form.com/): A library for handling forms in React efficiently with minimal re-renders.
- CSS: Custom styles for form elements and layout.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/expense-tracker.git
   cd expense-tracker
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the app:
   ```bash
   npm start
   ```

The app will run on `http://localhost:3000/`.

## Usage

1. **Add an Expense**: Enter a description, amount, and category in the form. Submit the form to add the expense to the list.
2. **Filter by Category**: Use the dropdown to filter expenses by their categories.
3. **Delete an Expense**: Click the delete button next to an expense to remove it from the list.

## Form Validation

Form validation is managed with **Zod** and **React Hook Form**, ensuring that:

- The **description** must be at least 3 characters long.
- The **amount** must be a positive number.
- The **category** is required and must be selected.

## Future Improvements

- Add persistent data storage (local storage or database).
- Introduce user authentication for personalized expense tracking.
- Enhance UI with charts for visualizing spending patterns.

## License

This project is licensed under the MIT License.
