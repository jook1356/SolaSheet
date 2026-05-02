import { useRouter } from 'next/router'

function I18nNavLinks() {
    const { asPath } = useRouter()
    const locale = asPath.startsWith('/ko') ? 'ko' : 'en'
    const links = locale === 'ko'
        ? [
              { href: '/ko/docs/getting-started', text: '문서' },
              { href: '/ko/license', text: '라이선스' }
          ]
        : [
              { href: '/en/docs/getting-started', text: 'Documentation' },
              { href: '/en/license', text: 'License' }
          ]

    return (
        <div style={{ display: 'flex', gap: '1.25rem', marginRight: '0.75rem', alignItems: 'center' }}>
            {links.map(l => (
                <a
                    key={l.href}
                    href={l.href}
                    style={{ fontSize: '0.9rem', whiteSpace: 'nowrap' }}
                >
                    {l.text}
                </a>
            ))}
        </div>
    )
}

export default {
    logo: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <a href="/" style={{ fontWeight: 600, textDecoration: 'none', color: 'inherit' }}>
                PureSheet Docs
            </a>
            <I18nNavLinks />
        </div>
    ),
    logoLink: false,
    project: {
        link: 'https://github.com/jook1356/PureSheet',
    },
    footer: {
        text: (
            <span>
                MIT {new Date().getFullYear()} ©{' '}
                <a href="https://github.com/jook1356/PureSheet" target="_blank">
                    PureSheet
                </a>
                .
            </span>
        ),
    },
    useNextSeoProps() {
        return {
            titleTemplate: '%s – PureSheet',
        }
    },
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content="PureSheet Documentation" />
            <meta property="og:description" content="Documentation for PureSheet - A powerful grid library combining Flat & Pivot features." />
        </>
    ),
    primaryHue: 215,
    docsRepositoryBase: 'https://github.com/jook1356/PureSheet/tree/main',
    i18n: [
        { locale: 'en', text: 'English' },
        { locale: 'ko', text: '한국어' }
    ]
}
