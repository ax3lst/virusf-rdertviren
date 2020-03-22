var a = require('./fragen')

export default class Que {
    recommendations = new Array(15)
    
    constructor(pos, liste) {
        for(var i in this.recommendations)
            i = false;

        if (liste === "user") {
            this.liste = a.ulist
        }
        if (liste === "manager") {
            this.liste = a.mlist
        }
        if (liste === "admin") {
            this.liste = a.alist
        }
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
        var currentAnswers = this.liste[this.current].antworten

        //sanity check
        for (var i = 0; i < answers.length; i++) {
            if (answers[i] > currentAnswers.length)
                return

            // Falls es 
            if (currentAnswers[answers[i]].next.length !== 0) {
                this.next.push(currentAnswers[answers[i]].next)
            }

            this._setRecommendations(currentAnswers[answers[i]].empfehlung) 
        }
    }
}
