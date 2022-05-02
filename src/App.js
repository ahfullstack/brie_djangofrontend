import './App.css';
import { useState, useEffect } from 'react';
import NewForm from './componnetns/NewForm';
import APILink from './apiConfig';
import { AllStatus } from './componnetns/AllStatus';
function App() {
  const [showForm, setShowForm]= useState(false)
  const handleShow = ()=>{
    setShowForm(!showForm)
  }
  const [status, setStatus] = useState([])
  const [newForm, setNewForm] = useState({
    feelings: "",
    worries: "",
    troubles: '',
    fears: '',
    name: "",
    description: "",
  })
  const handleChange =(e)=>{
    setNewForm({
      ...newForm,
      [e.target.name]: e.target.value
    })
  }
  
  const makeNewForm = async(form)=>{

    try {
      const request = await fetch(`${APILink}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })
      if(request.ok===true){
        const response = await request.json()
        setStatus([response,...status])
    }
  
    } catch (error) {
      console.log(error)
    }
  }
  const getStatus = async()=>{
    try {
      const request = await fetch(`${APILink}`)

      if(request.ok===true){
        const response = await request.json()
        setStatus(response)
    }
    } catch (error) {
      console.log(error)
    }
  }
  const deleteStatus = async(id)=>{
    try {
      const request = await fetch(`${APILink}/${id}`,{
        method: "DELETE",
       })
   
      if(request.ok===true){
        const newStats = status.filter((stat)=> stat.id !== id)
        setStatus(newStats)
      } console.log(request)
    } catch (error) {
      console.log(error)
    }
  }

  const editStat = async(form, id)=>{

    console.log(id)
    try {
      const request = await fetch(`${APILink}/${id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })
      const response = await request.json()
      if(request.ok === true){
        const newStats = status.map((stat)=> stat.id !== id ? stat : response)
        setStatus(newStats)
      }
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    getStatus()
  }, [])
  return (
    <div className="App">
      {!showForm && <button onClick={()=>handleShow()}>Make New One</button>}
      { showForm && <NewForm  handleShow={handleShow} makeNewForm={makeNewForm} newForm={newForm} handleChange={handleChange}/>}
      <AllStatus deleteStatus={deleteStatus} status={status} editStat={editStat}></AllStatus>
    </div>
  );
}

export default App;