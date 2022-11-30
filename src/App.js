import { useState, useEffect } from "react";

export default function App() {
 const [data, setData] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
  async function getData(){
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=8`
      )
    
    console.log(await response.json())
  }
  getData()
}, []);

return (
  <div className="App">
    <h1>API Posts</h1>
    
  </div>
);



 
}