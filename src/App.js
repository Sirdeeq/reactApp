import Joke from './Joke';
import jokeData from './jokesData';

function App() {

  const jokecomponents = jokeData.map(joke  => {
    return(
      <Joke key={joke.id} Question={joke.Question}  punchLine={joke.punchLine} />
  )})
  

  return (
    <div className="App">
      {jokecomponents}
    </div>
  );
}

export default App;
