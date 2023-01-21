import React, { FC } from 'react'
import { IPost } from '../components/types/types'
import postmocks from '../../../../_mocks/posts.json'
import { MainLayout } from 'shared'
import PostItem from '../components/PostItem/PostItem'
import List from '../components/List/List'

interface PostItemPageProps {
	post: IPost[]
}

const PostItemPage: FC<PostItemPageProps> = () => {
	const post: IPost[] = postmocks

	return (
		<MainLayout>
			<div>
				<button>Back</button>
				<h1>Страница новости</h1>
				<List
					items={post}
					renderItem={(post: IPost) => <PostItem post={post} key={post.id} />}
				/>
			</div>
		</MainLayout>
	)
}

export default PostItemPage
