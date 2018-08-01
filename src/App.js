import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MathJax from 'react-mathjax2';


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
                            <li>Descrição da Interface</li>
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
                    <img className="fig" src="../public/img/module.png" alt="YAWDAMPER ATOM Y001"></img>
                    <p className="fig-subtitle">Yawdamper Atom Y001</p>
                    <br/>
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
                    <p>
                        O ecrã de seu modulo yawdamper conta com uma bola mostrando a condição de leitura do acelerometro,
                        e ainda dois bastões móveis, representando a condição de leitura do giroscópio e posição do compensador,
                        respectivamente.
                    </p>
                    <br/>
                    <img className="fig" src="../public/img/screen.png" alt="ECRA"></img>
                    <p className="fig-subtitle">Ecrã do módulo Atom Y001</p>
                    <br/>
                    <p>
                        Este ainda trás indicador de modo ON-OFF, indicador de atividade (X),
                        tempo desde o ligamento (TON) e bastões laterais indicando os limites de curso dos sensores e
                        compensador, estes visíveis apenas com o módulo no modo AUTOMATICO.
                    </p>
                    <br/>

                    <h3 className="title"><li>Descrição da Interface</li></h3>
                    <p>
                        A interface de seu módulo yawdamper conta com três botões dedicados a controlar e alterar
                        as funcionalidades do módulo. São estes os botes (-), ON-OFF e (+), respectivamente.
                        No decorrer deste manual explicaremos como utiliza-los para acessar todas as funcionalidades
                        de seu módulo.
                    </p>
                    <br/>
                    <img className="fig" src="../public/img/interface.png" alt="INTERFACE"></img>
                    <p className="fig-subtitle">Interface do módulo Atom Y001</p>
                    <br/>
                    <h3 className="title"><li>Modo Manual</li></h3>
                    <p>
                        Seu módulo yawdamper inicializa no modo MANUAL. Neste modo, seu yawdamper serve como compensador
                        ajustável, assim como o presente no <em>trim</em> de profundor.
                    </p>
                    <br/>

                    <h3 className="title"><ul><li>Ajuste de <em>Trim</em></li></ul></h3>
                    <p>
                        Pode-se ajustar a posição neutra de seu compensador de leme pela utilização das teclas + e -
                        presentes na interface de seu módulo.
                    </p>
                    <br/>
                    <img className="fig" src="../public/img/manual.png" alt="MANUAL"></img>
                    <p className="fig-subtitle">Tela de controle no modo MANUAL.</p>
                    <br/>

                    <h3 className="title"><ul><li>Calibração dos Sensores</li></ul></h3>
                    <p>
                        Ainda no modo MANUAL, pode-se acessar a rotina de calibração dos sensores do módulo.
                    </p>
                    <br/>
                    <img className="fig" src="../public/img/calibration.png" alt="CALIBRAÇAO"></img>
                    <p className="fig-subtitle">Tela de calibração de sensores.</p>
                    <br/>
                    <p>
                        Para rodar a calibração, basta apertar e segurar a tecla ON-OFF por 5 segundos, largando em
                        seguida. A rotina de calibração deve ser feita com o avião nivelado, coordenado, e em atmosfera
                        calma para evitar que turbulências possam interferir no processo. Caso a calibração tenha
                        resultado insatisfatório (a bola pode terminar fora de centro), deve-se repeti-la até que o
                        resultado seja considerado satisfatório, sempre lembrando de manter a aeronave nivelada, e em
                        condições de cruzeiro.
                    </p>
                    <br/>

                    <h3 className="title"><li>Modo Automático</li></h3>
                    <p>
                        Para acessar o modo AUTOMATICO, basta pressionar brevemente e soltar a tecla ON-OFF presente na
                        interface do módulo.
                    </p>
                    <br/>
                    <img className="fig" src="../public/img/automatic.png" alt="AUTOMATICO"></img>
                    <p className="fig-subtitle">Tela de controle no modo AUTOMATICO.</p>
                    <br/>
                    <p>
                        Neste modo, seu módulo yawdamper calcula a melhor posição do <em>tab</em> em tempo real,
                        e realiza aproximadamente duzentos ajustes por segundo. O módulo realiza leituras nos sensores
                        e processa os dados utilizando o algoritmo de controle PID no erro de aceleração, associado ao
                        controle diferencial do giroscópio para estabilidade aprimorada da aeronave.
                    </p>
                    <p>
                        Ainda no modo AUTOMATICO, pode-se acessar as opções de ajustes de controle do módulo.
                        As opções disponíveis dependerão do modo de ajuste em que o modulo está sendo operado.
                        Para acessar as opções de ajuste, aperte e segure a tecla ON-OFF por cinco segundos, largando
                        em seguida. Os ajustes serão explicados na próxima seção, logo após apresentarmos o algoritmo
                        de controle para melhor entendimento. Se você não esta interessado em aprender sobre o algoritmo
                        PID e só quer uma referência rápida para os ajustes, sinta-se livre para pular o proximo capítulo.
                        Recomendamos porém que a devida atenção seja dada para o entendimento do algoritmo de controle,
                        para que possa-se extrair o melhor desempenho de seu módulo yawdamper, e consequentemente de
                        sua aeronave.
                    </p>
                    <br/>

                    <h3 className="title"><ul><li>Descrição do Algoritmo</li></ul></h3>
                    <p>
                        A função de controle do algoritmo <strong>controlador PID</strong> pode ser descrita matematicamente como:
                        <br/>
                        <br/>
                        <MathJax.Context>
                            <div className="math">
                                <MathJax.Node>u(t) = G * (K_p e(t) + K_i int e(t') dt' + K_d (de(t))/(dt))</MathJax.Node>
                            </div>
                        </MathJax.Context>
                        <br/>
                        <MathJax.Context>
                            <div>
                                Sendo <MathJax.Node inline>K_p</MathJax.Node>,&nbsp;
                                <MathJax.Node inline>K_i</MathJax.Node>&nbsp;e&nbsp;
                                <MathJax.Node inline>K_d</MathJax.Node> os ganhos associados as ações proporcional,
                                integral e derivativa, respectivamente, e <MathJax.Node inline>G</MathJax.Node> o ganho
                                geral do controlador.
                            </div>
                        </MathJax.Context>
                    </p>
                    <p>
                        Este pedaço de matemática aparentemente complicado quer dizer nada mais que a saída de seu
                        controlador, <strong>u(t)</strong>, será proporcional (<strong>ganho proporcional</strong>) ao
                        erro de controle (posição da bola em relação ao centro, <strong>e(t)</strong>), somada a soma
                        dos erros em amostras anteriores multiplicada por uma constante (<strong>ganho integral</strong>),
                        e ainda somada a diferença entre o erro na amostra atual e o erro na amostra anterior, vezes uma
                        constante (<strong>ganho derivativo</strong>), tudo multiplicado por um fator constante
                        (<strong>Ganho geral</strong>).
                    </p>
                    <p>
                        Cada um dos ganhos e seus efeitos na ação do módulo serão explicados mais adiante na
                        seção de ajuste.
                    </p>

                    <h2 className="title">Ajustes</h2>
                    <p>
                        Nesta seção explicaremos como realizar o ajuste de seu módulo yawdamper para que este possa
                        extrair o máximo desempenho de sua aeronave.
                    </p>
                    <br/>

                    <h3 className="title"><li>Ganho</li></h3>
                    <p>
                        O ajuste de ganho esta sempre presente. Este pode ser acessado pelos botões + e - presentes na
                        interface de seu módulo.
                    </p>
                    <br/>
                    <br/>
                    <img className="fig" src="../public/img/gain.png" alt="GANHO"></img>
                    <p className="fig-subtitle">Barra indicativa de ganho.</p>
                    <br/>
                    <br/>
                    <p>
                        Este ajuste é destinado a compensação nas condições de voo, como mudança de velocidade de
                        cruzeiro ou variações climáticas. Ajustes de ganho muito alto fazem com que a aeronave entre
                        em regime oscilatório (balançando a calda, efeito "cachorro feliz") enquanto ajustes muito baixos
                        fazem com que a aeronave fique sub-atuada, conservando erro nas curvas ou tornando a resposta
                        muito lenta.
                    </p>
                    <p>
                        Para obter o melhor desempenho de voo, considerando que os ajustes do controlador foram
                        realizados de forma satisfatória, deve-se manter o ganho geral no maior valor possível que&nbsp;
                        <strong>não</strong> não coloca a aeronave em regime oscilatório.
                    </p>
                    <p>
                        Pode-se realizar pequenos ajustes de ganho em mudanças de regime de voo. Normalmente diminui-se
                        o ganho para velocidades elevadas e aumenta-se para velocidades moderadas.
                    </p>
                    <br/>

                    <h3 className="title"><li>Modo Usuário</li></h3>
                    <p>
                        No modo usuário, apenas ajustes simples estão disponíveis. Os ajustes de&nbsp;
                        <strong>ganho</strong> e <strong>sensibilidade</strong> são destinados a corrigir mudanças nas
                        condições de voo e dinâmica da aeronave, como aumento e diminuição da carga.
                    </p>
                    <br/>
                    <ul>
                    <h4 className="title"><li>Ajuste de Sensibilidade</li></h4>
                    <p>
                        O ajuste de sensibilidade é utilizado para adequar o módulo a mudanças de carga da aeronave.
                        Este deve ser aumentado para aumentos de carga e diminuído, caso contrário. Pequenos ajustes já
                        são suficientes para compensar o voo, dado que este ajuste tem amplo alcance, visando-se
                        atender a maior parte das condições de voo possívelmente experimentadas pela aeronave.
                    </p>
                    <p>
                        O ajuste de sensibilidade pode ser acessado com modo <strong>Power User desligado</strong> e
                        modo <strong>AUTOMATICO</strong>, pressionando-se e segurando a <strong>tecla ON-OFF</strong>&nbsp;
                        por cinco segundos e depois soltando.
                    </p>
                    <br/>
                    </ul>
                    <h3 className="title"><li>Power User</li></h3>
                    <p>
                        No modo <strong>Power User</strong>, o piloto tem acesso a configurações avançadas do modulo
                        yawdamper. Estas configurações só devem ser alteradas apenas por pessoal qualificado ou se
                        você souber exatamente o que esta fazendo. Configurações extremas podem degradar o desempenho
                        ou até instabilizar o voo.
                    </p>
                    <p>
                        Para acessar o modo <strong>Power User</strong>, com o módulo em modo <strong>AUTOMATICO</strong>,
                        aperte brevemente simultaneamente a tecla <strong>(-)</strong> e a tecla <strong>(+)</strong>.
                        A mensagem "Power User ON" deve aparecer no ecrã, confirmando que o modulo recebeu o comando.
                        As configurações avançadas podem ser acessadas da mesma forma que a configuração de
                        sensibilidade no modo usuário, pressionando-se e segurando a tecla ON-OFF por cinco segundos,
                        e depois soltando-a.
                    </p>
                    <br/>
                    <ul>
                    <h4 className="title"><li>Frequência de corte - CutOff</li></h4>
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

                    <h2 className="title">Perguntas Frequêntes</h2>
                    <br/>
                    <h2 className="title">Suporte Técnico</h2>
                </div>
            </div>
        );
    }
}

export default App;
