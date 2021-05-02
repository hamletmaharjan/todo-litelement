
import {html, LitElement} from '@polymer/lit-element';

class Article extends LitElement{
    // constructor() {
    //     super();

    //     this.attachShadow({mode:'open'});
        
    //     const templete = html `
    //         <style>
    //             h1{
    //                 color: red;
    //             }
    //         </style>
    //         <h1>article title</h1>
    //         <p>article body</p>
    //     `;

    //     render(templete, this.shadowRoot);

        
    // }

    render() {
        console.log(this.title);
        return html`
            <style>
                h1{
                    color: red;
                }
            </style>
            <h1>article title</h1>
            <p>article body</p>
        `;
    }

    static get properties() {
        return {
            title: {
                type: String
            }
        }
    }

    //ovserve for change
    // static get observedAttributes() {
    //     return ['attribute-name'];
    // }

    //fires when attributes are changed
    // attributeChangedCallback() {

    // }

    // connectedCallback() {
    //     console.log('element added to the dom');
    // }

    // disconnectedCallback() {
    //     console.log('element removed from the dom');
    // }
}

window.customElements.define('app-article', Article);