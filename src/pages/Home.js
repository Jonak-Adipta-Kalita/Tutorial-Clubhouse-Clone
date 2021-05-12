import React from 'react';
import Header from '../components/Header';
import DailyInfoCard from '../components/DailyInfoCard';
import RoomInfoCard from '../components/RoomInfoCard';
import style from '../style/home.module.css'

export default function Home() {
	return (
		<>
			<Header />
			<div className={style.home_container}>
				<DailyInfoCard />
				<RoomInfoCard />
			</div>
		</>
	);
};