import './App.css';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="ToDo-main">
      <div className="ToDo-form">
        <ToDoList/>
      </div>
      <div className="ToDo-footer">ToDoList WebApp - Developed by Elmerrr 2021</div>
    </div>
  );
}

export default App;
