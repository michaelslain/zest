import React from 'react'
import {
    Header,
    Button,
    Tab,
    Nav,
    Hero,
    Heading,
    Website,
    Section,
    Page,
    Paragraph,
    Link,
} from 'zest'
import Logo from './images/moochle-logo.svg'
import 'zest/dist/index.css'

export default function App() {
    const theme = {
        theme: 'dark',
        primary: '#ffe259',
        secondary: '#ffa751',
    }

    return (
        <Website theme={theme} reactRouter={true}>
            <Page>
                <Header>
                    <Nav>
                        <Tab scrollTo='home'>Home</Tab>
                        <Tab scrollTo='about'>About</Tab>
                        <Tab>Shop</Tab>
                        <Tab>Contact</Tab>
                    </Nav>
                </Header>
                <Hero alignment='center' id='home'>
                    {/* <img src={Logo} /> */}
                    <Heading>Chicken Wings</Heading>
                    <Button>Learn more</Button>
                </Hero>
                <Section id='about'>
                    <Paragraph style={{ width: 1000, margin: 'auto' }}>
                        Lorem ipsum dolor sit amet,{' '}
                        <Link color='secondary' link='/hello'>
                            consectetuer adipiscing elit. Aenean commodo ligula
                            eget dolor. Aenean massa. Cum sociis natoque
                            penatibus et magnis dis parturient montes, nascetur
                            ridiculus mus. Donec quam felis, ultricies nec,
                            pellentesque eu, pretium quis, sem. Nulla consequat
                            massa quis enim. Donec pede justo, fringilla vel,
                            aliquet nec, vulputate eget, arcu. In enim justo{' '}
                        </Link>
                        rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
                        dictum felis eu pede mollis pretium. Integer tincidunt.
                        Cras dapibus. Vivamus elementum semper nisi. Aenean
                        vulputate eleifend tellus. Aenean leo ligula, porttitor
                        eu, consequat vitae, eleifend ac, enim. Aliquam lorem
                        ante, dapibus in, viverra quis, feugiat a, tellus.
                        Phasellus viverra nulla ut metus varius laoreet. Quisque
                        rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                        augue. Curabitur ullamcorper ultricies nisi. Nam eget
                        dui. Etiam rhoncus. Maecenas tempus, tellus eget
                        condimentum rhoncus, sem quam semper libero, sit amet
                        adipiscing sem neque sed ipsum. Nam quam nunc, blandit{' '}
                    </Paragraph>
                </Section>
            </Page>
            <Page name='hello'>
                <Heading>Hello</Heading>
            </Page>
        </Website>
    )
}
