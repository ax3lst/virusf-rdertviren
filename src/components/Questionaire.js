import React, { Component } from 'react'
import Que from '../que/Que'
import Awnsers from './Awnsers'
import Results from './Results'
import '../styles/Questionaire.css'

const q = new Que(0);

export default class Questionaire extends Component {
    state = {
        started: true,
        finished: false,
        stakeholder: 'Test',
        currentQuestion: {},    
    }

    q = new Que(0, "user")

    stakeholderClicked = (stakeholder) => {
        this.setState({stakeholder: stakeholder, started: false})
        this.props.setHeader(false)

        this.getQuestion()

        if (stakeholder.startsWith("Us")) {
            this.setAnswer([0])
        }

        if (stakeholder.startsWith("Ma")) {
            this.setAnswer([1])
        }

        if (stakeholder.startsWith("Ad")) {
            this.setAnswer([2])
        }
    }

    setAnswer = (keys) => {
        q.setAnswers(keys)
        if (!q.setNext()) {
            this.setState({finished: true})
        }
        this.getQuestion()
    }

    getQuestion = () => {
        this.setState({currentQuestion: q.getQuestion()})
    }

    getRecommendations = () => {
        return q.getRecommendations()
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

        if (this.state.finished) {
            return <Results data={this.getRecommendations()} />
        }

        return (
            <div className="question">
                <h2 className="title">{this.state.currentQuestion.text}</h2>
                {(this.state.currentQuestion.optional.length !== 0) &&
                    <div className="optional-q-desc">
                        {this.state.currentQuestion.optional}
                    </div>
                }
                <div className="questions">
                    <Awnsers awnsers={this.state.currentQuestion.antworten} type={this.state.currentQuestion.type} setAnswer={this.setAnswer} />
                </div>

            </div>
        )
    }
}
