export default async function handler(req: Request, res: any) {
    if (req.method === 'GET') {
        res.status(200).json(new Date().toLocaleString());
    }
}
