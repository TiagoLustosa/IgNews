import Head from 'next/head'
import { prismicClient } from '../../services/prismic'
import styles from './styles.module.scss'
import * as prismicH from '@prismicio/helpers'
import { GetStaticProps } from 'next/types'
import Link from 'next/link'

type Post = {
    slug: string,
    title: string,
    excerpt: string,
    updatedAt: string
}

interface PostsProps {
    posts: Post[]
}

export default function Posts({ posts }: PostsProps) {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>
            <main className={styles.container}>
                <div className={styles.posts}>
                    {posts.map(post => (
                        <Link href={`/Posts/${post.slug}`}>
                            <a key={post.slug} href='#'>
                                <time>{post.updatedAt}</time>
                                <strong>{post.title}</strong>
                                <p>{post.excerpt}</p>
                            </a>
                        </Link>
                    ))}
                </div>
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {


    const response = await prismicClient.getAllByType('post', {

    }
    )
    console.log(response)
    const posts = response.map(post => {
        return {
            slug: post.uid,
            title: prismicH.asText(post.data.title),
            excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
            updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        }
    })
    return {
        props: {
            posts
        }
    }
}