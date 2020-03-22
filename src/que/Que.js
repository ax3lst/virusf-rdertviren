var a = require('./fragen')

export default class Que {
    recommendations = ""
    
    
    constructor(pos, liste) {
        this.liste = a.liste

        this.currentQuestion = pos || 0
    }

    next = [0]

    current = -1;

    start = (idx) => {
        if (idx === 0) {
            this.liste = a.ulist
        }
        if (idx === 1) {
            this.liste = a.mlist
        }
        if (idx === 2) {
            this.liste = a.alist
        }
    }

    getRecommendations = () => {
        return this.recommendations    
    }

    setNext = () => {
        if (this.next.length === 0) {
            return
        }
        this.current = this.next.pop()
    }

    getQuestion = () => {
        if (this.current < 0) {
            this.setNext()
        }
        return this.liste[this.current]
    }
    
    _setRecommendations = (rec) => {
        if (!rec) return

        for(var i = 0; i < rec.length; i++) {
            this.recommendations[rec[i]] = true
        }
    }

    setAnswers = (answers) => {
        var handle = this.liste[this.current].handle
        var currentAnswers = this.liste[this.current].antworten

        //sanity check
        for (var i = 0; i < answers.length; i++) {
            if (answers[i] > currentAnswers.length)
                return

            if (currentAnswers[answers[i]].next.length !== 0) {
                this.next.push(currentAnswers[answers[i]].next)
            }

        }
        if (handle.filter(value => answers.includes(value)).length !== 0) {
            recommendations += this.liste[this.current].handlung

        }
    }
}
