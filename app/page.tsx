import CardsContainer from "./ui/cards";
import Image from "next/image";
import heroImage from "./images/Rick_and_Morty.png";


export default function Home() {
  return (
    <main className="bg-[#F5F5F5] text-black">

      <div className="flex flex-col items-center justify-center bg-gray-200 h-100">
        <Image src={heroImage} alt="Rick and Morty" width={900} height={900} />
      </div>

      <div className="justify-center text-center">
        <h3 className="text-3xl font-bold pt-10 pl-5">Random Characters</h3>

        <div className="flex flex-wrap gap-4 justify-center pt-10 pb-10">
          <CardsContainer />
        </div>


      </div>

    </main>
      
  );
}
