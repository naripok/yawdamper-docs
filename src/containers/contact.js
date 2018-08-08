import React, { Component } from "react";
import { FormGroup, FormControl } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import "./contact.css";
import { API } from "aws-amplify";
import Recaptcha from "react-recaptcha";


export default class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            name: "",
            body: "",
            subject: "",
            formSent: false,
            isLoading: false,
        };
        this.recaptchaInstance = null;
    }

    // manually trigger reCAPTCHA execution
    executeCaptcha = async event => {
        event.preventDefault();
        this.setState({isLoading: true});
        console.log("Captcha executed.");
        await this.recaptchaInstance.execute();
    };

// executed once the captcha has been verified
// can be used to post forms, redirect, etc.
    verifyCallback = response => {
        console.log("Captcha verified.");
        // console.log(response);
        // document.getElementById("contactus").submit();
        this.handleSubmit();
    };

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

    handleSubmit = () => {
        // event.preventDefault();

        try {
            this.sendMail({
                body: JSON.stringify({
                            email: this.state.email,
                            name: this.state.name,
                            subject: "YAWDAMPER - " + this.state.name + " - " + this.state.subject,
                            message: this.state.body
                })
            });
            this.setState({formSent: true});
            this.setState({isLoading: false});
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
                    {/*<br/>*/}
                    <div>
                        <form id="contactus" onSubmit={this.executeCaptcha} onChange={this.handleChange}>

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
                                // onClick={this.executeCaptcha}
                            />

                            <p className="captchaText">
                                Protected by reCAPTCHA.
                            </p>

                        </form>

                        <Recaptcha
                            ref={e => this.recaptchaInstance = e}
                            sitekey="6LdT72gUAAAAAPZO0Qz_QPhpUy3v4e1bYWkmenxB"
                            size="invisible"
                            verifyCallback={this.verifyCallback}
                            badge="inline"
                            className="captchaBadge"
                        />

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