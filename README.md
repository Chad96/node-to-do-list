# To-Do List Application

This is a simple To-Do List application built using **HTML, CSS, JavaScript** for the frontend and **Node.js** for the backend. The application allows users to register, log in, and manage their tasks using a Kanban board setup with move task functionality. Tasks are color-coded based on their priority level.

---

## Features

1. **User Authentication**:
   - Users must register and log in to access the To-Do List page.
   - Secure password storage using bcrypt.

2. **To-Do List Management**:
   - Add new tasks with a title, description, and priority level.
   - Remove tasks.
   - Mark tasks as completed.
   - Drag-and-drop tasks between different columns (e.g., To Do, In Progress, Done).

3. **Priority-Based Color Coding**:
   - Tasks are color-coded based on their priority level (e.g., High, Medium, Low).

4. **Kanban Board**:
   - Tasks are organized into columns for better visualization and management.

5. **Simple File Structure**:
   - Only two main folders: `backend` and `frontend`.

---

## Technologies Used

- **Frontend**:
  - HTML
  - CSS
  - Cors (for API calls)
  - JavaScript

- **Backend**:
  - Node.js
  - Express.js (for server setup)
  - MongoDB (for database)
  - Mongoose (for database modeling)
  - Firebase (for authentication)

---


## Setup Instructions

### Prerequisites

- Node.js installed on your machine.
- MongoDB installed or a MongoDB Atlas account for the database.

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/node-todo-list.git
cd node-todo-list-app