import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DemoForm from './components/demoForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div className='Outer-Form'>
      <div className='inner-app'>
        <h5>Contact Us</h5>
        <h2>Make an Appointment</h2>
      </div>
      <DemoForm/>
      </div>
    </div>
  )
}

export default App
