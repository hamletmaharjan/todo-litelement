
import {html, LitElement} from '@polymer/lit-element';

class TodoItem extends LitElement{
    

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
            },
            checked: {
                type: Boolean
            }
        }
    }

    // constructor() {
    //     super();
    //     this.checked = this.todo.completed
    // }


    render() {
        console.log('called');
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
                <input type="checkbox" ?checked=${this.todo.completed}  @click=${(e)=>this.onToggle(this.todo.id)}/>
                <label class="${this.todo.completed ? 'completed': 'j'}">${this.todo.title}</label>
                <button id="delete-btn" @click=${(e)=>this.onDelete(this.todo.id)}>&times;</button>
            </li>
        `;
    }



}

window.customElements.define('todo-item', TodoItem);