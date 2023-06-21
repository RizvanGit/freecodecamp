import './App.css'
import Header from './components/Header/Header'
import { CampSite } from './components/lessons/defaultProps'
import Task from './components/lessons/task'

function App() {
  return (
    <>
      <Header />
      <Task />
      <CampSite />
    </>
  )
}

export default App
