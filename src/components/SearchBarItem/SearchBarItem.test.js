import React from 'react'
import { shallow } from 'enzyme'
import { SearchBarItem } from './SearchBarItem'

describe('SearchBarItem', () => {
    it('should render when there is no search term', () => {
        const mockPodcast = {
            id: '1',
            thumbnail: 'http://www.example.com/link',
            publisher_original: 'John Doe',
            title_original: 'Podcast',
            clearSearch: jest.fn(),
        }

        expect(shallow(<SearchBarItem {...mockPodcast} />)).toMatchSnapshot()
    })
})
