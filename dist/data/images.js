// Central source of truth for every website image.
const image = (id, filename, page, content, alt, ratio, status) => ({ id, filename, page, content, alt, ratio, status });

export const imageAssets = {
  logo: image('brand-logo','/public/images/brand/logo-lockup.png','Global','Official bilingual hotel logo','竹灣隱舍 · Pousada do Silêncio official logo','3:2','original'),
  hotelExterior: image('hotel-exterior','/public/images/hotel/hotel-exterior.webp','Home, Hotel, Contact','Official hotel exterior','Watercolor view of Pousada do Silêncio with Portuguese arcades, green shutters and bougainvillea beside the Coloane coast','16:9','original'),
  groundFloorPlan: image('ground-floor-plan','/public/images/hotel/ground-floor-plan.webp','Home, Hotel','Official ground-floor plan','Watercolor ground-floor plan showing the arcade, scent foyer, reception, reading lounge, local shop and sensory workshop','3:2','original'),
  restaurantOverview: image('restaurant-overview','/public/images/dining/restaurant-overview.webp','Home, Hotel, Gallery','Second-floor restaurant overview','Watercolor view of the second-floor restaurant with arched green windows, Portuguese tiles and Coloane coastal views','3:2','ai-generated-from-user-reference'),
  restaurantWindowTable: image('restaurant-window-table','/public/images/dining/restaurant-window-table.webp','Hotel, Gallery','Restaurant window table','Watercolor restaurant table beside an arched window overlooking the Coloane coast','4:3','ai-generated-from-user-reference'),
  restaurantDetails: image('restaurant-material-details','/public/images/dining/restaurant-material-details.webp','Hotel, Gallery','Restaurant material details','Watercolor natural-wood buffet with Portuguese ceramics, tilework and botanical details','4:3','ai-generated-from-user-reference'),
  forestRoom: image('forest-room','/public/images/rooms/forest-room.webp','Home, Rooms, Scent','Forest visual atmosphere','Official watercolor Forest Room atmosphere with bamboo, natural wood and a green hillside view','3:2','original'),
  seaBreezeRoom: image('sea-breeze-room','/public/images/rooms/sea-breeze-room.webp','Home, Rooms, Scent','Sea Breeze visual atmosphere','Official watercolor Sea Breeze Room atmosphere with an arched sea-view window','3:2','original'),
  nostalgiaRoom: image('nostalgia-room','/public/images/rooms/nostalgia-room.webp','Home, Rooms, Scent','Nostalgia visual atmosphere','Official watercolor Nostalgia Room atmosphere with Portuguese tiles and warm timber','3:2','original'),
  kingRoom: image('king-room','/public/images/rooms/king-room.webp','Rooms, Booking','King room axonometric','Official watercolor axonometric illustration of the King Room','3:2','original'),
  twinRoom: image('twin-room','/public/images/rooms/twin-room.webp','Rooms, Booking','Twin room axonometric','Official watercolor axonometric illustration of the Twin Room','3:2','original'),
  familyRoom: image('family-room','/public/images/rooms/family-room.webp','Rooms, Booking','Family room axonometric','Official watercolor axonometric illustration of the Family Room','3:2','original'),
  suite: image('suite','/public/images/rooms/suite.webp','Rooms, Booking','Suite axonometric','Official watercolor axonometric illustration of the Suite','3:2','original'),
  windowA: image('window-a','/public/images/rooms/window-a.webp','Home, Rooms','Street and hills window study','Official watercolor Window A study with timber shutters opening toward Coloane streets and hills','3:2','original'),
  windowB: image('window-b','/public/images/rooms/window-b.webp','Home, Rooms','Sea-view window study','Official watercolor Window B study with an arched window framing the Coloane coast','3:2','original'),

  natureEscape: image('nature-escape','/public/images/journeys/nature-escape.webp','Journeys','Hotel-to-trail-to-coast nature route','Watercolor travel-journal route from Pousada do Silêncio through shaded Coloane trails to Cheoc Van Beach','16:9','ai-generated'),
  culturalDiscovery: image('cultural-discovery','/public/images/journeys/cultural-discovery.webp','Journeys','Village, shipyards and craft route','Watercolor cultural journey through Coloane Village, Lai Chi Vun shipyards and a local craft workshop','16:9','ai-generated'),
  incenseSpecial: image('incense-special','/public/images/journeys/incense-special.webp','Journeys','Limited traditional incense workshop','Watercolor illustration of a small traditional unlit incense craft workshop in a Portuguese-Macanese interior','16:9','ai-generated'),

  breakfastBasket: image('breakfast-basket','/public/images/experiences/breakfast-basket.webp','Experiences','Breakfast basket at Cheoc Van','Watercolor breakfast basket for two with local bakery items, fruit and coffee beside Cheoc Van Beach at sunrise','4:3','ai-generated'),
  scentWalk: image('scent-walk','/public/images/experiences/scent-walk.webp','Experiences','Self-guided nature scent walk','Watercolor self-guided Coloane scent walk with field journal, botanicals and coastal woodland','4:3','ai-generated'),
  craftWorkshop: image('craft-workshop','/public/images/experiences/cultural-craft-workshop.webp','Experiences','Perfume and unlit incense craft workshop','Watercolor small-group workshop table arranged for perfume blending and traditional unlit incense craft','4:3','ai-generated'),

  cheocVan: image('cheoc-van-beach','/public/images/coloane/cheoc-van-beach.webp','Coloane','Cheoc Van Beach','Watercolor view of quiet Cheoc Van Beach with wooded hills, granite rocks and muted blue water','4:3','ai-generated'),
  countryside: image('countryside-trails','/public/images/coloane/countryside-trails.webp','Coloane','Countryside walking routes','Watercolor shaded Coloane countryside path beneath banyan and bamboo with glimpses of the coast','4:3','ai-generated'),
  coloaneVillage: image('coloane-village','/public/images/coloane/coloane-village.webp','Coloane','Coloane Village','Watercolor Coloane Village lane with pastel Portuguese-Macanese façades, shutters and bougainvillea','4:3','ai-generated'),
  shipyards: image('lai-chi-vun-shipyards','/public/images/coloane/lai-chi-vun-shipyards.webp','Coloane','Lai Chi Vun shipyards','Watercolor heritage view of Lai Chi Vun timber boat-building sheds and wooden hull frames beside the water','4:3','ai-generated'),
  experiencePassport: image('coloane-experience-passport','/public/images/coloane/experience-passport.webp','Coloane, Gallery','Coloane Experience Passport','Watercolor Coloane Experience Passport with illustrated stamps, a wooden stamp, bougainvillea and the Chapel of Saint Francis Xavier by the coast','3:2','user-supplied'),

  shopCollection: image('shop-collection','/public/images/products/shop-collection.webp','Shop','Hotel shop collection','Watercolor boutique collection of scent, craft, paper and textile keepsakes inspired by Coloane','16:9','ai-generated'),
  forestMist: image('forest-room-mist','/public/images/products/forest-room-mist.webp','Shop, Product','Forest Room Mist bottle','Watercolor Forest Room Mist bottle with eucalyptus, pine, bamboo and sage-green ribbon','1:1','ai-generated'),
  seaBreezeCard: image('sea-breeze-scent-card','/public/images/products/sea-breeze-scent-card.webp','Shop, Product','Sea Breeze paper scent cards','Watercolor set of Sea Breeze scent cards with ocean-blue ribbon, citrus peel and sea-salt crystals','1:1','ai-generated'),
  nostalgiaGift: image('nostalgia-gift-set','/public/images/products/nostalgia-gift-set.webp','Shop, Product','Nostalgia Gift Set','Watercolor open Nostalgia gift box with scent card, journal, bookmark and bougainvillea','1:1','ai-generated'),
  incenseKit: image('unlit-incense-craft-kit','/public/images/products/unlit-incense-craft-kit.webp','Shop, Product','Unlit incense craft kit','Watercolor unlit incense craft kit with bamboo tools, botanical powders and molds, without flame or smoke','1:1','ai-generated'),
  travelJournal: image('coloane-travel-journal','/public/images/products/coloane-travel-journal.webp','Shop, Product','Coloane Travel Journal','Watercolor clothbound travel journal with pen, pressed leaf, route slip and stamp motifs','1:1','ai-generated'),
  postcards: image('watercolour-postcards','/public/images/products/watercolour-postcards.webp','Shop, Product','Watercolor postcard set','Watercolor postcard set depicting the hotel, arched windows, Coloane coast and village lanes','1:1','ai-generated'),
  canvasTote: image('pousada-canvas-tote','/public/images/products/pousada-canvas-tote.webp','Shop, Product','Pousada canvas tote','Watercolor natural canvas tote with bamboo, breeze and wave motifs','1:1','ai-generated'),
  routeMap: image('illustrated-route-map','/public/images/products/illustrated-route-map.webp','Shop, Product','Illustrated Coloane route map','Watercolor fold-out route map connecting the hotel, forest trail, beach, village and shipyards','1:1','ai-generated')
};

export const imageManifest = Object.values(imageAssets);
