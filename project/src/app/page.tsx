import {Clock} from "@/components/Clock"
import {Greeting} from "@/components/Greeting"

const Home = () => {
  return (
    <div className=" m-10 p-10 flex flex-col items-center text-4xl font-bold">

      <Greeting></Greeting>
      <Clock></Clock>
    </div>
  );    
}


export default Home;