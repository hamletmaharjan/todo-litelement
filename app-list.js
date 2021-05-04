
import {html, LitElement} from '@polymer/lit-element';

import './todo-item.js';

class AppList extends LitElement{
    

    static get properties() {
        return {
            todos: {
                type: Array
            },
            onToggle: {
                type: Function
            },
            onDelete: {
                type: Function
            }
        }
    }

    render() {
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
                            <todo-item .todo=${item} .onToggle=${this.onToggle}
                            .onDelete=${this.onDelete}></todo-item>
                        `
                    })
                }
            </ul>
        `;
    }

}

window.customElements.define('app-list', AppList);