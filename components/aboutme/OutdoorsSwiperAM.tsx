'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Autoplay, Pagination } from 'swiper/modules'

// Import next Image
import Image from 'next/image'

const photos = [
  {
    src: '/static/files/aboutme/outdoors/IMG_6979.JPG',
  },
  {
    src: '/static/files/aboutme/outdoors/IMG_6980.JPG',
  },
  {
    src: '/static/files/aboutme/outdoors/0101321-R01-047-22.JPEG',
  },
  {
    src: '/static/files/aboutme/outdoors/0101321-R01-063-30.JPEG',
  },
  {
    src: '/static/files/aboutme/outdoors/0101321-R01-071-34.JPEG',
  },
  {
    src: '/static/files/aboutme/outdoors/1766421-R01-043-20 (1).jpg',
  },
  {
    src: '/static/files/aboutme/outdoors/IMG_1873.jpg',
  },
  {
    src: '/static/files/aboutme/outdoors/IMG_1893.jpg',
  },
  {
    src: '/static/files/aboutme/outdoors/IMG_1913.jpg',
  },
  {
    src: '/static/files/aboutme/outdoors/IMG_3208.JPG',
  },
  {
    src: '/static/files/aboutme/outdoors/IMG_3213.jpg',
  },
  {
    src: '/static/files/aboutme/outdoors/IMG_3225.JPG',
  },
  {
    src: '/static/files/aboutme/outdoors/IMG_3334.JPG',
  },
  {
    src: '/static/files/aboutme/outdoors/IMG_3335.JPG',
  },
  {
    src: '/static/files/aboutme/outdoors/IMG_3463.PNG',
  },
  {
    src: '/static/files/aboutme/outdoors/IMG_4231.jpg',
  },
  {
    src: '/static/files/aboutme/outdoors/IMG_4241.jpg',
  },
  {
    src: '/static/files/aboutme/outdoors/IMG_5018.JPG',
  },
  {
    src: '/static/files/aboutme/outdoors/IMG_5038.JPG',
  },
  {
    src: '/static/files/aboutme/outdoors/IMG_5199.jpg',
  },
  {
    src: '/static/files/aboutme/outdoors/IMG_5619.jpg',
  },
  {
    src: '/static/files/aboutme/outdoors/IMG_6714.jpg',
  },
  {
    src: '/static/files/aboutme/outdoors/IMG_6733.jpg',
  },
  {
    src: '/static/files/aboutme/outdoors/IMG_6783.jpg',
  },
  {
    src: '/static/files/aboutme/outdoors/IMG_6801.jpg',
  },
  {
    src: '/static/files/aboutme/outdoors/IMG_8115.JPG',
  },
  {
    src: '/static/files/aboutme/outdoors/IMG_8979.jpg',
  },
  {
    src: '/static/files/aboutme/outdoors/IMG_8990.jpg',
  },
  {
    src: '/static/files/aboutme/outdoors/IMG_9114.JPG',
  },
  {
    src: '/static/files/aboutme/outdoors/IMG_9174.JPG',
  },
  {
    src: '/static/files/aboutme/outdoors/IMG_9175.JPG',
  },
]

const PhotosSwiperOutdoors = () => {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
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

export default PhotosSwiperOutdoors
