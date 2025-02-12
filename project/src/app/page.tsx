import {Clock} from "@/components/Clock"
import {Greeting} from "@/components/Greeting"

const Home = () => {
  return (
    <div className="w-screen h-screen p-10 flex flex-col items-center text-4xl font-bold text-white bg-gradient-to-r from-sky-950 to-gray-950">

      <Greeting></Greeting>
      <Clock></Clock>
    </div>
  );    
}


export default Home;