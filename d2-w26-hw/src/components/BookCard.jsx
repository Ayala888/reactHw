import React from "react"
import  "../index.css"

export default function BookCard(props) {
    return(
        <div className="book-card">
        <img src={props.img} alt="" />
        <h2>{props.name}</h2>
        <p>Автор:{props.avtor}</p>
        <p>Шыққан жылы:{props.zhyl}</p>
        </div>  
    )   
}