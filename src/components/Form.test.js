import React from 'react';
import { mount } from 'enzyme';
// sinon -> allows you to create fake functions to see if they are called.
import sinon from 'sinon';

import Form from './Form';

it('submits on click', () => {
  // Create the fake function:
  const fetchImages = sinon.spy();
  const wrapper = mount(<Form term={'cow'} fetchImages={fetchImages} />);

  wrapper.find('form').simulate('submit');
  expect(fetchImages.calledOnce).toBe(true);
})
