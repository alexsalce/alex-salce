import * as React from 'react'
import Image from 'next/image'

import { Section, Container } from '@/components/craft'
import { Card, CardContent } from '@/components/ui/card'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const photos = [
  {
    src: '/static/files/doe/ftlink.png',
  },
  {
    src: '/static/files/sml_nba/smlnbalink.png',
  },
  {
    src: '/static/files/decision/images/decision_link.png',
  },
  {
    src: '/static/files/nlp/images/nlp_link.png',
  },
]

const ProjectCarousel = () => {
  return (
    <Section>
      <Container>
        <h2 className="!mt-0 mb-4">My latest projects</h2>
        <p>All of the latest projects I have posted.</p>
        <Carousel className="mt-6 w-full">
          <CarouselContent className="-ml-1">
            {photos.map((photo, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="relative overflow-hidden">
                    <CardContent className="not-prose flex aspect-square items-center justify-center">
                      <Image
                        src={photo.src}
                        alt="Projects"
                        width={720}
                        height={480}
                        className="absolute inset-0 h-full w-full object-cover"
                      ></Image>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Container>
    </Section>
  )
}

export default ProjectCarousel
