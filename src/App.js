import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import MatchesCard from './components/MatchesCard';
import MatchLive from './components/MatchLive';
import { StoreProvider } from 'easy-peasy';
import stor from './store/stor'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [Data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await axios('https://www.scorebat.com/video-api/v1/')

      
      setData(data.data)
    }

    getData()
  }, [])

  return (
    <StoreProvider store={stor} >
      <div className="App">
      <Router>
       
        <Route path="/live" component={MatchLive}   />
         
         

        <Route    path="/" exact   >
          <MatchesCard  data={Data} />
        </Route>
         
        
         


        
        
      </Router>

        

      </div>
    </StoreProvider>
  );
}

export default App;
