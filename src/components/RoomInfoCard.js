import React, { useState, useEffect } from 'react';
import style from '../style/roominfocard.module.css';
import data from '../data/roomCard.json';
import { BsChatDots, BsChatDotsFill, BsFillPersonFill } from 'react-icons/bs';

export default function RoomInfoCard() {
	return (
		<>
			{data.map((item) => (
				<div>
					<div>
						<div className={style.roomCardContainer}>
							<h6>{item.title}</h6>
							<h2>{item.sub_title}</h2>
							<div className={style.roomMembers}>
								<div>
									<img src="/images/user-img.jpg" alt="userImage" />
									<img src="/images/user-img2.jpg" alt="userImage2" />
								</div>
								<div>
									{item.members.map((member) => (
										<p>
											{member.first_name} {member.last_name} <BsChatDots />
										</p>
									))}
									<p className="d-flex align-items-center">
										<span className="mr-2">1.8</span>
										<div className={style.giveSpace} />
										<BsFillPersonFill />
										
										<span className="mx-2"></span>{"  "}
										
										<span className="mr-2">{item.total_members || 0}</span>
										<div className={style.giveSpace} />
										<BsChatDotsFill />
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
};
