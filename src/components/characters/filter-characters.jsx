import { useEffect, useState } from "react";
import {useRecoilState} from "recoil";
import { FilterAtom } from "../../recoil/atom/filter.atom";
import "./filter-characters.css"

export const FilterCharacters = () => {

    const [filtro, setFiltro] = useRecoilState(FilterAtom);

    const filterCharacters = (e) => {
        console.log(e.target.id);
        console.log(e.target.value);
        setFiltro({...filtro, [e.target.id] : e.target.value.toLowerCase()});
    }

    useEffect(() => {
        console.log(filtro);

    }, [filtro]);

    return <div className="filter-characters">
        <div className="filter-characters-item">
            <span>Status</span>
            <select id="status" onChange={e => filterCharacters(e)} >
                <option>Alive</option>
                <option>Dead</option>
                <option>Unknown</option>
            </select>
        </div>
        <div className="filter-characters-item">
            <span>Species</span>
            <select id="species" onChange={e => filterCharacters(e)} >
                <option>Human</option>
                <option>Alien</option>
            </select>
        </div>
        <div className="filter-characters-item">
            <span>Gender</span>
            <select id="gender" onChange={e => filterCharacters(e)} >
                <option>Female</option>
                <option>Male</option>
                <option>Genderless</option>
                <option>Unknown</option>
            </select>
        </div>
        <div className="filter-characters-item">
            <span>Name</span>
            <datalist>
                
            </datalist>
        </div>

    </div>
}