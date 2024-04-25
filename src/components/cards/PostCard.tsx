import Link from 'next/link';
import React from 'react'

interface PostProps {
    _id: string;
    title: string;
    tags: {
        _id: string;
        name: string;
    }[];
    author: {
        _id: string;
        name: string;
        picture: string;
        clerkId: string;
    };
    upvotes: string[];
    views: number;
    answers: Array<object>;
    createdAt: Date;
    clerkId?: string | null;
}

const PostCard = ({
    clerkId,
    _id,
    title,
    tags,
    author,
    upvotes,
    answers,
    views,
    createdAt
}: PostProps) => {

    return (
        <div className='card-wrapper rounded-[10px]
        p-9 sm:px-11'>
            <div className='flex
            flex-col-reverse items-startjusitify-between gap-5sm:flex-row'>
                <div>
                    <span
                        className='subtle-regular
                    line-clamp-1 flex sm:hidden'>
                        {String(createdAt)}
                    </span>
                    {/* <Link href={`/post/${_id}`}
                    > */}
                    <h3>
                        {title}
                    </h3>
                </div>
            </div>

        </div>
    )
}

export default PostCard