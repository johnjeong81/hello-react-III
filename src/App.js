import { useState } from 'react';
import { supabase } from './supabaseClient';
import logo from './logo.svg';
import './App.css';

function Library() {
  const [myBooks, setMyBooks] = useState([]);
  async function getBooks() {
    let { data: books, error } = await supabase
      .from('books')
      .select('*')
    setMyBooks(books);
  }
  getBooks();
  return (
    <table class="booktable">
      {
        myBooks.map(b => (
          <tr class="booktr">
            <td class="booktd">{b.title}</td>
            <td class="booktd">{b.author}</td>
            <td class="booktd">{b.isbn}</td>
            <td class="booktd">{b.description}</td>
          </tr>
        ))
      }
    </table>
  );
}

const soccerteams = [
  { id: 1, name: 'Manchester United FC', UEFAleague: 'Europa League', isAvailable: true},
  { id: 2, name: 'Tottenham Hotspur FC', UEFAleague: 'Champions League', isAvailable: true},
  { id: 3, name: 'Everton FC', UEFAleague: 'None', isAvailable: false}
];

function SoccerClubs() {
  const listTeams = soccerteams.map(soc =>
    <li
      key={soc.id}
      style={{
        color: soc.isAvailable ? 'green' : 'red'
      }}
    >
      {soc.name}
    </li>
  );
  return (
    <ul>{listTeams}</ul>
  )
}

const movie = {
  title: 'Iron Man',
  director: 'John Favreau',
  released: '2008',
  image: 'https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg',
  width: '264',
  height: '378'
}

function Moviebox() {
  return (
    <div>
      <h2>{movie.title} ({movie.released})</h2>
      <p>{movie.director}</p>
      <img
        className="moviePoster"
        src={movie.image}
        alt={movie.title + ' cover'}
        style={{
          width: movie.width,
          height: movie.height
        }}
      />
    </div>
  )
}

function MagicButton() {
  const [count, setCount] = useState(0);
  function doMagic() {
    setCount(count + 1);
  }
  return (
    <div>
      <h3>This is a magic button.</h3>
      <button onClick={doMagic}>Magic {count}</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Library />
        <SoccerClubs />
        <Moviebox />
        <MagicButton />
      </header>
    </div>
  );
}

export default App;
