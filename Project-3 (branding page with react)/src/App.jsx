import Btm from "./Components/Btm"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import {Routes,Route} from 'react-router-dom'
import Contact  from "./Pages/Contact";
import ShoesCont from "./Shop/ShoesCont";
 const App = () => {
   return (
      <>
     <Routes>
      <Route path='/' element={
      <div className="h-screen">
      <Navbar/>
      <Hero/>
      <Btm/>
      </div>
      }/> 
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/ShoesCont' element={<ShoesCont/>}></Route>
      
     </Routes>
      </>
   )
 }
 
 export default App