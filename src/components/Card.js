import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"


export default function Card(props){
    console.log(props.item.img)
    return (
        
        <div className="card">


                <img src={`../${props.item.img}`} alt="location"/>

                <section>
                    <div className="location-stats">
                        <ul>
                            <li><FontAwesomeIcon className="dot" icon={faLocationDot}></FontAwesomeIcon> {props.item.country}</li>
                            <li><a href="#">View on Google Maps</a></li>
                        </ul>
                    </div>
                    <div className="loc">{props.item.location}</div>
                    <span className="date">{props.item.dates}</span>
                    <p>{props.item.description}</p>
                </section>

        </div>

    )
}