import React from 'react'
import { shallow } from 'enzyme'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
    it('should render component', () => {
        expect(shallow(<Sidebar />)).toMatchSnapshot()
    })
    it('should render component when playing podcast', () => {
        expect(shallow(<Sidebar playingPodcastId='1' />)).toMatchSnapshot()
    })
    it('should render component when sidebar is visible', () => {
        const wrapper = shallow(<Sidebar />)
        wrapper
            .find('span')
            .first()
            .simulate('click')
        expect(wrapper).toMatchSnapshot()
    })
})
