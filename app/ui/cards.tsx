import Image from "next/image";
import { getCharacters } from "../lib/data";


export default async function CardsContainer() {
const characters = await getCharacters();
    return (
        <>
           {characters.map((character: any) => (
            <Card 
             key={character.id}
             name ={character.name} 
             image ={character.image} 
             status ={character.status} 
             species ={character.species} 
             type ={character.type} 
             origin ={character.origin} 
             location ={character.location} />
           ))}
           
        </>
    )
}

export function Card({
    name,
    image,
    status,
    species,
    type,
    origin,
    location,
  }: {
    name: string;
    image: string;
    status: string;
    species: string;
    type: string;
    origin: {
      name: string;
      url: string;
    };
    location: {
      name: string;
      url: string;
    };
  }) {

    return (
      <div className="flex flex-col items-center justify-start gap-2 border-gray-200 rounded-md p-4 w-80 bg-gray-100">
        
        <div className="w-full">
          <Image
            width={300}
            height={290}
            className="rounded-md w-full aspect-square object-cover"
            src={image}
            alt="Card"
          />
        </div>
  
        <div className="w-full overflow-hidden">
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="text-sm text-black-500 mb-2">{status} - {species}</p>

          <p className="text-sm text-gray-500">Origin:</p>
          <p>{origin.name}</p>
          <span className="text-sm text-gray-500">Last known location:</span>
          <p>{location.name}</p>
        </div>

        
  
      </div>
    );
  }
  
