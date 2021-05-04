
import {html, LitElement} from '@polymer/lit-element';

import './app-button.js';
import './app-input.js';

class TodoTop extends LitElement{

    static get properties() {
        return {
            inputvalue: {
                type: String
            },
            onInput: {
                type: Function
            },
            onClick: {
                type: Function
            }
        }
    }

    render() {
        return html`
            <app-input .value="${this.inputvalue}" .onInput=${this.onInput}></app-input>
            <app-button name="add_button" .onClick=${this.onClick}>Add</app-button>
        `;
    }

}

window.customElements.define('app-todo-top', TodoTop);