import Link from 'next/link'
import classes from './NavBar.module.css'
import { motion } from "framer-motion"
export default function NavBar({Logo}:{Logo:string,}){
    return <div style={{display:"flex",justifyContent:"space-between"}}>
       <motion.h1 
       initial={{
        opacity:0,
        y:29,
       }}
       animate={{
        opacity:1,
        y:0,
       }}
       transition={{
        delay:0.5,
        duration:0.6
       }}
       style={{
        fontWeight:"100",
        letterSpacing:"1px",
        paddingLeft:"30px",
        fontFamily:"sans-serif"
       }}>{Logo}</motion.h1>
    </div>
}