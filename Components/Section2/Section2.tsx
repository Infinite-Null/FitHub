import { Card, Grid, Text, Link } from "@nextui-org/react";
import { Modal, useModal, Button,} from "@nextui-org/react";
import classes from "./Section2.module.css"
import Heading from "@/Elements/Heading";
export default function Section2({features}:{
  features:{
    title:string,
    discription:string,
    image:string
  }[]
}){
    return <>
    <Heading title="Body Parts"/>

    <div className={classes.featuresHolder}>
        {features.map((e)=>
          <CardFeature 
        title={e.title}
        discription={e.discription}
        image={e.image}
        />)}
    </div>
    </>
}


function CardFeature({title,discription,image}:{
  title:string,
  discription:string,
  image:string
}){
    
  const { setVisible, bindings } = useModal();

    return <>
    <div onClick={() => setVisible(true)}>
      <Card css={{ p: "$6", mw: "30vw" , border:"2px solid black",}} isHoverable={true} >
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
    <Card.Body css={{ py: "$2" , fontSize:"20px"}}>
      <Text>
        {discription}
      </Text>
    </Card.Body>
  </Card>
  </div>
  <ModalBox setVisible={setVisible} bindings={bindings} title={title}/>
    </>
      
    
}


 function ModalBox({setVisible,bindings,title}:any) {
  return (
   
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
        <Modal.Body>
          <Text id="modal-description">
           
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto color="error" onPress={() => setVisible(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  );
}