// open-next.config.ts - disabled incremental cache
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
	// incremental cache disabled — no R2 bucket needed
});
