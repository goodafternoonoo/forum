import { connectDB } from '@/util/database';

export default async function handler(req: any, res: any) {
    const { title, content } = req.body;
    if (req.method === 'POST') {
        const db = (await connectDB).db('forum');
        const result = await db
            .collection('post')
            .insertOne({ title, content });
        res.status(200).json(result);
    }
}
