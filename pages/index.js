import Head from 'next/head'
import Image from 'next/image'
import Form from '../components/Form'
import styles from '../styles/Home.module.css'
import { createStyles } from '@mantine/core'
import {
    Box,
    Divider,
    Card,
    MediaQuery,
    TextInput,
    Title,
    Text,
    Image as MantineImage,
    SimpleGrid,
    Badge,
    Button,
    Space,
    Group,
    useMantineTheme,
    Paper,
    Avatar
} from '@mantine/core'

const useStyles = createStyles((theme) => ({
    container: {
        // Media query with value from theme
        [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
            backgroundColor: theme.colors.pink[6]
        },

        // Static media query
        '@media (max-width: 800px)': {
            backgroundColor: theme.colors.orange[6]
        }
    }
}))
export default function Home() {
    const theme = useMantineTheme()
    const { classes } = useStyles()

    const secondaryColor = theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7]

    return (
        <>
            <Image
                src='https://images.unsplash.com/photo-1598256989800-fe5f95da9787?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170'
                alt='dentist'
                width={1280}
                height={720}
                // layout='responsive'
            />
            <Space
                sx={(theme) => ({
                    [theme.fn.largerThan('md')]: { height: 150 },
                    [theme.fn.smallerThan('md')]: { height: 75 },
                    [theme.fn.smallerThan('sm')]: { height: 30 }
                })}
            />

            {/* <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
                <TextInput size='xl' />
            </MediaQuery>

            <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
                <TextInput size='sm' />
            </MediaQuery> */}

            <Paper radius={8} p='xl' className={classes.container}>
                <Button>Test</Button>
                <Title
                    sx={(theme) => ({
                        color: theme.colors.teal[9],
                        marginLeft: 24
                    })}
                    order={1}
                >
                    Our dentists
                </Title>
                <Space h={50} />

                <div style={{ width: 340, margin: 'auto' }}>
                    <Card shadow='sm' p='lg'>
                        <Card.Section>
                            <Image
                                src='https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80'
                                height={160}
                                width={340}
                                layout='responsive'
                                alt='Norway'
                            />
                        </Card.Section>

                        <Group position='apart' style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                            <Text weight={500}>Norway Fjord Adventures</Text>
                            <Badge color='pink' variant='light'>
                                On Sale
                            </Badge>
                        </Group>

                        <Text size='sm' style={{ color: secondaryColor, lineHeight: 1.5 }}>
                            With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities
                            on and around the fjords of Norway
                        </Text>

                        <Button variant='light' color='blue' fullWidth style={{ marginTop: 14 }}>
                            Book classic tour now
                        </Button>
                    </Card>
                </div>

                <SimpleGrid
                    cols={3}
                    spacing='lg'
                    breakpoints={[
                        { maxWidth: 980, cols: 3, spacing: 'md' },
                        { maxWidth: 755, cols: 1, spacing: 'sm' },
                        { maxWidth: 600, cols: 1, spacing: 'sm' }
                    ]}
                >
                    <Paper
                        radius='md'
                        withBorder
                        p='lg'
                        sx={(theme) => ({
                            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white
                        })}
                    >
                        <Avatar
                            src='https://this-person-does-not-exist.com/img/avatar-ade5de8bc50df8056aaa8ba6be1faf7e.jpg'
                            size={120}
                            radius={120}
                            mx='auto'
                        />
                        <Text align='center' size='lg' weight={500} mt='md'>
                            Ioana Necula
                        </Text>
                        <Text align='center' color='dimmed' size='sm'>
                            ioana.necula@gmail.com • dentist
                        </Text>

                        <Button variant='default' fullWidth mt='md'>
                            Send message
                        </Button>
                    </Paper>
                    <Paper
                        radius='md'
                        withBorder
                        p='lg'
                        sx={(theme) => ({
                            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white
                        })}
                    >
                        <Avatar
                            src='https://this-person-does-not-exist.com/img/avatar-3634e0d55daf2beb38dbf998165730e1.jpg'
                            size={120}
                            radius={120}
                            mx='auto'
                        />
                        <Text align='center' size='lg' weight={500} mt='md'>
                            Ioana Necula
                        </Text>
                        <Text align='center' color='dimmed' size='sm'>
                            ioana.necula@gmail.com • dentist
                        </Text>

                        <Button variant='default' fullWidth mt='md'>
                            Send message
                        </Button>
                    </Paper>
                    <Paper
                        radius='md'
                        withBorder
                        p='lg'
                        sx={(theme) => ({
                            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white
                        })}
                    >
                        <Avatar
                            src='https://this-person-does-not-exist.com/img/avatar-3634e0d55daf2beb38dbf998165730e1.jpg'
                            size={120}
                            radius={120}
                            mx='auto'
                        />
                        <Text align='center' size='lg' weight={500} mt='md'>
                            Ioana Necula
                        </Text>
                        <Text align='center' color='dimmed' size='sm'>
                            ioana.necula@gmail.com • dentist
                        </Text>

                        <Button variant='default' fullWidth mt='md'>
                            Send message
                        </Button>
                    </Paper>
                </SimpleGrid>
            </Paper>
            <Form />
        </>
    )
}
