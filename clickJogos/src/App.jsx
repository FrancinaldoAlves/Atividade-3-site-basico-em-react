import './App.css'

function App() {
  return (
    <>
      <div className="cabecalho">
        <div className="topo">
          <span className="logo">ClickJogos</span>

          <div className="busca">
            <label htmlFor="input">BUSCAR JOGOS</label>
            <input type="text" id="input" placeholder="" />
          </div>
        </div>
      </div>

      <nav className="menu">
        <ul>
          <li>TOP JOGOS</li>
          <li>Ação e Aventura</li>
          <li>Carros</li>
          <li>Esportes</li>
        </ul>
      </nav>

      <div className="categorias">
        <ul>
          <li>👧 Meninas</li>
          <li>🚗 Carros</li>
          <li>🥋 Esportes</li>
          <li>⚽ Futebol</li>
          <li>🏁 Corrida</li>
        </ul>
      </div>

      <main className="conteudo">
        <div className="titulo">
          <span>Jogos em Destaque</span>
        </div>

        <div className="lista-jogos">
          <div className="card-jogo">
            <img src="/moto.jpg" alt="Moto Racer" />
            <h3>Moto Racer</h3>
            <p>Jogo de corrida de moto muito divertido e radical</p>
          </div>

          <div className="card-jogo">
            <img src="/carro.jpg" alt="Street Rod 2" />
            <h3>Street Rod 2</h3>
            <p>Jogo de carro insano</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
