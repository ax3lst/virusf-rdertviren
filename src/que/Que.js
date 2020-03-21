export default class Que {
    recommendations = []
    
    /**
    constructor(pos) {
        for(var i = 0; i < CountRecommendations; i++)
            this.recommendations.push(false);

        this.currentQuestion = pos || 0
    }
     */

    next = [0]

    liste = [
        {
            text: "Wer bist du", 
            optional: "optionale Beschreibung",
            type: 0,
            antworten: [
                {id: 0, text: "User", empfehlung: [], optional: "optionale beschreibung", next: [1]},
                {id: 1, text: "Manager", empfehlung: [], optional: "optionale beschreibung", next: []},
                {id: 2, text: "Admin", empfehlung: [], optional: "optionale beschreibung", next: []}
            ]
        },
        {
            text: "Hey sysadmin", 
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

    setAnswers = (answers) => {
        var currentAnswers = this.liste[this.current].antworten

        //sanity check
        for (var i = 0; i < answers.length; i++) {
            if (answers[i] > currentAnswers.length)
                return

            if (currentAnswers[answers[i]].next.length !== 0) {
                this.next.push(currentAnswers[answers[i]].next)
            }
        }
    }
}
