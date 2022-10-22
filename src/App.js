import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import LoginBootsrup from './components/LoginBootsrup';


import RegisterReactBootstrup from './components/RegisterReactBootstrup';
import Main from './layout/Main';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main>0</Main>,
    children: [
      {
        path: '/',
        element: <RegisterReactBootstrup></RegisterReactBootstrup>
      },
      {
        path: '/register',
        element: <RegisterReactBootstrup></RegisterReactBootstrup>
      },
      {
        path: '/login',
        element: <LoginBootsrup></LoginBootsrup>
      },
    ]
  }
])

function App() {
  return (
    <div className="">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
