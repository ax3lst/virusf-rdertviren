import React from 'react'

import '../styles/Awnser.css'

export default function Awnsers(props) {

    var values = []

    const checked = (event, idx) => {
        if (props.type === 0) {
            var exists = values.includes(idx)
            if (exists) {
                values = values.splice(idx, 1)
            } else {
                values.push(idx)
            }
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
                        <div className="wrapper">
                            <label key={idx} className="container-checkbox"> {awnser.text}
                                <input type="checkbox" onChange={event =>checked(event, idx)}></input>
                                <span className="checkmark-checkbox"></span> 
                            </label>
                        </div>
                    )
                } else {
                    return (
                        <div className="wrapper">
                            <label key={idx} className="container-radio"> {awnser.text} <br />
                                <input type="radio" name="radio" onChange={e => checked(e, idx)}></input>
                                <span className="checkmark-radio"></span>
                            </label>
                        </div>
                    )
                }
            })}
            <div class="wrapper">
                <button onClick={e => send(e)} className="further">Weiter</button>
            </div>
        </div>
    )
}
