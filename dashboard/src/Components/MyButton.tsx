
import { Builder } from '@builder.io/react'
import { Button } from '@mantine/core';


const Heading = props => (
  <Button>{props.title}</Button>
)


// Make sure that every page where renders Builder 
// content calls the file containing this function call
Builder.registerComponent(Heading, { 
  name: 'Heading',
  inputs: [{ name: 'title', type: 'text' }],
  image: 'https://tabler-icons.io/static/tabler-icons/icons-png/3d-cube-sphere-off.png'
})

