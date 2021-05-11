import React, { useState } from 'react';
import style from '../style/phoneconfirmation.module.css';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';

export default function PhoneConfirmation() {
	const [value, setValue] = useState();
	return (
		<div className={style.PhoneConfirmationContainer}>
			<Link exact to="/" className={style.backBtn}>
				<img src="/images/arrow.png" alt="backBtn" />
			</Link>
			<h1 className="mb-2">Enter your Phone Number</h1>
			<PhoneInput international defaultCountry="US" value={value} onChange={setValue} />
			<p className="my-2">
				By entering your number, you're agreeing to our {" "}
				<span>Terms of Service and Privacy Policy. </span>
				Thanks!!
			</p>
			<Link exact to="/code_confirm" className="primaryBtn d-flex align-items-center">
				Next 
				<img src="/images/nextArrowIcon.svg" className={style.nextArrowIcon} alt="nextArrowIcon" />
			</Link>
		</div>
	);
};
