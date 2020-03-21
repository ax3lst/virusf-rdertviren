import React from 'react'

import '../styles/Awnser.css'

export default function Awnsers(props) {

    var values = []

    const checked = (event, idx) => {
        if (props.type === 0) {
            // @Todo: check if element is unchecked or not
            values.push(idx)
        } else {
            values = [idx]
        }
    }

    const send = (event) => {
        if (values.length !== 0)
            props.setAnswer(values)
    }

    return (
        <div>
            {props.awnsers.map((awnser, idx) => {
                

                if (props.type === 0) {
                    return (
                        <label key={idx} className="container-checkbox"> {awnser.text}
                            <input type="checkbox" onChange={event =>checked(event, idx)}></input>
                            <span className="checkmark-checkbox"></span> 
                        </label>
                    )
                } else {
                    return (
                        <label key={idx} className="container-radio"> {awnser.text}
                            <input type="radio" name="radio" onChange={e => checked(e, idx)}></input>
                            <span className="checkmark-radio"></span> 
                        </label>
                    )
                }
                
            })}

            <button onClick={e => send(e)}>Weiter</button>
        </div>
    )
}
