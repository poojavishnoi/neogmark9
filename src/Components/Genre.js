import React, {useState} from "react";
import "..//App.css";

function Genre() {

  const bookData = {
    Action: [
      {
        "name": "The Mark of Zorro",
        "author": "Johnston McCulley",
        "rating": "4/5"
      },
      {
        "name": "Congo",
        "author": "Michael Crichton",
        "rating": "3.5/5"
      },
      {
        "name": "The Beach",
        "author": "Alex Garland",
        "rating": "4/5"
      }
    ],
    Adventure: [
      {
        "name": "The Cruel Sea",
        "author": "Nicholas Monsarrat",
        "rating": "4.1/5"
      },
      {
        "name": "Life of Pi",
        "author": "Yann Martel",
        "rating": "4/5"
      },
      {
        "name": "Dune",
        "author": " Frank Herbert",
        "rating": "4.2/5"
      }
    ],
    Comedy: [
      {
        "name": "wow, no thank you",
        "author": "Samantha Irby",
        "rating": "3.8/5"
      },
      {
        "name": "We Are Never Meeting in Real Life ",
        "author": "Samantha Irby",
        "rating": "4/5"
      },
      {
        "name": " Less",
        "author": " Andrew Sean Greer",
        "rating": "3.6/5"
      }
    ],
    Horror: [
      {
        "name": "House of Leaves",
        "author": "Mark Z. Danielewski",
        "rating": "4/5"
      },
      {
        "name": "Rosemary’s Baby",
        "author": "Ira Levin",
        "rating": "4/5"
      },
      {
        "name": "The Haunting of Hill House",
        "author": "Shirley Jackson",
        "rating": "3.8/5"
      }
    ]
  }

  const [genre, setGenre] = useState("Action");

  function genreHandler(genre){
    setGenre(genre);
  }



  return (
    <div>
      <h3>Select a genre</h3>
      {
        Object.keys(bookData).map((genre) => {
          return (
            <button onClick={() => genreHandler(genre)}>{genre}</button>
          )
        }
        )
      }
      <hr/>

      {
        bookData[genre].map((book) => {
          return (
            <div key={book.name}>
            <h2 id="title">{book.name}</h2>
            <span id="author">{book.author}</span>
            <span id="rating">{book.rating}</span>
            </div>
          )
        })
      }


    </div>
  );
}

export default Genre;
