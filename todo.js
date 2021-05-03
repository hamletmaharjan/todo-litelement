
import {html, LitElement} from '@polymer/lit-element';

class Todo extends LitElement{
    constructor() {
        super();
        this.todos = [
            {id:1, title: "Do Some Work", completed: false},
            {id:2, title: "Make a cup of coffee", completed:false},
            {id:3, title: "Do the kick", completed: true}
        ];
        this.counter = this.todos.length;
        // this.input = this.shadowRoot.querySelector('input');
    }

    static get properties() {
        return {
            todos :{ type: Object}
        }
    }
   

    render() {
        // console.log(this.title);
        return html`
            <style>
            * {
                font-family: 'Arial', sans-serif;
                text-aligh:center;
            }
            ul {
                list-style-type: none;
                padding:5px;
            }
            
            #add-btn {
                margin-left:10px;
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
            <div>
                <h1>Todo app</h1>
                <input id="todo-input" type="text"/><button type="button" name="add_button" id="add-btn" @click=${(e)=>this.addTodo(e)}>Add</button>
                <h3></h3>
                <ul id="#list">
                    ${
                        this.todos.map(item => {
                            return html`
                                <todo-item .todo=${item} @toggle=${(e)=>this.toggleTodo(e.detail.id)}
                                @delete=${(e)=>this.deleteTodo(e.detail.id)}></todo-item>
                            `
                        })
                    }
                </ul>
            </div>
        `;
    }

    addTodo(e) {
        const input = this.shadowRoot.querySelector('input');
        // console.log(this.shadowRoot.querySelector('input').value);
        this.counter+=1;
        this.todos.push({id:this.counter, title:input.value, completed:false});
        this.requestUpdate();
    }

    deleteTodo(id) {
        console.log('delete');
        for (let i=0; i<this.todos.length; i++){
            if(this.todos[i]["id"] == id){
                this.todos.splice(i,1);
            }
        }
        this.requestUpdate();
    }

}

window.customElements.define('app-todo', Todo);