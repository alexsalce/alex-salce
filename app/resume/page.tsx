import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { components } from '@/components/MDXComponents'

import SectionContainer from '@/components/SectionContainer'

import { Resume, allResumes } from 'contentlayer/generated'
import ResumeLayout from '@/layouts/ResumeLayout'

export default function Page() {
    const resume = allResumes.find((p) => p.slug === 'default') as Resume
    // Convert resume.toc from string to TOC[]
    return (
        <>
        <SectionContainer>
            <ResumeLayout toc={resume.toc}>
            <MDXLayoutRenderer code={resume.body.code} components={components} toc={resume.toc} />
            </ResumeLayout>

        </SectionContainer>
        </>
    )
    }