import logo from './logo.svg';
import './App.css';
import Data from './Data';
import Props from './Props';
import Function from './Function';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [no, setNo] = useState(0);
  const Add = () => {
    setNo(
      no + 10
    );
  }
  const minus = () => {
    setNo(
      no - 10
    );
  }
  const [number, setNumber] = useState(0);
  const plus = () => {
    setNumber(
      number + 10
    );
  }
  const mians = () => {
    setNumber(
      number - 10
    );
  }
  return (
    <>
      <Props
        record={Data}
        btn={Add}
        button={minus}
        no={no}
      />
      <Function
        record={Data}
        button={plus}
        mians={mians}
        number={number}
      />
    </>
  );
}

export default App;
