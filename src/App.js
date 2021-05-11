import './App.css';
import Welcome from './pages/Welcome';
import PhoneConfirmation from './pages/PhoneConfirmation';
import CodeConfirmation from './pages/CodeConfirmation';
import AllowNotification from './pages/AllowNotification';
import PlanLayout from './pages/Layouts/PlanLayout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Route exact path={[
					'/',
					'/invite',
					'/get_username',
					'/code_confirm',
					'/allow_notification',
				]}
			>
				<PlanLayout>
					<Route exact path='/' component={Welcome} />
					<Route exact path='/invite' component={PhoneConfirmation} />
					<Route exact path='/code_confirm' component={CodeConfirmation} />
					<Route exact path='/allow_notification' component={AllowNotification} />
				</PlanLayout>
			</Route>
		</Router>
	);
}

export default App;
