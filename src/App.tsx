import './App.css'
import infoCards from '../data.json'
import Card from './components/Card'

function App() {

  return (
    <div className='flex gap-4'>
      {infoCards.map((infoCard) => 
        <Card cardInfo={infoCard} key={infoCard.name}/>
      )}
    </div>
  )
}

export default App
