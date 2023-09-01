import { createStyles, Image, Card, Text, Group, Button, getStylesRef, rem, Badge } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

const useStyles = createStyles((theme) => ({
  price: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
  carousel: {
    '&:hover': {
      [`& .${getStylesRef('carouselControls')}`]: {
        opacity: 1,
      },
    },
  },
  carouselControls: {
    ref: getStylesRef('carouselControls'),
    transition: 'opacity 150ms ease',
    opacity: 0,
  },
  carouselIndicator: {
    width: rem(4),
    height: rem(4),
    transition: 'width 250ms ease',
    '&[data-active]': {
      width: rem(16),
    },
  },
}));

function PropertyCarouselCard({ images, location, rating, description, price }) {
  const { classes } = useStyles();

  const slides = images.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} height={220} />
    </Carousel.Slide>
  ));

  return (
    <Card radius="md" withBorder padding="xl">
      <Card.Section>
        <Carousel
          withIndicators
          loop
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
          }}
        >
          {slides}
        </Carousel>
      </Card.Section>

      <Group position="apart" mt="lg">
        <Text fw={500} fz="lg">
          {location}
        </Text>
        <Badge variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>{rating}</Badge>
          
      </Group>

      <Text fz="sm" c="dimmed" mt="sm">
        {description}
      </Text>

      <Group position="apart" mt="md">
        <div>
          <Text fz="xl" span fw={500} className={classes.price}>
            ${price}
          </Text>
          <Text span fz="sm" c="dimmed">
            {' '}
            / transaction
          </Text>
        </div>
        <Button radius="md">View Details</Button>
      </Group>
    </Card>
  );
}
export default PropertyCarouselCard;
