import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import { getServerSession } from 'next-auth';

export default async function handler(req: any, res: any) {
    if (req.method === 'DELETE') {
        const session = await getServerSession(req, res, authOptions);

        try {
            const db = (await connectDB).db('forum');

            const find = await db
                .collection('post')
                .findOne({ _id: new ObjectId(req.body) });

            if (find?.author === session?.user?.email) {
                const result = await db
                    .collection('post')
                    .deleteOne({ _id: new ObjectId(req.body) });
                res.status(200).json('삭제완료');
            } else {
                res.status(500).json('님이 쓴 글 아님');
            }
        } catch (error) {
            throw error;
        }
    }
}
