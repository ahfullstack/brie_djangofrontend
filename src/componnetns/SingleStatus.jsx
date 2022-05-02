import {useState} from 'react'
import EditStat from './EditStat';
function SingleStatus ({stat,editStat,deleteStatus}){

    const [showForm, setShowForm]= useState(false)
    const handleShow = ()=>{
        setShowForm(!showForm)
    }
  return (
    <div>
        <p>{stat.name || 'Anonymous'}</p>
        <p>{stat.description || 'No Description'}</p>
        <ul>
            <li>Feelings : {stat.feelings}</li>
            <li>Worries : {stat.worries}</li>
            <li>Troubles : {stat.troubles}</li>
            <li>Fears : {stat.fears}</li>
        </ul>
        <button onClick={()=>deleteStatus(stat.id)}>delete</button>
        <button onClick={handleShow}>Edit?</button>
       {showForm && <EditStat editStat={editStat} stat={stat} handleShow={handleShow}/>}
    </div>
  )
}
export default SingleStatus;