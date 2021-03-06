import Link from 'next/link';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout title='Home | Next.js + TypeScript Example'>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/amp-story'>
        <a>amp story</a>
      </Link>
      <button onClick={() => alert('hello')}>hello</button>
    </p>
  </Layout>
);

export default IndexPage;
