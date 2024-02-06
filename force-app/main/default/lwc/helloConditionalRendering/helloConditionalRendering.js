import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {

    name
    
    isVisible = false
    handleClick(){
        this.isVisible = !this.isVisible
    }

    changeHandler(event){
        this.name = event.target.value
    }

    get helloMethod(){
        return this.name === 'hello' ? true : false
    }

    //false values
    // x = 0, false, "", undefined, null



    
}