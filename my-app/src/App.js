import logo from './logo.svg';
import './App.css';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';

function App() {
  return (
    <div className="App">
        <StatefulGreetingWithPrevState />
        <EventsFunctional />
        <EventsClass />
    </div>
  );
}

export default App;
