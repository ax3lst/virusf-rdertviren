import React, { Component } from 'react'
import Que from '../que/Que'
import Awnsers from './Awnsers'
import '../styles/Questionaire.css'

export default class Questionaire extends Component {
    state = {
        started: true,
        stakeholder: 'Test',
    }

    stakeholderClicked = (stakeholder) => {
        console.log(stakeholder)
        this.setState({stakeholder: stakeholder, started: false})
        this.props.setHeader(false);
    }

    getAwnsers = () => {
        return [
            {text: "Gute Laune", empfehlung: [], optional: "optionale beschreibung", next: [1]},
            {text: "Singen", empfehlung: [], optional: "optionale beschreibung", next: [2]},
            {text: "Tanzen", empfehlung: [], optional: "optionale beschreibung", next: [3]},
        ]
    }
    render() {
        if (this.state.started) {
            return (
                <div className="question">
                    <h2 className="title"><i>Welche Rolle haben Sie?</i> 
                    </h2>
                    <div className="question-start">
                        <div>
                            <img src={process.env.PUBLIC_URL+'/shareholder/image2.jpg'} alt=""/>
                            <button onClick={(e) => this.stakeholderClicked('User:in')}>User:in</button>
                        </div>
                        <div>
                            <img src={process.env.PUBLIC_URL+'/shareholder/image0.jpg'} alt=""/>
                            <button onClick={(e) => this.stakeholderClicked('Manager:in')}>Manager:in</button>
                        </div>
                        <div>
                            <img src={process.env.PUBLIC_URL+'/shareholder/image1.jpg'} alt=""/>
                            <button onClick={(e) => this.stakeholderClicked('Administrator:in')}>Administrator:in</button>
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
