import "./characters.css"

export const Character = ({character}) => {
    return <>
    <div className="container-character">
        <div className="character">
            <div className="container-character-image">
                <img className="character-image" src = {character.image}/>
            </div>
            <span className="character-name">{character.name}</span>
            <div className="character-description">
                <div className="character-description-item">
                    <label>Status:</label>
                    <label>{character.status}</label>
                </div>
                <div className="character-description-item">
                    <label>Species:</label>
                    <label>{character.species}</label>
                </div>
                <div className="character-description-item">
                    <label>Gender:</label>
                    <label>{character.gender}</label>
                </div>
                <div className="character-description-item">
                    <label>Location:</label>
                    <label>{character.location.name}</label>
                </div>
            </div>
        </div>
    </div>
    </>
}