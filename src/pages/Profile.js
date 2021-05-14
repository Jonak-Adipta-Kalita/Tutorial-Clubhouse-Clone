import React from 'react';
import style from '../style/profile.module.css';
import exploreStyle from '../style/explore.module.css';
import { Link } from 'react-router-dom';
import { BsAt, BsUpload, BsPlus } from 'react-icons/bs';
import { AiOutlineSetting, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';

export default function Profile() {
	return (
		<>
			<div className={style.profileContainer}>
				<div className={exploreStyle.header}>
					<div className={`${exploreStyle.head} ${style.headthathaveexplorehead}`}>
						<Link to="home">
							<img src="/images/arrow.png" alt="" className={exploreStyle.arrowIcon} />
						</Link>
						<div className={style.actionBtn}>
							<BsAt />
							<BsUpload />
							<AiOutlineSetting />
						</div>
					</div>
				</div>
				<img src="https://avatars.githubusercontent.com/u/70377522?v=4" alt="" className={style.profile_img} />
				<h4>Jonak Adipta Kalita</h4>
				<p>@Jonak-Adipta-Kalita</p>
				<div className={style.follow}>
					<p><span>102M</span> {' '} Followers</p>
					<p><span>700</span> {' '} Following</p>
				</div>
				<button>Add BIO</button>
				<div className={style.giveMarginBottomOf4}>
					<button  className={style.giveMarginBottomOf0}>
						<AiOutlineTwitter />
						{' '}
						Add Twitter
					</button>
					<div className={style.giveMargintoLeft} />
					<button  className={style.giveMarginBottomOf0}>
						<AiOutlineInstagram />
						{' '}
						Add Instagram
					</button>
				</div>
				<div className={style.nominated}>
					<img src="https://avatars.githubusercontent.com/u/8461930?s=100&v=4" alt="" />
					<div>
						<p>Joined 14-July-2020</p>
						<p>Nominated by <span>Rafeh Qazi</span></p>
					</div>
				</div>
				<p>Member of</p>
				<button className={style.addMemberBtn}>
					<BsPlus />
				</button>
			</div>
		</>
	);
};
