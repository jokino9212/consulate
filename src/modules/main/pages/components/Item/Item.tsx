import React from 'react'

interface ItemProps<T> {
	items: T[]
	renderItemSolo: (item: T) => React.ReactNode
}

export default function Item<T>(props: ItemProps<T>) {
	return <div>{props.items.entries()}</div>
}
