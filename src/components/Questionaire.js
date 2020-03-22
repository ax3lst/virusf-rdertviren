import React, { Component } from 'react'
import Que from '../que/Que'
import Awnsers from './Awnsers'
import '../styles/Questionaire.css'


export default class Questionaire extends Component {
    state = {
        started: true,
        stakeholder: 'Test',
        currentQuestion: {}
    }

    q = new Que(0)

    stakeholderClicked = (stakeholder) => {
        this.setState({stakeholder: stakeholder, started: false})
        this.props.setHeader(false)

        if (this.state.stakeholder.startsWith("Us"))
            this.q.start(0)
        if (this.state.stakeholder.startsWith("Ma"))
            this.q.start(1)
        if (this.state.stakeholder.startsWith("Ad"))
            this.q.start(2)
            
        this.getQuestion()
    }

    setAnswer = (keys) => {
        this.q.setAnswers(keys)
        this.q.setNext()
        this.getQuestion()
    }

    getQuestion = () => {
        var test = this.q.getQuestion()
        this.setState({currentQuestion: test})
    }
    render() {
        if (this.state.started) {
            return (
                <div className="question">
                    <h2 className="title"><i>Welche Rolle haben Sie?</i></h2>
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
                <h2 className="title">{this.state.currentQuestion.text}</h2>
                <div>
                    {this.state.currentQuestion.optional}
                </div>
                <div className="questions">
                    <Awnsers awnsers={this.state.currentQuestion.antworten} type={this.state.currentQuestion.type} setAnswer={this.setAnswer} />
                </div>

            </div>
        )
        
    }
}
