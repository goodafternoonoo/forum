import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function handler(req: any, res: any) {
    if (req.method === 'DELETE') {
        try {
            const db = (await connectDB).db('forum');
            const result = await db
                .collection('post')
                .deleteOne({ _id: new ObjectId(req.body) });

            if (result.deletedCount < 1) res.status(500).json('삭제 실패임');

            res.status(200).json('삭제완료');
        } catch (error) {
            throw error;
        }
    }
}
