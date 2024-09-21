import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './Redux/Slice/counterSlice'
import NavBar from "./components/NavBar";
import BannerSection from "./components/BannerSection"
import MenuList from "./components/MenuList"
import FooterBar from "./components/FooterBar"
function App() {

    const count = useSelector((state) => state.counter.value)
  return (
    <>
        <NavBar/>
        <BannerSection/>
        <MenuList/>
        <FooterBar/>
    </>
  )
}

export default App
