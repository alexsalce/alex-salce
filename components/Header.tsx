import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuViewport,
} from '@radix-ui/react-navigation-menu'

import '@/css/globals.css'

const Header = () => {
  return (
    <div className="sticky top-0">
      <header className="flex items-center justify-between py-0">
        <nav className="flex w-full items-center justify-between bg-zinc-100 px-5 py-3 opacity-85 shadow-md shadow-black/5 dark:bg-zinc-950 dark:shadow-black/10">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Logo />
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold hover:text-gray-300 sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
            {headerNavLinks
              .filter((link) => link.href !== '/')
              .map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="hidden font-medium text-gray-900 hover:text-gray-500 dark:text-gray-100 dark:hover:text-gray-500
              sm:block"
                >
                  {link.title}
                </Link>
              ))}
            <SearchButton />
            <ThemeSwitch />
            <MobileNav />
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
