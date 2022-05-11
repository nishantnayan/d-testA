import CreditCardForm from "../src/components/CredtCardForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <CreditCardForm />
      </GlobalProvider>
    </div>
  );
}

export default App;
