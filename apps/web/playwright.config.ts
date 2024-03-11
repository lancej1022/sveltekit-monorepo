import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4174
	},
	testDir: 'e2e',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/
	// testMatch: /\.[jt]s/
};

export default config;
