import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './Redux/Slice/counterSlice'


function App() {

    const count = useSelector((state) => state.counter.value)
  return (
    <>
        <h1 className="text-3xl font-bold underline">
            Hello world! {count}
        </h1>
    </>
  )
}

export default App
