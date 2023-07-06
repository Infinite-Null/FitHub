import Heading from "@/Elements/Heading";
import Image from 'next/image'
import myimg  from "./me.jpg"
import classes from './About.module.css'
export default function About(){
    return <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
        <Heading title="About Me"/>
        <div style={{height:"fit-content",width:"fit-content",display:"flex",gap:"40px",alignItems:"center",justifyContent:"center",
         boxShadow:"5px 10px 80px 10px rgba(0,0,0,0.25)",
         padding:"20px",
         borderRadius:"20px"
         }}>
          <Image src={myimg} alt="..." className={classes.img}/>
          <div>
            <h1>Ankit Kumar Shah,</h1>
          <p className={classes.dis}>An Inquisitive person looking for opportunity to grow and do something for betterment of society</p>
          </div>
        </div>
    </div>
}