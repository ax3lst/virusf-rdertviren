var a = require('./fragen')

export default class Que {
    recommendations = []
    
    
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

    setNext = () => {
        if (this.next.length === 0) {
            return false
        }
        this.current = this.next.pop()

        return true
    }

    getQuestion = () => {
        if (this.current < 0) {
            this.setNext()
        }
        return this.liste[this.current]
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
            var res = {
                    empfehlung: this.liste[this.current].antworten[2].empfehlung, //@Todo: richtig machen
                    text: this.liste[this.current].text,
                    optional: this.liste[this.current].optional,
                    handlung: this.liste[this.current].handlung
            }
            this.recommendations.push(res)
        }
    }

    getRecommendations() {
        return this.recommendations
    }
}
