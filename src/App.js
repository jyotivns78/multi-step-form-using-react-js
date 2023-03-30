import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MultiStepForm from './Components/MultiStepForm/MultiStepForm';

function App() {
  return (
    <div className="App">
   <Router>
    <Routes>
      <Route path="/" element={ <MultiStepForm /> } />
    </Routes>
   </Router>
   </div>
  );
}

export default App;
