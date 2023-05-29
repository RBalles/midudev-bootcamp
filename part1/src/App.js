import './App.css';
import Mensaje from './Mensaje'

const Description = () => {
  return <p>
  Esta es la app del curso Fullstack bootcamp
  </p>
}

function App() {
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando' />
      <Mensaje color='green' message='en un curso' />
      <Mensaje color='blue' message='de REACT' />
      <Description />
    </div>
  );
}

export default App;
