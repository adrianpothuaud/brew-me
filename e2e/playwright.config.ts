// playwright.config.ts
import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: 'Smoke',
      testMatch: /.*smoke.ts/,
      retries: 0,
    },
    {
      name: 'Spec',
      testMatch: /.*spec.ts/,
      retries: 0,
    },
  ],
  reporter: [
    ['list'],
    ['junit', { outputFile: 'results.xml' }],
  ],
  timeout: 60000, // Timeout is shared between all tests.
  use: {
    baseURL: 'http://localhost:8080',
    trace: 'on',
  },
}
export default config
