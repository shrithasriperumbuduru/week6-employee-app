# FrontEnd Overview
## Technologies Used

- React JS
- Vite
- React Router DOM
- CSS3
- JavaScript (ES6)

## Frontend Project Structure
frontend\
│\
├── public\
│\
├── src\
│   ├── assets\
│   │\
│   ├── components\
│   │   ├── CreateEmp.jsx\
│   │   ├── EditEmployee.jsx\
│   │   ├── Employee.jsx\
│   │   ├── Header.jsx\
│   │   ├── Home.jsx\
│   │   ├── ListOfEmps.jsx\
│   │   └── RootLayout.jsx\
│   │\
|   ├──.env\
│   ├── App.css\
│   ├── App.jsx\
│   ├── index.css\
│   └── main.jsx\
│\
├── .gitignore\
├── eslint.config.js\
├── index.html\
├── package.json\
├── package-lock.json\
├── vite.config.js\
└── README.md
## Installation Steps
### Step 1: Install Dependencies

```bash
npm install react-router-dom axios
```
### Step 3: Start Development Server
```bash
npm run dev
```
### To Deploy
#### Use Vercel To Deploy Frontend
``` bash
Step 1 : Login to Render Webiste (https://vercel.com/)
Step 2 : Click on ADD New
Step 3 : Click on Project
Step 4 : Connect your Git To it and select The file
Step 5 :  Root Directiory : Frontend File
Step 6 : Add Environment Variables
-Vite_Url=your_backend_url(Deployed Render link)
Step 7 : Deploy
```
### After Deployment connect the frontend link in backend server.js at cors and redeploy the backend in render then frontend 
To access the data and backend we connect
### Deployment Link : https://employee-web-pi.vercel.app/
