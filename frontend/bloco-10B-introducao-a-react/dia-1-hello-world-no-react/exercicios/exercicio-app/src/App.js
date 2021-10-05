import logo from './logo.svg';
import './App.css';

const taskArray = ['Estudar', ' Fazer exercícios', ' Jogar New World'];

function App() {
  return (
    Task(taskArray.map((e) => e))
  );
}

const Task = (value) => {
  return (
    <li>{ value }</li>
  );
}

export default App;
