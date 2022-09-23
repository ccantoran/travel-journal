import React from "react"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons"



export default function Navbar(){

    return (
         <nav>
            <div><FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon></div>
            <h1>my travel journal</h1>
         </nav>
    )
   
}