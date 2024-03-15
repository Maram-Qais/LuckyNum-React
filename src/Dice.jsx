// no state, no events, will reneder die compnents[dice:[n,...]] b
// based on dice it gets
import Die from "./Die";
import "./Dice.css";


function Dice({dice ,color}) {
return (
<section className="Dice">
{dice.map((v,i)=>
<Die key={i} val ={v} color={color}/>)}
</section>
)
}

export default Dice