import Post from '@/components/forms/Post'
import React from 'react'

const page = () => {
    return (
        <div>
            <h1 className='h1-bold'>Create Post</h1>
            <div className='mt-9'>
                <Post />
            </div>
        </div>
    )
}

export default page