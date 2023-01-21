import { MainLayout } from 'shared'
import Card, { CardVariant } from '../components/Card/Card'
import { IPost } from '../components/types/types'
import postmocks from '../../../../_mocks/posts.json'
import List from '../components/List/List'
import PostItem from '../components/PostItem/PostItem'

const Posts = () => {
	const posts: IPost[] = postmocks

	return (
		<MainLayout>
			<Card
				onClick={(num) => console.log('click', num)}
				variant={CardVariant.outlined}
				width='200px'
				height='200px'
			>
				<button>Кнопка</button>
				<div>dsarff</div>
			</Card>
			<List
				items={posts}
				renderItem={(post: IPost) => <PostItem post={post} key={post.id} />}
			/>
		</MainLayout>
	)
}

export default Posts
