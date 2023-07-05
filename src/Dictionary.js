import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";


export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
 
  function search(event) {
    event.preventDefault();
    
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
     <section>
      <h2 className="mb-4 text-center">What word do you want to look up?</h2>
      <form className="text-center" onSubmit={search}>
      <input 
      className="text-center text-muted" 
      type="search" 
      onChange={handleKeywordChange} 
      placeholder="Type a word here.."
      />
      </form>
      <div className="hint mt-2 text-muted">
     <em> Suggested words:</em> sunset, wine, plant...
      </div>
      </section>
      <Results results={results} />
  </div>
  );
}

