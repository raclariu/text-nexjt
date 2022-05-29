import '../styles/globals.css'
import { MantineProvider } from '@mantine/core'
import AppContainer from '../components/AppContainer'

function MyApp({ Component, pageProps }) {
    return (
        <MantineProvider
            theme={{
                colorScheme: 'light',
                colors: {
                    testerino: [
                        '#e4f0ff',
                        '#bcd1f7',
                        '#92b3ec',
                        '#6894e4',
                        '#4075db',
                        '#275cc2',
                        '#1c4797',
                        '#13336d',
                        '#071f43',
                        '#000a1b'
                    ]
                },
                primaryColor: 'testerino'
            }}
            withGlobalStyles
            withNormalizeCSS
        >
            <AppContainer>
                <Component {...pageProps} />
            </AppContainer>
        </MantineProvider>
    )
}

export default MyApp
