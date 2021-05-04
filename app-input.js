
import {html, LitElement} from '@polymer/lit-element';

/**
 * `<app-input>` Custom component for input field
 *
 * <app-todo-top>
 *  <app-input></app-input>
 *
 * @polymer
 * @litElement
 * @customElement
 */
class AppInput extends LitElement{

    /**
     * Static getter properties
     * 
     * @returns Object
     */
    static get properties() {
        return {
            /**
             * holds the input placeholder
             */
            label: {
                type: String
            },

            /**
             * holds the name attribute for input tag
             */
            name: {
                type: String
            },

            /**
             * holds the new todo input value
             */
            value: {
                type: String
            },

            /**
             * holds handler function on input
             */
            onInput: {
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
        console.log('input called');
        return html`
            <input id="todo-input" .value="${this.value}" type="text" @input=${this.onInput}/>
        `;
    }

}

window.customElements.define('app-input', AppInput);