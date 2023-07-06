import { Card, Grid, Text, Link } from "@nextui-org/react";
import classes from "./Section2.module.css"
import Heading from "@/Elements/Heading";
export default function Section3({features}:{
  features:{
    title:string,
    image:string
  }[]
}){
    return <>
    <Heading title="Equipments"/>

    <div className={classes.featuresHolder}>
        {features.map((e)=>
          <CardFeature 
        title={e.title}
        image={e.image}
        />)}
    </div>
    </>
}


function CardFeature({title,image}:{
  title:string,
  image:string
}){
    return <Card css={{ p: "$6", border:"2px solid black",}}className={classes.card} isHoverable={true}>
    <Card.Header>
      <img
        alt="nextui logo"
        src={image}
        width="64px"
        height="64px"
        style={{borderRadius:"10px"}}
      />
      <Grid.Container css={{ pl: "$6",}}>
        <Grid xs={12}>
          <Text h4 css={{ lineHeight: "$xs" , fontSize:"26px", textTransform:"uppercase"}}>
          {title}
          </Text>
        </Grid>
      </Grid.Container>
    </Card.Header>
  </Card>
}