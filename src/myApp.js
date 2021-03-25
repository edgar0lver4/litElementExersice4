import {LitElement,html,css} from 'lit-element';
import './hellowWord';

class MyApp extends LitElement { 

    static get properties(){
        return{
            list:{type:Array},
            chargedList:{type:Array},
            searching:{type:String}
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
        this.searching = false;
    }
    render(){
        return html`<div>TITLE</div>
                    <button @click=${this._createList} class="button button_create">Create list</button>
                    <button @click=${this._removeList} class="button button_delete">Remove list</button>
                    <hellow-word list=${JSON.stringify(this.list)} searching=${this.searching}></hellow-word>
        `;
    }
    _createList(){
        let url = 'https://api.themoviedb.org/3/movie/popular?api_key=4ff32b3a95fabacb861ecfa8aa1dfcba';
        this.searching = true;
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            this.list = data.results;
            this.searching = false;
        })
        .catch(e=>{
            console.log(e);
        })
    }
    _removeList(){
        this.list = [];
        this.searching = false;
    }
}
customElements.define('my-app',MyApp);