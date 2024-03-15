import LuckyN from './LuckyN'
import Dice from './Dice'
// import './App.css'
import {sum} from "./utils";


function lessThan4(dice){
  return sum(dice)<4;
}

function allsameVal(dice){
   return dice.every(v=>v===dice[0])
}


function App() {

  return (
    <>
    <LuckyN winCheck={lessThan4} title ="Roll less than 4 🍀" />
    <LuckyN winCheck={allsameVal} title ="Roll the same number 🍾"/>

    {/* <LuckyN numDice={3} goal={11}/> */}
    {/* <Dice dice={[3,6,1,6,]}/>
  <Dice dice={[3,6,1,6,]} color="green"/> */}

    </>
  )
}

export default App
