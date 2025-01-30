'use client'
import DomainStatus from '@/components/DomainStatus'
import Sidebar from '@/components/Sidebar'
import { useQueryContext } from '@/context/BusinessNameContext'
import { generatePrompt } from '@/helpers/function'
import { GoogleGenerativeAI } from '@google/generative-ai'
import React, { useEffect, useRef, useState } from 'react'

const BusinessName = () => {
    const { query, updateQuery } = useQueryContext()
    const [names, setNames] = useState([])
    const [loading, setLoading] = useState(false)
    const observeDiv = useRef()
    const [page, setPage] = useState(1)
    const [refresh, setRefresh] = useState(false)
    const [availableDomains, setAvailableDomains] = useState({})

    const [domainDialogOpen, setDomainDialogOpen] = useState(false)
    const [domain, setDomain] = useState()

    const checkDomainAvailability = async (businessname) => {
        try {
            const domain = businessname.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() + '.com'
            const response = await fetch(`https://domain-availability.whoisxmlapi.com/api/v1?apiKey=${process.env.NEXT_PUBLIC_DOMAIN_STATUS_API}&domainName=${domain}&credits=DA`, {
                method: 'get'
            })
            const data = await response.json()
            return data.DomainInfo?.domainAvailability === "AVAILABLE"
        } catch (error) {
            console.log(error)
            return false
        }
    }

    const checkNewNamesAvailability = async (newNames) => {
        const availabilityPromises = newNames.map(async (name) => {
            const isAvailable = await checkDomainAvailability(name)
            return [name, isAvailable]
        })
        
        const results = await Promise.all(availabilityPromises)
        const newAvailability = Object.fromEntries(results)
        
        setAvailableDomains(prev => ({
            ...prev,
            ...newAvailability
        }))
    }

    const fetchBusinessName = async () => {
        try {
            setLoading(true)
            const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

            const inputs = { ...query, names }

            const prompt = generatePrompt(inputs);

            const result = await model.generateContent(prompt);
            const unfilteredJsonString = result.response.text()
            const jsonString = unfilteredJsonString.replace(/```json|```/g, '')
            const jsonData = JSON.parse(jsonString)
            if (jsonData && jsonData.names) {
                const newNames = jsonData.names
                setNames([...names, ...newNames])
                // Check availability for new names
                await checkNewNamesAvailability(newNames)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchBusinessName()
    }, [page])

    useEffect(() => {
        setNames([])
        setAvailableDomains({})
        fetchBusinessName()
    }, [refresh])

    const handleIntersection = (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
            setPage((prev) => prev + 1)
        }
    }

    useEffect(() => {
        const oberserver = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: '-10px',
            threshold: [0, 0.5, 1]
        })

        if (observeDiv.current) oberserver.observe(observeDiv.current)

        return () => {
            if (observeDiv.current) oberserver.unobserve(observeDiv)
        }
    }, [])

    const getDomainStatus = (businessname) => {
        const domain = businessname.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() + '.com'
        setDomain(domain)
        setDomainDialogOpen(!domainDialogOpen)
    }

    return (
        <div className='md:px-20 px-5 mb-10'>
            <h1 className='mt-32 text-4xl text-white font-semibold text-center border-b pb-10 border-gray-500'>Business Name</h1>

            <div className='md:flex justify-center items-start gap-10 mt-10' >
                <div className='md:w-[25%] md:mb-0 mb-5'>
                    <Sidebar refresh={refresh} setRefresh={setRefresh} />
                </div>
                <div className='md:w-[75%]'>
                    <div className='grid md:grid-cols-4 grid-cols-2 gap-10'>
                        {names && names.length > 0 && names.map((singleName, index) => {
                            return (
                                <div 
                                    onClick={() => getDomainStatus(singleName)} 
                                    key={index} 
                                    className={`border border-gray-600 rounded p-4 cursor-pointer text-white hover:bg-primary hover:text-black ${
                                        availableDomains[singleName] ? 'bg-green-600' : ''
                                    }`}
                                >
                                    {singleName}
                                </div>
                            )
                        })}
                    </div>
                    {loading && <div className='text-center text-primary pt-5 text-lg'>Loading...</div>}
                    <div ref={observeDiv} className='h-2' ></div>
                </div>
            </div>

            <DomainStatus open={domainDialogOpen} setOpen={setDomainDialogOpen} domain={domain} />
        </div>
    )
}

export default BusinessName