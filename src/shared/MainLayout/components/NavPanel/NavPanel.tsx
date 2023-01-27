import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
	AppstoreOutlined,
	MailOutlined,
	HomeOutlined,
	ExclamationOutlined,
	NotificationOutlined,
	QuestionOutlined
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'

import s from './NavPanel.module.sass'

interface NavPAnelProps {
	className?: string
}

const items: MenuProps['items'] = [
	{
		label: <span className={s.span}>Home</span>,
		key: '/',
		icon: <HomeOutlined />
	},
	{
		label: <span className={s.span}>News</span>,
		key: '/posts',
		icon: <NotificationOutlined />
	},
	{
		label: <span className={s.span}>Consular Section</span>,
		key: '/consular',
		icon: <ExclamationOutlined />
	},
	{
		label: <span className={s.span}>About Thai</span>,
		key: '/about',
		icon: <AppstoreOutlined />
	},
	{
		label: <span className={s.span}>FAQ</span>,
		key: '/faq',
		icon: <QuestionOutlined />
	},
	{
		label: <span>Contacts</span>,
		key: '/contacts',
		icon: <MailOutlined />
	}
]

const NavPanel: FC<NavPAnelProps> = () => {
	const [current, setCurrent] = useState('')

	const onClick: MenuProps['onClick'] = (e) => {
		setCurrent(e.key)
		navigate(e.key)
		setCurrent(e.key)
	}
	const navigate = useNavigate()
	return (
		<Menu
			className={s.menu}
			onClick={onClick}
			selectedKeys={[current]}
			mode='horizontal'
			theme='dark'
			items={items}
		/>
	)
}

export default NavPanel
