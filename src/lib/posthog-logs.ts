import posthog from "./posthog"

type LogAttributes = Record<string, string | number | boolean>

export const posthogLog = {
    info(message: string, attributes: LogAttributes) {
        if (posthog.__loaded) {
            posthog.logger.info(message, attributes)
        }
    },
    warn(message: string, attributes: LogAttributes) {
        if (posthog.__loaded) {
            posthog.logger.warn(message, attributes)
        }
    },
}
