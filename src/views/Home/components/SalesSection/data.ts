import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'Trade anything. No registration, no hassle.',
  bodyText: 'Trade any token on Binance Smart Chain in seconds, just by connecting your wallet.',
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: 'Trade Now',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.astroswap.app/',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'VLX', alt: 'VLX token' },
      { src: 'BTC', alt: 'BTC token' },
      { src: 'Astro', alt: 'Astro token' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Earn passive income with crypto.',
  bodyText: 'AstroSwap makes it easy to make your crypto work for you.',
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: 'Explore',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.astroswap.app/products/yield-farming',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: 'pie', alt: 'Pie chart' },
      { src: 'stonks', alt: 'Stocks chart' },
      { src: 'folder', alt: 'Folder with cake token' },
    ],
  },
}

export const cakeSectionData: SalesSectionProps = {
  headingText: 'Astro makes our world go round.',
  bodyText:
    'Astro token is at the heart of the AstroSwap ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    text: 'Buy Astro',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.astroswap.app/',
    text: 'Learn',
    external: true,
  },

  images: {
    path: '/images/home/cake/',
    attributes: [
      { src: 'bottom-right', alt: 'Small 3d pancake' },
      { src: 'top-right', alt: 'Small 3d pancake' },
      { src: 'coin', alt: 'Astro token' },
      { src: 'top-left', alt: 'Small 3d pancake' },
    ],
  },
}
