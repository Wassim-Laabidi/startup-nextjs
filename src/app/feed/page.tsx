import NoResult from '@/components/shared/NoResult';
import { getPosts } from '@/lib/actions/post.action';
import React from 'react'
import PostCard from '@/components/cards/PostCard';

export default async function page() {

    const posts = [{
        //
    }]

    const result = await getPosts({});

    console.log(result.posts)
    return (
        <>
            <div>Hello</div>
            <div className="mt-10 flex w-full flex-col gap-6">
                {result.posts.length > 0 ? (
                    result.posts.map((post) => {
                        return (
                            <PostCard
                                key={post._id}
                                _id={post._id}
                                title={post.title}
                                tags={post.tags}
                                author={post.author}
                                upvotes={post.upvotes}
                                answers={post.answers}
                                views={post.views}
                                createdAt={post.createdAt}
                            />
                        );
                    })
                ) : (
                    <NoResult />
                )}
            </div>
        </>
    );
}