import React from "react";

function Card(props){
    return(
        <div>
         <h1> This is me</h1>
         <div style={{width:"250px",height:"250px",backgroundColor:"skyblue",border:"1px solid green",borderRadius:"5px"}}>
           <img src={props.productImage} alt=""/>
          <p>{props.productName}</p>
          <p>{props.productPrice}</p>
         </div>

        </div>
    ) 
}

export default Card;