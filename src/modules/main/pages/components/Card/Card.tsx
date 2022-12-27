import React, { FC } from 'react'
import { useState } from 'react'

export enum CardVariant {
	outlined = 'outlined',
	primary = 'primary'
}

interface CardProps {
	width?: string
	height?: string
	variant: CardVariant
	children?: React.ReactElement | React.ReactNode
	onClick: (num: number) => void
}

const Card: FC<CardProps> = ({ width, height, variant, children, onClick }) => {
	const [state, setState] = useState(0)
	return (
		<div
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