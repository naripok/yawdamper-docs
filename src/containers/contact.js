import React, { Component } from "react";
import { FormGroup, FormControl } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import "./contact.css";
import { API } from "aws-amplify";


export default class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            name: "",
            body: "",
            subject: "",
            formSent: false,
            isLoading: false
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    validateForm = () => {
        return (
            this.state.email.length > 0,
            this.state.name.length > 0,
            this.state.subject.length > 0,
            this.state.body.length > 0
        );
    };

    handleSubmit = async event => {
        event.preventDefault();

        this.setState({isLoading: true});
        //
        // fetch(config.contactus_endpoint, {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         email: this.state.email,
        //         subject: this.state.subject,
        //         body: this.state.body
        //     })
        // })
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         if (responseJson.success) {
        //             this.setState({formSent: true})
        //         } else this.setState({formSent: false})
        //     })
        //     .then(this.setState({isLoading: false}))
        //     .catch((e) => {
        //         console.error(e);
        //         this.setState({isLoading: false});
        //     });

        try {
            await this.sendMail({
                body: JSON.stringify({
                            email: this.state.email,
                            name: this.state.name,
                            subject: "YAWDAMPER - " + this.state.name + " - " + this.state.subject,
                            message: this.state.body
                })
            });
            this.setState({formSent: true});
        } catch (e) {
            alert(e);
            this.setState({isLoading: false});
        }
    };

    sendMail = (body) => {
        return API.post("contactus", "/contactus", {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true
            },
            body: body,
            // requestContext: {
            //     identity: {
            //         cognitoIdentityId: "USER-SUB-1234"
            //     }
            // }
        });
    };

    render() {
        return (
            <div className="Contact">
                <h1 className="title">Suporte Técnico</h1>
                <br/>
                {!this.state.formSent ?
                <div>
                    <p>
                        Para informações, críticas, sugestões ou dúvidas, entrar em contato utilizando o formulário abaixo.
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

                            <LoaderButton
                                block
                                bsSize="large"
                                disabled={!this.validateForm()}
                                type="submit"
                                isLoading={this.state.isLoading}
                                text="Submit"
                                loadingText="Submitting..."
                                className="Submit"
                            />

                        </form>
                    </div>
                </div>
                : <div className="Sent">
                    Sua mensagem foi enviada com sucesso!<br/>
                    Você receberá uma resposta em breve.
                </div>}
            </div>
        )
    }
}