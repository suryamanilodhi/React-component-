
import './App.css';
import Functional from './component/Functional';
import Classcomp from './component/Classcomp';
import Counter from './component/count';
import Count2 from './component/Count2';
function App() {
  return (
    <div>
      <h1>welcome</h1> 
      <Functional name='athira'/>
      <Functional name='athira1'/>
      <Functional name='athira2'/>
      <Classcomp/>
      <Counter/>
      <Count2/>
    </div>
  
  );
}

export default App;
