import React, { useState } from "react"; 
import Display from "./Display"

const DashBoard = () => {
    const [strikes, setStrike] = useState(0);
    const [balls, setBalls] = useState(0);

     function foul() {
        if(strikes < 2){
            setStrike(strikes + 1)
        }
    }

      function Hits() {
        setStrike(0)
        setBalls(0)
    }

    function strikesCount() {
        if(strikes < 3) {
            setStrike(strikes + 1)
        } else if(strikes === 3)
        setStrike(0); 
    }

    function hitsCount() {
        if(balls < 4) {
            setBalls(balls + 1)
        } else if(balls === 4)
        setBalls(0)
    }

   return(
       <div>
           <Display balls={balls} strikes={strikes} /> 
       <button onClick={() => strikesCount()}> Strikes </button>
       <button onClick={() => hitsCount()}> Balls </button>
       <button onClick={ () => foul()}> Fouls </button>
       <button onClick={() => Hits()}> Hits </button> 
       </div> 
   )

}

export default DashBoard; 
