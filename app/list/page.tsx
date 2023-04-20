import { connectDB } from '@/util/database';

export default async function List() {
    const db = (await connectDB).db('forum');
    const result = await db.collection('post').find().toArray();

    return (
        <div className='list-bg'>
            {result.map((v) => (
                <div className='list-item'>
                    <h4>{v.title}</h4>
                    <h6>{v.content}</h6>
                    <p>1월 1일</p>
                </div>
            ))}
        </div>
    );
}
