
import type { NavItem, SocialLink } from "$lib/types/nav";

import {
    Boxes,
    Paintbrush,
    Workflow,
    Zap
} from 'lucide-svelte';
import type { Feature, PromoConfig, SiteConfig } from "./types/config";


export const siteConfig: SiteConfig = {
    version: '1.0.0',
    title: 'Ally Documentation',
    description:
        'Learn how to use Ally, your AI-enhanced personal knowledge companion. Privacy-first knowledge management with local AI.',
    github: '',
    npm: '',

    quickLinks: [
        { title: 'Getting Started', href: '/docs/getting-started' },
        { title: 'Features', href: '/docs/features' }
    ],
    logo: '/logo.svg',
    logoDark: '/logo-white.svg',
    favicon: '/favicon.png',
};


export let navItems: NavItem[] = [
    {
        title: 'Docs',
        href: '/docs'
    },

];

export let socialLinks: SocialLink[] = [
    {
        title: 'Website',
        href: 'https://heyally.ai',
        icon: 'globe'
    }
];


export const features: Feature[] = [
    {
        icon: Boxes,
        title: 'Privacy-First',
        description: 'All AI processing happens locally on your device. Your data never leaves your Mac or iPhone.'
    },
    {
        icon: Workflow,
        title: 'Multi-Modal Capture',
        description: 'Voice, text, screen, and files—capture knowledge however it comes to you.'
    },
    {
        icon: Paintbrush,
        title: 'Intelligent Organization',
        description: 'AI automatically extracts insights, builds connections, and helps you find what you need.'
    },
    {
        icon: Zap,
        title: 'Local AI Power',
        description: 'Powered by on-device models for transcription, summarization, and knowledge extraction.'
    }
];

export let promoConfig: PromoConfig = {
    title: 'Need help?',
    description:
        'Have questions or feedback? We\'re here to help you get the most out of Ally.',
    ctaText: 'Contact Support',
    ctaLink: 'https://heyally.ai/contact',
    lightImage: '/images/dev-services-light.jpg',
    darkImage: '/images/dev-services-dark.jpg'
};