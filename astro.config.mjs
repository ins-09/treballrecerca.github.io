// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Treball Recerca',
			tableOfContents: {minHeadingLevel: 2, maxHeadingLevel: 2},
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Español',
					lang: 'es',
				}
			},
			customCss: [
				'./src/styles/custom.css',
			]
		}),
	],
});
