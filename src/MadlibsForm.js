import React , {useState} from 'react';



const MadlibsForm = ({addWords}) => {
const INITAL_STATE = {
    noun: '',
    verb : '',
    adjective : '',
    adverb : ''
};

const [formData , setFormData] = useState(INITAL_STATE);

const handleChange= (e) => {
    const {name ,value } = e.target;
    setFormData(formData => ({
        ...formData,
        [name] : value
    }))
}


const handleSubmit = (e) => {
    e.preventDefault();
    addWords({...formData})
    setFormData(INITAL_STATE);
}


return (
    <div>
        <h3>MadLibs!</h3>
        <form onSubmit = {handleSubmit}>
          
            <input 
            id = 'noun'
            data-testid = 'noun'
            type = 'text'
            name = 'noun'
            placeholder='Noun'
            value = {formData.noun}
            onChange = {handleChange}
            />
            <br />
           
            <input 
            id = 'verb'
            data-testid = 'verb'
            type = 'text'
            name = 'verb'
            placeholder='verb'
            value = {formData.verb}
            onChange = {handleChange}
            />
            <br />
           
            <input 
            id = 'adjective'
            data-testid = 'adjective'
            type = 'text'
            name = 'adjective'
            placeholder='adjective'
            value = {formData.adjective}
            onChange = {handleChange}
            />
            <br />
            
            <input 
            id = 'adverb'
            data-testid = 'adverb'
            type = 'text'
            name = 'adverb'
            placeholder='adverb'
            value = {formData.adverb}
            onChange = {handleChange}
            />
            <br />
            <button>Create Story!</button>
          
           
        </form>
    </div>
)


}


export default MadlibsForm;