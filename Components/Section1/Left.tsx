import Link from 'next/link'
import classes from './MainSection.module.css'
export default function Left({title,discription}:{
    title:string,
    discription:string,
}){
    return <div className={classes.Left}>
        <div className={classes.Quote}>
            {title} 
        </div>
        <div className={classes.Discription}>
        {discription}
        </div>

    </div>
}