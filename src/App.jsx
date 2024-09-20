import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './Redux/Slice/counterSlice'
import NavBar from "./components/NavBar";
import BannerSection from "./components/BannerSection"
function App() {

    const count = useSelector((state) => state.counter.value)
  return (
    <>
        <NavBar/>
        <BannerSection/>
    </>
  )
}

export default App
