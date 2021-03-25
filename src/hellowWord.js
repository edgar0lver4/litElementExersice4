import {LitElement,html} from 'lit-element';
import './myMessage';
import './myList';

class HellowWord extends LitElement { 
    static get properties(){
        return{
            message:{type:String},
            count:{type:Number},
            messageOutside:{type:String},
            list:{type:Array}
        }
    }
    constructor(){
        super();
        this.message = 'Hello Word';
        this.count = 0;
    }

    render(){
        return html`<div>
            <my-list title="Mis peliculas favoritas" list=${ JSON.stringify(this.list) }></my-list>
        </div>`;
    }
}
customElements.define('hellow-word',HellowWord);