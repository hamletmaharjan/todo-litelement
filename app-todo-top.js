
import {html, LitElement} from '@polymer/lit-element';

import './app-button.js';
import './app-input.js';

/**
 * `<app-todo-top>` Custom component to add a todo header that includes input field and add button
 *
 * <app-todo>
 *  <app-todo-top></app-todo-top>
 *
 * @polymer
 * @litElement
 * @customElement
 */
class TodoTop extends LitElement{

    /**
     * Static getter properties
     * 
     * @returns Object
     */
    static get properties() {
        return {
            /**
             * holds the new todo input value
             */
            inputvalue: {
                type: String
            },

            /**
             * holds handler function on input
             */
            onInput: {
                type: Function
            },

            /**
             * holds handler function on add button click
             */
            onClick: {
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
            <app-input .value="${this.inputvalue}" .onInput=${this.onInput}></app-input>
            <app-button name="add_button" .onClick=${this.onClick} label="Add"></app-button>
        `;
    }

}

window.customElements.define('app-todo-top', TodoTop);