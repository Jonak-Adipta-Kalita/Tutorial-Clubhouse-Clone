import React from 'react';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import style from '../style/bottomsheet.module.css';

export default function BottomSheet(props) {
	return (
		<SwipeableBottomSheet 
			open = {props.sheetVisible}
			onChange = {() => {
				props.setSheetVisible(!props.sheetVisible)
				props.setItemsVisible(true)
			}}
			fullScreen = {props.sheetTitle == 'room detail' ? true : false}
		>
			<div className={style.bottomSheetContainer} style={{ backgroundColor: props.sheetTitle == "profile" ? 'transparent' : 'empty' }}>
				
			</div>
		</SwipeableBottomSheet>
	);
};
