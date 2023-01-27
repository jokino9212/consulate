import React from 'react'

import s from './List.module.sass'

interface ListProps<T> {
	items: T[]
	className?: string
	renderItem: (item: T) => React.ReactNode
}

export default function List<T>(props: ListProps<T>, className?: string) {
	return <div className={s.root}>{props.items.map(props.renderItem)}</div>
}
