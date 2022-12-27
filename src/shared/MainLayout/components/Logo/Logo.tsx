import React from 'react'
import LogoImg from 'assets/images/logo.jpg'

type LogoProps = {
	width: number
	height: number
}
const Logo = ({ width, height }: LogoProps) => {
	return <img src={LogoImg} alt='Logo' height={height} width={width} />
}

export default Logo
