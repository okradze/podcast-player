import React from 'react'
import { render } from '@testing-library/react'
import { EllipsisText } from './EllipsisText'

it('should render EllipsisText component', () => {
    const text = 'Hello'
    const { getByText } = render(<EllipsisText>{text}</EllipsisText>)
    expect(getByText(text)).toMatchSnapshot()
})
