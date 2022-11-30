import { useEffect } from "react";
import Typewriter from 'typewriter-effect';


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

      <Typewriter
        options={{
          strings: ['Hello', 'I\'m Luan'],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  )

}