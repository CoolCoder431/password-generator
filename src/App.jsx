import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(5);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    let str = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm";

    if (num) {
      str += "1234567890";
    }

    if (char) {
      str += "!@#$%^&*()[]{}:;?/><";
    }

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      generatedPassword += str.charAt(Math.floor(Math.random() * str.length));
    }

    setPassword(generatedPassword);
  }, [length, num, char]);

  return (
    <div>
      <input type='text' readOnly value={password}/>                    
      <br/>
      <input type='range' min={6} max={25} step={1} value={length} onChange={(e) => setLength(Number(e.target.value))} /> {length} 
      <input type='checkbox' checked={num} onChange={() => setNum(!num)} /> Numbers
      <input type='checkbox' checked={char} onChange={() => setChar(!char)} /> Special Characters
    </div>
  )
}

export default App;
