'use client'
import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { toast } from '@/hooks/use-toast'
import { QueryDialog } from './QueryDialog'
import { useQueryContext } from '@/context/BusinessNameContext'

const Search = () => {
    const { query, updateQuery } = useQueryContext()

    const [keyword, setKeyword] = useState()
    const [queryDialog, setQueryDialog] = useState(false)
    const handleKeyword = (e) => {
        setKeyword(e.target.value)
    }

    const showQueryDialog = () => {
        if (!keyword) {
            return toast({
                title: 'Failed to generate business name',
                description: 'Please enter a keyword to generate business name.'
            })
        }

        updateQuery({ keyword })

        setQueryDialog(!queryDialog)

    }

    return (
        <div className='flex justify-center items-center pt-5'>
            <div className='w-[600px] flex items-center gap-5'>
                <Input onChange={handleKeyword} placeholder="Enter keyword..." className="h-14 text-white font-extrabold md:text-md border-primary border-4" />
                <Button onClick={showQueryDialog} className="bg-primary text-white hover:bg-secondary hover:text-primary h-14 text-lg px-5">Generate</Button>
            </div>
            <QueryDialog queryDialog={queryDialog} setQueryDialog={setQueryDialog} keyword={keyword} />
        </div>
    )
}

export default Search