import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function handler(req: any, res: any) {
    if (req.method === 'POST') {
        if (!req.body.title) res.status(500).json('제목 어디감');
        if (!req.body.content) res.status(500).json('내용 어디감');

        try {
            const db = (await connectDB).db('forum');
            const result = await db.collection('post').updateOne(
                { _id: new ObjectId(req.body.id) },
                {
                    $set: {
                        title: req.body.title,
                        content: req.body.content,
                    },
                }
            );
            res.status(200).redirect('/list');
        } catch (error) {
            res.status(500).json(error);
        }
    }
}
