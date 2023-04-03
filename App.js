import './App.css';
import  Day5 from './Day5';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Day5 a={["chocalate","icecream","fruits","Cookies"]}/>
      </ErrorBoundary>
    </div>
  );
}

export default App;