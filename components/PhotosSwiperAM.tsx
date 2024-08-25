'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// import required modules
import { FreeMode, Pagination } from 'swiper/modules'

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
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
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

export default PhotosSwiper
