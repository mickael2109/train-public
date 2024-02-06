import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-bootstrap';
import IndexPage from './views/IndexPage';
import AdminRoute from './routes/AdminRoute';
import ControllerRoute from './routes/ControllerRoute';
import ClientRoute from './routes/ClientRoute';

function App() {
  return (
    <BrowserRouter>
        <ToastContainer position='top-center'/>
        <Routes>    
            <Route path="/*" element={<IndexPage/>}/>
            <Route path="/admin/*" element={<AdminRoute/>}/>
            <Route path="/controller/*" element={<ControllerRoute/>}/>
            <Route path="/client/*" element={<ClientRoute/>}/>
        </Routes>  
    </BrowserRouter>
  );
}

export default App;
