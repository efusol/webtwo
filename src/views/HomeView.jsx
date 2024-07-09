import React from 'react';
import MainPhoto from '../components/home/MainPhoto';
import MainBottom from '../components/home/MainBottom';
import SubPhoto from '../components/home/SubPhoto';
import MiddlePhoto from '../components/home/MiddlePhoto';

const HomeView = () => {
	return (
		<div>
			<MainPhoto />
			<SubPhoto />
			<MiddlePhoto />
			<MainBottom />
		</div>
	);
};

export default HomeView;