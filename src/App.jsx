
import { RouterProvider } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { router } from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {


  return (
    <>

      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </>
  )
}

export default App
