import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="wrapper">
            <Sidebar/>
            <motion.span 
            initial={{opacity:0, scale:0.5}} 
            animate={{opacity:100,scale:1}} 
            transition={{duration:0.5}}
            >
                Rana Shazib Ali</motion.span>
            <div className ="social">
                <a href="https://www.linkedin.com/in/shazib24sr/" target="blank"><img src="/linkedin.png" alt="" /></a>
                <a href="https://github.com/shazib24sr" target="blank"><img src="/github.jpg" alt="" /></a>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
