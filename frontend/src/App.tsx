import { useState } from 'react'
import { 
  MantineProvider, 
  AppShell,
  Text,  
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme, } from '@mantine/core';
import reactLogo from './assets/react.svg'
import { FrappeProvider } from 'frappe-react-sdk'
import HeaderResponsive  from './HeaderResponsive';
import HeroImageRight  from './AppHero';
import RealEstateSection from './RealEstateSection'

const headerLinks = [
  {
    links: [
      { link: '/about', label: 'Commercial Real Estate' },
      { link: '/pricing', label: 'Baseball' },
      { link: '/learn', label: 'Software Development' },
      { link: '/community', label: 'Connect' },
    ],
  },
];



function App() {
  const theme = useMantineTheme();
    // const [opened, setOpened] = useState(false);

  return (
      <FrappeProvider>
          <MantineProvider withGlobalStyles withNormalizeCSS theme={{  
          colorScheme: 'dark', headings: {fontFamily: 'Marcellus, sans-serif'} }}>
         <AppShell 
         padding="0"
         footer={ <Footer height={60} p="md">Application footer</Footer> }
         header={<HeaderResponsive links={headerLinks[0].links} />}
         > 
    <HeroImageRight/> 
    <RealEstateSection/>
    </AppShell> 
      
    </MantineProvider>
      </FrappeProvider>
  )
}

export default App
