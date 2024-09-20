// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [starlight({
		title: 'IEEEXtreme UON',
		social: {
			github: 'https://github.com/kmishmael/IEEEXtreme',
		},
		customCss: ['./src/tailwind.css',
		],
		sidebar: [
			{
				label: 'Getting Started',
				items: [
					{
						label: 'Introduction', slug: 'start/introduction'
					},
					{
						label: 'How It Works', slug: 'start/how-it-works'
					},
					{
						label: 'How to Participate', slug: 'start/registration'
					}
				]
			},
			{
				label: 'Data Structures and Algorithms',
				items: [
					{
						label: 'Introduction', slug: 'data-structures/introduction'
					},
				]
			},
			{
				label: 'Past solutions',
				items: [
					{
						label: 'Caesar', slug: 'past-solutions/caesar-redux'
					},
				]
			}
			// {
			// 	label: 'Guides',
			// 	items: [
			// 		// Each item here is one entry in the navigation menu.
			// 		{ label: 'Example Guide', slug: 'guides/example' },
			// 	],
			// },
			// {
			// 	label: 'Reference',
			// 	autogenerate: { directory: 'reference' },
			// },
		],
		components: {
			Head: './src/components/Head.astro',
		}
	}), tailwind({
		applyBaseStyles: false,
	})],
});