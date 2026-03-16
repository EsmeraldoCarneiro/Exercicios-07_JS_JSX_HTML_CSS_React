import React, { Component } from 'react';

/**
 * Componente Nome
 * Recebe valores via props para inicializar e alterar seu estado interno.
 */
class Nome extends Component {
  constructor(props) {
    super(props);

    // Inicializamos o state usando uma prop enviada pelo componente pai (App)
    this.state = {
      nome: this.props.nome_inicial
    };
  }

  /**
   * Função cmd_click
   * Altera o estado interno para o valor contido na prop 'nome_final'
   */
  cmd_click = () => {
    this.setState({
      nome: this.props.nome_final
    });
  }

  render() {
    return (
      <div style={{ 
        padding: '15px', 
        margin: '10px 0', 
        border: '1px solid #ddd', 
        borderRadius: '8px',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span style={{ fontSize: '1.1rem', color: '#2c3e50' }}>
          <strong>Nome:</strong> {this.state.nome}
        </span>

        <button 
          onClick={this.cmd_click}
          style={{
            padding: '5px 15px',
            backgroundColor: '#646cff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Alterar
        </button>
      </div>
    );
  }
}

export default Nome;