import About from "@/Components/AboutMe/AboutMe";
import Bottom from "@/Components/Bottom/Bottom";
import NavBar from "@/Components/NavBar";
import Section1 from "@/Components/Section1/MainSection1";
import Section2 from "@/Components/Section2/Section2";
import Section3 from "@/Components/Section3/Section2";

export default function Home(){
  return <>
  <NavBar Logo="FitHub"/>
  <Section1 
  image={"url(\"https://img.freepik.com/premium-vector/fitness-trainer-concept-workout-gym-with-professional-athlete-healthy-active-lifestyle_566886-1843.jpg?w=2000\")"}
  title={"FitHub"}
  discription={"Unlock Your Potential. Embrace the Fit. Transform Your Life."}
  button={"FitHub"}
  Toref="#"
  />
  <Section2 features={[
    {
      title:"back",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZDkwGaxiPI79cWa-oXejLsD-IfH2NGgD0Bw&usqp=CAU",
      discription:"It consists of various structures including the spine, muscles, and connective tissues."
    },
    {
      title:"cardio",
      image:"https://img.freepik.com/premium-vector/concept-illustration-woman-running-jogging-exercise-cardio_270158-29.jpg?w=2000",
      discription:"Cardio refers to activities that elevate the heart rate and increase overall cardiovascular fitness."
    },
    {
      title:"chest",
      image:"https://www.shutterstock.com/image-vector/illustration-man-beautiful-muscles-260nw-1392706520.jpg",
      discription:"It houses important organs like the heart and lungs, vital for respiration. It is one of most important part for human."
    },
    {
      title:"neck",
      image:"https://img.freepik.com/premium-vector/woman-having-neck-shoulder-pain-illustration_619097-264.jpg",
      discription:"It contains the cervical spine, which consists of seven vertebrae that provide support and flexibility."
    },
    {
      title:"waist",
      image:"https://img.freepik.com/premium-vector/waist-vector-illustration-flat-style_362838-332.jpg",
      discription:"The waist is the narrowest part of the torso, located between the ribcage and the hips."
    },
    {
      title:"shoulders",
      image:"https://media.istockphoto.com/id/1354776364/vector/health-problem-disease-symptoms-and-unhealthy-body-sickness-concept-male-character-feeling.jpg?s=612x612&w=0&k=20&c=a5WRMmLmLxDjocnkuo5e-_xulES0CZcyyUHbVOO7WIU=",
      discription:"The shoulder provides a wide range of motion and is crucial for activities involving lifting, reaching, and throwing."
    }
  ]}/>
  <Section3 features={[
    {
      title:"band",
      image:"https://cdn2.vectorstock.com/i/1000x1000/99/01/sporty-woman-doing-exercises-with-resistance-band-vector-24639901.jpg",
    },
    {
      title:"barbell",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQobOOSK2UgN7QsaPoU0PyduszXyHNTlDvbfBVABK4IzaUpZOvfQF6TWe9mRTcrfB7jJpM&usqp=CAU",
    },
    {
      title:"cable",
      image:"https://static.vecteezy.com/system/resources/previews/006/417/696/original/woman-doing-cross-body-cable-rows-exercise-flat-illustration-isolated-on-white-background-free-vector.jpg",
    },
    {
      title:"rope",
      image:"https://img.freepik.com/premium-vector/male-character-engage-sport-activities-doing-exercises-fitness-workout-running-jumping-rope-healthy-lifestyle-leisure-cartoon-flat-vector-illustration-isolated-white-background_603301-345.jpg",
    },
    {
      title:"hammer",
      image:"https://www.shutterstock.com/image-vector/man-doing-dumbbell-bicep-hammer-260nw-2034319484.jpg",
     
    },
    {
      title:"roller",
      image:"https://www.shutterstock.com/image-vector/man-doing-abdominal-roller-exercise-260nw-1830759620.jpg",
     
    }
  ]}/>
  <About/>
  <Bottom/>
  </>
}