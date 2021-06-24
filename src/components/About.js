import React from 'react';
import Rainbow from '../hoc/Rainbow';
const About = () => {
	return (
		<div className='container'>
			<h4 className='center brand-logo'>About</h4>
			<p>
				<div class='center'>
					THE COLOR OF THE FONT WILL CHANGE RANDOMLY IF YOU REFRESH!
				</div>
				<br />
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Sit amet mattis
				vulputate enim nulla. Cursus sit amet dictum sit amet justo donec enim.
				Massa vitae tortor condimentum lacinia quis vel eros donec. Nec feugiat
				in fermentum posuere urna nec. Fermentum iaculis eu non diam phasellus
				vestibulum lorem sed risus.
				<h6 class='right'>
					<br />~ Tom
				</h6>
			</p>
		</div>
	);
};

export default Rainbow(About);
