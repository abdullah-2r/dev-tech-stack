
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
     <Suspense fallback={
       <div className="container mx-auto py-10 text-center">
         <p className="text-lg font-medium text-slate-600">Loading technologies...</p>
       </div>
     }>
     <Technologies techDataPromise = {techDataPromise}></Technologies>
     </Suspense>
     <Footer></Footer>
     <ToastContainer />
     
    </>
  )
}

export default App
