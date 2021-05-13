import React, { useState } from 'react';
import style from '../../style/roomdetail.module.css';
import { AiOutlinePlus, AiOutlineFile } from 'react-icons/ai';
import { BsMicMuteFill, BsMicFill } from 'react-icons/bs';

export default function NewRoom(props) {
	const [micMuteVisible, setMicMuteVisible] = useState(false);
	const [itemsVisible, setItemVisible] = useState(true);
	const card = props.cardDetail;
	return (
		<>
			<div className={style.roomDetailContainer}>
				<div className={style.head}>
					<div className={"d-flex align-items-center"}>
						<a 
							href="/home#" 
							onClick={() => {
								props.setSheetVisible(false);
							}}
						>
							<img className={style.arrow_icon} src="/images/arrow.png" alt="" />
						</a>
						<span>Hallway</span>
					</div>
					<div>
						<AiOutlineFile />
						<img src="/images/user-img.jpg" alt="user" className={style.profile_img} />
					</div>
				</div>
				<div className={style.roomDetailCard}>
					<div 
						className = "d-flex align-items-center justify-content-between flex-wrap"
						style = {{ padding: "0.5em 1em" }}
					>
						{card.members.map((item) => (
							<div className={style.memberContainer}>
								{micMuteVisible ? (
									<div className={style.audioIcon}>
										<BsMicMuteFill />
									</div>
								) : (
									""
								)}
								<img src={item.user_image || "images/user-img-blank.jpg"} alt="user logo" />
								<p>
									<span>*</span>
									{item.first_name}
								</p>
							</div>
						))}
					</div>
				</div>
				<div className={style.footer}>
					<button onClick={() => 	props.setSheetVisible(false)}>
						<img src="/images/hand-peace.png" alt="" />
						Leave Quietly!!
					</button>
					<div>
						<button>
							<AiOutlinePlus />
						</button>
						<button>
							<img src="/images/stopHandIcon.png" alt="" />
						</button>
						<button onClick={() => setMicMuteVisible(!micMuteVisible)}>
							{micMuteVisible ? <BsMicFill /> : <BsMicMuteFill />}
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
