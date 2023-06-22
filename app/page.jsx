import Image from 'next/image'
import Header from "./components/Header";
import AlwaysSrc from "../public/i-always.jpg";

function Home() {
  return (
    <div className="">
      <Image src={AlwaysSrc} />
    </div>
  )
}

export default Home;
