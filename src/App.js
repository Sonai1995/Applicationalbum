import React, {useState, useEffect} from 'react'
import axios from 'axios'
import SearchBar from 'material-ui-search-bar';
import Home from './Components/Home'

function App() {

    const [album, setAlbum] = useState([])
    const [photo, setPhoto] = useState([])
    const [state, setState] = useState('')
  
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/albums').then(json => setAlbum(json.data));
      axios.get('https://jsonplaceholder.typicode.com/photos').then(json => setPhoto(json.data));
    }, [])
    
    function searchfn(datas) {
      //console.log(qry);
      return datas.filter((dd) => dd.title.toLowerCase().indexOf(state) > -1);
    }
      
  return (
    <>
        <SearchBar
          value={state}
          onChange={(value) => setState(value)}
          onRequestSearch={searchfn}
          style={{
            margin: '0 auto',
            maxWidth: 800
          }}
        />
        <Home album={album} photo={searchfn(photo)} />             
    </>    
  )
}

export default App