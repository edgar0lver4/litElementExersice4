import {LitElement,html,css} from 'lit-element';
import './hellowWord';

class MyApp extends LitElement { 

    static get properties(){
        return{
            list:{type:Array},
            chargedList:{type:Array}
        }
    }
    static get styles(){
        return css`
            .button{
                padding:5px;
                border-radius:5px;
                letter-spacing:1px;
            }
            .button_delete{
                background:#f10b00;
                background:-webkit-linear-gradient(0deg, #f10b00 0%, #d20a00 100%);
                background:-moz-linear-gradient(0deg, #f10b00 0%, #d20a00 100%);
                color:#ffffff;
                border:1px solid #f10b00;
            }
            .button_delete:hover{
                color:#f10b00;
                background:#fff;
                cursor:pointer;
            }
            .button_create{
                background:#23d300;
                background:-webkit-linear-gradient(0deg, #23d300 0%, #20c000 100%);
                background:-moz-linear-gradient(0deg, #23d300 0%, #20c000 100%);
                color:#ffffff;
                border:1px solid #23d300;
            }
            .button_create:hover{
                color:#23d300;
                background:#fff;
                cursor:pointer;
            }
        `;
    }
    constructor(){
        super();
        this.list = [];
        this.chargedList = [
            {
                id:1, 
                name:'Your Name',
                year:2018
            },
            {
                id:2,
                name:"El gigante de hierro",
                year:1995
            },
            {
                id:3,
                name:"Contacto sangriento",
                year:1985
            },
            {
                id:4,
                name:"Spirit",
                year:2001
            },
            {
                id:5,
                name: "101 Dalmatas",
                year:1997
            }
        ];
    }
    render(){
        return html`
                    <button @click=${this._createList} class="button button_create">Create list</button>
                    <button @click=${this._removeList} class="button button_delete">Remove list</button>
                    <hellow-word list=${JSON.stringify(this.list)}></hellow-word>
        `;
    }
    _createList(){
        this.list = this.chargedList;
        console.log(list);
    }
    _removeList(){
        this.list = [];
    }
}
customElements.define('my-app',MyApp);