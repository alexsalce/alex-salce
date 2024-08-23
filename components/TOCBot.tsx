'use client'

import { useEffect } from 'react'
import tocbot from 'tocbot'
export default function TocBot() {
  useEffect(() => {
    tocbot.init({
      tocSelector: '.js-toc', // Select the wrapper of toc
      contentSelector: '.js-toc-content', // Select the warpper of contents
      headingSelector: 'h2, h3, h4', // Choose the heading tags
      /* Optional 1.
      Enable these if you have a sticky header and adjust the offset value
      */
      headingsOffset: 100,
      scrollSmoothOffset: -100,
      scrollSmooth: true,
      /* Optional 2. 
      Enable this if 'active' class on scroll won't work properly
      */
      hasInnerContainers: true,
      collapsibleClass: 'is-collapsible',
    })
    return () => tocbot.destroy()
  }, [])
  return (
    <div>
      <span>Table of Contents</span>
      <div className="js-toc"></div>
    </div>
  )
}
