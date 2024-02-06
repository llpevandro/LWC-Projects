import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selectedAnswers={}; // guardar as respostas
    correctAnswers = 0; // mostrar o resultado
    isSubmitted = false // para mostrar as respostas corretas em uma janela para o usuário

    // used for disabling the submit button
    get allNotSelected(){
        // some o botão as perguntas não foram respondidas
        // Object.keys(this.myQuestions.length) = [question 1, question 2, question 3]
        // console.log("myQuestions LENGTH: ", this.myQuestions.length);
        // console.log("OBJECT KEYS LENGTH myQuestions: ", Object.keys(this.selectedAnswers).length);
        return !(Object.keys(this.selectedAnswers).length === this.myQuestions.length) 
    }

    // for applying dynamic styling to the result
    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers ? 'slds-text-color_success':'slds-text-color_error'}`
    }

    myQuestions=[
        {
            id:"Question 1",
            question:"Which one of the following is not a template loop",
            answer:{
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer:"c"
        },
        {
            id:"Question 2",
            question:"Which of the file is invalid in LWC component folder",
            answer:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
        },
        {
            id:"Question 3",
            question:"Which of the following is not a directive",
            answer:{
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            correctAnswer:"c"
        }
    ]

    
    // changeHandler ge'ts called on every click on the options
    changeHandler(event){
        console.log("name is: ", event.target.name) // question 1, 2 ou 3
        console.log("value is: ", event.target.value) // a, b ou c
        // const name = event.target.name
        // const value = event.target.value
        // OU

        const {name, value} = event.target
        this.selectedAnswers={...this.selectedAnswers, [name]:value}
    }

    // form submit answers
    submitHandler(event){
        // calcular o número de respostas corretas:
        // como o submit está dentro do formulário, o formulário sempre da refresh na página
        // para evitar o comportamento:
        event.preventDefault()
        // this.selectedAnswers = {"Question 1"> "a", "Question 2"> "b", "Question 3"> "b"}
        let correct = this.myQuestions.filter(item => this.selectedAnswers[item.id] == item.correctAnswer)
        // filter sempre retorna um array, então, armazenamos a quantidade de acertos
        this.correctAnswers = correct.length
        console.log("this.correctAnswers ==> ", this.correctAnswers)
        this.isSubmitted = true

    }

    // form reset handler 
    resetHandler(){
        this.selectedAnswers={};
        console.log('zera respostas: ', this.selectedAnswers)
        this.correctAnswers=0
        this.isSubmitted=false;
    }
}