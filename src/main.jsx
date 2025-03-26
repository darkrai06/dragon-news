import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home";
import Root from "./Root";
import Error from "./Error";
import News from "./News";
import Login from "./Login";
import Register from "./Register";
import AllNews from "./AllNews";
import EveryNews from "./EveryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "",
            element: <Navigate to={"category/0"}></Navigate>
          },
          {
            path: "category/0",
            element: <EveryNews />,
            loader: () => {
              console.log("Fetching All News Data from news.json");
                return fetch('/news.json')
                  .then(res => res.json())
                  .catch(error => {
                    console.error('Fetch error:', error);
                    return [];
                  });
            }
          },
          {
            path: "category/:id",
            element: <AllNews />,
            loader: ({ params }) => {
              const categoryId = params.id;
          
              if (categoryId === "0") {
                console.log("Fetching All News Data from news.json");
                return fetch('/news.json')
                  .then(res => res.json())
                  .catch(error => {
                    console.error('Fetch error:', error);
                    return [];
                  });
              } else {
                console.log("Fetching News for Category ID:", categoryId.padStart(2, "0"));
                return fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId.padStart(2, "0")}`)
                  .then(res => res.json())
                  .catch(err => {
                    console.error("Error fetching data:", err);
                    return {};
                  });
              }
            }
          },
        ],
      },
      {
        path: "news/:newsId",
        element: <News />,
        loader: async ({ params }) => {
          const response = await fetch('/news.json');
          if (!response.ok) {
            throw new Response("Failed to load data", { status: 500 });
          }
          const newsData = await response.json();
          const article = newsData.find((item) => item._id === params.newsId);
          if (!article) {
            throw new Response("Article not found", { status: 404 });
          }
          return article;
        },
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
