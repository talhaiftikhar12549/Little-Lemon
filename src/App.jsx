import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './Redux/Slice/counterSlice'
import NavBar from "./components/NavBar";
import BannerSection from "./components/BannerSection"
import MenuList from "./components/MenuList"
import FooterBar from "./components/FooterBar"
import React from "react";
import TableReserve from "./components/TableReserve";
import TableSelect from "./components/TableSelect";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
const router = createBrowserRouter([
    {
        path: "/",
        element: <BannerSection/>,

    },
    {
        path: "/TableReserve",
        element: <TableReserve/>,

    },
    {
        path: "/TableSelect",
        element: <TableSelect/>,

    },
]);
function App() {

    const count = useSelector((state) => state.counter.value)
  return (
    <>
        <NavBar/>
        <RouterProvider router={router} />
        <FooterBar/>
    </>
  )
}

export default App
