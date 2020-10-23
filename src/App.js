import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter, BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AlbumDetails from './components/AlbumDetails'


function App() {
  
  const [ playlist, setPlaylist ] = useState('Beyonce')
  const [music, saveMusic ] = useState({ data: []})
  useEffect(() => {
    console.log('new playlist')
    fetch(`https://rapidapi.p.rapidapi.com/search?q=${playlist}`, {
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "45ea72d0cbmsh5a68a7ddaa76fefp17c953jsn0a280e030350"
          }
        })
        .then(response => response.json())
        .then(json => saveMusic(json))
       
  
  }, [playlist])
  console.log(music)
  return (
   <>

    <Container>
       <h2 style={{padding: '20px'}}>useEffect practice</h2>
      <div style={{display: 'flex', justifyContent: 'center'}}>
       <button className='btn mr-3' onClick={() => setPlaylist('Beyonce')}>Playlist 1</button>
       <button className='btn' onClick={() => setPlaylist('Eminem')}>Playlist 2</button>
       <button className='btn ml-3' onClick={() => setPlaylist('AC/DC')}>Playlist 3</button>
       </div>
      
         <h2 style={{margin: '30px'}}>{playlist}</h2>
         <Row  style={{textAlign: 'center'}}>
         { music.data.map(i => {
           return (
             <>
             
             <Col lg={3} md={4} sm={12}>
                  <img className='cover_album' style={{width: '200px'}} src={i.album.cover_big} />
                 
                   <h6 className='hoverEffect' style={{background: '#55efc4', margin: '10px auto', padding: '10px', borderRadius: '50px', width: '80%'}}>{i.title}</h6>
             </Col>      
             </>
           )
         })}
       </Row>
    </Container>

    </>
  );
}

export default App;
