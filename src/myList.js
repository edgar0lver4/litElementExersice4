import {LitElement,html,css} from 'lit-element';
class MyList extends LitElement { 

    constructor(){
        super();
    }
    static get styles(){
        return css`
            .h1{
                font-size:2vw;
                font-family: 'Kiwi Maru', serif;
                color:#0053be;
            }
            .ul > li{
                color:#0027ad;
                font-family: 'Poppins', sans-serif;
            }
            .ul > li:nth-child(2n){
                color:#fff;
                font-family: 'Poppins', sans-serif;
                background:#AFAFAF;
            }
        `;
    }
    static get properties(){
        return{
            title:{type:String},
            list:{type:Array},
            searching:{type:String}
        }
    }
    render(){
        return html`<div>
                        <h1 class="h1">${this.title}</h1>
                        <ul class="ul">
                        ${this.list.length === 0 && this.searching === 'false' ? 'Empty list' : (this.searching === 'true' && this.list.length === 0 ? 'Cargando datos' : this.list.map(el=>html`<li>${el.title}</li>`)) }
                        </ul>
                    </div>`;
    }
}
customElements.define('my-list',MyList);