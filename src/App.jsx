import { useState } from "react";
import Header from "./components/Header";
import Planet from "./components/Planet";
import { useRef } from "react";
import {RiAddBoxFill} from "react-icons/ri"
import {RiDeleteBin5Line} from "react-icons/ri"
import {TfiZoomIn} from "react-icons/tfi"
import {TfiZoomOut} from "react-icons/tfi"

function App() {

  const [planets,setPlanets] = useState([
  {
    id :1,
    name:"Merkurius",
    diameter:4866
  },
  {
    id :2,
    name:"Venus",
    diameter:12106
  },
  {
    id :3,
    name:"Bumi",
    diameter:12742
  },
  ]);

  const index= useRef("4");
  const [newPlanet,setNewPlanet]= useState("");
  const [newDiameter,setNewDiameter] = useState(0);
  const [updateId,setUpdateId] = useState(0);


  return (
    <>
    <Header/>
    <main>
      <div style={{display:"flex", flexDirection:"column",gap:8}}>
        {planets.map((planet,i) => {
          return <Planet key={i} id={planet.id} name={planet.name} diameter={planet.diameter}/>
         })}
      </div>
      <div className="card">
        <label><h3>Hapus</h3></label>
      <button onClick={()=> setPlanets(planets.slice(1))}><RiDeleteBin5Line/>Hapus Depan</button>
      <button onClick={()=> 
        setPlanets(planets.slice(0,-1))}><RiDeleteBin5Line/>Hapus Belakang</button>
      <button onClick={()=> 
        setPlanets(planets.slice(0,0))}><RiDeleteBin5Line/>Hapus Semua</button>
        </div>
        <div>
          <form className="card">
        <h3>Tambah Data</h3>
        <label>
          Id:
          <input type="number" 
          value={index.current}
          onChange={(e)=> setIndex(e.target.value)}
          />
        </label>
        <label>
          Nama:
          <input type="text" 
          value={newPlanet}
          onChange={(e)=> setNewPlanet(e.target.value)}/>
        </label>
         <label>
          Diameter:
          <input 
          type="number" 
          value={newDiameter}
          onChange={(e)=>setNewDiameter(parseInt(e.target.value))}/>
        </label>
        <button onClick={(e) => {
          e.preventDefault();
          setPlanets([
            {
            id:index.current++,
            name:newPlanet,
            diameter:newDiameter
            },
            ...planets,
          ]);
        }} > <RiAddBoxFill/>Tambah Depan</button>
         <button onClick={(e) => {
          e.preventDefault();
          setPlanets([
            ...planets,
            {
            id:index.current++,
            name:newPlanet,
            diamater:newDiameter,
            },
          ]);
        }} > <RiAddBoxFill/>Tambah Belakang</button>

      </form>
        </div>
         <div>
          <form className="card">
          <label> <h3>Edit / Hapus by ID</h3></label>
          <label>
          ID:
          <input 
          type="number"
          value={updateId}
          onChange={(e)=> setUpdateId(e.target.value)}/>
           Nama :
          <input type="text"
          value ={planets.find((planet) => planet.id == updateId) ?.name || ""}
          onChange={(e) => 
           planets.map ((planet) => {
            if (planet.id == updateId){
              planet.name = e.target.value;
              setPlanets([...planets])
            }
           })
          }
          />
          Diameter
          <button onClick={(e)=>{
            e.preventDefault();
            planets.map((planet)=>{
              if(planet.id==updateId) {
                planet.diameter+=100;
                setPlanets([...planets])
              }
            })
          }}><TfiZoomIn/>Perbesar</button>
          <button onClick={(e)=>{
            e.preventDefault();
            planets.map((planet)=>{
              if(planet.id==updateId) {
                planet.diameter-=100;
                setPlanets([...planets])
              }
            })
          }}><TfiZoomOut/>Perkecil</button>
          <button onClick={(e)=>{ e.preventDefault(); setPlanets(planets.filter((i)=> i.id != updateId))}}>
            <RiDeleteBin5Line/>Hapus</button>
        </label>
        
        

          </form>
        </div>
    </main>
    <form>
      <footer>&copy; 2023 Tugas React 5 dan 6</footer>
    </form>
     </>
  );
}

export default App;
  



