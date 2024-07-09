import React from 'react';
import MainPhoto from '../components/home/MainPhoto';
import MainBottom from '../components/home/MainBottom';
import SubPhoto from '../components/home/SubPhoto';

const HomeView = () => {
	return (
		<div>
			<MainPhoto />
			<SubPhoto />
			<MainBottom />
		</div>
	);
};

export default HomeView;