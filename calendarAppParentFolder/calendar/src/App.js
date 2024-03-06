import logo from './logo.svg';
import Banner from './components/Banner/Banner';
import CalandarMain from './components/CalandarMain/CalandarMain';
import './App.css';

function App() {
  const monthsAndDays = {
    "January": 31,
    "February": 28,
    "March": 31,
    "April": 30,
    "May": 31,
    "June": 30,
    "July": 31,
    "August": 31,
    "September": 30,
    "October": 31,
    "November": 30,
    "December": 31,
}






  return (
    <div className="App">
      <Banner/>
      <CalandarMain monthsAndDays={monthsAndDays}/>



    </div>
  );
}

export default App;
