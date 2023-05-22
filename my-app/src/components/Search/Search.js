/*import React, {useState, useEffect} from 'react'
import Game from "../GameItem/GameItems"
const Search = () => {
  const [games, setGames] = useState([])
  const [search, setSearch] = useState("")

  const showData = async () => {
    const response = await fetch(Game)
    const data = await response.json()
    //console.log(data)
    setGames(data)
  }

  const searcher = (e) => {
    setSearch(e.target.value)
    //console.log(e.target.value)
  }
  //const filteredGames = Game.filter(game => game.gameTitle.toLowerCase().includes(search.toLowerCase()));
  const results = !search ? Game : Game.filter((dato)=> dato.gameTitle.toLowerCase().includes(search.toLocaleLowerCase()))

  useEffect( ()=> {
    showData()
  }, [])
  
    return (
    <div>
        <input value={search} onChange={searcher} type="text" placeholder='Search' className='form-control'></input>
        <ul>
          {results.map(game => (<li>{game.gameTitle}</li>))}
        </ul>
    </div>
  )
}

export default Search
*/