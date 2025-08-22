# E-Products Client

A **Next.js frontend** for managing products, supporting product creation and listing.  
Includes user authentication via **NextAuth**, toast notifications, and Tailwind CSS styling.

---

## Table of Contents

- [Features](#features)  
- [Technologies](#technologies)  
- [Installation](#installation)  
- [Environment Variables](#environment-variables)  
- [Available Scripts](#available-scripts)  
- [Usage](#usage)  
- [License](#license)  

---

## Features

- Add new products (name, price, description).  
- List all products fetched from backend API.  
- Optional image upload (currently removed if not needed).  
- Toast notifications for success/error messages via `react-hot-toast`.  
- Authentication with **NextAuth.js** (Google provider supported).  
- Responsive UI built with **Tailwind CSS**.  

---

## Technologies

- **Next.js** – React framework for server-side rendering and routing  
- **React** – UI library  
- **NextAuth.js** – Authentication solution  
- **Axios** – API requests  
- **Tailwind CSS** – Styling  
- **React Hot Toast** – Toast notifications  
- **React Icons** – Icon library  

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/e_products_client.git
Install dependencies:

bash
Copy
Edit
cd e_products_client
npm install
Create a .env.local file in the root:

env
Copy
Edit
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
Available Scripts
In the project directory, you can run:

bash
Copy
Edit
npm run dev
Runs the app in development mode at http://localhost:3000.

bash
Copy
Edit
npm run build
Builds the app for production.

bash
Copy
Edit
npm run start
Starts the production server.

bash
Copy
Edit
npm run lint
Runs ESLint for code linting.

Usage
Start the backend server (e_products_server) first.

Run the frontend:

bash
Copy
Edit
npm run dev
Open http://localhost:3000 in your browser.

Login using Google OAuth (via NextAuth.js).

Add products and view them on the Products page.

Toast notifications show success or error feedback for actions.

Project Structure
bash
Copy
Edit
/pages
  /dashboard
    add-product.js      # Add new product page
    products.js         # List products page
/components               # Reusable React components
/styles                   # Tailwind CSS files
