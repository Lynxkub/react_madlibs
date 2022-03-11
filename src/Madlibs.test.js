import React from 'react';
import {render , fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Madlibs from './Madlibs';
import MadlibsForm from './MadlibsForm';
import MadlibsStory from './MadlibsStory';


it('renders without crashing' , function () {
    render(<Madlibs />)
})

it('matches snapshot' , function () {
    const {asFragment} = render(<Madlibs />);
    expect(asFragment()).toMatchSnapshot();
})

it('created a story' , function () {
    const {getByTestId , queryByText} = render(<Madlibs />);
    const noun = getByTestId('noun');
    const verb = getByTestId('verb');
    const adjective = getByTestId('adjective');
    const adverb = getByTestId('adverb');
    const btn = queryByText('Create Story!')

    // check to make sure a created story does not exist yet
    expect(queryByText('The fast worm likes to race their friend quickly')).not.toBeInTheDocument();

    // enter in all the information and create story

    fireEvent.change(noun , {target : {value : 'worm'}});
    fireEvent.change(verb , {target : {value : 'race'}});
    fireEvent.change(adjective, {target : {value : 'fast'}});
    fireEvent.change(adverb , {target : {value : 'quickly'}});
    fireEvent.click(btn);

    // check to see if the form is no longer in the document

    expect(noun).not.toBeInTheDocument();
    
    // check to see if the story is created correctly

    expect(queryByText('The fast worm likes to race their friend quickly')).toBeInTheDocument();


    // select the reset button and click it to reset the form and story
    const resetBtn = queryByText('Reset Story');
    fireEvent.click(resetBtn);
    expect(queryByText('The fast worm likes to race their friend quickly')).not.toBeInTheDocument();
    const newNounBox = getByTestId('noun')
    expect(newNounBox).toBeInTheDocument();


})