import App from './App';
import Header from './components/Header/Header';
import DashboardContainer from './containers/DashboardContainer';
import { shallow } from 'enzyme';
import TaskProvider from './context/taskContext';


it('renders Header and DashboardContainer components', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Header)).toHaveLength(1);
  expect(wrapper.find(DashboardContainer)).toHaveLength(1);
});

it('renders TaskProvider context', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(TaskProvider)).toHaveLength(1);
});


