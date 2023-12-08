import './components/MyButton'
import Persons from './components/persons';
import MyButton from './components/MyButton';

function App() {
  const name = 'Arocha';
  const element = <h1>Hello Niggas {name}</h1>
  
  const user = {
    firstName: "Carl Stephen",
    lastName: "Arocha"
  }
  const formatName = (user) =>  {
    return user.firstName + ' ' +user.lastName;
  }

  //Arrays Map()
  const cities = ['Manila', 'Los Baños', 'Calamba', 'San Pablo'];
  //Arrays Filter()
  const newCities = cities.filter(city => city !== 'San Pablo');
  


  return (
    <>
      {element}
      <h1>Hello, {formatName(user)}</h1>
      <MyButton/>
      <h1>List</h1>
  <ul className="list-group">
    {newCities.map((city, index) => (<li className='list-group-item' key={index}>{city}</li>))}
  </ul>
  <hr/>
  <Persons />
    </>
  )
  
}
export default App
