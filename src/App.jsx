import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Header/Hero/Hero'
import MainSection from './components/MainSection/MainSection'

function App() {
  const [progressTasks, setProgressTasks] = useState([]);

  const handleProgressTasks = (progressCardData) => {
    const newTask = [...progressTasks, progressCardData];
    const exist = progressTasks.find(d => d.id === progressCardData.id);
    if (exist) {
      return;
    }
    setProgressTasks(newTask);
  }

  return (
    <>
      {/* Header */}
      <header>
        <Header></Header>
      </header>

      {/* Main */}
      <main className='bg-amber-50'>
        <Hero progressTasks={progressTasks}></Hero>
        <MainSection
          progressTasks={progressTasks}
          handleProgressTasks={handleProgressTasks}></MainSection>
      </main>

      {/* Footer */}
      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App
