
import './App.css';

function App() {
const actors = [
  {nayok:'Shakib', naika: 'Apu' },
  {nayok:'Razzak', naika: 'Kobori' },
  {nayok:'Kuber', naika: 'Kopila' },
  {nayok:'BappaRaj', naika: 'Sekha' }
];
  return (
    <div className='App'>
      <div className='person'>
        <ul>
        {
          actors.map(actor =><> <li>{actor.nayok}</li>
           <p>{actor.naika}</p>
           </>
            )
        }
        </ul>
      </div>
    </div>
  );
}

export default App;

const Person = (props) => {
  console.log(props);
  const {name, profession} = props;
    return (
      <div className='person'>
        <h3>Name: {name}</h3>
        <h5>Profession: {profession} </h5>
      </div> 
    );
}

{/* <Person name="Shakib" profession= "Left hand Cricketer"></Person>
      <Person name="Musfiq" profession= "Weakit kipper Cricketer"></Person>
      <Person name="Taskin" profession= "Ballar Cricketer"></Person>
      <Person name="Mohammadullah" profession= "Batsman Cricketer"></Person> */}