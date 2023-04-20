import { connectDB } from '@/util/database';

export default async function handler(req: Request, res: any) {
    const db = (await connectDB).db('forum');
    const result = await db.collection('post').find().toArray();

    if (req.method === 'GET') {
        res.status(200).json(result);
    }
}
