import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'
import PhotosSwiperPhotography from './aboutme/PhotosSwiperAM'
import PhotosSwiperMusic from './aboutme/MusicSwiperAM'
import PhotosSwiperOutdoors from './aboutme/OutdoorsSwiperAM'
import SocialIcon from '@/components/social-icons'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
  PhotosSwiperPhotography,
  PhotosSwiperMusic,
  PhotosSwiperOutdoors,
  SocialIcon,
}
