const initState = {
	posts: [
		{
			id: '1',
			title: 'Poethnology',

			body: 'Technology is a commodity,\n in today’s world, it has become a necessity, \n that gratifies a society, \n if used with integrity and honesty, \n gives you Joy of infinity. \n Technology gives you an opportunity, \n so that you can show up your quality. \n From puerility to maturity, \n it will create assiduity. \n Technology proved its quiddity, \n or a better word- responsibility, \n and nothing is considered as it’s deputy. ',
		},
		{
			id: '2',
			title: 'Time',
			body: 'Consider you have participated in 100m sprint and you lost the first position by only two seconds. You may criticize yourself and work hard for the next sprint. Consider you were giving an examination and you failed in the exam because time has gone up by 30 seconds. You will regret at that time.In both  these situations, we can see huge importance of time. Managing time at this stage requires a time table. Not only at this stage, at every stage, we need a proper management of time. If we are able to manage our time judiciously, we can reduce our sufferings that occur with passage of time. At last, TIME IS MONEY. ',
		},
		{
			id: '3',
			title: 'IQ Level',
			body: "To be a genius, you don’t need a high IQ.  Researches show that children with high IQ level perform a task up to their potential but children with an average IQ often change the world. Albert Einstein is the common synonym for the word 'genius'. So is Sir Issac Newton. The Oxford dictionary defines the word genius as creative skill,- it does not say that any person with IQ level above 150 is a genius. It is a common belief that we consider people genius because of their IQ above 150. Bill Gates, Sundar Pichai or Steve Jobs did not have the highest IQ but still they are CEOs of their companies. So by this, we can say that we cannot compare the IQ level with the level of our skills. IQ does not show how genius we are!",
		},
	],
};

const rootReducer = (state = initState, action) => {
	if (action.type === 'DELETE_POST') {
		let newPosts = state.posts.filter((post) => {
			return action.id !== post.id;
		});
		return {
			...state,
			posts: newPosts,
		};
	}
	return state;
};

export default rootReducer;
