import React, { useState } from 'react'
import { Drawer } from '@mantine/core'
import {
    Button,
    AppShell,
    Group,
    Stack,
    Navbar,
    Header,
    Container,
    Footer,
    Aside,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme,
} from '@mantine/core'

export default function AppShellDemo({ children }) {
    const theme = useMantineTheme()
    const [opened, setOpened] = useState(false)
    return (
        <AppShell
            styles={{
                main: {
                    minHeight: 'calc(100vh - 140px)',
                },
            }}
            footer={
                <Footer height={70} p='md'>
                    Application footer
                </Footer>
            }
            header={
                <Header height={70} p='md'>
                    <Drawer opened={opened} onClose={() => setOpened(false)} padding='xl' size='md'>
                        <Stack>
                            <Button variant='gradient' gradient={{ from: 'indigo', to: 'cyan' }}>
                                Indigo cyan
                            </Button>
                            <Button variant='gradient' gradient={{ from: 'teal', to: 'lime', deg: 105 }}>
                                Lime green
                            </Button>
                            <Button variant='gradient' gradient={{ from: 'teal', to: 'blue', deg: 60 }}>
                                Teal blue
                            </Button>
                            <Button variant='gradient' gradient={{ from: 'orange', to: 'red' }}>
                                Orange red
                            </Button>
                            <Button variant='gradient' gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>
                                Peach
                            </Button>
                        </Stack>
                    </Drawer>

                    <Group position='right'>
                        <Button onClick={() => setOpened(true)}>Open Drawer</Button>
                    </Group>
                </Header>
            }
        >
            <Container size='md' px='sm'>
                {children}
            </Container>
        </AppShell>
    )
}
