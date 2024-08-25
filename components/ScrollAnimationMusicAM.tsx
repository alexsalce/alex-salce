'use client'

import { useRef } from 'react'
import { clamp, motion, useScroll, useTransform, useInView, animate } from 'framer-motion'
import Image from 'next/image'

/*
 * Read the blog post here:
 * https://letsbuildui.dev/series/scroll-animations-with-framer-motion/scroll-linked-content-reveal-animation
 */
export const ScrollAnimation = () => {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  })

  const imageValue = useTransform(scrollYProgress, [0, 1], ['-100%', '0%'], { clamp: false })
  const imageValueFromRight = useTransform(scrollYProgress, [0, 1], ['100%', '-0%'], {
    clamp: false,
  })

  return (
    <section className="scroll-container" ref={containerRef}>
      <div className="img-container">
        <motion.div
          className="img-inner"
          whileInView="visible"
          viewport={{ once: false }}
          style={{ translateX: imageValue }}
          animate={{ opacity: [0, 1] }}
          transition={{ ease: 'easeIn', duration: 0.75 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <div className="-mx-2 flex flex-wrap overflow-hidden xl:-mx-2">
            <div className="my-1 w-full justify-center overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
              <Image
                src={'/static/files/aboutme/guitarcollege1.jpg'}
                alt="test"
                width={200}
                height={200}
              ></Image>
            </div>
            <div className="my-1 w-full justify-center overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
              <Image
                src={'/static/files/aboutme/guitarcollege3.jpg'}
                alt="test"
                width={200}
                height={200}
              ></Image>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="img-container">
        <motion.div
          className="img-inner"
          whileInView="visible"
          viewport={{ once: false }}
          style={{ translateX: imageValueFromRight }}
          animate={{ opacity: [0, 1] }}
          transition={{ ease: 'easeIn', duration: 0.75 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <div className="-mx-2 flex flex-wrap overflow-hidden xl:-mx-2">
            <div className="my-1 w-full justify-center overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
              <Image
                src={'/static/files/aboutme/guitartoday.jpg'}
                alt="test"
                width={300}
                height={300}
              ></Image>
            </div>
            <div className="my-1 w-full justify-center overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
              <Image
                src={'/static/files/aboutme/165_simon+willo.JPEG'}
                alt="test"
                width={300}
                height={300}
              ></Image>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
