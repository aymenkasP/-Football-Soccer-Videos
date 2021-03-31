import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import MatchesCard from './components/MatchesCard';
import MatchLive from './components/MatchesCard';
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

      console.log(data.data)
      setData(data.data)
    }

    getData()
  }, [])

  return (
    <StoreProvider store={stor} >
      <div className="App">
      <Router>
        <Switch>
        <Route path="/" >
         <MatchesCard data={Data} /> 
         </Route>
         <Route path="/live" >
         <MatchLive data={Data} /> 
         </Route>


        </Switch>
        
      </Router>

        

      </div>
    </StoreProvider>
  );
}

export default App;
