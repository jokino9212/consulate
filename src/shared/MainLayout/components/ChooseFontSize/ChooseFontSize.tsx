import React from 'react'

import s from './ChooseFontSize.module.sass'

const ChooseFontSize = () => {
	return (
		<div className={s.fontThemes}>
			<label>
				<input type='radio' name='fontsSize' value='m' checked /> m
			</label>
			<label>
				<input type='radio' name='fontsSize' value='l' />l
			</label>
			<label>
				<input type='radio' name='fontsSize' value='xl' />l
			</label>
		</div>
	)
}

export default ChooseFontSize
