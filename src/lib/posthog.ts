import { PostHog } from "posthog-node"

export default function PostHogClient() {

  const posthogClient = new PostHog("phc_ydJSSBZlbNQtZVwWKV62FnTJUWHmctjFI3oGyUYMtSH", {
    host: "https://us.i.posthog.com",
    flushAt: 1,
    flushInterval: 0,
  })
  return posthogClient
}
