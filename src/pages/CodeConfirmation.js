import React from 'react';
import style from '../style/phoneconfirmation.module.css';
import { Link } from 'react-router-dom';

export default function CodeConfirmation() {
	return (
		<div className={style.PhoneConfirmationContainer}>
			<Link exact to="/invite" className={style.backBtn}>
				<img src="/images/arrow.png" alt="backBtn" />
			</Link>
			<div className="text-center my-2">
				<h1 style={{ width: '100%', maxWidth: '200px', marginBottom: "1em" }}>Enter the Code that we just texted you!!</h1>
				<input type="text" style={{ width: "100%", border: "none", outline: "none", textAlign: "center" }} />
				<p className="mt-2">Didn't Recieve It? <span className={style.codeResendButton}>Tap to Resend</span>.</p>
			</div>
			<Link exact to="/allow_notification" className="primaryBtn d-flex align-items-center">
				Next 
				<img src="/images/nextArrowIcon.svg" className={style.nextArrowIcon} alt="nextArrowIcon" />
			</Link>
		</div>
	);
};
