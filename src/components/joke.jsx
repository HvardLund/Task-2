import { useState, useEffect } from "react";

function Joke() {
  const [joke, setJoke] = useState({});
  const [roflList, setRoflList] = useState([]);
  const [mehList, setMehList] = useState([]);

  useEffect(() => {
    getJoke()
  },[]);

  function getJoke() {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single").then((response) => response.json()).then((result) => {setJoke(result);});
  }

  function upVote() {
    setRoflList(roflList => [...roflList, joke.joke])
    getJoke();
  }

  function downVote() {
    setMehList(mehList => [...mehList, joke.joke])
    getJoke();
  }

  return (
    <>
      <h4>{joke.joke}</h4>
      <button onClick={upVote}>🤣</button>
      <button onClick={downVote}>😐</button>
      {(roflList[0] !== undefined)?(
            <h4>{roflList}</h4>
      ):(<div>You haven't liked any jokes yet</div>)}
    </>
  );
}

export default Joke;
