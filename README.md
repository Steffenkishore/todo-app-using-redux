# 📝 Todo Web App using Redux

## 📖 About the Project

A simple Todo Web App built with React that allows users to:

- ➕ Add tasks
- ✅ Mark tasks as completed
- 🗑️ Delete tasks
- 💾 Preserve tasks even after page refresh using Local Storage

The primary goal of this project was to learn and implement **Redux Toolkit** for efficient state management in React applications.

---

## 🛠️ Tech Stack

- React.js
- Redux Toolkit
- React Redux
- Local Storage
- CSS

---

## 🎯 Redux Learning Focus

This project was created mainly to understand how Redux Toolkit manages application state in a centralized and scalable way.

### Concepts Implemented

- Creating slices using `createSlice()`
- Configuring a Redux store with `configureStore()`
- Providing store access using `Provider`
- Accessing state with `useSelector()`
- Dispatching actions with `useDispatch()`
- Managing application state through Redux reducers
- Separating state management from UI components

Instead of storing task data within individual components, all task-related state is managed through a centralized Redux store.

---

## 💾 Data Persistence

Tasks are stored in **Local Storage** to ensure data remains available even after refreshing or reopening the application.

---

## 📚 What I Learned

Through this project, I gained practical experience with:

- Redux Toolkit fundamentals
- Global state management in React
- Redux data flow and actions
- Building maintainable and scalable React applications
- Persisting application data using Local Storage

---

## 🚀 Features

- Add new tasks
- Mark tasks as completed
- Delete tasks
- Persistent task storage
- Centralized state management with Redux Toolkit