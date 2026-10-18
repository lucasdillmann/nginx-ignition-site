import { type ReactNode, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { ArrowRightIcon } from "./icons"

interface CarouselProps {
    count: number
    children: (index: number) => ReactNode
    mode?: "fade" | "swap"
    controls?: "below" | "overlay"
    autoPlayMs?: number
    className?: string
    ariaLabel?: string
}

export default function Carousel({
    count,
    children,
    mode = "swap",
    controls = "below",
    autoPlayMs = 5500,
    className,
    ariaLabel,
}: CarouselProps) {
    const { t } = useTranslation()
    const [index, setIndex] = useState(0)
    const [paused, setPaused] = useState(false)

    useEffect(() => {
        if (paused || count < 2) {
            return
        }

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return
        }

        const interval = window.setInterval(() => {
            setIndex(current => (current + 1) % count)
        }, autoPlayMs)

        return () => window.clearInterval(interval)
    }, [paused, count, autoPlayMs])

    function goTo(next: number) {
        setIndex(((next % count) + count) % count)
    }

    return (
        <div
            className={`carousel carousel--${mode}${
                className ? ` ${className}` : ""
            }`}
            role="group"
            aria-label={ariaLabel}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
        >
            <div className="carousel__viewport">
                {mode === "fade" ? (
                    Array.from({ length: count }, (_, slideIndex) => (
                        <div
                            key={slideIndex}
                            className={`carousel__slide${
                                slideIndex === index ? " is-active" : ""
                            }`}
                            aria-hidden={slideIndex !== index}
                        >
                            {children(slideIndex)}
                        </div>
                    ))
                ) : (
                    <div className="carousel__slide is-active">
                        {children(index)}
                    </div>
                )}
            </div>
            {count > 1 && (
                <div
                    className={`carousel__controls carousel__controls--${controls}`}
                >
                    <button
                        type="button"
                        className="carousel__arrow carousel__arrow--prev"
                        aria-label={t("common.previous")}
                        onClick={() => goTo(index - 1)}
                    >
                        <ArrowRightIcon />
                    </button>
                    <div className="carousel__dots">
                        {Array.from({ length: count }, (_, dotIndex) => (
                            <button
                                key={dotIndex}
                                type="button"
                                className={`carousel__dot${
                                    dotIndex === index ? " is-active" : ""
                                }`}
                                aria-label={t("common.goToSlide", {
                                    index: dotIndex + 1,
                                })}
                                aria-current={
                                    dotIndex === index ? "true" : undefined
                                }
                                onClick={() => goTo(dotIndex)}
                            />
                        ))}
                    </div>
                    <button
                        type="button"
                        className="carousel__arrow"
                        aria-label={t("common.next")}
                        onClick={() => goTo(index + 1)}
                    >
                        <ArrowRightIcon />
                    </button>
                </div>
            )}
        </div>
    )
}
