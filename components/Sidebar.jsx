'use client'
import React from 'react'
import { Card, CardContent } from './ui/card'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { nameStyle, Randomness } from '@/helpers/constant'
import { useQueryContext } from '@/context/BusinessNameContext'
import { Input } from './ui/input'
import { Button } from './ui/button'

const Sidebar = ({ refresh, setRefresh }) => {
    const { query, updateQuery } = useQueryContext()

    const handleNameStyle = (nameStyle) => {
        updateQuery({ nameStyle })
    }
    const handleRandomness = (randomness) => {
        updateQuery({ randomness })
    }

    const handleFormField = (e) => {
        updateQuery({ [e.target.name]: e.target.value })
    }

    const generateBusinessName = () => {
        setRefresh(!refresh)
    }
    return (
        <Card className="bg-transparent rounded-md pt-3 border-gray-600">
            <CardContent>
            <div className='mb-5'>
                    <h4 className='text-green-500 text-xl font-semibold mb-3'>Green Color Represents Available Domains</h4>

               

                </div>
                <div className='mb-5'>
                    <h4 className='text-white text-xl font-semibold mb-3'>Naming Style</h4>

                    <RadioGroup value={query?.nameStyle || 'Auto'} onValueChange={handleNameStyle} >
                        {nameStyle.map((singleNameStyle) => <Label key={`namestyle${singleNameStyle.id}`} htmlFor={`namestyle${singleNameStyle.id}`} className="flex gap-3 items-center">
                            <RadioGroupItem value={singleNameStyle.name} id={`namestyle${singleNameStyle.id}`} />

                            <p className='text-md font-semibold mb-1 text-white'>{singleNameStyle.name}</p>


                        </Label>)}

                    </RadioGroup>

                </div>
                <div className='mb-5'>
                    <h4 className='text-white text-xl font-semibold mb-3'>Randomness</h4>

                    <RadioGroup value={query?.randomness || 'Medium'} onValueChange={handleRandomness} >
                        {Randomness.map((singleRandomness) => <Label key={`randomness${singleRandomness.id}`} htmlFor={`randomness${singleRandomness.id}`} className="flex gap-3 items-center">
                            <RadioGroupItem value={singleRandomness.name} id={`randomness${singleRandomness.id}`} />

                            <p className='text-md font-semibold mb-1 text-white'>{singleRandomness.name}</p>

                        </Label>)}

                    </RadioGroup>

                </div>

                <div>
                    <div className='mb-3'>
                        <Label className="text-white">Keyword</Label>
                        <Input value={query?.keyword || ''} name="keyword" onChange={handleFormField} placeholder="Keyword" className="text-white" />
                    </div>
                    <div className='mb-3'>
                        <Label className="text-white">Description</Label>
                        <Input value={query?.description || ''} onChange={handleFormField} name="description" placeholder="Description" className="text-white" />
                    </div>
                    <Button className="text-white" onClick={generateBusinessName}>Generate</Button>
                </div>

            </CardContent>
        </Card>
    )
}

export default Sidebar