import { useState } from "react";

function Joke() {
  const [joke, setJoke] = useState({});
  const roflList = [];
  const mehList = [];

  function getJoke() {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single").then((response) => response.json()).then((result) => {setJoke(result);});
  }

  function upVote() {
    roflList.push(joke);
    getJoke();
    console.log(roflList);
  }

  function downVote() {
    mehList.push(joke);
    getJoke();
    console.log(mehList);
  }

  return (
    <>
      <h4>{joke.joke}</h4>
      <button onClick={upVote}>🤣</button>
      <button onClick={downVote}>😐</button>
    </>
  );
}

export default Joke;
