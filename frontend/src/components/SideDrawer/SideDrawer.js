import React from 'react';

const SideDrawer = props => {

	let drawerClasses = 'side-drawer';
	if (props.show) {
		drawerClasses = 'side-drawer open';
	}
	return (
		<nav className={drawerClasses}>
			<ul>
				<li><a href="/">Automobily</a></li>
				<li><a href="/">Podmienky</a></li>
				<li><a href="/">O nás</a></li>
			</ul>
		</nav>
	);
};

export default SideDrawer;