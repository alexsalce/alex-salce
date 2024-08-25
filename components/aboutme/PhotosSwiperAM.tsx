'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cards'

// import required modules
import { EffectCards } from 'swiper/modules'

// Import next Image
import Image from 'next/image'

const photos = [
  {
    src: '/static/files/aboutme/photography/river2.jpg',
  },
  {
    src: '/static/files/aboutme/photography/0101321-R01-047-22.Jpg',
  },
  {
    src: '/static/files/aboutme/photography/0101321-R01-021-9.JPEG',
  },
  {
    src: '/static/files/aboutme/photography/0101321-R01-031-14.jpg',
  },
  {
    src: '/static/files/aboutme/photography/0101321-R01-033-15.jpg',
  },
  {
    src: '/static/files/aboutme/photography/s0101321-R01-019-8.JPEG',
  },
  {
    src: '/static/files/aboutme/photography/0101321-R01-045-21.jpg',
  },
  {
    src: '/static/files/aboutme/photography/1766421-R01-043-20.jpg',
  },
  {
    src: '/static/files/aboutme/photography/IMG_0142.JPG',
  },
  {
    src: '/static/files/aboutme/photography/IMG_0736.jpg',
  },
  {
    src: '/static/files/aboutme/photography/bridgebw1.jpg',
  },
  {
    src: '/static/files/aboutme/photography/IMG_6801.jpg',
  },
  {
    src: '/static/files/aboutme/photography/cactusbkg.jpg',
  },
  {
    src: '/static/files/aboutme/photography/church1.jpg',
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
    src: '/static/files/aboutme/photography/sparkledogs.jpg',
  },
  {
    src: '/static/files/aboutme/photography/windowbkg.jpg',
  },
  {
    src: '/static/files/aboutme/photography/yardbkg.jpg',
  },
]

const PhotosSwiperPhotography = () => {
  return (
    <>
      <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiper">
        {photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <Image src={photo.src} alt="Photography" width={500} height={300}></Image>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default PhotosSwiperPhotography
