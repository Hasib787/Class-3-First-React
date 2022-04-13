
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
        {
          actors.map(actor => <Person nayok={actor.nayok} naika={actor.naika}></Person>)
        }
    </div>
  );
}

export default App;

const Person = (props) => {
  console.log(props);
  const {nayok, naika} = props;
    return (
      <div className='person'>
        <h3>Name: {nayok}</h3>
        <h5>Profession: {naika} </h5>
      </div> 
    );
}

{/* <Person name="Shakib" profession= "Left hand Cricketer"></Person>
      <Person name="Musfiq" profession= "Weakit kipper Cricketer"></Person>
      <Person name="Taskin" profession= "Ballar Cricketer"></Person>
      <Person name="Mohammadullah" profession= "Batsman Cricketer"></Person> */}