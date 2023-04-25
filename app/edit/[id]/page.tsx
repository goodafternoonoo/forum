import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function Write({ params }: { params: { id: string } }) {
    const db = (await connectDB).db('forum');
    const result = await db
        .collection('post')
        .findOne({ _id: new ObjectId(params.id) });

    return (
        <div className='p-20'>
            <h4>수정페이지</h4>
            <form action='/api/post/edit' method='POST'>
                <input type='hidden' name='id' value={params.id} />
                <input
                    name='title'
                    placeholder='글제목'
                    defaultValue={result?.title}
                />
                <input
                    name='content'
                    placeholder='글내용'
                    defaultValue={result?.content}
                />
                <button type='submit'>전송</button>
            </form>
        </div>
    );
}
