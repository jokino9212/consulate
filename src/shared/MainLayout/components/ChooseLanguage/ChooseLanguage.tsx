import React from 'react'

import s from './ChooseLanguage.module.sass'

const ChooseLanguage = () => {
	return (
		<div className={s.languageThemes}>
			<select name='language' id='languageSelect'>
				<option value='English'>English</option>
				<option value='Thai'>Thai</option>
			</select>
		</div>
	)
}

export default ChooseLanguage
