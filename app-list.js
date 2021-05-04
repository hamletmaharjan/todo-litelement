import {nothing} from 'lit-html';
import {html, LitElement} from '@polymer/lit-element';

import './todo-item.js';

/**
 * `<app-list>` Custom component to list all the todos item
 *
 * <app-todo>
 *  <app-list></app-list>
 *
 * @polymer
 * @litElement
 * @customElement
 */
class AppList extends LitElement{

    /**
     * Static getter properties
     * 
     * @returns Object
     */
    static get properties() {
        return {
            /**
             * holds all the todos
             */
            todos: {
                type: Array
            },

            /**
             * holds handler function on toggle todo item
             */
            onToggle: {
                type: Function
            },

            /**
             * holds handler function on delete todo item
             */
            onDelete: {
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
        console.log('list called');
        return html`
            <style>
            ul {
                list-style-type: none;
                padding:5px;
            }
            </style>
            <ul id="#list">
                ${
                    this.todos.map(item => {
                        return html`
                            <todo-item .todo="${item}" .onToggle=${this.onToggle} .checked=${item.completed}
                            .onDelete=${this.onDelete}></todo-item>
                        `
                    })
                }
            </ul>
        `;
    }

}

window.customElements.define('app-list', AppList);