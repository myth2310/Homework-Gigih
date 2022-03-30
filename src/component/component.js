import '../../src/App.css';
// import Home from './pages/home/indexx';
import Data from './data';

  
function Card() {
    return (
        <div className="App">
            <header className="App-header">
          <div className='search'>
              <input placeholder='Search...'></input>
              <button>Search</button>
         </div>
         
         {Data.map((data) => (  
        <div className="playlist-container">
          <div className="playlist-item">
            <img
              className="playlist-image"
              src={data.album.images[0].url}
              alt="playlist"
            />
            <div className="playlist-content">
              <h2 className="playlist-title">{data.album.name}</h2>
              <div className='desc'>
              <p>{data.artists[0].name}</p>
              <p>{data.album.total_tracks} Songs</p>
              </div>
            </div>
            <div className="playlist-actions">
              <button className="playlist-action" id=''><a href={data.external_urls.spotify}>Select</a></button>
            </div>
          </div>
        </div>
       ))}  

        
         </header>
        </div>
    );
}

export default Card;