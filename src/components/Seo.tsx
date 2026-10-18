import ogImage from "../assets/og.jpg"
import { SITE_URL } from "../config"

interface SeoProps {
    title: string
    description: string
    path: string
}

export default function Seo({ title, description, path }: SeoProps) {
    const url = `${SITE_URL}${path}`

    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="nginx ignition" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={`${SITE_URL}${ogImage}`} />
            <meta name="twitter:card" content="summary_large_image" />
        </>
    )
}
