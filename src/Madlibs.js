import React , {useState} from 'react';
import MadlibsForm from './MadlibsForm';
import MadlibsStory from './MadlibsStory';


const Madlibs = () => {
    // const INITAL_STATE = {
    //     name : '',
    //     verb : '',
    //     adjective : '',
    //     adverb : ''
    // }
    const [words , setWords] = useState('')


   const addWords = (newWords) => {
       setWords(words => [...words , {...newWords}])
   }

   const deleteStory = () => {
       setWords('');
   }
    return (
        <div>
            {words.length === 0 ? 
            <MadlibsForm addWords = {addWords}/> :
            <div>
                <MadlibsStory deleteStory = {deleteStory} noun = {words[0].noun} verb = {words[0].verb} adjective = {words[0].adjective} adverb = {words[0].adverb} />
                
            
            </div>
}
        </div>
    )

}


export default Madlibs;