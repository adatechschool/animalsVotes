import { useState } from 'react'

import './App.css'

function App() {
  const animals = [
    { name: 'Chat', emoji: '🐱' },
    { name: 'Chien', emoji: '🐶' },
    { name: 'Lapin', emoji: '🐰' },
    { name: 'Hérisson', emoji: '🦔' },
    { name: 'Panda', emoji: '🐼' },
    { name: 'Koala', emoji: '🐨' },
  ];
  const [count, setCount] = useState(0)
  const [animal, setAnimal]=useState(animals[0])
  const [message, setMessage]=useState('Votez pour votre animal préféré')

  function voteForAnimal(){
    const ramdomIndex = Math.floor(Math.random() * animals.length)
    const newAnimal = animals[ramdomIndex]
    console.log(ramdomIndex)
    setAnimal(newAnimal)
    setMessage(`A voté pour ${newAnimal.name} ${newAnimal.emoji} !`);
  }

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Élection des Animaux</h1>
      <p>{message}</p>
      <button onClick={(voteForAnimal)}>Vote</button>
    
      <div
        style={{
          fontSize: '100px',
          margin: '20px auto',
        }}
      >
      {animal.emoji}
      </div>
    
      </div>
      
      
    </>
  )
}

export default App
