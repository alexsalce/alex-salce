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

// const Header = () => {
//   return (
//     <NavigationMenu>
//       <NavigationMenuList>
//         <header className="fixed top-0 flex items-center justify-between py-10">
//           <div>
//             <NavigationMenuItem>
//               <Link href="/" aria-label={siteMetadata.headerTitle}>
//                 <div className="flex items-center justify-between">
//                   <div className="mr-3">
//                     <Logo />
//                   </div>
//                   {typeof siteMetadata.headerTitle === 'string' ? (
//                     <div className="hidden h-6 text-2xl font-semibold sm:block">
//                       {siteMetadata.headerTitle}
//                     </div>
//                   ) : (
//                     siteMetadata.headerTitle
//                   )}
//                 </div>
//               </Link>
//             </NavigationMenuItem>
//           </div>
//           <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
//             <NavigationMenuItem>
//               <Link
//                 key="Blog"
//                 href="/blog"
//                 className="dark:hover:text-primary-400 hidden font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100
//               sm:block"
//               >
//                 Blog
//               </Link>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <Link
//                 key="Projects"
//                 href="/projects"
//                 className="dark:hover:text-primary-400 hidden font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100
//               sm:block"
//               >
//                 Projects
//               </Link>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <Link
//                 key="About"
//                 href="/about"
//                 className="dark:hover:text-primary-400 hidden font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100
//               sm:block"
//               >
//                 About
//               </Link>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <Link
//                 key="Resume"
//                 href="/resume"
//                 className="dark:hover:text-primary-400 hidden font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100
//               sm:block"
//               >
//                 CV
//               </Link>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <SearchButton />
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <ThemeSwitch />
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <MobileNav />
//             </NavigationMenuItem>
//           </div>
//         </header>
//       </NavigationMenuList>
//       <NavigationMenuViewport className="NavigationMenuViewport" />
//     </NavigationMenu>
//   )
// }

// export default Header

const Header = () => {
  return (
    <div className="sticky top-0">
      <header className="flex items-center justify-between py-10">
        <nav className="flex w-full items-center justify-between rounded-3xl bg-[#FBFBFB] px-5 py-3 opacity-55 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Logo />
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
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
                  className="dark:hover:text-primary-400 hidden font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100
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
