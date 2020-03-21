export default class Que {
    CountRecommandations = 15;
    Recommendations = new boolean[CountRecommendations];
    for(var i in Recommandations) i = false;

    liste = [
        {
            text: "Wer bist du", 
            optional: "optionale Beschreibung",
            type: 0,
            show: true,
            next: 1,
            antworten: [
                {id: 0, text: "User", empfehlung: [], optional: "optionale beschreibung", next: [1]},
                {id: 1, text: "Manager", empfehlung: [], optional: "optionale beschreibung", next: [2]},
                {id: 2, text: "Admin", empfehlung: [], optional: "optionale beschreibung", next: [3]}
            ]
        },
        {
            text: "Hey sysadmin", 
            optional: "optionale Beschreibung",
            type: 1,
            show: false,
            next: 4,
            antworten: [
                {id: 0, text: "User", empfehlung: [], optional: "optionale beschreibung", next: [4]},
                {id: 1, text: "Manager", empfehlung: [], optional: "optionale beschreibung", next: [4]},
                {id: 2, text: "Admin", empfehlung: [], optional: "optionale beschreibung", next: [4]}
            ]
        }
    ]
    
    currentQuestion = 0;

    constructor(pos) {
        this.currentQuestion = pos
    }

    getQuestion = () => {
        this.current++;
        while(this.liste[this.current] && !this.liste[this.current].show) {
          this.current++;
        }
        return this.liste[this.current]
    }

    addQuestions = (quest) => {
        for(var i in quest) { 
            this.liste[i].show = true;
        }
    }

    addRecommendations = (recomm) => {
        for(var i in recomm) {
            this.Recommendation[i] = true;
        }
    }

    setAnswers = (answers) => {
        if !(answers) {return}
        curQuestion = this.liste[currentQuestion]
        for (var i in answers) { 
            additionalQuestions = curQuestion.antworten[i].next;
            addQuestions(additionalQuestions);

            newRecommendations = curQuestion.antworten[i].empfehlung;
            addRecommendations(newRecommendations);
        }
        
        this.current = this.liste[this.current].antworten[index].next
    }
}
