import React from 'react'

import '../styles/Awnser.css'

export default function Awnsers(props) {
    return (
        <div>
            {props.awnsers.map((awnser, idx) => {
                

                if (props.type === "0") {
                    return (
                        <label key={idx} className="container-checkbox"> {awnser.text}
                            <input type="checkbox"></input>
                            <span className="checkmark-checkbox"></span> 
                        </label>
                    )
                } else {
                    return (
                        <label key={idx} className="container-radio"> {awnser.text}
                            <input type="radio" name="radio"></input>
                            <span className="checkmark-radio"></span> 
                        </label>
                    )
                }
                
            })}
        </div>
    )
}
