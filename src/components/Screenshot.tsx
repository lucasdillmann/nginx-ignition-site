interface ScreenshotProps {
    src: string
    alt: string
    width?: number
    height?: number
    className?: string
}

export default function Screenshot({
    src,
    alt,
    width = 1600,
    height = 1000,
    className,
}: ScreenshotProps) {
    return (
        <div className={`shot${className ? ` ${className}` : ""}`}>
            <div className="shot__bar" aria-hidden="true">
                <span />
                <span />
                <span />
            </div>
            <img
                className="shot__img"
                src={src}
                alt={alt}
                width={width}
                height={height}
                loading="lazy"
                decoding="async"
            />
        </div>
    )
}
