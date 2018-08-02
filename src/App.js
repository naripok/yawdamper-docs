import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MathJax from 'react-mathjax2';

import pid_img from "./img/pid.gif";
// import PID from "./components/pid";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "url": "./public/pid.gif"
        };
    }

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
                                <li>Frequência de corte - CutOff</li>
                                <li>Ganho Proporcional - KP</li>
                                <li>Ganho Derivativo - KD</li>
                                <li>Ganho Integral - KI</li>
                                <li>Ganho derivativo do Gyroscopio - Gyro gain</li>
                                <li>Zona morta do Gyroscopio - Gyro th</li>
                                <li>Orientação - Axis</li>
                            </ul>
                        </ul>

                        <li>Perguntas Frequêntes</li>
                        <li>Suporte Técnico</li>
                    </ul>
                </div>

                <div className="App-intro">
                    <h2 className="title">Introdução</h2>
                    <p>
                        Este é o manual de ajuste referente ao módulo <strong>Yawdamper Atom Y001</strong>. Neste manual
                        explicaremos o funcionamento do módulo, bem como realizar seu ajuste para obter o melhor
                        desempenho possível em sua aeronave.
                    </p>
                    <img className="fig" src="img/module.png" alt="YAWDAMPER ATOM Y001"></img>
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
                    <img className="fig" src="img/screen.png" alt="ECRA"></img>
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
                    <img className="fig" src="img/interface.png" alt="INTERFACE"></img>
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
                    <img className="fig" src="img/manual.png" alt="MANUAL"></img>
                    <p className="fig-subtitle">Tela de controle no modo MANUAL.</p>
                    <br/>

                    <h3 className="title"><ul><li>Calibração dos Sensores</li></ul></h3>
                    <p>
                        Ainda no modo MANUAL, pode-se acessar a rotina de calibração dos sensores do módulo.
                    </p>
                    <br/>
                    <img className="fig" src="img/calibration.png" alt="CALIBRAÇAO"></img>
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
                    <img className="fig" src="img/automatic.png" alt="AUTOMATICO"></img>
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
                </div>
                <div className="App-config">
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
                    <img className="fig" src="img/gain.png" alt="GANHO"></img>
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
                        <p>
                            A frequência de corte determina o ponto de -3dB de um filtro linear em cascata de três polos.
                            Este filtro é utilizado para tratar os dados obtidos pela leitura dos acelerometros e giroscópios,
                            de forma a reduzir o ruído produzido pela vibração gerada pelo motor da aeronave.
                        </p>

                        <p>
                            O ajuste da frequencia de corte é feito observando-se o comportamento da bola e da posição do
                            compensador enquanto o módulo atua no modo AUTOMATICO. A bola deve ter posição estável e não deve
                            apresentar vibrações, e a posição do compensador não deve se comportar de maneira errática e nem
                            apresentar vibrações aparentes. Este tipo de sinal de comando espúrio pode causar o aquecimento
                            do motor, reduzindo a vida útil de seu sistema yawdamper.
                        </p>
                        <p>
                            O valor da frequencia de corte deve ser o maior possível sem que a bola ou a posição do
                            compensador apresentem vibrações.
                        </p>
                    <br/>
                    <h3 className="title"><li>Ajuste do controlador PID</li></h3>
                        <p>
                            O controlador PID deve ser ajustado empiricamente seguindo-se uma rotina bem definida.
                            A seguir explicaremos o algoritmo de ajuste do controlador, bem como a influência de cada
                            ajuste em sua resposta.
                        </p>
                        <br/>
                        <div>
                            <img className="fig" src={pid_img} alt="CONTROLADOR PID" width="440px" height="330px"/>
                        </div>

                        {/*<PID />*/}
                        <p className="fig-subtitle">
                            Resposta do sistema a alterações nos ganhos Kp, Ki e Kd. Aqui, 1 representa a posição
                            coordenada da aeronave (bola no centro) e a linha azul representa a trajetória da bola
                            no tempo, partindo da trajetória descoordenada (bola para a direita) para a trajetória
                            coordenada fornecida pelo controle de yaw.
                        </p>
                        <br/>

                        <ul>
                            <h4 className="title"><li>Ganho Proporcional - KP</li></h4>

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
                                aeronave sofra <strong><em>overshoot</em></strong> em sua trajetória e se
                                torne <strong>pouco estável</strong>.
                            </p>
                            <p>
                                Para obter melhor desempenho de sua aeronave, é desejável utilizar o <em>maior ganho
                                proporcional possível sem que a aeronave se torne instável ou apresente overshoot em
                                curvas fechadas.</em>
                            </p>
                            <br/>

                            <h4 className="title"><li>Ganho Integral - KI</li></h4>
                            <MathJax.Context>
                                <div>
                                    O ganho integral se refere ao valor de <MathJax.Node inline>K_i</MathJax.Node>,
                                    presente na equação de controle do PID. Este ganho controla a componente
                                    integral do erro que estará presente na saída do controlador. Por
                                    exemplo, se a bola se mantém <strong>posicionada a direita do centro</strong> por um
                                    longo período de tempo, a posição do compensador se deslocará de uma quantidade&nbsp;
                                    <strong>proporcional ao somatório do tempo que a bola passou deslocada vezes o
                                    deslocamento durante esse tempo vezes o ganho integral para a esquerda</strong>,
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
                                a <strong>aeronave apresente tendências</strong> e conserve <strong>erro estático nas
                                curvas</strong>. <strong>Ajustes muito altos do ganho integral</strong>, por outro lado, fazem com que
                                a aeronave apresente <strong>overshoot nas curvas</strong>.
                            </p>
                            <p>
                               Idealmente gostaria-se de utilizar-se o <em>menor ganho integral possível sem que a aeronave
                                    apresente tendências ou erro estático em curvas
                                </em>.
                            </p>
                            <br/>

                            <h4 className="title"><li>Ganho Derivativo - KD</li></h4>
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
                                Ajustes <strong>muito baixos do ganho derivativo</strong> fazem com que <strong>a mudança
                                na posição do compensador seja lenta</strong> em relação a mudança de aceleração lateral,
                                e faz com que a <strong>aeronave perca a coordenação por um longo período de
                                tempo</strong> após a atuação do aileron e do início da guinada da aeronave.
                            </p>
                            <p>
                                Por outro lado, ajustes <strong>muito altos do ganho derivativo</strong> tornam
                                a <strong>posição do compensador errática</strong> e introduzem ruído no sinal
                                de controle do motor, <strong>fazendo-o vibrar</strong>. Esta condição
                                é <strong>pouco desejável</strong> já que <strong>não
                                melhora o controle da aeronave</strong> e <strong>diminúi a vida útil de seu sistema</strong>.
                            </p>
                            <p>
                                Como via de regra, é desejavel trabalhar com o <em>menor ganho derivativo que torna a
                                resposta da aeronave estável e rápida o suficiente a mudanças de estado na tragetória,
                                sem introduzir ruído (vibração e movimentação demasiada) na posição do compensador</em>.
                            </p>
                            <br/>
                            <h4 className="title"><li>Tabela de referência</li></h4>
                            <p>
                                Utilize a tabela de referência para consulta rápida em ocasião de ajuste.
                            </p>
                            <table>
                                <tr>
                                    <th>Parâmetro (aumento)</th>
                                    <th>Tempo de subida</th>
                                    <th>Overshoot</th>
                                    <th>Tempo de acomodação</th>
                                    <th>Erro estático</th>
                                    <th>Estabilidade</th>
                                </tr>
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
                            </table>
                        </ul>
                    <h4 className="title"><li>Fator exponencial - Power</li></h4>
                    <br/>
                    <h4 className="title"><li>Ganho derivativo do Giroscópio - Gyro Gain</li></h4>
                    <br/>
                    <h4 className="title"><li>Zona Morta do Giroscópio - Gyro th</li></h4>
                    <br/>
                    <h4 className="title"><li>Orientação - Axes</li></h4>
                    <br/>
                    </ul>
                </div>
                <div className="App-setup">
                    <h2 className="title">Rotina de ajuste</h2>
                </div>

                <div className="App-faq">
                    <h2 className="title">Perguntas Frequentes</h2>

                </div>
                <div className="App-support">
                    <h2 className="title">Suporte Técnico</h2>
                </div>
            </div>

        );
    }
}

export default App;
