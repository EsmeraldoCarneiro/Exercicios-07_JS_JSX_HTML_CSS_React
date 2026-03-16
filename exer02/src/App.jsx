import './App.css'
import React, { Component } from 'react';

/**
 * Componente App (Classe)
 * Exercício: Manipulação de Estado com alteração de conteúdo e estilo.
 */
class App extends Component {
  constructor(props) {
    super(props);

    // Estado inicial: Nome, Sobrenome e uma cor para controle visual
    this.state = {
      nome: "Esmeraldo",
      sobrenome: "Junior",
      corDestaque: "#000000" // Cor inicial: Preto
    };
  }

  /**
   * Arrow Function: alterarNomeCompleto
   * Atualiza múltiplos valores no estado simultaneamente, disparando o re-render.
   */
  alterarNomeCompleto = () => {
    this.setState({
      nome: "Esmeraldo (Alterado)",
      sobrenome: "de Souza Junior",
      corDestaque: "#646cff" // Nova cor: Roxo (Vite/React)
    });
  }

  render() {
    // Desestruturação para simplificar o uso das variáveis no JSX
    const { nome, sobrenome, corDestaque } = this.state;

    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        
        {/* SEÇÃO DO ENUNCIADO: Layout padrão Esmeraldo Junior */}
        <section style={{ 
          backgroundColor: '#0e0909', 
          padding: '10px', 
          marginBottom: '20px', 
          borderLeft: '5px solid #646cff',
          color: 'white' 
        }}>
          <strong>Enunciado do Exercício:</strong>
          <p>
            Crie um componente de classe "App" com state (nome, sobrenome e corDestaque). 
            Renderize um botão "Alterar" que chama a Arrow Function "alterarNomeCompleto" 
            para atualizar os textos e a <strong>cor dos elementos</strong> na tela de forma reativa.
          </p>
        </section>

        <hr />

        {/* SEÇÃO DA RESOLUÇÃO */}
        <section style={{ marginTop: '20px', textAlign: 'center' }}>
          <h2 style={{ color: '#fdfdfd', fontSize: '1.1rem', textTransform: 'uppercase' }}>
            Resolução:
          </h2>
          
          <div style={{ 
            backgroundColor: '#ffffff', 
            padding: '30px', 
            borderRadius: '15px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            display: 'inline-block',
            marginTop: '10px'
          }}>
            {/* O estilo 'color' é vinculado diretamente à chave do state */}
            <p style={{ color: corDestaque, fontSize: '1.2rem', transition: '0.3s' }}>
              <strong>Nome:</strong> {nome}
            </p>
            
            <p style={{ color: corDestaque, fontSize: '1.2rem', transition: '0.3s' }}>
              <strong>Sobrenome:</strong> {sobrenome}
            </p>

            <button 
              onClick={this.alterarNomeCompleto}
              style={{
                marginTop: '20px',
                padding: '12px 30px',
                backgroundColor: corDestaque, // Botão também reage à cor do estado
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: '0.3s'
              }}
            >
              Alterar Dados e Cor
            </button>
          </div>
        </section>

      </div>
    );
  }
}

export default App;