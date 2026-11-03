// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.m2p-coaching.fr',
	trailingSlash: 'never',
	integrations: [mdx(), sitemap({
		filter: (page) => !page.includes('/blog') && !page.includes('/guide-decision/merci') && !page.includes('/sante-privee') && !page.includes('/directeur-etablissement') && !page.includes('/particuliers') && !page.includes('/coaching-particuliers') && !page.includes('/professionnels') && !page.includes('/drh-'),
	})],
	redirects: {
		'/particuliers': '/transition-professionnelle',
		'/coaching-particuliers': '/transition-professionnelle',
		'/professionnels': '/organisations',
		'/drh-hospitalisation-privee': '/organisations',
		// Pages santé en stand-by depuis le 3 novembre 2026 (fichiers dans stand-by/), redirection temporaire
		'/sante-privee': { status: 302, destination: '/organisations' },
		'/directeur-etablissement': { status: 302, destination: '/prise-de-poste' },
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
