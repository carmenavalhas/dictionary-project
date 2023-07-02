import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }
 
  function search(event) {
    event.preventDefault();
    // documentation: https://dictionaryapi.dev/
    let key = "442601ab0f43da939c1bto9077411c63";
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
     <section>
      <form onSubmit={search}>
      <input type="search" onChange={handleKeywordChange} />
      </form>
      </section>
  </div>
  );
}

