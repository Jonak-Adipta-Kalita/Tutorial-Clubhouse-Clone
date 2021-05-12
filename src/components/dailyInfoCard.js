import React from 'react';
import style from '../style/dailyinfocard.module.css';
import data from '../data/dailyCard.json';

export default function dailyInfoCard() {
	return (
		<div className={style.dailyCard}>
			{data.map((item) => (
				<div>
					<span className="">{item.time}</span>
					<div>
						<span className="">{item.title}</span>
						<p>{item.description}</p>
					</div>
				</div>
			))}
		</div>
	);
};
