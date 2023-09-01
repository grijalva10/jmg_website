import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import {  Route, BrowserRouter, Link } from 'react-router-dom';
import { BuilderComponent, builder, Builder, useIsPreviewing, withChildren  } from '@builder.io/react';
import reactLogo from './assets/react.svg'
import { FrappeProvider } from 'frappe-react-sdk' 
import { MantineProvider, 
         Button,
         ButtonProps, AppShell, Navbar, Footer, Header, Aside, Text,MediaQuery, Burger, useMantineTheme, Paper } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';


import NavbarWithSearch from './Components/NavbarWithSearch'
import AdminHeader from './Components/AdminHeader'


// Put your API key here
builder.init('26bd53d7c5d448c0a53fde198828712d');

// set whether you're using the Visual Editor,
// whether there are changes,
// and render the content if found

// type MyProps = { content: string; link: string }

export const Hero = props =>
  <div>{props.children}</div>

// pass your custom component to withChildren()
const HeroWithBuilderChildren = withChildren(Hero)

// specify defaultChildren when you register the component
Builder.registerComponent(HeroWithBuilderChildren, {
  name: 'Hero',
  // Adding defaults is important for easy usability
  defaultChildren: [
    { 
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Text', options: { text: 'I am child text block!' } }
    }
  ]
}) 


// Any component in your codebase
function MyButton(props: ButtonProps) {
  return <Button {...props}>{props.children}</Button>
}

Builder.registerComponent(MyButton, {
  name: 'MyButton',
  inputs: [
    { name: 'children', type: 'text', defaultValue: 'Button' },
    { name: 'color', type: 'string', enum: ['primary', 'secondary', /* add other MantineColors here */] },
    { name: 'compact', type: 'boolean', defaultValue: false },
    { name: 'disabled', type: 'boolean', defaultValue: false },
    { name: 'fullWidth', type: 'boolean', defaultValue: false },
    { name: 'gradient', type: 'string' },  // You might need more details for gradients if it's a complex type.
    { name: 'leftIcon', type: 'string' },  // Assuming icon can be represented as a string or URL
    { name: 'loaderPosition', type: 'string', enum: ['left', 'right', 'center'], defaultValue: 'right' },
    { name: 'loading', type: 'boolean', defaultValue: false },
    { name: 'radius', type: 'string', enum: ['xs', 'sm', 'md', 'lg', 'xl'], defaultValue: 'md' },
    { name: 'rightIcon', type: 'string' },  // Assuming icon can be represented as a string or URL
    { name: 'size', type: 'string', enum: ['xs', 'sm', 'md', 'lg', 'xl'], defaultValue: 'md' },
    { name: 'type', type: 'string', enum: ['button', 'reset', 'submit'], defaultValue: 'button' },
    { name: 'uppercase', type: 'boolean', defaultValue: false },
    { name: 'variant', type: 'string', enum: ['outline', 'white', 'light', 'default', 'filled', 'gradient', 'subtle'], defaultValue: 'default' },
    // If loaderProps is a complex object, it may need a different representation, or multiple inputs for its properties.
  ],
  image: 'https://tabler-icons.io/static/tabler-icons/icons-png/3d-cube-sphere-off.png',
});


export default function App() {
  const isPreviewingInBuilder = useIsPreviewing();
  const [notFound, setNotFound] = useState(false);
  const [content, setContent] = useState(null);
  const [opened, setOpened] = useState(false);
  
  const theme = useMantineTheme();

  // get the page content from Builder
   useEffect(() => {
    async function fetchContent() {
      const content = await builder
        .get("page", {
          url: window.location.pathname
        })
        .promise();

      setContent(content);
      setNotFound(!content);

      // if the page title is found, 
      // set the document title
      if (content?.data.title) {
       document.title = content.data.title
      }
    }
    fetchContent();
  }, [window.location.pathname]);
  
  // If no page is found, return 
  // a 404 page from your code.
  // The following hypothetical 
  // <FourOhFour> is placeholder.
  if (notFound && !isPreviewingInBuilder) {
    return <div>404</div>
  }

  // return the page when found
   return (
      <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
<AppShell
      styles={{
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<NavbarWithSearch hidden={!opened} />}
      footer={
        <Footer height={30} p="md">
        </Footer>
      }
      header={
        				<AdminHeader
					burger={
						<MediaQuery largerThan="md" styles={{ display: 'none' }}>
							<Burger
								opened={opened}
								onClick={() => setOpened(o => !o)}
								size="sm"
								mr="xl"
							/>
						</MediaQuery>
					}
				/>
      }
    > 
        <Paper shadow="sm" p="sm" withBorder> 
        <BuilderComponent model="page" content={content} />

    </Paper>
      
    </AppShell>
     </MantineProvider>
  );
}
