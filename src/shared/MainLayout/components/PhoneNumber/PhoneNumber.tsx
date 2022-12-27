import React from 'react'
import s from './PhoneNumber.module.sass'

import { PhoneOutlined } from '@ant-design/icons'

type PhoneNumberProps = {
	title: string
}
const PhoneNumber = ({ title }: PhoneNumberProps) => {
	return (
		<a href='tel:+77172797753' title={title} className={s.link}>
			<PhoneOutlined className={s.icon} />
			+7-7172-79-77-53
		</a>
	)
}

export default PhoneNumber
