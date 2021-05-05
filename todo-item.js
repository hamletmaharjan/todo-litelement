
import {html, LitElement} from '@polymer/lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { styleMap } from 'lit-html/directives/style-map';

/**
 * `<todo-item>` Custom component for individual todo
 *
 * <app-list>
 *  <todo-item></todo-item>
 *
 * @polymer
 * @litElement
 * @customElement
 */
class TodoItem extends LitElement{
    
    /**
     * Static getter properties
     * 
     * @returns Object
     */
    static get properties() {
        return {
            /**
             * holds single todo item
             */
            todo: {
                type:Object
            },

            /**
             * holds handler function on delete todo item
             */
            onDelete: {
                type: Function
            },

            /**
             * holds handler function on toggle todo item
             */
            onToggle: {
                type: Function
            }
        }
    }



     /**
     * render method
     * 
     * @returns {customElements}
     */
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
                <label class=${classMap({completed:this.todo.completed})}>${this.todo.title}</label>
                <button id="delete-btn" @click=${(e)=>this.onDelete(this.todo.id)}>&times;</button>
            </li>
        `;
    }



}

window.customElements.define('todo-item', TodoItem);