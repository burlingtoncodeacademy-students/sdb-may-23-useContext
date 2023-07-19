import { useState, useContext, createContext, useEffect } from 'react'
import './App.css'
import Main from './components/Main'

export const Context = createContext()

function App() {

  const [ treasure, setTreasure ] = useState(false)
  console.log(treasure)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
      .then(res => res.json())
      .then(d => setTreasure(d.name))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
    <Context.Provider value={ [ treasure, setTreasure ] }>
      <Main treasure={treasure} />
    </Context.Provider>
    </>
  )
}

export default App
