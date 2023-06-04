import { useEffect, useState } from 'react'
//import './App.css'
import axios from 'axios'
import "./style/style.scss"
import RickyMorty from './Componentes/RickyMorty'

function App() {
  const [count, setCount] = useState([])
  const [search, setsearch] = useState("")

  useEffect(() => {
    const random = Math.floor(Math.random() * 126) + 1
    axios.get(`https://rickandmortyapi.com/api/location/${random}`)
      .then(res => setCount(res.data))
  }, [])
  console.log(count)

  const setRickAndMorty = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${search}`)
      .then(res => setCount(res.data))
  }
  const longitud = count.residents?.length
  return (
    <div className="Container">
      <div className='Container__Header'>
        <div className='Container__ImgRicky'>
          <img src="https://static.eldiario.es/clip/26ae8af7-5175-4695-8398-dc91f7960f37_facebook-aspect-ratio_default_0.jpg" alt="" />
        </div>
        <div className='Container__Input'>
          <section>

          <input className='Container__InputValue' type="text"
            placeholder='Type a Location id '
            value={search} onChange={e => setsearch(e.target.value)}
          />
          </section>
          <section>
          <button className='Container__Buton' onClick={setRickAndMorty}>  <i className="fa-solid fa-magnifying-glass"></i>  </button>

          </section>
        </div>

          <h1 className='Container__Title'>{count?.name}</h1>
        <div className='Container__Text'>
          <div className='Container__Type'>

            <h2> <span>Type:</span>  {count.type}   </h2>
            <h2> <span>Dimension:</span> {count.dimension} </h2>
            <h2> <span>Population:</span> {longitud} </h2>
          </div>
        </div>
        <div className='CardMorty'>
          {
            count.residents?.map(cou => (
              <RickyMorty ricky={cou} key={cou} />
            ))
          }
        </div>
      </div>
    </div>
  )
}


export default App


{ }

