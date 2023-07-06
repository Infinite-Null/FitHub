import classes from './Heading.module.css'

export default function Heading({title}:{title:string}){
    return <h1 className={classes.heading}><center>{title}</center></h1>
}