export default {
    logo: <span>PureSheet Docs</span>,
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
