import { useEffect } from "react";

export default function App() {

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
    <h2>Git changes</h2>
  </div>
);



 
}