import { MainLayout } from 'shared'
import { useNavigate, useParams } from 'react-router-dom'
import { FC, useEffect, useState } from 'react'
import axios from 'axios'
import { IPost } from '../components/types/types'

import s from './PostItemPage.module.sass'

type PostItemPageParams = {
	id: string
}

const PostItemPage: FC = () => {
	const [post, setPost] = useState<IPost | null>(null)
	const params = useParams<PostItemPageParams>()
	const navigate = useNavigate()

	useEffect(() => {
		fetchPost()
	}, [fetchPost])

	async function fetchPost() {
		try {
			const response = await axios.get<IPost>(
				`https://fakestoreapi.com/products/${params.id}`
			)
			setPost(response.data)
		} catch (e) {
			alert(e)
		}
	}

	return (
		<MainLayout>
			<button onClick={() => navigate('/posts')}>Назад</button>
			<div>
				<div className={s.root}>
					<div className={s.titleBox}>
						<div className={s.title}>{post?.title}</div>
						<div>
							📅{post?.rating.rate} | 👁{post?.rating.count} view
						</div>
					</div>
					<div className={s.imgBox}>
						<img className={s.img} src={post?.image} alt='' />
					</div>
					<div>{post?.description}</div>
				</div>
			</div>
		</MainLayout>
	)
}
export default PostItemPage
