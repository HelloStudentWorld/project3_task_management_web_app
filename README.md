# Project 3: Task Management Web App
Student Name: Alan DG

GitHub Pages Link: https://hellostudentworld.github.io/project3_task_management_web_app/

Github Project Link: https://github.com/HelloStudentWorld/project3_task_management_web_app

# Outline
- Project Overview, Features, Deployment
- Usage Instructions
- User Stories
- Wireframes & State Tree
- Project Files and Structure
- Technologies Used
- Future Improvements
- Project Requirements/Instructions

# Project Overview, Features, Deployment
Project Overview - Task Management Web App:
This project is a responsive task management web application that allows users to create, manage, and track their tasks efficiently. It provides a user-friendly interface for adding, editing, and deleting tasks, ensuring a seamless experience across devices.

Features:
- Create, edit, and delete tasks.
- Mark tasks as completed.
- Responsive design that works on both desktop and mobile devices.

Note on Deployment:
The project is deployed on GitHub Pages, allowing for easy access and management of tasks from anywhere.

# Usage Instructions
Creating Tasks:
Enter a task description in the input field and click the "Add Task" button to create a new task.

Managing Tasks:
You can edit or delete tasks using the provided buttons next to each task.

Viewing Tasks:
All tasks are displayed in a list format, showing the task description and status.

How to Run Locally:
Clone the repository: git clone https://github.com/HelloStudentWorld/project3_task_management_web_app
Navigate to the project directory: cd project3-task-management-web-app
Install dependencies: npm install
Start the application: npm start
Open the app in your browser at http://localhost:3000

# User Stories

User Story 1: As a user, I want to create new tasks, so that I can keep track of my to-do items.

User Story 2: As a user, I want to edit existing tasks, so that I can update their details.

User Story 3: As a user, I want to delete tasks, so that I can remove items that are no longer needed.

# Wireframes & State Tree

Please see the Deliverables page located in the project Github Pages Navigation Bar Link on the project website for the Wireframes & State Tree. Thank you

# Project Files and Structure

my-todo-app/
├── public/
│   └── index.html
├── src/
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   ├── components/
│   │   ├── AddTodoForm.css
│   │   ├── AddTodoForm.js
│   │   ├── ContactForm.css
│   │   ├── ContactForm.js
│   │   ├── Filter.css
│   │   ├── Filter.js
│   │   ├── Header.css
│   │   ├── Header.js
│   │   ├── TodoItem.css
│   │   ├── TodoItem.js
│   │   ├── TodoList.css
│   │   └── TodoList.js
│   ├── redux/
│   │   ├── store.js
│   │   ├── actions/
│   │   │   └── todoActions.js
│   │   └── reducers/
│   │       └── todoReducer.js
├── .gitignore
├── package.json
├── package-lock.json
├── LICENSE
└── README.md

### Description

- **public/**: Contains static files like `index.html` and favicon.
- **src/**: Contains all source code.
  - **App.css**: Main styling for the application.
  - **App.js**: Main application component.
  - **index.js**: Entry point of the React application.
  - **components/**: Reusable React components.
  - **redux/**: Redux setup including actions, reducers, and store configuration.
- **.gitignore**: Specifies intentionally untracked files to ignore.
- **package.json**: Lists dependencies and project scripts.
- **README.md**: Project documentation.

# Technologies Used

- **Frontend**
  - **React**: JavaScript library for building user interfaces.
  - **Redux** (Optional): State management library for JavaScript applications.
  - **React Router**: Library for routing in React applications.
  - **JavaScript (ES6+)**: Programming language for building the app.
  - **HTML5 & CSS3**: Markup and styling languages.

- **Version Control**
  - **Git**: Version control system.
  - **GitHub**: Hosting service for Git repositories.

- **Deployment**
  - **GitHub Pages**: Hosting service for static sites.

- **Tools**
  - **Create React App**: Tool to set up a modern web app by running one command.
  - **ESLint** (Optional): Linter for identifying and reporting on patterns in JavaScript.

--- 

## Future Improvements

1. **Backend Integration**
   - Connect the frontend to a backend server using APIs to persist todos in a database.

2. **User Authentication**
   - Implement user registration and login functionalities to allow multiple users to manage their own todo lists.

3. **Enhanced UI/UX**
   - Improve the design with animations, better styling, and responsive layouts for various devices.

4. **Advanced Filtering and Sorting**
   - Add more filtering options (e.g., by priority, due date) and sorting capabilities.

5. **Task Categorization**
   - Allow users to categorize tasks into different projects or labels.

6. **Notifications**
   - Implement reminders or notifications for upcoming or overdue tasks.

7. **Drag and Drop**
   - Enable drag-and-drop functionality to reorder tasks.

8. **Dark Mode**
   - Provide a dark mode theme for better user experience in low-light environments.

9. **Unit and Integration Testing**
   - Add automated tests to ensure the reliability and robustness of the application.

10. **Performance Optimization**
    - Optimize the app for faster load times and better performance.
