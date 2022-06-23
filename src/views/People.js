import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

const People = () => {

    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getCharacters();
    }, [])

    return (
        <>
            <h1>People</h1>
            {
                store.characters.map((character, index) => {
                    <h1 key={index}> {character.name }</h1>
                })
            }
        </>    
    )
}

export default People;