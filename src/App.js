import './App.css';
import Welcome from './pages/Welcome';
import PhoneConfirmation from './pages/PhoneConfirmation';
import PlanLayout from './pages/Layouts/PlanLayout';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<PlanLayout>
				<Route exact path='/' component={Welcome} />
				<Route exact path='/invite' component={PhoneConfirmation} />
			</PlanLayout>
		</Router>
	);
}

export default App;
