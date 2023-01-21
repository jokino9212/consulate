import React, { FC } from 'react'
import { IPost } from '../types/types'

interface PostItemProps {
	post: IPost
}

const PostItem: FC<PostItemProps> = ({ post }) => {
	return (
		<div style={{ padding: 15, border: '1px solid gray' }}>
			{post.id}. {post.name} проживает в городе {post.address.city} на улице{' '}
			{post.address.street}
		</div>
	)
}

export default PostItem
