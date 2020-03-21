import React, { Component } from 'react'
import Que from '../que/Que'
import Awnsers from './Awnsers'
import '../styles/Questionaire.css'

export default class Questionaire extends Component {
    state = {
        started: true
    }

    getAwnsers = () => {
        return [
            {text: "User", empfehlung: [], optional: "optionale beschreibung", next: [1]},
            {text: "Manager", empfehlung: [], optional: "optionale beschreibung", next: [2]},
            {text: "Admin", empfehlung: [], optional: "optionale beschreibung", next: [3]},
        ]
    }
    render() {
        if (this.state.started) {
            return (
                <div className="question">
                    <h2 className="title">Zum Start: <i>Welche Rolle haben Sie?</i></h2>
                    <div className="question-start">
                        <div>
                            <img src={process.env.PUBLIC_URL+'/shareholder/image2.jpg'} alt=""/>
                            <button>User:in</button>
                        </div>
                        <div>
                            <img src={process.env.PUBLIC_URL+'/shareholder/image0.jpg'} alt=""/>
                            <button>Manager:in</button>
                        </div>
                        <div>
                            <img src={process.env.PUBLIC_URL+'/shareholder/image1.jpg'} alt=""/>
                            <button>Administrator:in</button>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div className="question">
                <h2 className="title">Wie helfe ich mir selbst?</h2>
                <div className="questions">
                    <Awnsers awnsers={this.getAwnsers()} type="1" />
                </div>
            </div>
        )
        
    }
}
