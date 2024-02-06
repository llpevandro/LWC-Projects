import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {

    // looping for:each
    carlist=["Ford", "Audi", "Honda", "Hyundai", "Mercedes", "BMW"]


    // iterator looping 
    ceoList=[
        {
            id:1,
            company:"Google",
            name:"Sundar Pichai"
        },
        {
            id:2,
            company:"Apple Inc.",
            name:"Tim Cook"
        },
        {
            id:3,
            company:"Facebook",
            name:"Mark Zuckerberg"
        },
        {
            id:4,
            company:"Amazon",
            name:"Jeff Bezos"
        },
        {
            id:5,
            company:"Salesforce",
            name:"Marc Benioff"
        },
        {
            id:6,
            company:"Microsoft",
            name:"Satya Nadella"
        }

    ]

}