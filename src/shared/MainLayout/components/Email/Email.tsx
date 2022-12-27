import React from 'react'
import s from './Email.module.sass'

import { MailOutlined } from '@ant-design/icons'

type EmailProps = {
	title: string
}

const Email = ({ title }: EmailProps) => {
	return (
		<a className={s.link} href='mailto:Consular.tse@mfa.go.th' title={title}>
			<MailOutlined className={s.icon} />
			Consular.tse@mfa.go.th
		</a>
	)
}

export default Email
