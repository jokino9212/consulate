import React, { FC } from 'react'
import { IPost } from '../types/types'
import { useNavigate } from 'react-router-dom'

import s from './PostItem.module.sass'

interface PostItemProps {
	post: IPost
}

const PostItem: FC<PostItemProps> = ({ post }) => {
	const navigate = useNavigate()
	return (
		<div className={s.root} onClick={() => navigate(`/posts/${post.id}`)}>
			<img className={s.img} src={post.image} alt='' />
			<div className={s.title}>{post.title}</div>
			<div className={s.bottom}>
				<div className={s.rating}>
					&#128198;{post.rating.rate} 👁{post.rating.count} view
				</div>
				<span className={s.details}>Read more ➡ </span>
			</div>
		</div>
	)
}

export default PostItem
