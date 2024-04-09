import { useState } from "react"
import Links from "./links/Links"
import "./sidebar.scss"
import ToggleButton from "./toggleButton/ToggleButton"
import {motion} from "framer-motion"


function Sidebar() {
    const[open, setOpen] = useState(false)
    const variants = {
        open: {
            clipPath: "circle(800px at 50px 50px)",
            
        },
        closed: {
            clipPath: "circle(20px at 50px 50px)", 
        }
    };
    
  return  <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
       <Links/>
      </motion.div>
      <ToggleButton setOpen={setOpen}/>

    </motion.div>
  
}

export default Sidebar
