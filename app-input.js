
import {html, LitElement} from '@polymer/lit-element';

class AppInput extends LitElement{

    static get properties() {
        return {
            label: {
                type: String
            },
            name: {
                type: String
            },
            value: {
                type: String
            },
            onInput: {
                type: Function
            }
        }
    }

    render() {
        console.log('input called');
        return html`
            <input id="todo-input" .value="${this.value}" type="text" @input=${this.onInput}/>
        `;
    }

}

window.customElements.define('app-input', AppInput);