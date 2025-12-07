<script lang="ts">
  import type { Snippet } from 'svelte';
  import { Info, AlertTriangle, Lightbulb, CheckCircle } from 'lucide-svelte';

  interface Props {
    type?: 'info' | 'warning' | 'tip' | 'success';
    children?: Snippet;
  }

  let { type = 'info', children }: Props = $props();

  const icons = {
    info: Info,
    warning: AlertTriangle,
    tip: Lightbulb,
    success: CheckCircle
  };

  const IconComponent = icons[type];
</script>

<div class="callout callout-{type}">
  <div class="callout-icon">
    <IconComponent size={20} />
  </div>
  <div class="callout-content">
    {@render children?.()}
  </div>
</div>

<style>
  .callout {
    display: flex;
    gap: 0.75rem;
    padding: 1rem;
    border-radius: 0.5rem;
    margin: 1.5rem 0;
    border-left: 3px solid;
  }

  .callout-icon {
    flex-shrink: 0;
    display: flex;
    align-items: flex-start;
    padding-top: 0.125rem;
  }

  .callout-content {
    flex: 1;
    font-size: 0.9375rem;
    line-height: 1.6;
  }

  .callout-content :global(p:first-child) {
    margin-top: 0;
  }

  .callout-content :global(p:last-child) {
    margin-bottom: 0;
  }

  /* Info - Ally Green */
  .callout-info {
    background: hsl(var(--primary) / 0.1);
    border-color: hsl(var(--primary));
    color: hsl(var(--foreground));
  }

  .callout-info .callout-icon {
    color: hsl(var(--primary));
  }

  /* Warning - Ally Coral */
  .callout-warning {
    background: hsl(var(--destructive) / 0.1);
    border-color: hsl(var(--destructive));
    color: hsl(var(--foreground));
  }

  .callout-warning .callout-icon {
    color: hsl(var(--destructive));
  }

  /* Tip - Ally Purple */
  .callout-tip {
    background: hsl(var(--accent) / 0.1);
    border-color: hsl(var(--accent));
    color: hsl(var(--foreground));
  }

  .callout-tip .callout-icon {
    color: hsl(var(--accent));
  }

  /* Success - Ally Green (brighter) */
  .callout-success {
    background: hsl(155 57% 52% / 0.1);
    border-color: hsl(155 57% 52%);
    color: hsl(var(--foreground));
  }

  .callout-success .callout-icon {
    color: hsl(155 57% 52%);
  }

  /* Dark mode adjustments */
  :global(.dark) .callout-info {
    background: hsl(var(--primary) / 0.15);
  }

  :global(.dark) .callout-warning {
    background: hsl(var(--destructive) / 0.15);
  }

  :global(.dark) .callout-tip {
    background: hsl(var(--accent) / 0.15);
  }

  :global(.dark) .callout-success {
    background: hsl(155 57% 52% / 0.15);
  }
</style>
