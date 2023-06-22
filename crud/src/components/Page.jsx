import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PostsList } from './routes/PostsList'
import { PostPage } from './routes/PostPage'
import { EditPage } from './routes/EditPage'

export const Page = () => {
    return (
        <div className="page">
            <Routes>
                <Route path='/' element={<PostsList />} />
                <Route path='/edit' element={<EditPage />} />
                <Route path='/new' element={<EditPage />} />
                <Route path='/:id' element={<PostPage />} />
            </Routes>
        </div>
    )
}
