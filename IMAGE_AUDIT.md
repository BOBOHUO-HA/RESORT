# Pousada do Silêncio image audit

Audit completed 20 November 2026 before new image generation. The official supplied artwork remains the source of truth.

| Page / use | Current file | Current representation | Match | Decision |
|---|---|---|---|---|
| Global header and footer | `logo-lockup.png` | Official bilingual hotel logo | Exact | Retain original |
| Homepage hero, Hotel hero, Contact hero, final CTA | `hotel-exterior-hero.webp` | Official hotel exterior watercolor | Exact | Retain original |
| Homepage / Rooms atmosphere | `forest-room.webp` | Official Forest atmosphere | Exact | Retain original |
| Homepage / Rooms atmosphere | `sea-breeze-room.webp` | Official Sea Breeze atmosphere | Exact | Retain original |
| Homepage / Rooms atmosphere | `nostalgia-room.webp` | Official Nostalgia atmosphere | Exact | Retain original |
| Rooms / King | `king-room.webp` | Official King axonometric room | Exact | Retain original |
| Rooms / Twin | `twin-room.webp` | Official Twin axonometric room | Exact | Retain original |
| Rooms / Family | `family-room.webp` | Official Family axonometric room | Exact | Retain original |
| Rooms / Suite | `suite.webp` | Official Suite axonometric room | Exact | Retain original |
| Homepage / room views | `window-a.webp` | Official Street & Hills window study | Exact | Retain original |
| Homepage / room views | `window-b.webp` | Official Sea View window study | Exact | Retain original |
| Homepage / Hotel floor plan | `ground-floor-plan.webp` | Official ground-floor plan | Exact | Retain original |
| Journeys landing hero | `window-a.webp` | Street-view room study used as generic journey visual | Related palette, wrong subject | Replace with a dedicated illustrated Coloane route panorama |
| Nature Escape card and detail | `forest-room.webp` | Forest guestroom | Wrong subject | Generate trail-to-coast journey illustration |
| Cultural Discovery card and detail | `nostalgia-room.webp` | Nostalgia guestroom | Wrong subject | Generate village, shipyard and craft journey illustration |
| Incense Special card and detail | `ground-floor-plan.webp` | Building floor plan | Wrong subject | Generate traditional unlit incense cultural workshop illustration |
| Experiences landing hero | `ground-floor-plan.webp` | Building floor plan | Too architectural / nonspecific | Replace with a quiet sensory-workshop editorial image |
| Breakfast Basket | `window-b.webp` | Sea-view room study | Related setting, product absent | Generate breakfast basket at Cheoc Van |
| Scent Walk | `forest-room.webp` | Forest guestroom | Wrong subject | Generate countryside scent-walk illustration |
| Cultural Workshop | `ground-floor-plan.webp` | Building plan | Wrong subject | Generate perfume-blending / incense-craft workshop illustration |
| Find Your Scent hero | `sea-breeze-room.webp` | Official Sea Breeze room | Appropriate atmosphere reference | Retain original |
| Coloane hero | `hotel-exterior-hero.webp` | Official hotel exterior | Appropriate gateway image | Retain original |
| Cheoc Van Beach | `window-b.webp` | View through room window | Related but indirect | Generate dedicated beach illustration |
| Countryside & trails | `forest-room.webp` | Forest guestroom | Wrong subject | Generate dedicated countryside walking-route illustration |
| Coloane Village | `window-a.webp` | View through room window | Related but indirect | Generate dedicated village-street illustration |
| Lai Chi Vun Shipyards | `nostalgia-room.webp` | Nostalgia guestroom | Wrong subject | Generate dedicated shipyard-heritage illustration |
| Shop hero | `nostalgia-room.webp` | Nostalgia guestroom | Mood only, no products | Generate editorial collection still life |
| Forest Room Mist | `forest-room.webp` | Forest guestroom | Wrong product | Generate square botanical room-mist product illustration |
| Sea Breeze Scent Card | `sea-breeze-room.webp` | Sea Breeze guestroom | Wrong product | Generate square scent-card product illustration |
| Nostalgia Gift Set | `nostalgia-room.webp` | Nostalgia guestroom | Wrong product | Generate square heritage gift-set illustration |
| Unlit Incense Craft Kit | `ground-floor-plan.webp` | Ground-floor plan | Wrong product | Generate square unlit incense craft-kit illustration |
| Coloane Travel Journal | `window-a.webp` | Window study | Wrong product | Generate square travel-journal still life |
| Watercolor Postcards | `hotel-exterior-hero.webp` | Hotel exterior only | Product not shown | Generate square postcard-set still life |
| Pousada Canvas Tote | `logo-lockup.png` | Logo only | Product not shown | Generate square canvas-tote illustration using the mark discreetly |
| Illustrated Route Map | `window-b.webp` | Window study | Wrong product | Generate square fold-out route-map still life |
| Gallery | Mixed official assets | Official hotel, room, view and plan artwork | Correct | Retain originals and add selected generated destination / experience work |
| Booking room selection | Official room axonometric files | Correct room types | Exact | Retain originals |

## Summary

- Retain all 12 official source assets unchanged.
- Generate dedicated assets for 3 journeys, 3 active experiences, 4 Coloane destinations and 8 active shop products.
- Add one shop collection hero and one journeys / one experiences editorial hero where an existing generated asset can be reused without misrepresenting content.
- Store every selected asset locally, optimize to WebP and assign it through one central manifest.

## Post-audit addition

- Added the user-supplied `Coloane Experience Passport` artwork on 20 November 2026.
- Placed it in the dedicated Coloane passport section and the editorial gallery.
- Optimized the website copy to WebP while preserving the 3:2 composition.
- Added a dedicated second-floor restaurant image family on 20 November 2026, generated directly from the user-provided restaurant architectural reference.
- Stored one 3:2 overview and two 4:3 supporting studies locally under `dist/public/images/dining/`; no bedroom or stock imagery is reused.
- Placed the overview on the homepage, and the complete three-image editorial story on the Hotel page and in the gallery.
