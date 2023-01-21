import React from 'react'

export interface IAddress {
	street: string
	city: string
	zipcode: string
}

export interface IPost {
	id: number
	name: string
	email: string
	address: IAddress
	// element: React.ReactElement | React.ReactNode
}
