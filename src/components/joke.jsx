import { useState } from "react"

function Joke(){
    const [joke, setJoke] = useState({});

    const getJoke = () => {
        fetch("https://v2.jokeapi.dev/joke/Any?type=single").then(
            response => response.json()).then(result => setJoke(result))
    }
    
    return(
        <div>
            <button onClick={getJoke()}>Click for joke</button>
            <h3>{joke.joke}</h3>
        </div>
    )
}

export default Joke