import React, {Component} from 'react'

import '../styles/Awnser.css'

export default class Awnsers extends Component {

    state = {
        values: []
    }

    checked = (event, idx) => {
        this.setState({values: [idx]})
    }

    send = (event) => {
        if (this.state.values.length !== 0)
            this.props.setAnswer(this.state.values)
    }

    render() {
        return (
            <div>
                {this.props.awnsers.map((awnser, idx) => {
                    if (this.state.type === 0) {
                        return (
                            <div className="wrapper">
                                <label key={idx} className="container-checkbox">{awnser.text}
                                    <input type="checkbox" onClick={event => this.checked(event, idx)}></input>
                                    <span className="checkmark-checkbox"></span> 
                                </label>
                            </div>
                        )
                    } else {
                        return (
                            <div className="wrapper">
                                <label key={idx} className="container-radio">{awnser.text} <br />
                                    <input type="radio" name="asdfsgasg" checked={this.state.values.includes(idx)} onChange={e => this.checked(e, idx)}></input>
                                    <span className="checkmark-radio"></span>
                                </label>
                                <span className="explanation" dangerouslySetInnerHTML={{__html: awnser.optional}} ></span>
                            </div>
                        )
                    }
                })}
                <div className="wrapper">
                    <button onClick={e => this.send(e)} className="further">Weiter</button>
                </div>
            </div>
        )
    }
    
}
