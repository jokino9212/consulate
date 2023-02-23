import React from 'react'

import s from './SortList.module.sass'

interface SortListProps<T> {
	items: T[]
	className?: string
	renderItem: (item: T) => React.ReactNode
}

export default function SortList<T>(
	props: SortListProps<T>,
	className?: string
) {
	return <div className={s.root}>{props.items.map(props.renderItem)}</div>
}
