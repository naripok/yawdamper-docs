import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">

                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Manual de Ajuste - Yawdamper Atom Y001</h1>
                </header>

                <div className="App-summary">
                    <h2 className="title">Indice:</h2>
                    <ul>
                        <li>Introdução</li>
                        <ul>
                            <li>Descrição do Ecrã</li>
                            <li>Descrição da Interface</li>
                            <li>Modo Manual</li>
                            <li>Modo Automático</li>
                        </ul>
                        <li>Ajustes</li>
                        <ul>
                            <li>Modo Usuário</li>
                                <ul>
                                    <li>Ajuste de Sensibilidade</li>
                                </ul>
                            <li>Power User</li>
                            <ul>
                                <li>Frequência de corte</li>
                                <li>Ganho Proporcional - KP</li>
                                <li>Ganho Derivativo - KD</li>
                                <li>Ganho Integral - KI</li>
                                <li>Ganho derivativo do Gyroscopio</li>
                                <li>Zona morta do Gyroscopio</li>
                                <li>Orientação</li>
                            </ul>
                        </ul>

                        <li>Perguntas Frequêntes</li>
                        <li>Suporte Técnico</li>
                    </ul>
                </div>

                <div className="App-text">
                    <h2 className="title">Introdução</h2>
                    <p>
                        Este é o manual de ajuste referente ao módulo <strong>Yawdamper Atom Y001</strong>. Neste manual
                        explicaremos o funcionamento do módulo, bem como realizar seu ajuste para obter o melhor
                        desempenho possível em sua aeronave.
                    </p>
                    <p>
                        O módulo Yawdamper Atom Y001 conta com três acelerometros e três gyroscopios, do tipo massa
                        de prova microscópica. Este tipo de sensor oferece excelente precisão e estabilidade enquanto
                        evita o gasto de energia, desgaste e peso desnecessários associados a sensores de
                        massa de prova macroscópicos. Baseando-se nas leituras desses sensores, o módulo calcula o
                        melhor angulo para seu compensador de leme e ajusta sua posição em tempo real para manter o
                        avião sempre coordenado.
                    </p>
                    <p>
                        Para realizar o cálculo do melhor angulo de compensador, o módulo utiliza o algoritmo de
                        controle de malha fechada PID sobre o erro de aceleração somado ao controle diferencial sobre a
                        taxa de giro da aeronave. O algorítimo e seus ajustes serão explicados detalhadamente nos
                        próximos capítulos.
                    </p>
                    <br/>
                    <h3 className="title"><li>Descrição do Ecrã</li></h3>
                    <br/>
                    <h3 className="title"><li>Descrição da Interface</li></h3>
                    <br/>
                    <h2 className="title">Ajustes</h2>
                    <br/>
                    <h3 className="title"><li>Modo Usuário</li></h3>
                    <br/>
                    <ul>
                    <h4 className="title"><li>Ajuste de Sensibilidade</li></h4>
                    <br/>
                    </ul>
                    <h3 className="title"><li>Power User</li></h3>
                    <br/>
                    <ul>
                    <h4 className="title"><li>Frequência de corte</li></h4>
                    <br/>
                    <h4 className="title"><li>Ganho Proporcional - KP</li></h4>
                    <br/>
                    <h4 className="title"><li>Ganho Derivativo - KD</li></h4>
                    <br/>
                    <h4 className="title"><li>Ganho Integral - KI</li></h4>
                    <br/>
                    <h4 className="title"><li>Ganho derivativo do Giroscópio</li></h4>
                    <br/>
                    <h4 className="title"><li>Zona Morta do Giroscópio</li></h4>
                    <br/>
                    <h4 className="title"><li>Orientação</li></h4>
                    <br/>
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;
