import './App.css'
import React, { Component } from 'react';
import Nome from './Nome';

class App extends Component {
  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        
        {/* SEÇÃO DO ENUNCIADO: Padrão Esmeraldo Junior */}
        <section style={{ 
          backgroundColor: '#0e0909', 
          padding: '10px', 
          marginBottom: '20px', 
          borderLeft: '5px solid #646cff',
          color: 'white' 
        }}>
          <strong>Enunciado do Exercício:</strong>
          <p>
            Crie os componentes "Nome" e "App". O componente "Nome" deve inicializar o state com 
            <strong> nome_inicial</strong> e alterar para <strong>nome_final</strong> via props. 
            Reutilize o componente 3x no App.
          </p>
        </section>

        <hr />

        {/* SEÇÃO DA RESOLUÇÃO */}
        <section style={{ marginTop: '20px' }}>
          <h3>Exercício 2</h3>
          
          {/* Primeira Chamada */}
          <Nome nome_inicial="Janaine" nome_final="Cristiane" />
          
          {/* Segunda Chamada */}
          <Nome nome_inicial="Ana" nome_final="Clara" />
          
          {/* Terceira Chamada */}
          <Nome nome_inicial="Maria" nome_final="Eduarda" />
          
        </section>

      </div>
    );
  }
}

export default App;