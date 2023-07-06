import Heading from "@/Elements/Heading";
import Image from 'next/image'
import myimg  from "./me.jpg"
import classes from './About.module.css'
import { motion } from 'framer-motion';
export default function About(){
    return <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
        <Heading title="About Me"/>
        <motion.div 
        initial={{
          boxShadow:"0px 0px 0px 0px rgba(0,0,0,0)",
          x:40,
          y:40
         }}
         whileInView={{
          boxShadow:"5px 10px 80px 10px rgba(0,0,0,0.25)",
          x:0,
          y:0,
         }}
         transition={{
          duration:0.6,
          delay:0.2
         }}
        style={{height:"fit-content",width:"fit-content",display:"flex",gap:"40px",alignItems:"center",justifyContent:"center",
         boxShadow:"5px 10px 80px 10px rgba(0,0,0,0.25)",
         padding:"20px",
         borderRadius:"20px"
         }}>
          <Image src={myimg} alt="..." className={classes.img}/>
          <div>
            <h1>Ankit Kumar Shah,</h1>
          <p className={classes.dis}>An Inquisitive person looking for opportunity to grow and do something for betterment of society</p>
          </div>
        </motion.div>
    </div>
}