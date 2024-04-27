import Post from '@/components/forms/Post'
import { getUserById } from '@/lib/actions/user.action';
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import React from 'react'

const page = async () => {
    // const { userId } = auth();
    const userId = 'CL123456'
    if (!userId) redirect('/signin');

    const mongoUser = await getUserById({ userId });

    console.log(mongoUser);

    return (
        <div>
            <h1 className='h1-bold'>Create Post</h1>
            <div className='mt-9'>
                <Post mongoUserId={JSON.stringify(mongoUser._id)} />
            </div>
        </div>
    )
}

export default page