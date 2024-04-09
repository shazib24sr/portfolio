import { useRef } from "react"
import "./services.scss"
import {color, motion, useInView} from "framer-motion"

const variants = {
  initial:{
  x:-500,
  y: 100,
  opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    y:0,
    transition:{
      duration:1,
      staggerChildern:0.1,
    }
  }
}

const Services = () => {

  const ref = useRef()
  const isinView = useInView(ref, {margin:"-100px"})
  

  return (
    <motion.div className="services" variants={variants} initial="initial" ref={ref} animate={isinView && "animate"} > 
        <motion.div className="textContainer" variants={variants}>
            <p>I focous on helping your brand grow <br /> and move forward.</p> <hr />
        </motion.div>
        <div className="titleContainer" variants={variants}>
          <div className="title">
          <img src="/people.webp" alt="" />
          <h1><motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas</h1>
          </div>
          <div className="title"> 
          
          <h1><motion.b whileHover={{color:"orange"}}>For your</motion.b> Business.</h1>
          <button>What I Do?</button>
          </div>
        </div>
        <div className="listContainer" variants={variants}>
          <motion.div className="box" whileHover={{background:"lightgray", color: "black"}}><h2>Front-End Development</h2>
          <p>
Crafting bespoke user interfaces that mirror your brand's essence and deliver intuitive navigation, ensuring a captivating online experience that resonates with your audience. Let's collaborate to elevate your digital presence and create exceptional web solutions tailored to your needs.   
            </p><a href="https://drive.google.com/drive/folders/11JsE3IJUbaiR4WQcVGMoz7sVLdYM9E3t?usp=drive_link" target="blank"><button>Go</button></a>
          </motion.div>
          <motion.div className="box" whileHover={{background:"lightgray", color: "black"}}><h2>Graphic Designing</h2>
          <p>Elevate your brand's identity with custom graphic designs that reflect your unique essence, offering intuitive visual communication and captivating aesthetics that engage your audience. Let's collaborate to craft visually stunning solutions that amplify your digital presence and leave a lasting impact on your audience's perception.
</p>
<a href="https://drive.google.com/drive/folders/1-tMHLVPaN5viVOzZkGOLeryrQO1IGgv-?usp=drive_link" target="blank"><button>Go</button></a>
          </motion.div>
          <motion.div className="box" whileHover={{background:"lightgray", color: "black"}}><h2>Flutter App Development</h2>
          <p>Transform your ideas into dynamic and innovative mobile experiences with Flutter app development. Harnessing the power of Flutter's cross-platform capabilities, I craft seamless and responsive applications that deliver exceptional user interactions. Let's collaborate to bring your vision to life, creating intuitive and feature-rich mobile solutions tailored to meet your specific needs and exceed user expectations.</p>
          <a href=" https://drive.google.com/drive/folders/12T3xvFtovhMG1GIHjxBroDkPopYWVEAM?usp=sharing" target="blank"><button>Go</button></a>
          </motion.div>
         
        </div>
      
    </motion.div>
  )
}

export default Services
