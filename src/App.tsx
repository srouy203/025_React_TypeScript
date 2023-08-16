//App.tsx
import './App.css';
import TypingProps from './Component/1. TypingProps';
import StyleProps from './Component/10. StyleProps';
import ObjectProps from './Component/2. ObjectProps';
import ArrayListProps from './Component/3. ArrayListProps';
import AssignProps from './Component/4. AssignProps';
import ChildrenProps from './Component/5. ChildrenProps';
import ChildComponent from './Component/6. ChildComponent';
import OptionalProps from './Component/7. OptionalProps';
import EventProps from './Component/8. EventProps';
import HandleChangeEventProps from './Component/9. HandleChangeEventProps';
import DestructureProps from './Component/11. DestructureProps';
import ReusingProps from './Component/13. ReusingProps';
import UseStateHook from './Component/14. UseStateHook';
import UseStateFutureHook from './Component/15. UseStateFutureHook';
import UseStateTypeAssertion from './Component/16. UseStateTypeAssertion';
import UseReducerHook from './Component/17. UseReducerHook';

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
      <EventProps handleClick={(event, id)=> {console.log("Button is clicked!", event, id)}}/>
      <HandleChangeEventProps value='' handleChange={(event) => console.log(event)}/>
      <StyleProps style={{border: "5px solid green", width: "300px", textAlign: "center"}}/>
      <DestructureProps name="Ang LeangSrouy" age={21}/>
      <ReusingProps person={arrayPersonName}/>
      <UseStateHook/>
      <UseStateFutureHook/>
      <UseStateTypeAssertion/>
      <UseReducerHook/>
    </div>
  );
}

export default App;
