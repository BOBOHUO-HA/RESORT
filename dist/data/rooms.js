import { imageAssets } from './images.js';

export const themes = [
  {
    key: 'forest',
    name: 'Forest',
    mood: 'Quiet · Natural · Grounded',
    image: imageAssets.forestRoom.filename,
    description: 'Bamboo, natural wood and sage green settle the room into the shaded countryside of Coloane.',
    scent: 'Pine and eucalyptus inspired',
    details: ['Bamboo textures', 'Sage green', 'Filtered light']
  },
  {
    key: 'sea-breeze',
    name: 'Sea Breeze',
    mood: 'Light · Airy · Coastal',
    image: imageAssets.seaBreezeRoom.filename,
    description: 'Linen, soft blue-grey details and arched-window light recall the coast at Cheoc Van.',
    scent: 'Sea salt and citrus inspired',
    details: ['Coastal blue', 'Natural linen', 'Open light']
  },
  {
    key: 'nostalgia',
    name: 'Nostalgia',
    mood: 'Warm · Familiar · Heritage-inspired',
    image: imageAssets.nostalgiaRoom.filename,
    description: 'Portuguese tiles, warm timber and terracotta carry the familiar atmosphere of old Coloane streets.',
    scent: 'Warm grain and old-paper inspired',
    details: ['Portuguese tiles', 'Warm timber', 'Terracotta']
  }
];

export const roomTypes = [
  {
    key: 'king', slug: 'king', name: 'Standard King', shortName: 'King', tone: 'green',
    size: '28 m²', guests: '2 guests', bed: 'King bed', price: 1050,
    image: imageAssets.kingRoom.filename,
    description: 'A generous room for two, grounded by a bamboo-woven headboard and quiet natural materials.',
    emotional: 'A calm room for two, made for unhurried mornings and an easy return from the coast.',
    features: ['Bamboo-inspired furnishings', 'Portuguese tile accents', 'Natural materials', 'Scent Diary', 'Optional fragrance experience', 'Ensuite bathroom', 'Natural light']
  },
  {
    key: 'twin', slug: 'twin', name: 'Twin', shortName: 'Twin', tone: 'blue',
    size: '28 m²', guests: '2 guests', bed: 'Two single beds', price: 1150,
    image: imageAssets.twinRoom.filename,
    description: 'Two thoughtfully arranged beds with room to pause by the window and share the day.',
    emotional: 'A balanced room for companions, with individual comfort and a shared view of Coloane.',
    features: ['Two bamboo-woven headboards', 'Portuguese tile accents', 'Natural materials', 'Scent Diary', 'Optional fragrance experience', 'Ensuite shower room', 'Natural light']
  },
  {
    key: 'family', slug: 'family', name: 'Family', shortName: 'Family', tone: 'ochre',
    size: '36 m²', guests: '3 guests', bed: 'One double + one single bed', price: 1300,
    image: imageAssets.familyRoom.filename,
    description: 'A flexible family room with a double bed, single bed and its own relaxed sitting nook.',
    emotional: 'Space to settle together, with a quiet corner for stories, games and the end of the day.',
    features: ['Family sitting nook', 'Board games', 'Bamboo-inspired furnishings', 'Portuguese tile accents', 'Scent Diary', 'Optional fragrance experience', 'Ensuite bathroom']
  },
  {
    key: 'suite', slug: 'suite', name: 'Suite', shortName: 'Suite', tone: 'terracotta',
    size: '45 m²', guests: '2 guests', bed: 'King bed', price: 1600,
    image: imageAssets.suite.filename,
    description: 'A separate bedroom and living room create a slower, more residential way to stay.',
    emotional: 'A spacious retreat with room to read, rest and watch the light move across the coast.',
    features: ['Separate living room', 'Larger bathroom', 'Bathtub', 'Bamboo-inspired furnishings', 'Portuguese tile accents', 'Scent Diary', 'Optional fragrance experience']
  }
];

export const roomOffers = [
  roomTypes[0],
  {
    ...roomTypes[0],
    key: 'king-fragrance-free',
    name: 'Fragrance-Free King',
    price: 1000,
    description: 'The same considered King Room layout, prepared without added fragrance products.',
    fragranceFree: true
  },
  ...roomTypes.slice(1)
];

export const views = [
  {
    key: 'street-hills',
    name: 'Street & Hills',
    image: imageAssets.windowA.filename,
    description: 'Timber shutters open toward Coloane’s quieter streets and green hills.'
  },
  {
    key: 'sea',
    name: 'Sea View',
    image: imageAssets.windowB.filename,
    description: 'Arched windows frame the coastline and soft morning light.'
  }
];

export const formatPrice = value => `MOP ${value.toLocaleString('en-US')}`;
