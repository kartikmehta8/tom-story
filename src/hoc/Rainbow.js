import React from 'react';

const Rainbow = (WrappedComponent) => {
	const colors = ['red', 'pink', 'orange', 'blue', 'green'];
	const randomcolor = colors[Math.floor(Math.random() * 5)];
	const className = randomcolor + '-text';

	return (props) => {
		return (
			<div className={className}>
				<WrappedComponent {...props} />
			</div>
		);
	};
};

export default Rainbow;
