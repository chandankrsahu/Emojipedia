import React from "react";
import Term from "./Term";
import Emojies from "../emojipedia";
import emojipedia from "../emojipedia";

function CreateTerm(term){
  return (
    <Term 
    key={term.id}
     emoji= {term.emoji}
     name= {term.name}
     meaning ={term.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
      
      {Emojies.map(CreateTerm)}
      
      </dl>
    </div>
  );
}

export default App;
