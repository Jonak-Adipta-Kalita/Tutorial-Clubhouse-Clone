import React, { useState } from 'react';
import style from '../style/phoneconfirmation.module.css';
import { Link } from 'react-router-dom';

export default function PhoneConfirmation() {
	const [value, setValue] = useState();
	return (
		<div className={style.PhoneConfirmationContainer}>
			<h1>Enter your Phone Number</h1>
			<p>
				By entering your number, you're agreeing to our {" "}
				<span>Terms of Service and Privacy Policy. </span>
				Thanks!!
			</p>
		</div>
	)
};
