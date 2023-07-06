import classes from './Bottom.module.css'
export default function Bottom(){
    return <div className={classes.bottom}>
       <div className={classes.left}>
        <div>
        <h1 className={classes.heading}>Ankit Kumar Shah</h1>
        <h1 className={classes.sub}>Let's Connect To Build Something Big</h1>
        </div>
        <h1 className={classes.rev}>All rights reserved @2023 Ankit Kumar Shah</h1>
       </div>
       <div className={classes.right}>
          <a href='https://www.linkedin.com/in/ankit-kumar-shah-147333247/' target='_blank' className={classes.a}>LinkedIn</a>
          <a href='https://github.com/Infinite-Null' target='_blank' className={classes.a}>Github</a>
          <a href='https://www.instagram.com/ankit_kumar.cpp/' target='_blank' className={classes.a}>Instagram</a>
       </div>
    </div>
}