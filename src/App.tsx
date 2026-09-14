
import './App.css'
import Nav from "./Components/Nav"
import Banner from './Components/Banner'
import Technologies from './Components/Technologies'
import Footer from './Components/Footer'
import { useState } from 'react'
import { Suspense } from 'react'
import { ToastContainer } from 'react-toastify'
const techDataFetch = async () => {
    const res = await fetch("/Data.json");
    const data = await res.json();
    return data;
  }
function App() {
  const [techDataPromise] = useState(() => techDataFetch());

  return (
    <>
     <Nav></Nav>
     <Banner></Banner>
     <Suspense fallback={<p>Load Techs....</p>}>
     <Technologies techDataPromise = {techDataPromise}></Technologies>
     </Suspense>
     <Footer></Footer>
     <ToastContainer />
     
    </>
  )
}

export default App
