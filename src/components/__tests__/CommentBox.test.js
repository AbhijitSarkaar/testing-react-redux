import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";

/**
 * responsibilities of CommentBox component
 * - shows a textarea and a button
 * - user can input a text into text area
 * - when input is submitted, textarea text gets emptied
 */

let wrapped

beforeEach(() => {
     wrapped = mount(<CommentBox />)
})

afterEach(() => {
    wrapped.unmount()
})

it('has a textarea and a button', () => {
   expect(wrapped.find('textarea').length).toEqual(1)
   expect(wrapped.find('button').length).toEqual(1)
})

describe('text area', () => {

    beforeEach(() => {
        //simulate a change event on textarea with a sample event object that's merged with event that's passed to the event handler function
        wrapped.find('textarea').simulate('change', {
            target: {
                value: 'new comment'
            }
        })
        //forces a re render
        wrapped.update() 
    })

    it('has a textarea that user can type in', () => {
        //checking the prop passed to the element textarea
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
    })
    
    it('on click of submit button empties the textarea', () => {
        wrapped.find('form').simulate('submit')
        wrapped.update()
        expect(wrapped.find('textarea').prop('value')).toEqual('')
    })  
})