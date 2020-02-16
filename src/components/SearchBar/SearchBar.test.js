import React from 'react'
import { shallow } from 'enzyme'
import { SearchBar } from './SearchBar'

describe('SearchBar', () => {
    it('should render when there is no search term', () => {
        expect(shallow(<SearchBar />)).toMatchSnapshot()
    })
})
