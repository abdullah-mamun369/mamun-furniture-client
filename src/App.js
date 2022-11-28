
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import router from './Routers/Routes/Router';

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
      <Toaster></Toaster>
    </div>
  );
}

export default App;
