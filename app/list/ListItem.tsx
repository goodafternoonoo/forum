'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ListItem({ result }: { result: any[] }) {
    const router = useRouter();

    return (
        <>
            {result.map((v, i) => (
                <div key={i} className='list-item'>
                    <Link href={`detail/${v._id}`}>
                        <h4>{v.title}</h4>
                    </Link>
                    <Link href={`/edit/${v._id}`}>✏️</Link>
                    <span
                        onClick={(e) => {
                            // fetch(`api/post/delete`, {
                            //     method: 'DELETE',
                            //     body: v._id,
                            // })
                            //     .then((r) => r.json())
                            //     .then((result) => {
                            //         (
                            //             e.target as HTMLSpanElement
                            //         ).parentElement!.style.opacity = '0';
                            //         setTimeout(() => {
                            //             (
                            //                 e.target as HTMLSpanElement
                            //             ).parentElement!.style.display =
                            //                 'none';
                            //         }, 1000);
                            //     })
                            //     .catch((error) => {
                            //         console.log(error);
                            //     });
                            fetch(`api/post/delete/${v._id}`, {
                                method: 'DELETE',
                            })
                                .then((r) => r.json())
                                .then((result) => {
                                    (
                                        e.target as HTMLSpanElement
                                    ).parentElement!.style.opacity = '0';
                                    setTimeout(() => {
                                        (
                                            e.target as HTMLSpanElement
                                        ).parentElement!.style.display = 'none';
                                    }, 1000);
                                })
                                .catch((error) => {
                                    console.log(error);
                                });
                        }}
                    >
                        🪣
                    </span>
                    <p>1월 1일</p>
                </div>
            ))}
        </>
    );
}
