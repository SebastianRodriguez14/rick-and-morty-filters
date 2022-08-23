import { Suspense, useEffect, useState } from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import { FilterAtom } from "../../recoil/atom/filter.atom";
import { CharactersSelector } from "../../recoil/selector/characters.selector";
import "./filter-characters.css"

export const FilterCharacters = () => {

    const [filtro, setFiltro] = useRecoilState(FilterAtom);
    const [namesCharacters, setNameCharacters] = useState([]);

    const filterCharacters = (e) => {
        let value  = e.target.value;
        if (e.target.nodeName === "SELECT"){
            value = value === "Select" ? null : value.toLowerCase()
        }

        setFiltro({...filtro, [e.target.id] : value});
    }

    return <div className="filter-characters">
        <div className="filter-characters-item">
            <span>Status</span>
            <select id="status" onChange={e => filterCharacters(e)} >
                <option>Select</option>
                <option>Alive</option>
                <option>Dead</option>
                <option>Unknown</option>
            </select>
        </div>
        <div className="filter-characters-item">
            <span>Species</span>
            <select id="species" onChange={e => filterCharacters(e)} >
                <option>Select</option>
                <option>Human</option>
                <option>Alien</option>
            </select>
        </div>
        <div className="filter-characters-item">
            <span>Gender</span>
            <select id="gender" onChange={e => filterCharacters(e)} >
                <option>Select</option>
                <option>Female</option>
                <option>Male</option>
                <option>Genderless</option>
                <option>Unknown</option>
            </select> 
        </div>
        <div className="filter-characters-item">
            <span>Name</span>
            <input id="name" placeholder="name" onChange={e => filterCharacters(e)}/>
        </div>

    </div>
}