export default class Que {
    recommendations = new Array(15)
    
    constructor(pos) {
        for(var i in this.recommendations)
            i = false;

        this.currentQuestion = pos || 0
    }

    next = [0]

    liste = [
        {
            text: "Eine Frage, bl bla bla", 
            optional: "optionale Beschreibung",
            type: 0,
            antworten: [
                {id: 0, text: "Eine Antwort", empfehlung: [], optional: "optionale beschreibung", next: [1]},
                {id: 1, text: "Zweite Antwort", empfehlung: [], optional: "optionale beschreibung", next: []},
                {id: 2, text: "dritte Antwort", empfehlung: [], optional: "optionale beschreibung", next: []}
            ]
        },
        {
            text: "Hey hey", 
            optional: "optionale Beschreibung",
            type: 1,
            antworten: [
                {id: 0, text: "Axel", empfehlung: [], optional: "optionale beschreibung", next: []},
                {id: 1, text: "Rouven", empfehlung: [], optional: "optionale beschreibung", next: []},
                {id: 2, text: "Admin", empfehlung: [], optional: "optionale beschreibung", next: []}
            ]
        }
    ]

    current = -1;

    getRecommendations = () => {
        
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
            
            if (currentAnswers[answers[i]].empfehlung.legth !== 0) {

            }

            // Falls es 
            if (currentAnswers[answers[i]].next.length !== 0) {
                this.next.push(currentAnswers[answers[i]].next)
            }

            this._setRecommendations(currentAnswers[answers[i]]) 
        }
    }
}
