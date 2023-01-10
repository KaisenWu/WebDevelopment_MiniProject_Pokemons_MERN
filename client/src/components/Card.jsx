import React from "react";
function Card(props){
    return(
        <div className="col-3">
                <div className="card">
                  <img
                    src={props.img}
                    alt={props.name}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h3 className="card-title">{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</h3>
                    <p>Abilities: {props.abilities.charAt(0).toUpperCase() + props.abilities.slice(1)}</p>
                    <button onClick={()=>{props.onDelete(props.id)}}>Delete</button>
                  </div>
                </div>
        </div>
    )
}
export default Card;