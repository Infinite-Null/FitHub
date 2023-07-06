import { Card, Grid, Loading, Text} from "@nextui-org/react";
import classes from "./Section2.module.css"
import Heading from "@/Elements/Heading";
import { useState } from "react";
import { Modal, useModal, Button,} from "@nextui-org/react";
import { CCard,CCardImage,CCardBody,CCardTitle,CCardText} from '@coreui/react';
export default function Section3({features}:{
  features:{
    title:string,
    image:string
  }[]
}){
    return <>
    <Heading title="Equipments"/>
    <h1 style={{margin:"20px"}}><center className={classes.select}>Click a category to get its <span className={classes.select1}>Exercises</span></center></h1>
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

  const { setVisible, bindings } = useModal();
  const axios = require('axios');
  const [Loding,setLoding]=useState(false);
  const [response,setResponse]=useState<{name: string; bodyPart: string, equipment:string, gifUrl:string, id:string, target:string}[]>([])

  async function FetchData (title:string){
    const axios = require('axios');

const options = {
method: 'GET',
url: `https://exercisedb.p.rapidapi.com/exercises/equipment/${title}`,
headers: {
'X-RapidAPI-Key': 'be0cc3840cmsh0d425e6868774f5p180e36jsn0994520d6473',
'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
}
};
setLoding(()=>true);
try {
const responseData = await axios.request(options);
setResponse((prev)=>prev=responseData.data);
console.log(response);
} catch (error) {
console.error(error);
}
setLoding(()=>false);
  }

    return <><div onClick={()=>{setVisible(true)
      FetchData(title)  
   }
     }>
    <Card css={{ p: "$6", border:"2px solid black",}}className={classes.card} isHoverable={true}>
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
  </div>
  <Modal
        scroll
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" size={40} css={{textTransform:"uppercase"}}>
            {title}
          </Text>
        </Modal.Header>
        {(Loding)?<Loading type="default" size="xl" />:<Modal.Body>
          {response.map((e)=><EachComponent title={e.name} body={e.bodyPart} equpment={e.equipment} target={e.target} id={e.id} img={e.gifUrl}/>)}
        </Modal.Body>}
        <Modal.Footer>
          <Button auto color="error" onPress={() => setVisible(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  </>
}


function EachComponent({title,body,equpment,target,id,img}:{
  title:string,
  body:string,
  equpment:string,
  target:string,
  id:string,
  img:string
}){
  return <CCard className="mb-3" style={{ maxWidth: '540px',border:"2px solid black",padding:"5px",borderRadius:"10px"}}>
  <div style={{display:"flex"}}>
      <CCardImage src={img} height={200} width={200}/>
      <CCardBody>
        <CCardTitle style={{fontSize:"1.2rem", textTransform:"uppercase"}}>{title}</CCardTitle>
        <CCardText style={{fontSize:"0.9rem", textTransform:"uppercase"}}>
          {"Body Part: "+body}
        </CCardText>
        <CCardText style={{fontSize:"0.9rem", textTransform:"uppercase"}}>
          {"Equipment: "+equpment}
        </CCardText>
        <CCardText style={{fontSize:"0.9rem", textTransform:"uppercase"}}>
          {"Target: "+target}
        </CCardText>
        <CCardText>
          <small className="text-medium-emphasis">{"Id: "+id}</small>
        </CCardText>
      </CCardBody>
  </div>
</CCard>
}