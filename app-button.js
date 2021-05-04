
import {html, LitElement} from '@polymer/lit-element';

class AppButton extends LitElement{

    static get properties() {
        return {
            label: {
                type: String
            },
            name: {
                type: String
            },
            onClick: {
                type: Function
            }
        }
    }

    render() {
        console.log('button called');
        return html`
            <button type="button" name="${this.name}" id="add-btn" @click=${this.onClick}>Add</button>
        `;
    }

}

window.customElements.define('app-button', AppButton);