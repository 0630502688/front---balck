import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import LoginForm from '../layout/LoginForm'
import RegisterForm from '../layout/RegisterForm'
import useAuth from '../hooks/useAuth'
import Header from '../layout/Header'
import UserHome from '../layout/UserHome'
import ProductItem from '../layout/ProductItem'
import NavBar from '../layout/Navbar'
import Heart from '../layout/Heart'
import OrderPage from '../layout/OrderPage'
import Payment from '../layout/Payment'
import Shopping  from '../layout/Shopping'
import Track from '../layout/Track'
import Profile  from '../layout/profile'
import CartPage from '../layout/CartPage'
import OrderPage1 from '../layout/OrderPage1'
import OrderPage2 from '../layout/OrderPage2'
import OrderPage3 from '../layout/OrderPage3'





const guestRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Outlet />
    </>,
    children: [
      { index: true, element: <LoginForm /> },
      { path: '/register', element: <RegisterForm /> }
      

    ]
  }
])

const userRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Outlet />
    </>,
    children : [
      { index: true, element: <> <UserHome /> </>},
      { path: '/Heart', element: <Heart/>},
      { path: '/new', element: <p>New Todo Form</p>},
      { path: '/product', element: <ProductItem/>},
      { path: '/Navdar', element: <NavBar/>},
      { path: '/OrderPage', element: <OrderPage/>},
      { path: '/Payment', element: <Payment />},
      { path: '/Shopping', element: <Shopping/>},
      { path: '/Track', element: <Track/>},
      { path: '/profile', element: <Profile/>},
      { path: '/CartPage', element: <CartPage/>},
      { path: '/OrderPage1', element: <OrderPage1/>},
      { path: '/OrderPage2', element: <OrderPage2/>},
      { path: '/OrderPage3', element: <OrderPage3/>}



    ]
    
  }
])

export default function AppRouter() {
  const { user } = useAuth()
  const finalRouter = user?.id ? userRouter : guestRouter
  return (
    <RouterProvider router={finalRouter} />
  )
}
