# Feedback App

This app allows the users to leave a review on a product or service. It allows users to add, edit and delete feedback.

## Background

This app uses React on the front end and utilizes useContext for managing state globally. A mock JSON-Server is used for the database and stores all feedback items. When new feedback is submitted, it will update the mock database. If there is an edit or deletion, the app will also update the database.

## Usage

Check out Feedback App on [Netlify](https://jonathons-feedback-app.netlify.app/) (Does not use JSON-Server database)

#### OR

Download the project and follow steps below.

Install dependencies:

```bash
npm install
```

Run:

```bash
npm run dev
```

This will run on ports :3000 & :5000
