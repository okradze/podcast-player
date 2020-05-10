import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-enzyme'
import '@testing-library/jest-dom/extend-expect'

configure({ adapter: new Adapter() })
