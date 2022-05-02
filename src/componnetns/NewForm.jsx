import React from 'react'

const NewForm = (props) => {
    const nums = [1,2,3,4,5]
    const handleSumbit = (e)=>{
        e.preventDefault()
        props.makeNewForm(props.newForm, props.newForm)
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
            value={props.newForm.feelings}
            onChange={(e)=> props.handleChange(e)}
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
            value={props.newForm.worries}
            onChange={(e)=> props.handleChange(e)}
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
            value={props.newForm.troubles}
            onChange={(e)=> props.handleChange(e)}
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
            value={props.newForm.fears}
            onChange={(e)=> props.handleChange(e)}
            >
                <option></option>
                {nums.map((num)=>{
                    return <option key={`feelings${num}`}value={num}>{num}</option>
                })
    
                }
            </select><br />
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="" value={props.newForm.name} onChange={(e)=>props.handleChange(e)} />

            <label htmlFor="description">Description</label>
            <textarea 
            name="description" 
            id="" cols="30" rows="10" 
            value={props.newForm.description} 
            onChange={(e)=>props.handleChange(e)} 
            /><br />
            <button>Sumbit</button>

        </form>
    </div>
  )
}

export default NewForm;