// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.m2p-coaching.fr',
	integrations: [mdx(), sitemap({
		filter: (page) => !page.includes('/blog') && !page.includes('/guide-decision/merci'),
	})],
	redirects: {
		'/particuliers': '/transition-professionnelle',
		'/coaching-particuliers': '/transition-professionnelle',
		'/professionnels': '/organisations',
		'/drh-hospitalisation-privee': '/sante-privee',
		'/drh-pme': '/organisations',
	},
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
