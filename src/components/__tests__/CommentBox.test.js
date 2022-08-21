import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";

it('has a textarea and a button', () => {
    const wrapped = mount(<CommentBox />)

    console.log(wrapped.find('textarea').length)
    console.log(wrapped.find('button').length)


})