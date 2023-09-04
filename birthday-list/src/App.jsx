import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './list'
import data from './data'




function App() {
  const [people, setPeople] = useState(data) //ต้องใส่สิ่งที่จะให้เเสดงในวงเล็บ
  const clearAll = () =>{
    setPeople([])//กำหนดค่า people ให้เป็น [] เพื่อกำหนดค่าอาเล่ให้ว่าง
  }

  return (
    
   
    <div>
      <h1>workshop 1 birthday-list</h1><br/>
      <main>
        <section className='container'>
          <h3>{people.length}birthday</h3>
          <h3>Birthday</h3>
            
          <List people = {people}/>
            
          <button onClick={clearAll}>clear all</button> 
          
          
        </section>
      </main> 
    </div>
    
  )
}

export default App
