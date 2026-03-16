import './App.css'
import React, { Component } from 'react';

/**
 * Componente App (Classe)
 * Gerencia a alteração de nome e sobrenome através de uma Arrow Function.
 */
class App extends Component {
  // Inicialização do estado no Constructor
  constructor(props) {
    super(props);

    this.state = {
      nome: "Esmeraldo",
      sobrenome: "Junior"
    };

    // Nota: Como vamos usar Arrow Function para o método, 
    // não precisamos de 'this.alterarNomeCompleto = this.alterarNomeCompleto.bind(this)'
  }

  /**
   * Arrow Function: alterarNomeCompleto
   * As Arrow Functions herdam o contexto do 'this' automaticamente,
   * facilitando a chamada do setState sem a necessidade de bind.
   */
  alterarNomeCompleto = () => {
    // Alterando as duas chaves do estado simultaneamente
    this.setState({
      nome: "Esmeraldo (Alterado)",
      sobrenome: "de Souza Junior"
    });
  }

  render() {
    // Desestruturação para facilitar a leitura no JSX
    const { nome, sobrenome } = this.state;

    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        
        {/* SEÇÃO DO ENUNCIADO: Padrão visual Esmeraldo Junior */}
        <section style={{ 
          backgroundColor: '#0e0909', 
          padding: '10px', 
          marginBottom: '20px', 
          borderLeft: '5px solid #646cff',
          color: 'white' 
        }}>
          <strong>Enunciado do Exercício:</strong>
          <p>
            Crie um componente de classe "App" com state (nome e sobrenome). 
            Renderize um botão "Alterar" que chama a Arrow Function "alterarNomeCompleto" 
            para atualizar os valores na tela.
          </p>
        </section>

        <hr />

        {/* SEÇÃO DA RESOLUÇÃO */}
        <section style={{ marginTop: '20px', textAlign: 'center' }}>
          <h2 style={{ color: '#ffffff', fontSize: '1.1rem', textTransform: 'uppercase' }}>
            Resolução:
          </h2>
          
          <div style={{ 
            backgroundColor: '#f4f4f4', 
            padding: '20px', 
            borderRadius: '10px',
            display: 'inline-block',
            marginTop: '10px'
          }}>
            <p><strong>Nome:</strong> {nome}</p>
            <p><strong>Sobrenome:</strong> {sobrenome}</p>

            {/* Evento de clique chamando a Arrow Function */}
            <button 
              onClick={this.alterarNomeCompleto}
              style={{
                marginTop: '15px',
                padding: '10px 25px',
                backgroundColor: '#646cff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Alterar
            </button>
          </div>
        </section>

      </div>
    );
  }
}

export default App;