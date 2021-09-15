import React, {useState} from "react";
import "..//App.css";

function Genre() {

  const bookData = {
    Action: [
      {
        "name": "The Mark of Zorro",
        "author": "Johnston McCulley"
      },
      {
        "name": "Congo",
        "author": "Michael Crichton"
      },
      {
        "name": "The Beach",
        "author": "Alex Garland"
      }
    ],
    Adventure: [
      {
        "name": "The Cruel Sea",
        "author": "Nicholas Monsarrat"
      },
      {
        "name": "Life of Pi",
        "author": "Yann Martel"
      },
      {
        "name": "Dune",
        "author": " Frank Herbert"
      }
    ],
    Comedy: [
      {
        "name": "wow, no thank you",
        "author": "Samantha Irby"
      },
      {
        "name": "We Are Never Meeting in Real Life ",
        "author": "Samantha Irby"
      },
      {
        "name": " Less",
        "author": " Andrew Sean Greer"
      }
    ],
    Horror: [
      {
        "name": "House of Leaves",
        "author": "Mark Z. Danielewski"
      },
      {
        "name": "Rosemary’s Baby",
        "author": "Ira Levin"
      },
      {
        "name": "The Haunting of Hill House",
        "author": "Shirley Jackson"
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
            <div>
            <h2 id="title">{book.name}</h2>
            <span id="author">{book.author}</span>
            </div>
          )
        })
      }


    </div>
  );
}

export default Genre;
