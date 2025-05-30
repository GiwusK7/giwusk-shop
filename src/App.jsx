import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from './pages';
import { ErrorElement } from './components';
//loaders
import { loader as landingLoader} from './pages/Landing';
import { loader as singleProductLoader} from './pages/SingleProduct';
import { loader as productsLoader} from './pages/Products';
//action

const router = createBrowserRouter([
{
  path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [ 
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
        errorElement: <ErrorElement/>,
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorElement/>,
        loader: productsLoader,
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        errorElement: <ErrorElement/>,
        loader: singleProductLoader,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      { path: 'about', element: <About /> },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
    ],
},
{
  path: '/login',
  element: <Login />,
  errorElement: <Error />,
},
{
  path: '/register',
  element: <Register />,
  errorElement: <Error />,
},
]);
const App = () => {
  return <RouterProvider router={router}/>;
};
export default App;


































// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import {
//   HomeLayout,
//   Landing,
//   Error,
//   Products,
//   SingleProduct,
//   Cart,
//   About,
//   Register,
//   Login,
//   Checkout,
//   Orders,
// } from './pages';
// import { ErrorElement } from './components';
// //loaders
// import { loader as landingLoader} from './pages/Landing';
// import { loader as SingleProduct} from './pages/Landing';
// //action

// const router = createBrowserRouter([
// {
//   path: '/',
//     element: <HomeLayout />,
//     errorElement: <Error />,
//     children: [
//       {
//         index: true,
//         element: <Landing />,
//        loader: landingLoader,
//         errorElement: <ErrorElement/>,
//       },
//       {
//         path: 'products',
//         element: <Products />,
//       },
//       {
//         path: 'products/:id',
//         element: <SingleProduct />,

//       },
//       {
//         path: 'cart',
//         element: <Cart />,
//       },
//       { path: 'about', element: <About /> },
//       {
//         path: 'checkout',
//         element: <Checkout />,
//       },
//       {
//         path: 'orders',
//         element: <Orders />,
//       },
//     ],
// },
// {
//   path: '/login',
//   element: <Login />,
//   errorElement: <Error />,
// },
// {
//   path: '/register',
//   element: <Register />,
//   errorElement: <Error />,
// },
// ]);
// const App = () => {
//   return <RouterProvider router={router}/>;
// };
// export default App;

