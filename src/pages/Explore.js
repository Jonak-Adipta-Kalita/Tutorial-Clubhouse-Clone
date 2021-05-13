import React from 'react';
import style from '../style/explore.module.css';
import { DownOutlined, FireOutlined } from '@ant-design/icons';
import data from '../data/Explore.json';

export default function Explore() {
	const { people, conversation } = data;
	return (
		<div className={style.explorerContainer}>
			<h6>PEOPLE TO FOLLOW!!</h6>
			<div className={style.peopleContainer}>
				{people.map((item) => (
					<div>
						<div className='d-flex align-items-center'>
							<img src={item.user_image || "images/user-img-blank.jpg"} alt="" />
							<div className={style.peopleContainerInfo}>
								<h5>{item.title}</h5>
								<p>{item.description}</p>
							</div>
						</div>
						<button>Follow!!</button>
					</div>
				))}
				<button className={style.showMore}>
					Show More People!! <DownOutlined />
				</button>
			</div>
		</div>
	);
};
