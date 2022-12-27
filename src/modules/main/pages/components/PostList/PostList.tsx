import React, { FC } from 'react'
import { IPost } from '../types/types'
import PostItem from '../PostItem/PostItem'

interface PostListProps {
	posts: IPost[]
}

const PostList: FC<PostListProps> = ({ posts }) => {
	return (
		<div>
			{posts.map((post) => (
				<PostItem key={post.id} post={post} />
			))}
		</div>
	)
}

export default PostList
