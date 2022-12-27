import React from 'react'
import { ClockCircleOutlined } from '@ant-design/icons'

import s from './ClockWork.module.sass'

const ClockWork = () => {
	return (
		<span className={s.clockWorkText}>
			<ClockCircleOutlined className={s.icon} />
			Office Hours : Monday - Friday, 9.00 - 12.00 hrs. and 13.00 – 17.00 hrs.
			(Except public holidays)
		</span>
	)
}

export default ClockWork
