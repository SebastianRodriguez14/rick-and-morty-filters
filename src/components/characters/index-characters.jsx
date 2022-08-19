import { useEffect, useState } from "react"
import { Character } from "./character";
import "./characters.css";

export const IndexCharacter = () => {

    const [characters, setCharacters] = useState([]);
    
    const getCharacters = async () => {
        
        const chr = await (await fetch("https://rickandmortyapi.com/api/character")).json();
        console.log(chr);
        setCharacters(chr.results);
    }

    useEffect(() => {
        getCharacters();
    }, [])


    return <>
    <div className="container-characters">
        {
            characters.map(character => {
                return <Character key={character.id} character={character}/>
                
            })
        }
    </div>
        
    </>
}

