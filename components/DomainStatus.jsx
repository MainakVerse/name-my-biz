'use client'
import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { toast } from '@/hooks/use-toast'

const DomainStatus = ({ open, setOpen, domain }) => {
    const [loading, setLoading] = useState(false)
    const [domainStatus, setDomainStatus] = useState()

    useEffect(() => {
        const getDomainStatus = async () => {
            if (domain) {

                try {
                    setLoading(true)
                    const response = await fetch(`https://domain-availability.whoisxmlapi.com/api/v1?apiKey=${process.env.NEXT_PUBLIC_DOMAIN_STATUS_API}&domainName=${domain}&credits=DA`, {
                        method: 'get'
                    })

                    if (!response.ok) {
                        throw new Error(response.statusText)
                    }
                    const data = await response.json()
                    setDomainStatus(data.DomainInfo.domainAvailability)
                } catch (error) {
                    console.log(error)
                    toast({
                        title: 'Domain status',
                        description: error.message
                    })
                } finally {
                    setLoading(false)
                }
            }
        }
        getDomainStatus()
    }, [domain])

    return (
        <Dialog open={open} onOpenChange={setOpen}>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-4xl font-semibold text-center mb-3">Domain Status</DialogTitle>
                    <DialogDescription>
                    </DialogDescription>

                    {loading ?
                        <p className='text-center'>Getting status for domain: <b>{domain}</b></p>
                        :
                        <div>
                            <p className='mb-3 text-center'>Availability status of domain: <b>{domain}</b></p>
                            {domainStatus && domainStatus === 'AVAILABLE' ?
                                <div className='flex justify-center'>
                                    <span className='bg-green-500 text-xl px-10 text-white rounded py-3'>
                                        {domainStatus}
                                    </span>
                                </div>
                                :
                                <div className='flex justify-center'>
                                    <span className='bg-red-500 text-xl px-10 text-white rounded py-3'>
                                        {domainStatus}
                                    </span>
                                </div>
                            }
                        </div>
                    }
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}

export default DomainStatus