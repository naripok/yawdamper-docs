import React, { Component } from 'react';
import logo from './logo.svg';
import MathJax from 'react-mathjax2';

import Contact from "./containers/contact";
import NavBar from "./components/NavBar";

import { Table } from "mdbreact";
import { Element, animateScroll as scroll, Events, Link } from "react-scroll";

// import PID from "./components/pid";

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "url": "./public/pid.gif",
        };
    }

    componentDidMount() {
        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    scrollToBottom = () => {
        scroll.scrollToBottom();
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">

                    <div>
                        <NavBar top={this.scrollToTop} bot={this.scrollToBottom}/>
                    </div>
                    <div>
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Manual de Ajuste - Yawdamper Atom Y001</h1>
                    </div>
                </header>

                {/* INDEX */}

                <div className="App-summary">
                    <h2 className="title">Indice:</h2>
                    <br/>
                    <ul>
                        <li><Link activeClass="active" spy={true} smooth={true} duration={500} to="intro">Introdução</Link></li>
                        <ul>
                            <li><Link activeClass="active" spy={true} smooth={true} duration={500} to="ecra">Descrição do Ecrã</Link></li>
                            <li><Link activeClass="active" spy={true} smooth={true} duration={500} to="interface">Descrição da Interface</Link></li>
                            <li><Link activeClass="active" spy={true} smooth={true} duration={500} to="manual">Modo Manual</Link></li>
                            <ul>
                                <li><Link activeClass="active" spy={true} smooth={true} duration={500} to="trim">Ajuste de Trim</Link></li>
                                <li><Link activeClass="active" spy={true} smooth={true} duration={500} to="calib">Calibração dos Sensores</Link></li>
                            </ul>
                            <li><Link activeClass="active" spy={true} smooth={true} duration={500} to="automatic">Modo Automatico</Link></li>
                            <li><Link activeClass="active" spy={true} smooth={true} duration={500} to="algo">Descrição do Algoritmo</Link></li>
                        </ul>
                        <li><Link activeClass="active" spy={true} smooth={true} duration={500} to="config">Ajustes</Link></li>
                        <ul>
                            <li><Link activeClass="active" spy={true} smooth={true} duration={500} to="gain">Ganho</Link></li>
                            <li><Link activeClass="active" spy={true} smooth={true} duration={500} to="user">Modo Usuário</Link></li>
                                <ul>
                                    <li><Link activeClass="active" spy={true} smooth={true} duration={500} to="sens">Ajuste de Sensibilidade</Link></li>
                                </ul>
                            <li><Link activeClass="active" spy={true} smooth={true} duration={500} to="powerUser">Power User</Link></li>
                            <ul>
                                <li><Link activeClass="active" spy={true} smooth={true} duration={500} to="cutOff">Frequência de corte - CutOff</Link></li>
                                <li><Link activeClass="active" spy={true} smooth={true} duration={500} to="proportional">Ganho Proporcional - KP</Link></li>
                                <li><Link activeClass="active" spy={true} smooth={true} duration={500} to="integral">Ganho Integral - KI</Link></li>
                                <li><Link activeClass="active" spy={true} smooth={true} duration={500} to="derivative">Ganho Derivativo - KD</Link></li>
                                <li><Link activeClass="active" spy={true} smooth={true} duration={500} to="refTable">Tabela de Referência</Link></li>
                                <li><Link activeClass="active" spy={true} smooth={true} duration={500} to="power">Fator Exponencial - Power</Link></li>
                                <li><Link activeClass="active" spy={true} smooth={true} duration={500} to="gyroG">Ganho derivativo do Gyroscopio - Gyro gain</Link></li>
                                <li><Link activeClass="active" spy={true} smooth={true} duration={500} to="gyroTh">Zona morta do Gyroscopio - Gyro th</Link></li>
                            </ul>
                        </ul>
                        <li><Link activeClass="active" spy={true} smooth={true} duration={500} to="routine">Rotina de Ajuste</Link></li>
                        <li><Link activeClass="active" spy={true} smooth={true} duration={500} to="faq">Perguntas Frequentes</Link></li>
                        <li><Link activeClass="active" spy={true} smooth={true} duration={500} to="contact">Suporte Técnico</Link></li>
                    </ul>
                </div>

                {/* INTRODUCTION */}

                <Element className="App-intro" name="intro">
                    <h2 className="title">Introdução</h2>
                    <br/>
                    <p>
                        Este é o manual de ajuste referente ao módulo <strong>Yawdamper Atom Y001</strong>. Neste manual
                        explicaremos o funcionamento do módulo e como realizar seu ajuste para obter o melhor
                        desempenho possível de sua aeronave.
                    </p>
                    <br/>
                    <img className="fig" src="img/module.png" alt="YAWDAMPER ATOM Y001"></img>
                    <p className="fig-subtitle">Yawdamper Atom Y001</p>
                    <br/>
                    <p>
                        O módulo Yawdamper Atom Y001 conta com três acelerometros e três giroscópios, do tipo massa
                        de prova microscópica. Este tipo de sensor oferece excelente precisão e estabilidade enquanto
                        evita o gasto de energia, desgaste e peso desnecessários associados a sensores de
                        massa de prova macroscópicos. Baseando-se nas leituras desses sensores, o módulo calcula o
                        melhor angulo para seu compensador de leme e ajusta sua posição em tempo real para manter o
                        avião sempre coordenado.
                    </p>
                    <p>
                        Para realizar este cálculo, o módulo utiliza o algoritmo de
                        controle de malha fechada PID sobre o erro de aceleração somado ao controle diferencial sobre a
                        taxa de giro da aeronave. O algoritmo e seus ajustes serão explicados detalhadamente nos
                        próximos capítulos.
                    </p>
                    <br/>

                    <Element name="ecra" className="ecra"/>
                    <h3 className="subtitle"><li>Descrição do Ecrã</li></h3>
                    <br/>
                    <p>
                        O ecrã de seu modulo yawdamper conta com uma bola mostrando a condição de leitura do acelerometro,
                        e ainda dois bastões móveis, representando as condições de leitura do giroscópio e posição do compensador,
                        respectivamente.
                    </p>
                    <br/>
                    {/*<img className="fig" src={ecra} alt="ECRA"></img>*/}

                    <img className="fig" src={require("./img/screen.png")} alt="ECRA"></img>

                    <p className="fig-subtitle">Ecrã do módulo Atom Y001</p>
                    <br/>
                    <p>
                        Este ainda inclui com indicador de modo ON-OFF, indicador de atividade (X),
                        tempo desde o ligamento (TON) e bastões laterais indicando os limites de curso dos sensores e
                        compensador, estes visíveis apenas com o módulo no modo AUTOMATICO.
                    </p>
                    <br/>

                    <Element name="interface"/>
                        <h3 className="subtitle"><li>Descrição da Interface</li></h3>
                        <br/>
                        <p>
                            A interface de seu módulo yawdamper conta com três botões dedicados a controlar e alterar
                            as funcionalidades do módulo. São estes os botes (-), ON-OFF e (+), respectivamente.
                            No decorrer deste manual explicaremos como utiliza-los para acessar todas as funcionalidades
                            de seu módulo.
                        </p>
                        <br/>
                        <img className="fig" src={require("./img/interface.png")} alt="INTERFACE"></img>
                        <p className="fig-subtitle">Interface do módulo Atom Y001</p>
                        <br/>

                    <Element name="manual"/>
                        <h3 className="subtitle"><li>Modo Manual</li></h3>
                            <br/>
                            <p>
                                Seu módulo yawdamper inicializa no modo MANUAL. Neste modo, seu yawdamper serve como compensador
                                ajustável, assim como o presente no <em>trim</em> de profundor.
                            </p>
                            <br/>
                            <img className="fig" src={require("./img/manual.png")} alt="MANUAL"></img>
                            <p className="fig-subtitle">Tela de controle no modo MANUAL.</p>
                            <br/>

                            <Element name="trim"/>
                            <h3 className="subtitle"><li>Ajuste de <em>Trim</em></li></h3>
                            <br/>
                            <p>
                                Pode-se ajustar a posição neutra de seu compensador de leme pela utilização das teclas + e -
                                presentes na interface de seu módulo. A posição do compensador é indicada pela segunda
                                barra vertical presente no ecrã.
                            </p>
                            <br/>

                        <Element name="calib"/>
                        <h3 className="subtitle"><li>Calibração dos Sensores</li></h3>
                            <br/>

                            <p>
                                Ainda no modo MANUAL, pode-se acessar a rotina de calibração dos sensores do módulo.
                            </p>
                            <img className="fig" src={require("./img/calibration.png")} alt="CALIBRAÇÃO"></img>
                            <p className="fig-subtitle">Tela de calibração de sensores.</p>
                            <br/>
                            <p>
                                Para rodar a calibração, basta apertar e segurar a tecla ON-OFF por 5 segundos, soltando em
                                seguida. A rotina de calibração deve ser feita com o avião nivelado, coordenado, e em atmosfera
                                calma para evitar que turbulências possam interferir no processo. Caso a calibração tenha
                                resultado insatisfatório (a bola pode terminar fora de centro), deve-se repeti-la até que o
                                resultado seja considerado satisfatório, sempre lembrando de manter a aeronave nivelada, e em
                                condições de cruzeiro.
                            </p>
                            <br/>

                    <Element name="automatic"/>
                        <br/>
                        <h3 className="subtitle"><li>Modo Automático</li></h3>
                        <br/>
                        <p>
                            Para acessar o modo AUTOMATICO, basta pressionar brevemente a tecla ON-OFF presente na
                            interface do módulo.
                        </p>
                        <br/>
                        <img className="fig" src={require("./img/automatic.png")} alt="AUTOMATICO"></img>
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
                            Para acessar as opções, aperte e segure a tecla ON-OFF por cinco segundos, soltando
                            em seguida. Os ajustes serão explicados na próxima seção, logo após apresentarmos o algoritmo
                            de controle para melhor entendimento. Se você não esta interessado em aprender sobre o algoritmo
                            PID e só quer uma referência rápida para os ajustes, sinta-se livre para pular o proximo capítulo.
                            Recomendamos porém que a devida atenção seja dada para o entendimento do algoritmo de controle,
                            para que possa-se extrair o melhor desempenho de seu módulo yawdamper.
                        </p>
                        <br/>

                    <Element name="algo"/>
                    <h3 className="subtitle"><li>Descrição do Algoritmo</li></h3>
                        <br/>
                        <p>
                            A função de controle do algoritmo <strong>controlador PID</strong> pode ser descrita matematicamente como:
                            <br/>
                        </p>
                        <div className="math">
                            <br/>
                            <MathJax.Context input='tex'>
                                <div>
                                    <MathJax.Node>
                                        {`u(t) = G (K_p e(t) + K_i \\int e(t') dt' + K_d \\frac{d}{dt}e(t))`}
                                    </MathJax.Node>
                                </div>
                            </MathJax.Context>
                            <br/>
                        </div>
                        <p>
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
                </Element>

                {/* CONFIG */}

                <Element className="App-config" name="config">
                    <h2 className="title">Ajustes</h2>
                        <br/>
                            <p>
                                Nesta seção explicaremos como realizar o ajuste de seu módulo yawdamper para que este possa
                                extrair o máximo desempenho de sua aeronave.
                            </p>

                        <br/>
                            <li><strong><em>TODOS OS AJUSTES DEVEM SER REALIZADOS COM A AERONAVE A VELOCIDADE E ALTITUDE
                                SEGURAS.</em></strong></li>
                        <br/>
                            <li><strong>AJUSTES EXTREMOS PODEM INSTABILIZAR A AERONAVE E DIFICULTAR O CONTROLE DO PILOTO.</strong></li>
                        <br/>
                            <li><strong>NO CASO DA AERONAVE SE TORNAR INSTÁVEL, SEGURE SUA TRAJETORIA NO PEDAL, SAIA DA TELA DE
                                CONFIGURAÇÕES UTILIZANDO A TECLA ON-OFF E AJUSTE O GANHO GERAL PARA ZERO. EM SEGUIDA, ENTRE NA TELA
                                DE CONFIGURAÇÕES NOVAMENTE, ZERE TODOS OS GANHOS, RETORNE O GANHO GERAL PARA 50% E REPITA
                                A ROTINA DE CONFIGURAÇÃO E AJUSTE.
                            </strong></li>
                        <br/>

                    <Element name="gain"/>
                    <h3 className="subtitle"><li>Ganho</li></h3>
                            <br/>
                            <p>
                                O ajuste de ganho esta sempre presente. Este pode ser acessado pelos botões + e - presentes na
                                interface de seu módulo.
                            </p>
                            <img className="fig" src={require("./img/gain.png")} alt="GANHO"></img>
                            <p className="fig-subtitle">Barra indicativa de ganho.</p>
                            <br/>
                            <p>
                                Este ajuste é destinado a compensação nas mudanças das condições de voo, como mudança de velocidade de
                                cruzeiro ou variações climáticas. Ajustes de ganho muito alto fazem com que a aeronave entre
                                em regime oscilatório (balançando a calda, efeito "cachorro feliz") enquanto ajustes muito baixos
                                fazem com que a aeronave fique sub-atuada, conservando erro nas curvas ou tornando a resposta
                                muito lenta.
                            </p>
                            <p>
                                Para obter o <strong>melhor desempenho</strong> de voo, considerando que os ajustes do controlador foram
                                realizados de forma satisfatória, <strong>deve-se manter o ganho geral no maior valor possível
                                que não coloca a aeronave em regime oscilatório</strong>.
                            </p>
                            <p>
                                Pode-se realizar pequenos ajustes de ganho em mudanças de regime de voo. <strong>Normalmente diminui-se
                                o ganho para velocidades elevadas e aumenta-se para velocidades moderadas</strong>.
                            </p>
                        <br/>

                    <Element name="user"/>
                    <h3 className="subtitle"><li>Modo Usuário</li></h3>
                        <br/>
                        <p>
                                No modo usuário, apenas ajustes simples estão disponíveis. Os ajustes de&nbsp;
                                <strong>ganho</strong> e <strong>sensibilidade</strong> são destinados a corrigir mudanças nas
                                condições de voo e dinâmica da aeronave, como aumento e diminuição da carga.
                            </p>
                        <br/>

                    <Element name="sens"/>
                    <h3 className="subtitle"><li>Ajuste de Sensibilidade</li></h3>
                        <br/>
                        <p>
                            O ajuste de sensibilidade é utilizado para adequar o módulo a mudanças de carga da aeronave.
                            Este deve ser aumentado para cargas elevadas e reduzido para cargas leves. Pequenos ajustes já
                            são suficientes para compensar mudanças, e é recomendado manter um valor que resulte em
                            resposta satisfatória sem que a posição do compensador se torne errática.
                        </p>
                        <img className="fig" src={require("./img/sensitivity.png")} alt="SENSIBILIDADE"></img>
                        <p className="fig-subtitle">Barra indicativa de ganho.</p>
                        <br/>
                        <p>
                            O ajuste de sensibilidade pode ser acessado com modo <strong>Power User desligado</strong> e
                            modo <strong>AUTOMATICO</strong>, pressionando-se e segurando a <strong>tecla ON-OFF</strong>&nbsp;
                            por cinco segundos e depois soltando.
                        </p>
                        <br/>

                    <Element name="powerUser"/>
                    <h3 className="subtitle"><li>Power User</li></h3>
                        <br/>
                        <p>
                            No modo <strong>Power User</strong>, o piloto tem acesso a configurações avançadas do modulo
                            yawdamper. Estas configurações só devem ser alteradas apenas por pessoal qualificado ou se
                            você souber exatamente o que esta fazendo. <strong>Configurações extremas podem degradar o
                            desempenho da aeronave ou até instabilizar o voo</strong>.
                        </p>
                        <p>
                            Para acessar o modo <strong>Power User</strong>, com o módulo em modo <strong>AUTOMATICO</strong>,
                            aperte brevemente as teclas <strong>(-)</strong> e <strong>(+)</strong>, simultaneamente.
                            A mensagem <strong>"Power User ON"</strong> deve aparecer no ecrã, confirmando que o modulo
                            recebeu o comando. As configurações avançadas podem ser acessadas da mesma forma que a
                            configuração de sensibilidade no modo usuário, pressionando-se e segurando a tecla ON-OFF
                            por cinco segundos, e depois soltando-a.
                        </p>
                    <br/>

                    <Element name="cutOff"/>
                    <h3 className="subtitle"><li>Frequência de corte - CutOff</li></h3>
                        <br/>
                        <p>
                            A frequência de corte determina o ponto de -3dB de um filtro linear em cascata de três polos.
                            Este filtro é utilizado para tratar os dados obtidos pela leitura dos acelerômetros e giroscópios,
                            de forma a reduzir o ruído de leitura produzido pela vibração gerada pelo motor da aeronave.
                        </p>
                        <img className="fig" src={require("./img/cutoff.png")} alt="CUTOFF"></img>
                        <p className="fig-subtitle">Barra indicativa de frequencia de corte.</p>
                        <br/>
                        <p>
                            O ajuste da frequencia de corte é feito observando-se o comportamento da bola e da posição do
                            compensador enquanto o módulo atua no modo AUTOMATICO. A bola deve ter posição estável e não deve
                            apresentar vibrações, e a posição do compensador não deve se comportar de maneira errática e nem
                            apresentar vibrações aparentes. Este tipo de sinal de comando espúrio pode causar o aquecimento
                            do motor, reduzindo a vida útil de seu sistema yawdamper.
                        </p>
                        <p>
                            <strong>O valor da frequencia de corte deve ser o maior possível sem que a bola ou a posição do
                                compensador apresentem vibrações.</strong>
                        </p>
                        <br/>

                    <Element name="pid"/>
                    <h3 className="subtitle"><li>Ajuste do controlador PID</li></h3>
                        <br/>
                        <p>
                            O controlador PID deve ser ajustado empiricamente seguindo-se uma rotina bem definida.
                            A seguir explicaremos a influência de cada ajuste em sua resposta, bem como o algoritmo de
                            ajuste do controlador.
                        </p>
                        <br/>
                        <div>
                        <img className="fig" src={require("./img/pid.gif")} alt="CONTROLADOR PID" />
                        </div>
                        {/*<PID />*/}
                        <p className="fig-subtitle">
                            Resposta do sistema a alterações nos ganhos Kp, Ki e Kd. Aqui, 1 representa a posição
                            coordenada da aeronave (bola no centro) e a linha azul representa a trajetória da bola
                            no tempo, partindo da trajetória descoordenada (bola para a direita) para a trajetória
                            coordenada fornecida pelo controle de yaw.
                        </p>
                        <br/>

                    <Element name="proportional"/>
                    <h3 className="subtitle"><li>Ganho Proporcional - KP</li></h3>
                        <br/>
                        <MathJax.Context>
                            <div>
                                O ganho proporcional se refere ao valor de <MathJax.Node inline>K_p</MathJax.Node>,
                                presente na equação de controle do PID. Este ganho controla a componente
                                proporcional ao erro que estará presente na saída do controlador. Por
                                exemplo, se a bola se deslocar para a direita, a posição do compensador se
                                deslocará de uma quantidade proporcional a este deslocamento vezes o ganho
                                proporcional para a esquerda, de maneira a corrigir o curso da aeronave
                                e retornar com a bola a sua posição central.
                            </div>
                        </MathJax.Context>
                        <p>
                            Um <strong>ganho proporcional baixo</strong> faz com que o <strong>controle na posição
                            do compensador tenha curso reduzido</strong>, tornando a aeronave <strong>sub-atuada</strong>.
                            Já uma configuração de <strong>ganho proporcional alta</strong> demais faz com que a
                            aeronave entre em <strong><em>regime oscilatório</em></strong> e se
                            torne <strong>pouco estável</strong>.
                        </p>
                        <p>
                            <strong>Para obter melhor desempenho de sua aeronave, é desejável utilizar o <em>maior ganho
                            proporcional possível sem que a aeronave se torne instável ou apresente overshoot em
                            curvas fechadas.</em></strong>
                        </p>
                        <br/>

                    <Element name="integral"/>
                    <h3 className="subtitle"><li>Ganho Integral - KI</li></h3>
                        <br/>
                        <MathJax.Context>
                            <div>
                                O ganho integral se refere ao valor de <MathJax.Node inline>K_i</MathJax.Node>,
                                presente na equação de controle do PID. Este ganho controla a componente
                                integral do erro que estará presente na saída do controlador. Por
                                exemplo, se a bola se mantém <strong>posicionada a direita do centro por um
                                longo período de tempo</strong>, a posição do compensador se deslocará de uma quantidade&nbsp;
                                <strong>proporcional ao somatório do tempo que a bola passou deslocada vezes o
                                deslocamento durante esse tempo vezes o ganho integral</strong> para a esquerda,
                                de maneira a corrigir a tendência da aeronave. Esta posição passa a ser a <strong>posição
                                neutra</strong> do compensador, e as variações causadas pelos ganhos proporcional e
                                derivativo serão dadas ao redor desta. Da mesma forma, se a aeronave apresentar
                                tendência para a esquerda, a posição neutra do compensador se deslocará vagarosamente
                                para a direita proporcionalmente ao ganho integral, de forma a compensar esta
                                tendência.
                            </div>
                        </MathJax.Context>
                        <p>
                            <strong>Ajustes muito baixos de ganho integral</strong> fazem com que
                            a <strong>aeronave apresente tendências</strong> e conserve <strong>erro estático em
                            retas</strong>. <strong>Ajustes muito altos do ganho integral</strong>, por outro lado, fazem com que
                            a aeronave apresente <strong>overshoot nas curvas</strong>.
                        </p>
                        <p>
                           <strong>Idealmente gostaria-se de utilizar-se o <em>menor ganho integral possível sem que a aeronave
                               apresente tendências ou erro estático em curvas</em></strong>.
                        </p>
                        <br/>

                    <Element name="derivative"/>
                    <h3 className="subtitle"><li>Ganho Derivativo - KD</li></h3>
                        <br/>
                        <MathJax.Context>
                            <div>
                                O ganho derivativo se refere ao valor de <MathJax.Node inline>K_d</MathJax.Node>,
                                presente na equação de controle do PID. Este ganho controla a componente
                                diferencial do erro que estará presente na saída do controlador. Por
                                exemplo, se a bola se deslocar de forma <strong>acelerada para a direita</strong>,
                                a posição do compensador se deslocará de uma quantidade&nbsp;
                                <strong>proporcional a aceleração vezes o ganho
                                derivativo para a esquerda</strong>, de maneira a corrigir desvio futuro no curso da aeronave
                                causado pelo aumento da velocidade de giro provocada pela aceleração atual. Da mesma
                                forma, se a bola sofrer uma <strong>desaceleração em sua tragetória para a direita</strong>,
                                a posição do compensador será <strong>deslocada para a direita</strong> refletindo
                                a diminuição na velocidade de giro futuro.
                            </div>
                        </MathJax.Context>
                        <p>
                            A componente derivativa serve como um "amortecedor", se opondo a variações na aceleração
                            da tragetória da bola, ou mais especificamente, se opondo a mudanças na taxa de variação
                            da aceleração lateral da aeronave.
                        </p>
                        <p>
                            Ajustes <strong>muito baixos do ganho derivativo fazem com que a mudança
                            na posição do compensador seja lenta</strong> em relação a mudança de aceleração lateral,
                            e faz com que a <strong>aeronave perca a coordenação por um longo período de
                            tempo</strong> após a atuação do aileron e do início da guinada da aeronave.
                        </p>
                        <p>
                            Por outro lado, ajustes <strong>muito altos do ganho derivativo tornam
                            a posição do compensador errática</strong> e introduzem ruído no sinal
                            de controle do motor, <strong>fazendo-o vibrar</strong>. Esta condição
                            é <strong>pouco desejável</strong> já que <strong>não
                            melhora o controle da aeronave</strong> e <strong>diminúi a vida útil de seu sistema</strong>.
                        </p>
                        <p>
                            <strong>Como via de regra, é desejavel trabalhar com o <em>menor ganho derivativo que torna a
                            resposta da aeronave estável e rápida o suficiente a mudanças de estado na tragetória,
                            sem introduzir ruído (vibração e movimentação demasiada) na posição do compensador</em></strong>.
                        </p>
                        <br/>

                    <Element name="refTable"/>
                    <h3 className="subtitle"><li>Tabela de referência</li></h3>
                        <br/>
                        <p>
                            Utilize a tabela de referência para consulta rápida em ocasião de ajuste.
                        </p>
                        <br/>
                        <Table bsClass="table">
                            <thead className="thead-dark">
                            <tr>
                                <th scope="col">Parâmetro (aumento)</th>
                                <th scope="col">Tempo de subida</th>
                                <th scope="col">Overshoot</th>
                                <th scope="col">Tempo de acomodação</th>
                                <th scope="col">Erro estático</th>
                                <th scope="col">Estabilidade</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Kp</td>
                                <td>Diminui</td>
                                <td>Aumenta</td>
                                <td>Aumenta</td>
                                <td>Diminui</td>
                                <td>Degrada</td>
                            </tr>
                            <tr>
                                <td>Ki</td>
                                <td>Diminui</td>
                                <td>Aumenta</td>
                                <td>Aumenta</td>
                                <td>Diminui</td>
                                <td>Degrada</td>
                            </tr>
                            <tr>
                                <td>Kd</td>
                                <td>Diminui</td>
                                <td>Diminui</td>
                                <td>Diminui</td>
                                <td>Não afeta</td>
                                <td>Melhora para Kd pequeno</td>
                            </tr>
                            </tbody>
                        </Table>
                        <br/>

                    <Element name="power"/>
                    <h3 className="subtitle"><li>Fator exponencial - Power</li></h3>
                        <br/>
                        <p>
                            O fator exponencial controla o comportamento quadrático na entrada do controlador,
                            isto é, fatores exponenciais maiores fazem com que <strong>movimentações da bola perto do centro
                            sejam atenuadas e movimentações da bola nos extremos sejam amplificadas</strong>. Um Power
                            de zero equivale a uma resposta linear da entrada, enquanto um Power de um equivale a energia
                            quadrática da entrada.
                        </p>
                        <p>
                            O ajuste ótimo desta opção varia de acordo com as características da aeronave, e mudanças grandes
                            neste opção requerem novo ajuste dos parâmetros do controlador PID.
                        </p>
                        <p>
                            Para realizar o ajuste desta opção, <strong>primeiro tente conseguir um bom desempenho do PID com o
                            valor de Power igual a ZERO</strong>. Caso notar que a aeronave fica <strong>instável em trajetórias
                            retilíneas e ainda sub-atuada em curvas, aumente vagarosamente o ajuste de Power</strong> (0.05 de
                            aumento já causa bastante mudança) e tente obter bom desempenho do PID reconfigurando-o com
                            este novo valor. Caso a aeronave venha a apresentar muito <strong>pouca atividade com a bola
                            perto do centro</strong> e <strong>overshoot após curvas</strong> mais fechadas, o valor
                            de <strong>Power esta alto demais</strong> e deve ser reduzido, efetuando-se novo ajuste do
                            PID após a redução.
                        </p>
                        <br/>

                    <Element name="gyroG"/>
                    <h3 className="subtitle"><li>Ganho derivativo do Giroscópio - Gyro Gain</li></h3>
                        <br/>
                        <p>
                            O ganho derivativo do giroscópio controla a proporção em que a variação na velocidade de
                            giro da aeronave influencia na posição do compensador. Este tipo de controle é realizado com
                            o intuito de <strong>aumentar a estabilidade da aeronave, amortecendo oscilações de calda e mudanças
                            de proa repentinas</strong>, como as causadas por turbulências atmosféricas.
                        </p>
                        <p>
                            Este ganho funciona da mesma forma que o ganho derivativo do controlador PID para o sinal de
                            aceleração, mas tem como entrada o sinal do giroscópio. Para ajustar esta opção,
                            configure o PID e a opção Power de forma que a aeronave apresente desempenho satisfatório tanto
                            em trajetórias retilíneas quanto em curvas. Feito isso, aumente o ganho diferencial do
                            giroscópio até notar que a posição do compensador começa a se tornar errática ou ruidosa,
                            então diminua o ganho do giroscópio até que a posição do compensador deixe de apresentar
                            ruído.
                        </p>
                        <p>
                            Depois de ajustado, teste o desempenho da aeronave em curvas. A resposta da aeronave deve ser
                            perceptivelmente mais estável sem que resposta na entrada da curva tenha sido prejudicada (resposta muito lenta).
                            Pode-se ainda introduzir distúrbios no sistema pelo acionamento de um dos pedais e obervar
                            a resposta do compensador. Este deve mover-se de forma a combater a mudança de proa e manter
                            a aeronave estável.
                        </p>
                        <br/>

                    <Element name="gyroTh"/>
                    <h3 className="subtitle"><li>Zona Morta do Giroscópio - Gyro th</li></h3>
                        <br/>
                        <p>
                            A configuração de zona morta do giroscópio serve para amenizar possível viés nas leituras
                            do giroscópio em trajetórias retilíneas. Esta configuração deve ser mantida com o valor mais
                            baixo possível sem que seja possível notar viés no sinal do giroscópio (fora de centro em
                            trajetórias retas).
                        </p>
                        <br/>
                </Element>

                <Element className="App-setup">
                    <Element name="routine"/>
                    <h1 className="title">Rotina de ajuste</h1>
                        <br/>
                        <p>
                            Aqui será apresentada o algoritmo de ajuste completo do módulo yawdamper Atom Y001.
                        </p>
                        <div className="routine">
                            <ol>
                                <br/>
                                <li>Em modo usuário, configurar o ganho geral e o ajuste de sensibilidade em 50%.</li>
                                <br/>
                                <li>Entrar em modo Power User pressionando simultaneamente as telas (-) e (+) no modo AUTOMATICO
                                    e configurar todos os ganhos do PID e giroscópio para 0.0.</li>
                                <br/>
                                <li>Configurar a frequencia de corte do filtro com o maior valor de forma que a bola e o bastão
                                    do giroscópio não apresentem vibrações ou atividade demasiada.</li>
                                <br/>
                                <li>Configurar o Gyro th de forma que o bastão do giroscópio permaneça centrado em trajetórias
                                retas e ainda saia de centro facilmente em curvas.</li>
                                <br/>
                                <li>Aumentar o ganho proporcional, Kp, e realizar curvas de média inclinação até que a aeronave
                                comece a responder de forma levemente oscilatória.</li>
                                <br/>
                                <li>Aumentar o ganho derivativo , Kd, até que a aeronave deixe de apresentar resposta
                                oscilatória, sem introduzir ruído ou vibração na posição do compensador.</li>
                                <br/>
                                <li>Aumentar o ganho integral, Ki, até que a aeronave corrija a trajetória rapidamente na
                                ocasião de mudança de regime, como mudança na potencia do motor ou mudanças de inclinação
                                do nariz. A aeronave não deve apresentar tendências ou erro estático em retas, mas também não
                                deve apresentar overshoot na resposta a curvas fechadas.</li>
                                <br/>
                                <li>Caso a melhor resposta obtida nos passos anteriores ainda for instável em trajetórias
                                retilíneas e lenta para curvas fechadas, aumentar vagarosamente o valor da opção Power e
                                repetir os passos 2, 5, 6 e 7.</li>
                                <br/>
                                <li>Aumentar o valor do ganho derivativo do giroscópio até notar ruído na saída, e então
                                voltar a baixar o valor do mesmo até o ruído desaparecer. Caso o ganho maximo não for suficiente
                                para adicionar ruído na posição do compensador, aumentar o ganho do giroscópio até que a
                                aeronave apresente resposta satisfatóriamente estável sem atrasar muito a resposta inicial
                                do compensador nas curvas.</li>
                                <br/>
                                <li>Pressione novamente as teclas (-) e (+) simultaneamente para sair do modo Power User.</li>
                                <br/>
                                <li>Realizar pequenos ajustes no ganho geral com mudanças nas condições de voo e no ajuste
                                de sensibilidade com a mudança na carga do avião.</li>
                                <br/>
                            </ol>
                        </div>
                </Element>

                <Element className="App-faq">
                    <Element name="faq"/>
                    <h1 className="title">Perguntas Frequentes</h1>
                        <br/>
                        <ul>
                            <li>O módulo yawdamper Atom Y001 é apropriado para a utilização em aeronaves homologadas?</li>
                            <ul>
                                <li>Não, trata-se de um módulo experimental para utilização em aeronaves experimentais leves.</li>
                            </ul>
                        </ul>
                        <br/>
                        <ul>
                            <li>O módulo yawdamper Atom Y001 é apropriado para a utilização em manobras acrobáticas?</li>
                            <ul>
                                <li>Não.</li>
                            </ul>
                        </ul>
                        <br/>
                        <ul>
                            <li>A minha posição do compensador apresenta vibrações no modo AUTOMATICO. Como corrigir?</li>
                            <ul>
                                <li>Realizar rotina de ajuste no dispositivo.</li>
                            </ul>
                        </ul>
                        <br/>
                        <ul>
                            <li>Meu dispositivo não salva mais os valores das configurações. Como corrigir?</li>
                            <ul>
                                <li>Pastilhas de memória apresentam vida útil limitada, contada em ciclos de escrita.
                                O tempo de vida deste tipo de pastilha é muito elevado, porém se a vida útil de sua
                                memória chegou ao fim, é necessario realizar a troca do componente
                                controlador. Entrar em contato com o suporte técnico.</li>
                            </ul>
                        </ul>
                        <br/>
                        <ul>
                            <li>Meu módulo yawdamper liga mas o servo motor não responde. Como corrigir?</li>
                            <ul>
                                <li>O mais provável é que haja algum rompimento no cabo de comunicação. Checar o cabeamento
                                da aeronave. Caso concluir que o cabeamento esta intacto, a próxima opção de maior
                                probabilidade é o módulo de potência do servo motor não estar funcionando corretamente.
                                Entrar em contato com suporte técnico para substituição.</li>
                            </ul>
                        </ul>
                        <br/>
                        <ul>
                            <li>O indicador de posição do compensador no ecrã do módulo se encontra estável, porém o servo
                            motor se comporta de maneira errática. Como corrigir?</li>
                            <ul>
                                <li>O mais provável é o módulo de potência do servo motor não estar funcionando corretamente.
                                    Entrar em contato com suporte técnico para substituição.</li>
                            </ul>
                        </ul>
                </Element>

                <Element name="contact"/>
                    <Contact />
            </div>

        );
    }
}

export default App;
