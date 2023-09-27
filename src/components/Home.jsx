// eslint-disable-next-line no-unused-vars
import { useState } from "react";


function Home() {
  // Importiere React und useState aus den React-Bibliotheken

  const sprueche = [
    // Array mit Sprüchen
    "The right man in the wrong place can make all the difference in the world.",
    "Stand in the ashes of a trillion dead souls, and asks the ghosts if honor matters. The silence is your answer.",
    "Bring me a bucket, and I'll show you a bucket!",
    "Where’s Everyone Going? Bingo? – Leon Kennedy",
    "Snake? SNAAAAAAAKE!!! - Various",
    "All We Had To Do, Was Follow The Damn Train, CJ!",
    "Sir. Finishing This Fight.",
    "",
  ];

  function randomSpruch() {
    let randomSatz = Math.floor(Math.random() * sprueche.length);
    return sprueche[randomSatz];

    
  }

  const [randomSatz, setRandomSatz] = useState(randomSpruch()); 

  // Funktion, die beim Klicken auf den "Log-In" Button ausgeführt wird
  function handleClick() {
    setRandomSatz(randomSpruch());
    // Aktualisiere den zufälligen Satz im Zustand
  }

  return (
    <>
      <div className="rndmSizeText">{randomSatz}</div>
      {/* Zeige den zufälligen Satz aus dem Zustand an */}
      <button onClick={handleClick}>Click</button>
    </>
  );
}
export default Home;

