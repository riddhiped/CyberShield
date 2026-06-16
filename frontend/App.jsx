import { useEffect, useState } from 'react';

export default function App() {
  const [logs,setLogs] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/api/dashboard')
      .then(r=>r.json())
      .then(setLogs);
  },[]);

  return (
    <div>
      <h1>Cyber Threat Dashboard</h1>
      {logs.map((l,i)=>(
        <div key={i}>
          {l.message} - Score: {l.threat_score}
        </div>
      ))}
    </div>
  )
}
