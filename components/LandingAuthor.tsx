'use client'

// React and Next.js imports
import Image from 'next/image'
import Link from 'next/link'

// UI component imports
import * as Craft from '@/components/craft'
import { Button } from '@/components/ui/button'

// Asset imports
import Placeholder from 'public/static/images/avatar-splash2.jpg'

// Framer
import { motion } from 'framer-motion'

const LandingAuthor = () => {
  return (
    <Craft.Section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView="visible"
        viewport={{ once: false }}
        animate={{ opacity: [0, 1], transition: { staggerChildren: 0.15 } }}
        transition={{ ease: 'easeIn', duration: 0.8, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <Craft.Container className="grid items-stretch md:grid-cols-2 md:gap-12">
          <div className="flex flex-col items-center space-x-2 pt-8">
            <Image
              src={Placeholder}
              alt="salce"
              width={192}
              height={192}
              className="h-60 w-60 rounded-full"
            />
          </div>
          <div className="flex flex-col gap-6 py-8 font-bold">
            <h3 className="!my-0 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Hi, I'm Alex
            </h3>

            <p className="text-primary-DEFAULT text-2xl leading-[1.4] opacity-70">
              Welcome to my online portfolio! I keep all of my latest projects, CV, and blog posts
              here. Happy to have you!
            </p>
          </div>
        </Craft.Container>
      </motion.div>
    </Craft.Section>
  )
}

export default LandingAuthor
