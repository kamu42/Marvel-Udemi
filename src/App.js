import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home';
import Series from './components/pages/Series';
import Comics from './components/pages/Comics';
import Error404 from './components/pages/Error404';

function App() {
  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/Inicio" element= {<Home/>}/>
        <Route path="/series" element= {<Series/>}/>
        <Route path="/comics" element= {<Comics/>}/>
        <Route component={<Error404/>}/>
      </Routes>
    </BrowserRouter> Web app whith React to make request to Marvel API
   </div>
  );
}

export default App;
