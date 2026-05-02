import { useEffect } from 'react'
import { useRouter } from 'next/router'
import '../styles/globals.css'

function getCookieLocale() {
    if (typeof document === 'undefined') return null
    const m = document.cookie.match(/(?:^|;\s*)NEXT_LOCALE=([^;]+)/)
    return m ? m[1] : null
}

function getPathLocale(asPath) {
    if (asPath.startsWith('/ko')) return 'ko'
    if (asPath.startsWith('/en')) return 'en'
    return null
}

export default function MyApp({ Component, pageProps }) {
    const router = useRouter()

    useEffect(() => {
        const cookieLocale = getCookieLocale()
        const pathLocale = getPathLocale(router.asPath)

        if (cookieLocale && pathLocale && cookieLocale !== pathLocale) {
            const newPath = router.asPath.replace(
                new RegExp(`^/${pathLocale}`),
                `/${cookieLocale}`
            )
            router.replace(newPath)
        }
    }, [router.asPath])

    return <Component {...pageProps} />
}
