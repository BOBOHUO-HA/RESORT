import { themes, roomTypes } from '../data/rooms.js';

const params = new URLSearchParams(window.location.search);
const room = roomTypes.find(item => item.key === params.get('room'));
const theme = themes.find(item => item.key === params.get('theme'));
const fragrance = params.get('fragrance');
const selection = document.querySelector('[data-book-selection]');
if (room || theme || fragrance) {
  selection.textContent = [room ? `${room.shortName} Room` : null, theme ? `${theme.name} atmosphere` : null, fragrance ? fragrance.replaceAll('-', ' ') : null].filter(Boolean).join(' · ');
}
