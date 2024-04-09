import "./contact.scss";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1 // Corrected spelling of staggerChildren
        }
    }
};

const Contact = () => {
    const form = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
            .sendForm('service_3mubwjb', 'template_b0s909o', form.current, {
                publicKey: 'dFSSsZksTg_LL3fG5',
            })
            .then(
                (response) => {
                    console.log('Email sent successfully:', response);
                    setSuccess(true);
                    setError(false);
                },
                (error) => {
                    console.error('Error sending email:', error);
                    setSuccess(false);
                    setError(true);
                }
            );
    };
    

    return (
        <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Let's Work Together</motion.h1> 
                <motion.div className="item" variants={variants}>
                    <h2>Mail</h2>
                    <span>shazib.24sr@gmail.com</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Address</h2> 
                    <span>Gujranwala, Pakistan</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Phone</h2>
                    <span>+92 309 5065895</span>
                </motion.div>
            </motion.div>
            <div className="formContainer">
                <motion.div className="phoneSvg" initial={{opacity:1}} whileInView={{opacity:0}} transition={{delay:2, duration:1}}>
                    <svg width="450px" height="450px" viewBox="0 0 32.666 32.666">
                        <motion.path strokeWidth={0.2} fill="none" initial={{pathLength:0}} whileInView={{pathLength:1}} transition={{duration:2}}
                        d="M16,2c-7.727,0 -14,6.273 -14,14c0,7.727 6.273,14 14,14c7.727,0 14,-6.273 14,-14c-0,-7.727 -6.273,-14 -14,-14Zm-6.729,10.345l0.15,0.259l6.23,10.792l0.866,0.5c0,0 -0.861,-0.493 -0.861,-0.493l0.15,0.26c0.475,0.824 1.378,1.386 2.555,1.483c0.993,0.082 2.117,-0.184 3.119,-0.763c1.121,-0.647 2.118,-1.223 2.118,-1.223c0.478,-0.276 0.642,-0.887 0.366,-1.366l-2.077,-3.597c-0.276,-0.478 -0.888,-0.642 -1.366,-0.366l-0.866,0.5c0,-0 -3.846,-6.662 -3.846,-6.662c-0,0 0.866,-0.5 0.866,-0.5c0.478,-0.276 0.642,-0.888 0.366,-1.366l-2.077,-3.597c-0.276,-0.479 -0.888,-0.642 -1.366,-0.366c0,-0 -0.997,0.575 -2.118,1.223c-1.002,0.578 -1.795,1.419 -2.22,2.319c-0.505,1.068 -0.469,2.131 0.006,2.955l0.005,0.008Zm8.117,10.058l-6.39,-11.066c-0.177,-0.307 -0.118,-0.702 0.07,-1.1c0.267,-0.566 0.782,-1.079 1.412,-1.442c0,-0 1.252,-0.723 1.252,-0.723c0,-0 1.077,1.865 1.077,1.865c-0,0 -0.866,0."/>
                    </svg>
                </motion.div>
                <motion.form ref={form} action="" onSubmit={sendEmail} initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:3}}>
                    <input type="text" name="from_name" required placeholder="Name" />
                    <input type="email"  name="user_email"  required placeholder="Email" />
                    <textarea name="message"  rows={8} cols={18} placeholder="Message" id=""></textarea>
                    <button type="submit">Submit</button>
                    {error && <p className="error">Error occurred while sending the message.</p>}
                    {success && <p className="success">Message sent successfully!</p>}
                </motion.form>
            </div>
        </motion.div>
    );
};

export default Contact;
