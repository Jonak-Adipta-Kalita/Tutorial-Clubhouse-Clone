import React from 'react';
import style from '../style/phoneconfirmation.module.css';
import { Link } from 'react-router-dom';

export default function AllowNotification() {
	return (
		<div className={style.PhoneConfirmationContainer}>
			<Link exact to="/code_confirm" className={style.backBtn}>
				<img src="/images/arrow.png" alt="backBtn" />
			</Link>
			<div className="text-center">
				<h1 className="mb-4">Last, Important Step!!</h1>
				<h1 className="mb-3">Enable Notifications to know when People are Talking!!</h1>
				<div className={style.notificationContainer}>
					<div className="p-3">
						<h3>"Clubhouse" would like to send Notification!!</h3>
						<p>Notification may include Alerts, Sounds and Icon Badges!!</p>
					</div>
					<div className={style.action_btn}>
						<Link exact to="/home">
							Don't Allow
						</Link>
						<Link exact to="/home">
							Allow
						</Link>
						<img src="/images/handIcon.svg" alt="handIcon" className={style.hand_icon} />
					</div>
				</div>
			</div>
		</div>
	);
};