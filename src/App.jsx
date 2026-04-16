// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import LoginPage from './Features/Auth/login.jsx'
// import SignUpPage from './Features/Auth/signup.jsx'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css'


//   function App() {
//   return (
//     <Router> 
//       <Routes>
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignUpPage />} />
//         {/* Add other routes here */}
//       </Routes>
//     </Router>
//   );
// }

// export default App




import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './Features/Auth/login'; 
import SignUpPage from './Features/Auth/signup'; 
import ForgotPasswordPage from './Features/Auth/forgot-password';
import ResetPassword from './Features/Auth/reset-password';
import Dashboard from './Features/Dashboard/dashboard';
import IncomingLetters from './Features/Dashboard/incoming-letters';

function App() {
  return (
    <Router>
      <Routes>
        {/* 1. Add this line to handle the "/" path */}
        <Route path="/" element={<LoginPage />} /> 

        {/* 2. Your existing routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/incoming-letters" element={<IncomingLetters />} />

        {/* 3. OPTIONAL: A "Catch-all" route that redirects any typo back to login */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;