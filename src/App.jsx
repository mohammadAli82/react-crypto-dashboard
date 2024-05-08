import Dashboard from "./pages/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Support from "./pages/Support/Support";
import TransactionPage from "./pages/Transaction/Transaction";
import Signup from "./pages/Auth/Signup/Signup";
import Signin from "./pages/Auth/Sign/Signin";
import RegisterEmailVerify from "./pages/Auth/RegisterEmailVerify/RegisterEmailVerify";
import RegisterSuccess from "./pages/Auth/RegisterSuccess/RegisterSuccess";
import ForgetPassword from "./pages/Auth/ForgetPassword/ForgetPassword";
import ForgetPasswordReset from "./pages/Auth/ForgetPasswordSent/ForgetPasswordReset";
import ResetPasswordSuccess from "./pages/Auth/ResetPasswordSuccess/ResetPasswordSucess";
import ResetPassword from "./pages/Auth/ResetPassword/ResetPassword";
import { QueryClient, QueryClientProvider } from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
const router=createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transactions",
    element: <TransactionPage />,
  },
  {
    path: "/support",
    element: <Support />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/registerverifyemail",
    element: <RegisterEmailVerify />,
  },
  {
    path: "/registersuccess",
    element: <RegisterSuccess />,
  },
  {
    path: "/forgetpassword",
    element: <ForgetPassword />,
  },
  {
    path: "/forgetpasswordreset",
    element: <ForgetPasswordReset />,
  },
  {
    path: "/resetpasswordsuccess",
    element: <ResetPasswordSuccess />,
  },{
    path: "/resetpassword",
    element: <ResetPassword />,
  }
]);

function App() {
  const queryClient=new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
    <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  );
}

export default App;
