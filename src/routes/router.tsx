import ErrorPage from "@/pages/errorPage"
import MainPage from "@/pages/mainPage"
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
])

export default router
