import logo from './logo.svg';
import './App.css';
import TodoListForm from './TodoListForm';
import Todos from './Todos';

function App() {
  return (
    <div className="App">
      <TodoListForm />
      <Todos />
    </div>
  );
}

export default App;
