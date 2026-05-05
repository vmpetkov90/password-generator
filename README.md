# 🔐 Password Generator — React + Vite + Tailwind

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-563D7C?style=for-the-badge&logo=vite&logoColor=yellow)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-0EA5E9?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)


A modern and fully responsive **Password Generator** built with **React**, **Vite**, and **Tailwind CSS**.  
It creates secure passwords based on user‑selected criteria, visualizes password strength, and includes convenient clipboard copying.

---

## 🌐 Live Demo

🔗 https://password-generator-bice-iota-46.vercel.app/

---

## 🚀 Features

- **Customizable Password Generation**  
  Choose from:
  - Uppercase letters  
  - Lowercase letters  
  - Numbers  
  - Symbols  
  - Adjustable length (10–20 characters)

- **Real‑Time Strength Indicator**  
  Displays password strength using a 4‑bar visual system.

- **Auto‑Regeneration**  
  Password updates automatically whenever options or length change.

- **Copy to Clipboard**  
  One‑click copying with visual selection feedback.

- **Reusable Components**  
  Clean, modular structure using `<CheckboxOption />`.

- **Fully Responsive UI**  
  Dark theme with green accents, optimized for all screen sizes.

---

## 🧩 Component Structure

### **`App.jsx`**
- Manages all state:
  - `password`, `strength`
  - Character type toggles
  - Password length
- Generates passwords based on selected criteria
- Handles:
  - Clipboard copying  
  - Strength calculation  
  - Auto‑generation via `useEffect`
- Renders:
  - Password display  
  - Length slider  
  - Checkbox options  
  - Strength indicator  
  - Generate button  

---

### **`CheckboxOption.jsx`**
- Reusable checkbox component for:
  - Uppercase  
  - Lowercase  
  - Numbers  
  - Symbols  
- Uses Tailwind `peer` classes for:
  - Custom checkbox styling  
  - Green highlight when checked  
  - Hover effects  
- Fully controlled via props

---

## 🛠️ Technologies Used

- **JavaScript**
- **React**
- **Vite**
- **Tailwind CSS**
- **Vercel**

---

## 📸 Screenshots

<img width="1451" height="781" alt="tip-calculator" src="https://github.com/user-attachments/assets/b15e2f93-8b11-407b-98a2-5ee311ba770e" />

---

## 📜 License

This project was created as part of ongoing frontend development practice.  
It is open‑source and available for anyone to explore, learn from, or extend.
