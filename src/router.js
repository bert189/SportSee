
import { createBrowserRouter } from "react-router-dom";
import Template from "./components/pages/Template";
import HomePage from './components/pages/HomePage';
import UserPage from "./components/pages/UserPage";
import NotFound from './components/pages/NotFound';

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Template />,
            children: [
                {
                    path: "",
                    element: <HomePage />
                },
                {
                    path: "utilisateur/:id",
                    element: <UserPage />
                },
                {
                    path: "*",
                    element: <NotFound />
                }

            ]
        }
    ]
)

export default router;