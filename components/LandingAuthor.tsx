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
        animate={{ opacity: 1, transition: { staggerChildren: 0.15 } }}
        transition={{ duration: 0.5, delay: 0.1 }}
        whileHover={{ scale: 1.05 }}
      >
        <Craft.Container className="grid items-stretch md:grid-cols-2 md:gap-12">
          <div className="flex flex-col items-center space-x-2 pt-8">
            <Image
              src={Placeholder}
              alt="salce"
              width={192}
              height={192}
              className="h-48 w-48 rounded-full"
            />
          </div>
          <div className="flex flex-col gap-6 py-8 font-bold">
            <h3 className="!my-0 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Hi, I'm Alex
            </h3>

            <p className="leading-[1.8] opacity-70">
              Welcome to my online portfolo! I keep all of my latest projects, CV, and blog posts
              here. Happy to have you!
            </p>
            {/* <p>
              <Link
                href={`/projects`}
                className="hover:text-primary-600 -ml-2 text-sm font-semibold uppercase text-primary-500 dark:text-primary-500"
                aria-label={`Check out my favorite projects`}
              >
                Check out my latest projects
              </Link>
            </p>
            <p>
              <Link
                href={`/blog/cv`}
                className="-ml-2 text-sm font-semibold uppercase text-primary-500 dark:text-primary-500"
                aria-label={`Check out my CVs`}
              >
                Check out my CV
              </Link>
            </p> */}
          </div>
        </Craft.Container>
      </motion.div>
    </Craft.Section>
  )
}

export default LandingAuthor
