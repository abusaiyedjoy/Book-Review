import { createBrowserRouter } from "react-router-dom";
import  Container  from "../Container/container";
import Home from './../Home/home';
import Listed_Books from "../Home/Listed-Books";
import Pages_to_Read from "../Home/Pages_to_Read"
import CardDetails from '../Components/cardDetails'
import Read_books from "../Components/Read_books";
import Wishlist_books from "../Components/Wishlist_books";
import ErrorPage from "../ErrorPage/ErrorPage";
import Favorite from "../Bookmarks/Favorite";
import Review_Container from "../Review_Container/Review_Container";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Container></Container>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/Listed Books",
          element:<Listed_Books></Listed_Books> ,
          children: [
            {
                index: true,
                element: <Read_books></Read_books>
            },
            {
                path: "Wishlist Books",
                element: <Wishlist_books></Wishlist_books>
            }
          ]
        },
        {
          path: "/Pages to Read",
          element:<Pages_to_Read></Pages_to_Read> ,
        },
        {
          path: "/Bookmarks",
          element:<Favorite></Favorite> ,
        },
        {
          path: "/Review_Container",
          element:<Review_Container></Review_Container> ,
        },
        {
          path: "/card Details/:id",
          loader:()=> fetch('../Books.json'),
          element:<CardDetails></CardDetails>
        },
      ],
    },
  ]);