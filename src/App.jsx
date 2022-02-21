// import AuthPages from './pages/auth';
import Dashboard from './pages/dashboard';
// import Catalog from './pages/catalog';
// import CatalogByID from './pages/catalog/byId';

import {
  Routes,
  BrowserRouter,
} from 'react-router-dom'
import { render } from '@testing-library/react';

function NotFound() {
  return (
    <div className="home">
      <p>
        NOT FOUND 404
        <br />
        return to <a href='/'> HomePage </a> ?
      </p>
    </div>
  );
}

// function RequireAuth() {
//   let auth = sessionStorage.getItem('logged');
//   let location = useLocation();

//   if (!auth) {
//     return <Navigate to="/" state={{ from: location }} />;
//   }

//   return <Outlet />;
// }

function App() {
//   // 
  
// import Dashboard from './pages/dashboard';
// import { BrowserRouter, Routes } from "react-router-dom";


function App() {
  render (
 <BrowserRouter>
 <Routes>
   <route path="/dashboard" element={<Dashboard />} />
 </Routes>
 </BrowserRouter>
  );
}

}




export default App;

