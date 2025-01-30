import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { nameStyle, Randomness } from '@/helpers/constant'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useQueryContext } from '@/context/BusinessNameContext'
import { useRouter } from 'next/navigation'


export const QueryDialog = ({ queryDialog, setQueryDialog }) => {

    const router = useRouter()

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

    const generateBusinessName = ()=>{
          router.push('/business-name')
    }

    return (
        <Dialog open={queryDialog} onOpenChange={setQueryDialog}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle></DialogTitle>
                </DialogHeader>

                <Tabs defaultValue="NameStyle"  >
                    <TabsList className="p-0 bg-transparent gap-5 mb-3">
                        <TabsTrigger className="text-md border data-[state=active]:bg-primary" value="NameStyle">Name Styles</TabsTrigger>
                        <TabsTrigger className="text-md border data-[state=active]:bg-primary" value="Randomness">Randomness</TabsTrigger>
                        <TabsTrigger className="text-md border data-[state=active]:bg-primary" value="BrandInfo">Brand Info</TabsTrigger>
                    </TabsList>

                    <TabsContent value="NameStyle">
                        <h4 className='text-lg font-semibold mb-3'>Select Name Style</h4>
                        <RadioGroup defaultValue="Auto" onValueChange={handleNameStyle} className="grid grid-cols-2 gap-5">
                            {nameStyle.map((singleNameStyle) => <Label key={`namestyle${singleNameStyle.id}`} htmlFor={`namestyle${singleNameStyle.id}`} className="p-4 rounded border flex gap-3 items-center">
                                <RadioGroupItem value={singleNameStyle.name} id={`namestyle${singleNameStyle.id}`} />
                                <div>
                                    <p className='text-md font-semibold mb-1'>{singleNameStyle.name}</p>
                                    <p>{singleNameStyle.description}</p>
                                </div>
                            </Label>)}

                        </RadioGroup>

                    </TabsContent>
                    <TabsContent value="Randomness">
                        <h4 className='text-lg font-semibold mb-3'>Select Randomness</h4>
                        <RadioGroup defaultValue="Medium" onValueChange={handleRandomness} >
                            {Randomness.map((singleRandomNess) => <Label key={`namestyle${singleRandomNess.id}`} htmlFor={`namestyle${singleRandomNess.id}`} className="p-4 rounded border flex gap-3 items-center mb-3">
                                <RadioGroupItem value={singleRandomNess.name} id={`namestyle${singleRandomNess.id}`} />
                                <div>
                                    <p className='text-md font-semibold mb-1'>{singleRandomNess.name}</p>
                                    <p>{singleRandomNess.description}</p>
                                </div>
                            </Label>)}

                        </RadioGroup>

                    </TabsContent>
                    <TabsContent value="BrandInfo">
                        <h4 className='text-lg font-semibold mb-3'>Enter Brand Information</h4>
                        <div className='mb-3'>
                            <Label>Keyword</Label>
                            <Input value={query?.keyword || ''} name="keyword" onChange={handleFormField} placeholder="Keyword" />
                        </div>
                        <div className='mb-3'>
                            <Label>Description</Label>
                            <Input value={query?.description || ''} onChange={handleFormField} name="description" placeholder="Description" />
                        </div>
                        <Button className="text-white" onClick={generateBusinessName}>Generate</Button>
                    </TabsContent>
                </Tabs>


            </DialogContent>
        </Dialog>
    )
}
