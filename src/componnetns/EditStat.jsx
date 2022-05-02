import {useState} from 'react'

function EditStat(props) {
    const nums = [1,2,3,4,5]
    const [edit, setEdit] = useState({
        name: props.stat.name,
        description: props.stat.description,
        feelings: props.stat.feelings,
        worries: props.stat.worries,
        troubles: props.stat.troubles,
        fears: props.stat.fears,
        id: props.stat.id
    })

    const handleChange =(e)=>{
        setEdit({
            ...edit,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSumbit = (e)=>{
        e.preventDefault()
        props.editStat(edit, edit.id)
        props.handleShow()
    }
  return (
    <div>
        <button onClick={props.handleShow}>hide</button>
        <form onSubmit={handleSumbit}>
            <label htmlFor="feelings">Feelings</label>
            <select 
            name="feelings"
            id=""
            required 
            value={edit.feelings}
            onChange={(e)=> handleChange(e)}
            >
                <option></option>
                {nums.map((num)=>{
                    return <option key={`feelings${num}`}value={num}>{num}</option>
                })
    
                }
            </select><br />
            <label htmlFor="worries">Worries</label>
            <select 
            name="worries"
            id=""
            required
            value={edit.worries}
            onChange={(e)=> handleChange(e)}
            >
                <option></option>
                {nums.map((num)=>{
                    return <option key={`worries${num}`}value={num}>{num}</option>
                })
    
                }
            </select><br />
            <label htmlFor='troubles'>Troubles</label>
            <select 
            name="troubles"
            id=""
            required
            value={edit.troubles}
            onChange={(e)=> handleChange(e)}
            >
                <option></option>
                {nums.map((num)=>{
                    return <option key={`troubles${num}`}value={num}>{num}</option>
                })
    
                }
            </select><br />
            <label htmlFor='fears'>Fears</label>
            <select 
            name="fears"
            id=""
            required
            value={edit.fears}
            onChange={(e)=> handleChange(e)}
            >
                <option></option>
                {nums.map((num)=>{
                    return <option key={`feelings${num}`}value={num}>{num}</option>
                })
    
                }
            </select><br />
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="" value={edit.name} onChange={(e)=>handleChange(e)} />

            <label htmlFor="description">Description</label>
            <textarea 
            name="description" 
            id="" cols="30" rows="10" 
            value={edit.description} 
            onChange={(e)=>handleChange(e)} 
            /><br />
            <button>Sumbit</button>

        </form>
    </div>
  )
}

export default EditStat