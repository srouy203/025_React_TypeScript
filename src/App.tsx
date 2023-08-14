import './App.css';
import TypingProps from './Component/1. TypingProps';
import ObjectProps from './Component/2. ObjectProps';
import ArrayListProps from './Component/3. ArrayListProps';
import AssignProps from './Component/4. AssignProps';
import ChildrenProps from './Component/5. ChildrenProps';
import ChildComponent from './Component/6. ChildComponent';
import OptionalProps from './Component/7. OptionalProps';

function App() {
  const personName = {
    name: "Ronaldo",
    age: 20
  }
  const arrayPersonName = [
    {
      fname: "Sok",
      lname: "Chanda"
    },
    {
      fname: "Meas",
      lname: "Hannah"
    },
    {
      fname: "Sela",
      lname: "David"
    }
  ]
  return (
    <div className="App">
      <h1 style={{textAlign: "center"}}>React TypeScript</h1>
      <TypingProps name="Ang LeangSrouy" age={20} logStatus={true}/>
      <ObjectProps person={personName}/>
      <ArrayListProps personName={arrayPersonName}/>
      <AssignProps status="loading"/>
      <ChildrenProps>Hello welcome to Srouy remix!</ChildrenProps>
      <ChildComponent>
        <h3>Ocar will go to LeangSrouy for this year!</h3>
      </ChildComponent>
      <OptionalProps name="LeangSrouy" sex="Male" /* age={21} *//>
    </div>
  );
}

export default App;
