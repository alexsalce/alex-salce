'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

// Import next Image
import Image from 'next/image'

const photos = [
  {
    src: '/static/files/aboutme/photography/0101321-R01-047-22.Jpg',
  },
  {
    src: '/static/files/aboutme/photography/bridgebw1.jpg',
  },
  {
    src: '/static/files/aboutme/photography/cactusbkg.jpg',
  },
  {
    src: '/static/files/aboutme/photography/church1.jpg',
  },
  {
    src: '/static/files/aboutme/photography/homebkg.jpg',
  },
  {
    src: '/static/files/aboutme/photography/mmbkg.jpg',
  },
  {
    src: '/static/files/aboutme/photography/palms.jpg',
  },
  {
    src: '/static/files/aboutme/photography/river1.jpg',
  },
  {
    src: '/static/files/aboutme/photography/river2.jpg',
  },
  {
    src: '/static/files/aboutme/photography/sparkledogs.jpg',
  },
  // {
  //   src: '/static/files/aboutme/photography/swingsbkg.jpg',
  // },
  {
    src: '/static/files/aboutme/photography/windowbkg.jpg',
  },
  {
    src: '/static/files/aboutme/photography/yardbkg.jpg',
  },
]

const PhotosSwiper = () => {
  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {photos.map((photo, index) => (
        <SwiperSlide key={index}>
          <Image src={photo.src} alt="Photography" width={300} height={300}></Image>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default PhotosSwiper
