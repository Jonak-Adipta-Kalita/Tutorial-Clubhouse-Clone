import React from 'react';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import style from '../style/bottomsheet.module.css';
import StartRoom from './bottom_sheets/StartRoom';

export default function BottomSheet(props) {
	return (
		<SwipeableBottomSheet 
			open = {props.sheetVisible}
			onChange = {() => {
				props.setSheetVisible(!props.sheetVisible)
				props.setItemsVisible(true)
			}}
			fullScreen = {props.sheetTitle === 'room detail' ? true : false}
		>
			<div 
				className={style.bottomSheetContainer} 
				style={{ backgroundColor: props.sheetTitle === "profile" ? 'transparent' : 'empty' }}
			>
				<StartRoom 
					setSheetCreateRoom = {props.setSheetCreateRoom}
					setSheetVisible = {(item) => {
						props.setSheetVisible(item);
						props.setItemsVisible(true);
					}}
				/>
			</div>
		</SwipeableBottomSheet>
	);
};
