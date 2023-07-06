import Link from 'next/link'
import classes from './NavBar.module.css'
export default function NavBar({Logo}:{Logo:string,}){
    return <div style={{display:"flex",justifyContent:"space-between"}}>
       <h1 style={{
        fontWeight:"100",
        letterSpacing:"1px",
        paddingLeft:"30px",
        fontFamily:"sans-serif"
       }}>{Logo}</h1>
    </div>
}