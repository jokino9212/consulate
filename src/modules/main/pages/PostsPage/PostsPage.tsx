import React, { FC, useEffect, useState } from 'react'
import axios from 'axios'

import { MainLayout } from 'shared'
// import Card, { CardVariant } from '../components/Card/Card'
import List from '../components/List/List'
import PostItem from '../components/PostItem/PostItem'
import { IPost } from '../components/types/types'

import s from './PostsPage.module.sass'
import Sidebar from '../components/Sidebar/Sidebar'

const PostsPage: FC = () => {
	const [posts, setPosts] = useState<IPost[]>([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setIsLoading(false)
		fetchPosts().then(() => {})
		setIsLoading(true)
	}, [])

	const fetchPosts = async () => {
		try {
			const response = await axios.get<IPost[]>(
				'https://fakestoreapi.com/products?sort=ask'
			)
			return setPosts(response.data)
		} catch (e) {
			alert(e)
		}
	}

	return (
		<MainLayout>
			<div className={s.root}>
				{isLoading ? (
					<div className={s.wrap}>
						<div className={s.navigation}>
							<div className={s.main}></div>
							<Sidebar />
						</div>
						<div className={s.content}>
							<h1 className={s.heading}>News</h1>
							<List
								className={s.list}
								items={posts}
								renderItem={(post: IPost) => (
									<PostItem post={post} key={post.id} />
								)}
							/>
						</div>
					</div>
				) : (
					<h1>Loading...</h1>
				)}
			</div>
		</MainLayout>
	)
}

export default PostsPage
