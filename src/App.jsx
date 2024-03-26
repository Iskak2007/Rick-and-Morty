import './App.css'
import {Routes, Route} from "react-router-dom"
import MainPage from './pages/mainPage'
import DefinePerson from './pages/definePerson'
import Header from './components/JSXFiles/Header'
import { useEffect } from 'react'
import { locationAPI } from './components/API/locationAPI'

function App(){
  useEffect(()=>{
    const getData = async() =>{
      const data = await locationAPI.getALLlocation({gender: 'Female' })
      console.log(data);
    }
    getData()
  },[])
  return(
    <>
      <Header/>
     <Routes>
       <Route path="/" element={ <MainPage/>}/>
      <Route path='/character/:id' element={<DefinePerson/>}/>
     </Routes>
    </>
  )
}
export default App

// import Head from './components/JSXFiles/header_shop'
// function App(){
//   return(
//     <>
//       <Head/>
//     </>
//   )
// }
// export default App