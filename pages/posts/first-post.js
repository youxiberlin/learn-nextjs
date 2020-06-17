import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
	return (
		<Layout>
			<>
				<Head>
					<h1>First Post</h1>
				</Head>
				<h2>
					<Link href="/">
						<a>Back to home</a>
					</Link>
				</h2>
			</>
		</Layout>
	)
}