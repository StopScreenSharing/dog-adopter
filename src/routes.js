import App from "./Components/App";
import Home from "./Components/Home";
import CatsPage from "./Components/CatsPage";
import ErrorPage from "./Components/ErrorPage";
import DogsPage from "./Components/DogsPage";

const routes = [
   {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
    
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/dogspage",
                element: <DogsPage/>
            },
            {
                path: "/catspage",
                element: <CatsPage />
            },
        ]
    }
];

export default routes;