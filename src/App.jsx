import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import MainSection from './components/MainSection/MainSection'

function App() {


  return (
    <>
      {/* Header */}
      <header>
        <Header></Header>
      </header>

      {/* Main */}
      <main>
        <MainSection></MainSection>
      </main>

      {/* Footer */}
      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App
