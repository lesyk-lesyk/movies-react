import React from 'react';
import { SortItem } from './index';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store'

describe('SortItem', () => {
  it('renders with active class', () => {
    const store = configureStore()({ sortBy: 'RATING' });
    const callback = () => { };
    const tree = renderer
      .create(<SortItem sortBy='RATING' onClick={callback} store={store} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders without active class', () => {
    const store = configureStore()({ sortBy: 'RATING' });
    const callback = () => { };
    const tree = renderer
      .create(<SortItem sortBy='OTHER' onClick={callback} store={store} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it.skip('should run callback on click', () => {
    const store = configureStore()({ sortBy: 'RATING' });
    const callback = jest.fn();

    const wrapper = shallow(<SortItem sortBy='RATING' onClick={callback} store={store} />);
    wrapper.find('span').simulate('click', { preventDefault() { } });

    expect(callback).toHaveBeenCalled();
  });
});
