'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-creative'

// import required modules
import { Autoplay, EffectCreative } from 'swiper/modules'

// Import next Image
import Image from 'next/image'

const photos = [
  {
    src: '/static/files/aboutme/music/165_simon+willo.JPEG',
  },
  {
    src: '/static/files/aboutme/music/collegecollage.JPEG',
  },
  {
    src: '/static/files/aboutme/music/guitartoday.jpg',
  },
  {
    src: '/static/files/aboutme/music/al1.jpg',
  },
  // {
  //   src: '/static/files/aboutme/music/al2.JPG',
  // },
  {
    src: '/static/files/aboutme/music/IMG_1501.JPG',
  },
  {
    src: '/static/files/aboutme/music/NOT1.JPG',
  },
  {
    src: '/static/files/aboutme/music/IMG_5603.JPG',
  },
  {
    src: '/static/files/aboutme/music/IMG_5938.JPG',
  },
  {
    src: '/static/files/aboutme/music/NOT2.JPG',
  },
  {
    src: '/static/files/aboutme/music/IMG_5036.jpg',
  },
  {
    src: '/static/files/aboutme/music/IMG_5037.PNG',
  },
]

const PhotosSwiperMusic = () => {
  return (
    <>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[Autoplay, EffectCreative]}
        className="mySwiper"
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <Image src={photo.src} alt="Photography" width={500} height={300}></Image>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default PhotosSwiperMusic
