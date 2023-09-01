import { Paper, Image, Text, Button, Title, SimpleGrid } from '@mantine/core';
import data from './data'; 
import PropertyCarouselCard from './PropertyCarouselCard';

function RealEstateSection() {
  const { title, image, description, testimonials, cta } = data.realEstate;

  return (
    <section>
      <Paper padding="md" style={{ margin: '20px 0' }}>
        
        {/* Title */}
        <Title align="center" variant="gradient" gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
      sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
      ta="center"
      fz="xl"
      fw={700}>
          {title}
        </Title>
        {/* Description */}
        <Text size="md" align="center" style={{ margin: '20px 0' }}>
          {description}
        </Text>
        
        <SimpleGrid  p="md" cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}> 
        {/* Put Three Carousel Cards here to highlight some properties that I have brokered */}
        <PropertyCarouselCard
  images={['https://jeffgrijalva.com/files/santa_cruz_2.jpg', 'https://jeffgrijalva.com/files/santa_cruz_3.jpg', 'https://jeffgrijalva.com/files/santa_cruz_4.jpg', 'https://jeffgrijalva.com/files/santa_cruz_5.jpg']}
  location="Anaheim, CA"
  rating="Lease"
  description="Prime real estate location with a stunning view."
  price="400,000"
/>

<PropertyCarouselCard
  images={['https://jeffgrijalva.com/files/collins_1.jpg', 'https://jeffgrijalva.com/files/collins_2.jpg', 'https://jeffgrijalva.com/files/collins_3.jpg']}
  location="Orange, CA"
  rating="Sale"
  description="Prime real estate location with a stunning view."
  price="400,000"
/>

<PropertyCarouselCard
  images={['https://jeffgrijalva.com/files/Highway_95_2.png', 'https://jeffgrijalva.com/files/Highway_95_3.png', 'https://jeffgrijalva.com/files/Highway_95_4.png']}
  location="Fort Mohave, AZ"
  rating="Sale"
  description="Prime real estate location with a stunning view."
  price="400,000"
/>

        
        </SimpleGrid>
        

        {/* Testimonials */}


        {/* Call to Action (CTA) */}
        <div style={{ textAlign: 'center', margin: '30px 0', padding: "30px" }}> </div>
      </Paper>
    </section>
  );
}

export default RealEstateSection;
