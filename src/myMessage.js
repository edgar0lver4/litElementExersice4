import {LitElement,html} from 'lit-element';
class MyMessage extends LitElement { 

    constructor(){
        super();
    }
    static get properties(){
        return{
            message:{type:String}
        }
    }
    render(){
        return html`<div>${this.message}</div>`;
    }
}
customElements.define('my-message',MyMessage);