import React, { Component } from "react";
import { FormGroup, FormControl } from "react-bootstrap";
import "./contact.css";


export default class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            name: "",
            body: "",
            subject: "",
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit(event) {
        event.preventDefault();

        fetch('/contactus', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                subject: this.state.subject,
                body: this.state.body
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.success) {
                    this.setState({formSent: true})
                }
                else this.setState({formSent: false})
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <div className="Contact">
                <h2 className="title">Suporte Técnico</h2>
                <p>
                    Para informações, críticas, sugestões ou dúvidas, entrar em contato pelo formulário:
                </p>
                    <br/>
                <div>
                    <form onSubmit={this.handleSubmit} onChange={this.handleChange}>

                        <FormGroup controlId="email" bsSize="large">
                            <FormControl
                                type="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                className="input"
                                placeholder="Email"
                            />
                        </FormGroup>

                        <FormGroup controlId="name" bsSize="large">
                            <FormControl
                                type="name"
                                value={this.state.name}
                                onChange={this.handleChange}
                                className="input"
                                placeholder="Nome"
                            />
                        </FormGroup>

                        <FormGroup controlId="subject" bsSize="large">
                            <FormControl
                                type="subject"
                                value={this.state.subject}
                                onChange={this.handleChange}
                                className="input"
                                placeholder="Assunto"
                            />
                        </FormGroup>

                        <FormGroup controlId="body" bsSize="large">
                            <FormControl
                                type="body"
                                value={this.state.body}
                                onChange={this.handleChange}
                                componentClass="textarea"
                                placeholder="Insira seu texto aqui..."
                            />
                        </FormGroup>

                        <input type="submit" value="Submit" bsSize="small"/>
                    </form>
                </div>
            </div>
        )
    }
}