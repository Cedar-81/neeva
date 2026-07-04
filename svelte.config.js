import preprocess from 'svelte-preprocess';
import adapterVercel from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const isVercelBuild = process.env.VERCEL === '1' || process.env.VERCEL === 'true';

const adapter = isVercelBuild
	? adapterVercel()
	: {
		name: 'local-build-adapter',
		adapt: async () => {
			// No-op adapter for local builds so Windows symlink issues do not block `yarn build`.
		}
	};

/** @type {import('@sveltejs/kit').Config}*/
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true
		})
	],
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter,
		alias: {
			$components: 'src/components',
			'$components/*': 'src/components/*'
		}
	}
};
export default config;
