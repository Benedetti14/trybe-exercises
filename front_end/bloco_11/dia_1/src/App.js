import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const arr = ['Acordar', 'Tomar cafe', 'Lavar a louça', 'Estudar'];

function App() {
  return (
    <ul>
      {arr.map((task, i) => Task(task))}
    </ul>
  );
}

export default App;
