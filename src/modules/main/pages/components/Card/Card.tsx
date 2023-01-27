import React, { FC } from 'react'
import { useState } from 'react'

import s from './Card.module.sass'

export enum CardVariant {
	outlined = 'outlined',
	primary = 'primary'
}

interface CardProps {
	className?: string
	width?: string
	height?: string
	variant?: CardVariant
	children?: React.ReactElement | React.ReactNode
	onClick: (num: number) => void
}

const Card: FC<CardProps> = ({
	className,
	width,
	height,
	variant,
	children,
	onClick
}) => {
	const [state, setState] = useState(0)
	return (
		<div
			className={s.root}
			style={{
				width,
				height,
				border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
				background: variant === CardVariant.primary ? 'LightGray' : ''
			}}
			onClick={() => onClick(state)}
		>
			{children}
		</div>
	)
}

export default Card
