import React, {useState} from "react";
function Search(props){
    const[text,setText]=useState("")
    return(
        <div>
            <input type="text" onChange={(e)=>{setText(e.target.value)}} />
            <button onClick={()=>{props.onSetKey(text)}}>Search Card</button>
        </div>
    )
}
export default Search;