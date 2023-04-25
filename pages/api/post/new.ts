import { connectDB } from '@/util/database';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(req: any, res: any) {
    const session = await getServerSession(req, res, authOptions);

    if (session) req.body.author = session.user?.email;

    if (req.method === 'POST') {
        if (!req.body.title) res.status(500).json('제목 어디감');
        if (!req.body.content) res.status(500).json('내용 어디감');

        try {
            const db = (await connectDB).db('forum');
            const result = await db.collection('post').insertOne(req.body);
            res.status(200).redirect('/list');
        } catch (error) {
            res.status(500).json(error);
        }
    }
}
