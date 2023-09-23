
import './App.css';
import Person from './Person';
import Button from './Button';
import Header from './Header';
import List from './List';

function App() {
  return (

<>

   <Person name="Precost" age="20" />
   <Button text="Click here!" onClick = {() => console.log("button clicked")} />
   <Header title="Welcome to react!" />
   <List items={['apple', 'banana', ]} />
    </>
  );
}

export default App;
