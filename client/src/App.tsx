import './styles/global.scss';
import Navbar from "./components/navbar/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/home/Home';


const App = () => {
  const Layout = ()=>{
    return (
      <div className="main">
        <Navbar />
        
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        // {
        //   path: '/users',
        //   element: <Users />,
        // },
        // {
        //   path: '/products',
        //   element: <Products />,
        // },
        // {
        //   path: '/users/:id',
        //   element: <User />,
        // },
        // {
        //   path: '/products/:id',
        //   element: <Product />,
        // },
      ],
    },
    // {
    //   path: '/login',
    //   element: <Login />,
    // },
  ]);

  return <RouterProvider router={router} />;
}

export default App