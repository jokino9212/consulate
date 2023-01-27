import React, { FC, useEffect, useState } from 'react'
import axios from 'axios'

import { MainLayout } from 'shared'
// import Card, { CardVariant } from '../components/Card/Card'
import List from '../components/List/List'
import PostItem from '../components/PostItem/PostItem'
import { IPost } from '../components/types/types'

import s from './PostsPage.module.sass'

const PostsPage: FC = () => {
	const [posts, setPosts] = useState<IPost[]>([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setIsLoading(false)
		fetchPosts().then((r) => {})
		setIsLoading(true)
	}, [])

	async function fetchPosts() {
		try {
			const response = await axios.get<IPost[]>(
				'https://fakestoreapi.com/products'
			)
			setPosts(response.data)
		} catch (e) {
			alert(e)
		}
	}

	return (
		<MainLayout>
			<div className={s.root}>
				{isLoading ? (
					<>
						<h1 className={s.heading}>News</h1>
						<List
							className={s.list}
							items={posts}
							renderItem={(post: IPost) => (
								<PostItem post={post} key={post.id} />
							)}
						/>
					</>
				) : (
					<h1>Loading...</h1>
				)}
			</div>
		</MainLayout>
	)
}

export default PostsPage
