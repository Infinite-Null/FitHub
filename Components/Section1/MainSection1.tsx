import Left from './Left'
import classes from './MainSection.module.css'
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
          <div className={classes.image} style={{
            background:image,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}>

          </div>
        </div>
    </div>
    </>
}