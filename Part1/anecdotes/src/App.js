import React, {useState} from 'react';

function App() {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0));


  const generateAnectode = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const addVote = () => {
    setVote([
      ...vote.slice(0, selected),
      vote[selected] + 1,
      ...vote.slice(selected + 1)
    ])
  }

  const mostVoted = vote.indexOf(Math.max(...vote));

  console.log(vote)
  return (
   <>
   <h3>Anecdote of the day</h3>
    <p>{anecdotes[selected]}</p>
    <p>Votes: {vote[selected]}</p>
    <button onClick={addVote}>Vote</button>
    <button onClick={generateAnectode}>Generate anecdote</button>
    <h3>Anecdote with most votes</h3>
    <p>{anecdotes[mostVoted]}</p>
   </>
  );
}

export default App;
