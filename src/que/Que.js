export default class Que {
    liste = [
        {
            text: "Wer bist du", 
            optional: "optionale Beschreibung",
            next: 1,
            antworten: [
                {text: "User", empfehlung: [], optional: "optionale beschreibung", next: [1]},
                {text: "Manager", empfehlung: [], optional: "optionale beschreibung", next: [2]},
                {text: "Admin", empfehlung: [], optional: "optionale beschreibung", next: [3]},
            ]
        },
        {
            text: "Hey sysadmin", 
            optional: "optionale Beschreibung",
            next: 4,
            antworten: [
                {text: "User", empfehlung: [], optional: "optionale beschreibung", next: [4]},
                {text: "Manager", empfehlung: [], optional: "optionale beschreibung", next: [4]},
                {text: "Admin", empfehlung: [], optional: "optionale beschreibung", next: [4]},
            ]
        }
    ]
    
    current = [0]

    constructor(pos, data) {
        this.currentQuestion = pos
        this.buildDataStructure(data)
    }

    getQuestion = () => {
        var q = this.liste[this.current]

        return {
            text: q.text,
            optional: q.optional
        }
    }

    getAwnsers = () => {
        return this.liste[this.current].antworten
    }

    setAwnser = (index) => {
        this.current = this.liste[this.current].antworten[index].next
    }
}