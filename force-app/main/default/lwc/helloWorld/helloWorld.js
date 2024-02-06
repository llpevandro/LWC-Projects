import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    //local proprieties
    fullName = "Evandro Lopes"
    title = "Desenvolvedor"

    /*  */
    //event is a feeback from HTML to JS, and is a object by default
    changeHandler(event) {
        this.title = event.target.value // pega o valor digitado pelo usuário
    }

    /* @track binding exemple */ 
    @track address={
        city:"Francisco Beltrão", //key : value
        state:"Paraná", //key : value
        country:"Brasil" //key : value
    }
    
    trackHandler(event){
        this.address.city = event.target.value
    }

    /* getter exemple */
    users =["Evandro", "Mary", "John"];
    num1 = 10
    num2 = 20

    get firstUser() {
        return this.users[0].toUpperCase()
    }
    get multiply() {
        return this.num1 * this.num2
    }


}