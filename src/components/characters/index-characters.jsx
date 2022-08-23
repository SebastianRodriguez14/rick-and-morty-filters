import { useEffect, useState } from "react"
import { urlBase } from "../hooks/url";
import { Character } from "./character";
import { useRecoilState, useRecoilValue } from "recoil"
import "./characters.css";
import { CharactersAtom } from "../../recoil/atom/characters.atom";
import { CharactersSelector } from "../../recoil/selector/characters.selector";

export const IndexCharacter = () => {

    const [characters, setCharacters] = useRecoilState(CharactersAtom);
    const charactersSelector = useRecoilValue(CharactersSelector);
    
    const getCharacters = async () => {
        
        const chr = await (await fetch(`${urlBase}/character`)).json();
        setCharacters(chr.results);
    }

    useEffect(() => {
        getCharacters();
    }, [])


    return <div className="container-characters">
        {
            charactersSelector.map(character => {
                return <Character key={character.id} character={character}/>
                
            })
        }
    </div>
}

