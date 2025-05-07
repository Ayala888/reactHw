import './App.css'
import DataFetcher from './components/DataFetcher'
import Home from './components/Home'
import Lifecycle from './components/Lifecycle'
import { Route, Routes } from 'react-router-dom'
import ReactRouter from './components/ReactRouter'

function App() {
  return (
      <Routes>
        <Route path={'/'} element={<ReactRouter/>}/>
        <Route path={'/home'} element={<Home/>}/>
        <Route path={'/timer'} element={<Lifecycle/>}/>
        <Route path={"/data"} element={<DataFetcher/>} />
      </Routes> 
  )
}

export default App
