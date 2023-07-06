import classes from './Bottom.module.css'
import { motion } from 'framer-motion';
export default function Bottom(){
    return <div className={classes.bottom}>
       <div className={classes.left}>
        <motion.div
        initial={{
         opacity:0,
         x:-60,
        }}
        whileInView={{
         opacity:1,
         x:0,
        }}
        transition={{
         duration:0.6,
         delay:0.2
        }}
        >
        <h1 className={classes.heading}>Ankit Kumar Shah</h1>
        <h1 className={classes.sub}>Let's Connect To Build Something Big</h1>
        </motion.div>
        <h1 className={classes.rev}>All rights reserved @2023 Ankit Kumar Shah</h1>
       </div>
       <motion.div 
       initial={{
         opacity:0,
         x:60,
        }}
        whileInView={{
         opacity:1,
         x:0,
        }}
        transition={{
         duration:0.6,
         delay:0.2
        }}
       className={classes.right}>
          <a href='https://www.linkedin.com/in/ankit-kumar-shah-147333247/' target='_blank' className={classes.a}>LinkedIn</a>
          <a href='https://github.com/Infinite-Null' target='_blank' className={classes.a}>Github</a>
          <a href='https://www.instagram.com/ankit_kumar.cpp/' target='_blank' className={classes.a}>Instagram</a>
       </motion.div>
    </div>
}