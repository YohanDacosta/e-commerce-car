import { createBrowserRouter } from "react-router-dom";
import { RootPage, HomePage, CarsPage, AboutPage } from "../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'cars',
                element: <CarsPage />,
            },
            {
                path: 'about',
                element: <AboutPage/>,
            },
        ],
    },
]);