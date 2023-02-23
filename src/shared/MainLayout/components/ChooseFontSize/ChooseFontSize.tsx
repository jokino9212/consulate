import React from 'react'

import s from './ChooseFontSize.module.sass'

const ChooseFontSize = () => {
	return (
		<div className={s.fontThemes}>
			<label className={s.label}>
				<input type='radio' name='fontsSize' value='m' checked /> M
			</label>
			<label>
				<input type='radio' name='fontsSize' value='l' />L
			</label>
			<label>
				<input type='radio' name='fontsSize' value='xl' />
				XL
			</label>
		</div>
	)
}

export default ChooseFontSize
