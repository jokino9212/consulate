import { MainLayout } from 'shared'
import Card, { CardVariant } from '../components/Card/Card'
import PostList from '../components/PostList/PostList'
import { IPost } from '../components/types/types'
import { useEffect, useState } from 'react'
import data from '../../../../_mocks/data.json'


// import axios from 'axios'


const Posts = () => {
	const [posts, setPosts] = useState<IPost[]>([])


	
	// useEffect(() => {
	// 	fetchPosts()
	// }, [])

	// async function fetchPosts() {
	// 	try {
	// 		const response = await axios.get<IPost[]>('URL!!')
	// 		setPosts(response.data)
	// 	} catch (e) {
	// 		alert(e)
	// 	}
	// }

	return (
		<MainLayout>
			<Card
				onClick={(num) => console.log('click', num)}
				variant={CardVariant.outlined}
				width='200px'
				height='200px'
			>
				<button>Кнопка</button>
				<div>dsa</div>
			</Card>
			<PostList posts={posts} />
		</MainLayout>
	)
}

export default Posts
