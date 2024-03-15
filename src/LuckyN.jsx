// props: numDice,goal
// state , keep track of actual dice,arr of length num dice
//  dice[n,...]
//  event : roll
import { useState } from 'react';
import {getRolls} from "./utils";
import Dice from './Dice';
import Button from './Button';

function LuckyN({title="Dice Game",numDice=2,winCheck}) {

const[dice,setDice] = useState(getRolls(numDice));
const isWinner = winCheck(dice);
const roll =()=>{
    setDice(getRolls(numDice));
}

return (
<main className='luckyN'>
    <h1>{title}{isWinner && "You Win !"}</h1>
<Dice dice={dice}/>
{/* <button  onClick={roll}>Re-Roll Dice</button> */}
<Button clickFunc={roll} label='Re-Roll'/>
</main>
)
}

export default LuckyN

// how data flows
// a parent component define a func
// the fun is passed as a prop to child component
// the child comp invokes the prop func
// the parent func is called, usually settin new state
//the parent comp is re-rendring along with its childern
