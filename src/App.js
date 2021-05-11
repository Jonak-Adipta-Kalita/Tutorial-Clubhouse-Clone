import './App.css';
import Welcome from './pages/Welcome';
import PhoneConfirmation from './pages/PhoneConfirmation';
import CodeConfirmation from './pages/CodeConfirmation';
import PlanLayout from './pages/Layouts/PlanLayout';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<PlanLayout>
				<Route exact path='/' component={Welcome} />
				<Route exact path='/invite' component={PhoneConfirmation} />
				<Route exact path='/code_confirm' component={CodeConfirmation} />
			</PlanLayout>
		</Router>
	);
}

export default App;
