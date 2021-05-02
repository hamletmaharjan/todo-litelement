
import {html, LitElement} from '@polymer/lit-element';

class TodoItem extends LitElement{
    constructor() {
        super();
        console.log(this.todo);
        this.num = 0
    }

    static get properties() {
        return {
            todo: {
                type:Object
            },
            num: {
                type:Number
            }
        }
    }


    render() {
        
        return html`
            <style>
            .completed {
                text-decoration:line-through;
            }
            #delete-btn {
                background-color:red;
                color:white;
                border:none;
                margin-left:10px;
            }
            button:hover {
                cursor:pointer;
            }
            </style>
        
            <li class="todo-item">
                <input type="checkbox" ?checked="${this.todo.completed}"  @click=${(e)=>this.toggleTodo(e)}/>
                <label class="${this.todo.completed ? 'completed': ''}">${this.todo.title}</label>
                <button id="delete-btn" @click=${(e)=>{ this.dispatchEvent(new CustomEvent('delete', {detail:{id:this.todo.id}}));}}>&times;</button>
            </li>
        `;
    }

    toggleTodo(e){
        this.todo.completed = !this.todo.completed;
        this.num++;
        console.log(this.todo)
        // this.dispatchEvent(new CustomEvent('toggle', {detail:{id:this.todo.id}}));
    }

    

    

    //ovserve for change
    // static get observedAttributes() {
    //     return ['attribute-name'];
    // }

    //fires when attributes are changed
    // attributeChangedCallback() {

    // }

    // connectedCallback() {
    //     console.log('element added to the dom');
    // }

    // disconnectedCallback() {
    //     console.log('element removed from the dom');
    // }
}

window.customElements.define('todo-item', TodoItem);