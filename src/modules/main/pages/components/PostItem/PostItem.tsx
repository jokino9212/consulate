import React, { FC } from 'react'
import { IPost } from '../types/types'

interface PostItemProps {
	post: IPost
}

const PostItem: FC<PostItemProps> = ({ post }) => {
	return (
		<div style={{ padding: 15, border: '1px solid gray' }}>
			{post.id}. {post.title} случилось {post.images.image1}
			{post.images.image2} {post.author} {post.description} {post.category}
			{post.date}
		</div>
	)
}

export default PostItem