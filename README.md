
**Stoxify – Full-Stack Stock Trading Application**

**Stoxify** is a responsive and secure multi-app platform built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js) with modular Vite-based React frontends. It enables users to securely log in, view market indices, manage orders, track holdings and positions, and interact with a modern trading dashboard UI.



🔐 **Authentication & Authorization**

* **JWT-based Auth Flow:** Secure user login and session persistence using HTTP-only cookies, protected via backend middleware.
* **Protected Routing:** Implemented in React Router with dynamic route guards and auto-redirects to login on auth failure.
* **Centralized Auth Middleware:** Server-side token verification using Express middleware for clean access control.



🌐 **Multi-App Architecture**

 **Three distinct apps:**

  * **Frontend:** Login/signup interface for user authentication.
  * **Dashboard:** Fully authenticated trading interface with dynamic market data.
  * **Backend:** RESTful API server with Express and MongoDB.

  **Modular design:** Each app is independently deployable, managed under a unified Git repo for scalability.



 📊 **Data Visualization & UI**

* **Dashboard with Chart.js & Bootstrap 5:** Displays live trading data using doughnut charts, vertical graphs, and summarized portfolio metrics.
* **Responsive Layout:** Fully mobile-friendly and consistent component design using Bootstrap utility classes and custom styling.




☁️ **Deployment & Infrastructure**

* **Render.com Deployment:** All apps hosted on Render as separate services with custom domain routing.
* **MongoDB Atlas:** Scalable cloud database hosting for production-ready performance.



🧩 **Key Features**

* Role-based route protection and dynamic redirection
* Real-time data rendering for holdings, orders, and funds
* Logout flow that securely clears cookies and local storage
* Reusable component-based architecture for easy extension
* LocalStorage caching for username persistence and session experience



🛠 **Tech Stack**

* **Frontend:** React, React Router DOM, Vite, Axios, React Cookie, Bootstrap 5, Chart.js
* **Backend:** Node.js, Express.js, MongoDB Atlas, JWT, dotenv, cors, cookie-parser
* **DevOps & Deployment:** Git, Render, GitHub, .env management

