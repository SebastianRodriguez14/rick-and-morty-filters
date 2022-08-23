import { atom } from "recoil";


export const FilterAtom = atom({
    key: "filterAtom",
    default: {
        "status": null,
        "species": null,
        "gender": null,
        "name": null
    }
})