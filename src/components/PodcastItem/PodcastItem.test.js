import React from 'react'
import { shallow } from 'enzyme'
import { PodcastItem } from './PodcastItem'

describe('PodcastItem', () => {
    it('should render', () => {
        const mockPodcast = {
            id: '1',
            thumbnail: 'http://www.example.com/link',
            publisher: 'John Doe',
            title: 'Podcast',
        }

        expect(shallow(<PodcastItem {...mockPodcast} />)).toMatchSnapshot()
    })
})
