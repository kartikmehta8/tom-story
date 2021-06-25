import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Tom from '../tom.jpg';

class Home extends Component {
	render() {
		const { posts } = this.props;
		const postList = posts.length ? (
			posts.map((post) => {
				return (
					<div className='post card' key={post.id}>
						<img src={Tom} alt='A Pokeball' />
						<div className='card-content'>
							<Link to={'/' + post.id}>
								<span className='card-title blue-text'>{post.title}</span>
							</Link>
							<p>{post.body}</p>
						</div>
					</div>
				);
			})
		) : (
			<div className='center'>No Posts Yet!</div>
		);

		return (
			<div className='container home'>
				<h4 className='center brand-logo'>Home</h4>
				{postList}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.posts,
	};
};

export default connect(mapStateToProps)(Home);
