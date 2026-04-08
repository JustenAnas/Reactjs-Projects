import { useState } from "react"
import BgImg from "./BgImg"
import Box from "./Box"
import Navbar from "./Navbar"

 
const ShoesCont = () => {

const [category, setCategory] = useState("shoes")


  return (
    <div className="relative">
        <Navbar setCategory={setCategory}/>
        <BgImg/>
        <Box category={category} setCategory={setCategory}/>
    </div>
  )
}

export default ShoesCont