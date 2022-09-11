import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, HashRouter} from 'react-router-dom';
import Layout from './Components/Utilities/Addons/Layout';
import Error from './Components/Utilities/Addons/Error';
import Home from './Components/Pages/Index/index';
import Login from './Components/Pages/Login/index';
import Profile from './Components/Pages/Profile/index';
import Admin from './Components/Pages/Admin/index';
import Quiz from './Components/Pages/Quiz/index';
import Signup from './Components/Pages/Signup/index';
import reportWebVitals from './reportWebVitals';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="error" element={<Error />} />
          <Route path="admin" element={<Admin />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <App />
);

reportWebVitals();
