
import {html, LitElement} from '@polymer/lit-element';

/**
 * `<app-button>` Custom component for clickable button
 *
 * <app-todo-top>
 *  <app-button></app-button>
 *
 * @polymer
 * @litElement
 * @customElement
 */
class AppButton extends LitElement{

    /**
     * Static getter properties
     * 
     * @returns Object
     */
    static get properties() {
        return {
            /**
             * holds the button label
             */
            label: {
                type: String
            },

            /**
             * holds the name attribute for button
             */
            name: {
                type: String
            },

            /**
             * holds handler function on click
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
        console.log('button called');
        return html`
            <button type="button" name="${this.name}" id="add-btn" @click=${this.onClick}>${this.label}</button>
        `;
    }

}

window.customElements.define('app-button', AppButton);