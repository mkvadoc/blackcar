import React, { Component } from 'react';
import Dashboard from './pages/Dashboard/Dashboard';

class App extends Component {
	drawerToggleClickerHandler = () => {
		this.setState((prevState) => {
			return { sideDrawerOpen: !prevState.sideDrawerOpen };
		});
	};

	backdropClickHandler = () => {
		this.setState({ sideDrawerOpen: false });
	};

	render() {
		return (
			<div style={{ height: '100%' }}>
				<Dashboard />
			</div>
		);
	}
}
export default App;