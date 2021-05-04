
import {html, LitElement} from '@polymer/lit-element';

class TodoItem extends LitElement{
    constructor() {
        super();
        
        this.num = 0
    }

    static get properties() {
        return {
            todo: {
                type:Object
            },
            num: {
                type:Number
            },
            onDelete: {
                type: Function
            },
            onToggle: {
                type: Function
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
                <input type="checkbox" ?checked="${this.todo.completed}"  @click=${(e)=>this.onToggle(this.todo.id)}/>
                <label class="${this.todo.completed ? 'completed': 'j'}">${this.todo.title}</label>
                <button id="delete-btn" @click=${(e)=>this.onDelete(this.todo.id)}>&times;</button>
            </li>
        `;
    }

    toggleTodo(e){
        // this.todo.completed = !this.todo.completed;
        // this.num++;
        // console.log(this.todo)
        this.dispatchEvent(new CustomEvent('toggle', {detail:{id:this.todo.id}}));
        this.requestUpdate();
    }


}

window.customElements.define('todo-item', TodoItem);