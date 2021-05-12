import React from 'react';
import Header from '../components/Header';
import DailyInfoCard from '../components/DailyInfoCard';
import RoomInfoCard from '../components/RoomInfoCard';
import style from '../style/home.module.css'
import { BsGrid3X3Gap } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';

export default function Home() {
	return (
		<>
			<Header />
			<div className={style.home_container}>
				<DailyInfoCard />
				<RoomInfoCard />
			</div>
			<div className={style.action_btn}>
				<button>
					<AiOutlinePlus />
					Start a Room
				</button>
				<button>
					<BsGrid3X3Gap />
				</button>
			</div>
		</>
	);
};