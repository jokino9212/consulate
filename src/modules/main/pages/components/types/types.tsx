import React from 'react'

export interface IImages {
	"image1": string
	"image2": string
	"image3": string
}

export interface IPost {
	element: React.ReactElement | React.ReactNode
	"id": number
	"title": string
	"description": string
	"category": string
	"date": string
	"author": string
	"images": IImages
}
