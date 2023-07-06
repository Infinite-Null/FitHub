import Left from './Left'
import classes from './MainSection.module.css'
import { motion } from 'framer-motion';
export default function Section1({image,title,discription}:{
    image:string,
    title:string,
    discription:string,
    Toref:string,
    button:string
}){
    return <>
    <div className={classes.main}>
        <div className={classes.Left}><Left title={title} discription={discription}/></div>
        <div className={classes.Right}>
          <motion.div 
          initial={{
            opacity:0,
            y:35,
           }}
           animate={{
            opacity:1,
            y:0,
           }}
           transition={{
            duration:0.6
           }}
          className={classes.image} style={{
            background:image,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}>

          </motion.div>
        </div>
    </div>
    </>
}