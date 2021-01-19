import './App.css';
import Card from './components/Card'
import Counter from './components/Counter'
import Form from './components/Form'

function App() {
  return (
    <div className="App">
      {/* <Counter initial_value={10}/> */}
      <Card
        profile_pic='profile-picture.png'
        name="Walisson Silva"
        email="email@email"
        phone="1111-1111"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Card>
      <Form />
    </div>
  );
}

export default App;
