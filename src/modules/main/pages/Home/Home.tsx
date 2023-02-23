import React, { FC, useEffect, useState } from 'react'
import axios from 'axios'

import { MainLayout } from 'shared'
// import Card, { CardVariant } from '../components/Card/Card'
import SortList from '../components/List/List'
import PostItem from '../components/PostItem/PostItem'
import { IPost } from '../components/types/types'

import s from './Home.module.sass'

const Home: FC = () => {
	const [posts, setPosts] = useState<IPost[]>([])

	useEffect(() => {
		fetchPosts().then(() => {})
	}, [])

	const fetchPosts = async () => {
		try {
			const response = await axios.get<IPost[]>(
				'https://fakestoreapi.com/products?sort=desc'
			)
			return setPosts(response.data)
		} catch (e) {
			alert(e)
		}
	}
	return (
		<MainLayout>
			<div>
				<>
					<h1 className={s.heading}> Last news</h1>
					<SortList
						className={s.list}
						items={posts}
						renderItem={(post: IPost) => <PostItem post={post} key={post.id} />}
					/>
				</>
			</div>
		</MainLayout>
	)
}

export default Home
