// props : val:number , state none , events none

import "./Die.css";
function Die({val,color="slateblue"}) {
return (
<div className='Die' style={{backgroundColor:color}}>{val}</div>
)
}

export default Die