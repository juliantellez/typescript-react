import * as React from 'react'

import Example from './Example'

import { render } from '@testing-library/react'

describe('Example React Test', () => {
    it('should describe how to test react components', () => {
        const utils = render(<Example />)

        const component = utils.getByLabelText('example')

        const value = component.innerHTML
        const expected = 'Hello World!'

        expect(value).toBe(expected)
    })
})
