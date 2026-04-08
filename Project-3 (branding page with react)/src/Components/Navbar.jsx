import { Link } from "react-router-dom"
import Button from "./Button"

 const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-20 py-4">
        <Link to="/"><img  src="./brand_logo.png" alt="" /></Link>
        <div className="list ">
            <ul className="flex gap-4.5 font-semibold text-lg">
              <Link to='/ShoesCont'>Menu</Link>
              <Link>Location</Link>
              <Link>About</Link>
              <Link to="/Contact">Contact</Link>
            </ul>
        </div>
        <Button/>
    </div>
  )
}

export default Navbar