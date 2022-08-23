import { selector } from "recoil";
import { urlBase } from "../../components/hooks/url";
import { CharactersAtom } from "../atom/characters.atom";
import { FilterAtom } from "../atom/filter.atom";

export const CharactersSelector = selector({
  key: "charactersSelector",
  get: async ({ get }) => {
    let characters = get(CharactersAtom);
    const filter = get(FilterAtom);

    let existFilter = false;
    for (const prop in filter) {
      if (filter[prop]) {
        existFilter = true;
        break;
      }
    }

    if (existFilter) {
      const filtersString = [];

      for (const prop in filter) {
        filter[prop] ? filtersString.push(`${prop}=${filter[prop]}`) : null;
      }

      characters = await fetch(`${urlBase}/character/?${filtersString.join("&")}`);
      console.log(characters);
      if (characters.status !== 200){
        characters = [];
      } else{
          characters = await characters.json();
          if (!characters){
            characters = [];
          } else {
            characters = characters.results;
          }
      }

    }
    return characters;
  },
});
