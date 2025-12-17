<script lang="ts">
	import DocRenderer from '$lib/components/document/doc-renderer.svelte';
	import type { PageData } from './$types.js';
	import { siteConfig } from '$lib/config';

	let { data }: { data: PageData } = $props();
	let title = $derived(data.metadata.title);
	let description = $derived(data.metadata.description);
</script>

<svelte:head>
	<title>{title} | {siteConfig.title}</title>
	<meta name="description" content={description} />
</svelte:head>

<DocRenderer {title} {description} {data} />
