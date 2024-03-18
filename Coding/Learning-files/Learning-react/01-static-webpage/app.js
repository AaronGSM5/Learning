import Header from "./Header.js";

function Footer() {
  return (
    <footer className="footer">C 2024 Gaßmann development. All rights reserved </footer>
  )
}

function List() {
  return(
    <div className="list">
      <h1>Why i want to learn React:</h1>
      <ol>
        <li>Its good for my Job</li>
        <li>Its a better way to make a Frontend Website</li>
      </ol>
    </div>
  )
}

function App() {
  return (
    <div>
      <Header/>
      <List/>
      <Footer/>
    </div>
  )
}

ReactDOM.render(<App/>, document.querySelector('#root'))