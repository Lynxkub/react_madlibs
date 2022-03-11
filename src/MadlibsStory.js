import React from 'react';


const MadlibsStory = ({noun , verb , adjective , adverb , deleteStory}) => {

    const handleClick = () => {
        deleteStory();

    }
    return(
        <div>
            <p>{`The ${adjective} ${noun} likes to ${verb} their friend ${adverb}`}</p>
            <button onClick ={handleClick}>Reset Story</button>
        </div>
    )


}


export default MadlibsStory;