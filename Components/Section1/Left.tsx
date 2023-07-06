import classes from './MainSection.module.css'
import { motion } from 'framer-motion';
export default function Left({title,discription}:{
    title:string,
    discription:string,
}){
    return <motion.div 
    initial={{
        opacity:0,
        y:-35,
       }}
       animate={{
        opacity:1,
        y:0,
       }}
       transition={{
        duration:0.6
       }}
    className={classes.Left}>
        <div className={classes.Quote}>
            {title} 
        </div>
        <div className={classes.Discription}>
        {discription}
        </div>

    </motion.div>
}