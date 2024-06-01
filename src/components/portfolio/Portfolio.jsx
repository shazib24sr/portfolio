import React, { useRef } from 'react'; 
import "./portfolio.scss"; // Importing your SCSS file
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const items = [
    {
        id: 1,
        title: "Virtual Medical Advisor",

        desc: "Based on React, Flask and Mongodb, helps user to find out information about medicine just by providing name or picture or just by a live scan. (Server Not Hosted)",

 
        skills: "ReactJs, Flask(Pyhton), MongoDb, Netlify",
        link: "https://virtual-medical-advisor.netlify.app/",
        sourceCode: "https://github.com/shazib24sr/Virtual-Medical-Advisor-AI-Based-.git"
    },
    {
        id: 2,
        title: "Travel Ease App",
        desc: "Based on Flutter, A tour planner and schedular app which will allow user to plan a journey and visit the famous and historical spots.",
        skills: "Flutter (dart), Firebase",
        link: "",
        sourceCode: "https://github.com/shazib24sr/travelease.git"
    },
    {
        id: 3,
        title: "Usuability Hub Website Frontend",
        desc: "Custom landing page of website, classic view of converion of figma design into html, css.",
        skills: "Html, CSS, Github, Figma",
        link: "https://shazib24sr.github.io/usuablityHub/#",
        sourceCode: "https://github.com/shazib24sr/usuablityHub.git"
    },
    {
        id: 4,
        title: "Learn Hub Website Frontend",
        desc: "Designed and Developed education website having custom pages and features.",
        skills: "Html, CSS, JavaScript, jQuery, Bootstrap, Github, Figma",
        link: "https://shazib24sr.github.io/learnHub/"

    },
    {
        id: 5,
        title: "Learn Hub Website Frontend",
        desc: "Designed and Developed education website having custom pages and features.",
        skills: "Html, CSS, Gthub, Figma",
        link: "https://shazib24sr.github.io/learnHub/",
        sourceCode: "https://github.com/shazib24sr/learnHub.git"
    },
    {
        id: 6,
        title: "Graphic Design",
        desc: "Some featured work of graphic design made for differnet purposes.",
        skills: "Adobe Photoshop, Adobe Illustrator, Canva, Figma",
        link: "https://drive.google.com/drive/folders/1-tMHLVPaN5viVOzZkGOLeryrQO1IGgv-?usp=drive_link",
        sourceCode: "https://drive.google.com/drive/folders/1-tMHLVPaN5viVOzZkGOLeryrQO1IGgv-?usp=drive_link"
    },
];

const Section = ({ children }) => {
    return <section>{children}</section>;
};

const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
    const handleGoLiveClick = () => {
        if (!item.link) {
            alert('This project is not hosted.');
            location.reload();
        } else {
            window.open(item.link, '_blank', 'noopener,noreferrer');
        }
    };
    return (
        <Section ref={ref}>
            <div className="container">
                <div className="wrapper">
                    <motion.div className="textContainer" style={y}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <p className="skills"><strong>Skills:</strong> {item.skills}</p>
                        <div className="buttons">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <button  onClick={handleGoLiveClick}>Go Live</button>
                        </a>
                        <a href={item.sourceCode} target="_blank" rel="noopener noreferrer">
                            <button  onClick={handleGoLiveClick}>Source Code</button>
                        </a>
                        </div>
                        
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};

const Portfolio = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio">
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio;
