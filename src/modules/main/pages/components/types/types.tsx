interface IRating {
	rate?: string
	count?: string
}

export interface IPost {
	id: number
	title: string
	description: string
	image: string
	rating: IRating
}
