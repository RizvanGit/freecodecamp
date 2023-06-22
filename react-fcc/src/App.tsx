import './App.css'
import Header from './components/Header/Header'
import MyComponentSetState from './components/lessons/ClassCompSetState'
import MyComponent from './components/lessons/ClassComponentWState'
import ControlledInput from './components/lessons/ControlledInput'
import ParentComponent from './components/lessons/PassStateTiChild'
import ParentComponent2 from './components/lessons/ShareStateToChilds'
import ToggleComponent from './components/lessons/ToggleClassState'
import { CampSite } from './components/lessons/defaultProps'
import Task from './components/lessons/task'

function App() {
  return (
    <>
      <Header />
      <Task />
      <CampSite />
      <MyComponent />
      <MyComponentSetState />
      <ToggleComponent />
      <ControlledInput />
      <ParentComponent />
      <ParentComponent2 />
    </>
  )
}

export default App
