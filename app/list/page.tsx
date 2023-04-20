import { connectDB } from '@/util/database';
import Link from 'next/link';
import DetailLink from './DetailLink';

export default async function List() {
    const db = (await connectDB).db('forum');
    const result = await db.collection('post').find().toArray();

    return (
        <div className='list-bg'>
            {result.map((v, i) => (
                <div key={i} className='list-item'>
                    <Link href={`detail/${v._id}`}>
                        <h4>{v.title}</h4>
                    </Link>
                    <h6>{v.content}</h6>
                    <DetailLink />
                    <p>1월 1일</p>
                </div>
            ))}
        </div>
    );
}
