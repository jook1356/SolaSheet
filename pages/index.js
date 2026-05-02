import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Index() {
    const router = useRouter()

    useEffect(() => {
        const lang = navigator.language.startsWith('ko') ? 'ko' : 'en'
        router.replace(`/${lang}`)
    }, [router])

    return null
}
