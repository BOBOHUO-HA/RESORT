import { L } from '../pages/i18n.js';
import { imageAssets } from './images.js';
import { pricing } from './pricing.js';

export const culturalWorkshopOptions = [
  { id:'perfume-blending', name:L('Perfume Blending','香水调配','香水調配'), special:false },
  { id:'incense-cookie', name:L('Incense Cookie Making','香饼制作','香餅製作'), special:false },
  { id:'cone-incense', name:L('Cone Incense Craft','塔香制作','塔香製作'), special:false },
  { id:'traditional-incense', name:L('Traditional Incense Special Edition','传统香文化特别体验','傳統香文化特別體驗'), special:true }
];

export const journeys = [
  {
    slug: 'nature-escape', number: '01', name: L('Coloane Nature Escape', '路环自然逸游', '路環自然逸遊'), price: pricing.journeys.natureEscape.base, childPrice: pricing.journeys.natureEscape.child, duration: L('Two days · One night', '两天一夜', '兩天一夜'),
    image: imageAssets.natureEscape.filename, tagline: L('Follow the shade from hillside trail to open coast.', '从山径树荫走向开阔海岸。', '從山徑樹蔭走向開闊海岸。'),
    story: L('A self-guided stay enhancement for guests who want Coloane’s green paths, beach light and rural character to set the pace.', '为希望以路环绿径、海滩光线与乡野气息调节步伐的宾客而设的自助探索住宿体验。', '為希望以路環綠徑、海灘光線與鄉野氣息調節步伐的賓客而設的自助探索住宿體驗。'),
    route: [L('Hotel','酒店'), L('Oscar Trail','奥斯卡山径','奧斯卡山徑'), L('Cheoc Van Beach','竹湾海滩','竹灣海灘'), L('Oscar Farm','奥斯卡农场','奧斯卡農場')],
    included: [L('Two-day, one-night stay enhancement','两天一夜住宿体验升级','兩天一夜住宿體驗升級'),L('Breakfast basket for two','双人早餐篮','雙人早餐籃'),L('Nature Exploration Kit','自然探索套装','自然探索套裝'),L('Self-guided nature exploration and route information','自助自然探索与路线资料','自助自然探索與路線資料'),L('Safety information','安全资讯','安全資訊'),L('Complimentary Coloane Experience Passport','免费路环体验护照','免費路環體驗護照')],
    availability: L('Outdoor elements are weather dependent. Access arrangements may affect individual stops; unsafe sections may be suspended.', '户外环节视天气而定。个别站点可能受通行安排影响；不安全路段将暂停。', '戶外環節視天氣而定。個別站點可能受通行安排影響；不安全路段將暫停。')
  },
  {
    slug: 'cultural-discovery', number: '02', name: L('Coloane Cultural Discovery', '路环文化发现', '路環文化發現'), price: pricing.journeys.culturalDiscovery.standard, childPrice: pricing.journeys.culturalDiscovery.child, upgradePrice: pricing.journeys.culturalDiscovery.traditionalIncense, duration: L('Two days · One night', '两天一夜', '兩天一夜'),
    image: imageAssets.culturalDiscovery.filename, tagline: L('Read the village through streets, shipyards and craft.', '从街巷、船厂与工艺读懂路环。', '從街巷、船廠與工藝讀懂路環。'),
    story: L('A layered cultural route connecting village heritage with a pre-booked small-group craft workshop.', '一条连接村落历史与预订小组手作坊的文化路线。', '一條連接村落歷史與預訂小組手作坊的文化路線。'),
    route: [L('Hotel','酒店'),L('Coloane Village','路环市区','路環市區'),L('Lai Chi Vun Shipyards','荔枝碗船厂片区','荔枝碗船廠片區'),L('Hotel Craft Workshop','酒店文化手作坊','酒店文化手作坊')],
    included: [L('Two-day, one-night stay enhancement','两天一夜住宿体验升级','兩天一夜住宿體驗升級'),L('Breakfast basket','早餐篮','早餐籃'),L('Cultural route and heritage visits','文化路线与历史地点参访','文化路線與歷史地點參訪'),L('One pre-booked cultural workshop','一场预约文化手作坊','一場預約文化手作坊'),L('Complimentary Coloane Experience Passport','免费路环体验护照','免費路環體驗護照')],
    workshopOptions: culturalWorkshopOptions,
    availability: L('Workshops require advance reservation, have limited capacity and may change with partner schedules.', '手作坊须提前预约，名额有限，并可能因合作方安排而调整。', '手作坊須提前預約，名額有限，並可能因合作方安排而調整。')
  }
];

export const experiences = [
  { slug:'breakfast-basket', name:L('Bamboo-Bay Sunrise Breakfast Basket','竹湾晨光早餐篮','竹灣晨光早餐籃'), price:pricing.experiences.breakfastBasket, image:imageAssets.breakfastBasket.filename, description:L('Local bakery items, seasonal fruit and coffee for two. Pre-order required; available individually or within selected packages.','本地烘焙、时令水果与双人咖啡。须预订，可单独购买或包含于指定套餐。','本地烘焙、時令水果與雙人咖啡。須預訂，可單獨購買或包含於指定套餐。') },
  { slug:'craft-workshop', name:L('Cultural Craft Workshop','文化手作坊','文化手作坊'), price:pricing.experiences.culturalWorkshop, image:imageAssets.craftWorkshop.filename, description:L('Small-group perfume blending, incense-cookie making or cone-incense craft. Advance reservation required.','小组香水调配、香饼制作或塔香制作，须提前预约。','小組香水調配、香餅製作或塔香製作，須提前預約。') },
  { slug:'traditional-incense-individual', name:L('Traditional Incense Special Experience','传统香文化特别体验','傳統香文化特別體驗'), price:pricing.experiences.traditionalIncenseSpecial, image:imageAssets.incenseSpecial.filename, description:L('A limited individual workshop offered approximately monthly. Advance booking and partner availability apply.','约每月限量举行的单项手作体验，须提前预订并视合作方档期而定。','約每月限量舉行的單項手作體驗，須提前預訂並視合作方檔期而定。') }
];

export const workshops = [
  { id:'sat-perfume', day:L('Saturday','星期六','星期六'), name:L('Perfume Blending','香水调配','香水調配'), time:'15:00', price:pricing.experiences.perfumeBlending, seats:6 },
  { id:'sun-incense', day:L('Sunday','星期日','星期日'), name:L('Rotating Incense Cultural Craft','轮换香文化手作','輪換香文化手作'), time:'14:30', price:pricing.experiences.rotatingIncenseCraft, seats:4 },
  { id:'first-sun-special', day:L('First Sunday monthly','每月首个星期日','每月首個星期日'), name:L('Traditional Incense Special Experience','传统香文化特别体验','傳統香文化特別體驗'), time:'10:30', price:pricing.experiences.traditionalIncenseSpecial, seats:2 }
];

export const products = [
  { slug:'forest-room-mist', category:'scent', name:L('Forest Room Mist','山林客房喷雾','山林客房噴霧'), price:180, image:imageAssets.forestMist.filename, description:L('A sage-green botanical study inspired by shaded Coloane paths.','以路环林荫小径为灵感的鼠尾草绿植物气息。','以路環林蔭小徑為靈感的鼠尾草綠植物氣息。'), scent:L('Pine · eucalyptus · green leaf','松木 · 尤加利 · 绿叶','松木 · 尤加利 · 綠葉'), stock:'in' },
  { slug:'sea-breeze-scent-card', category:'scent', name:L('Sea Breeze Scent Card','海风香气卡','海風香氣卡'), price:95, image:imageAssets.seaBreezeCard.filename, description:L('A paper scent memory of salt air and citrus light.','盐空气息与柑橘光线的纸上香气记忆。','鹽空氣息與柑橘光線的紙上香氣記憶。'), scent:L('Sea salt · citrus · linen','海盐 · 柑橘 · 亚麻','海鹽 · 柑橘 · 亞麻'), stock:'in' },
  { slug:'nostalgia-gift-set', category:'scent', name:L('Nostalgia Gift Set','旧时光礼盒','舊時光禮盒'), price:320, image:imageAssets.nostalgiaGift.filename, description:L('Warm paper goods and a heritage-inspired scent card.','温暖纸品与历史氛围香气卡。','溫暖紙品與歷史氛圍香氣卡。'), scent:L('Warm grain · paper · timber','暖谷物 · 纸张 · 木材','暖穀物 · 紙張 · 木材'), stock:'low' },
  { slug:'unlit-incense-craft-kit', category:'craft', name:L('Unlit Incense Craft Kit','无明火香文化手作套装','無明火香文化手作套裝'), price:240, image:imageAssets.incenseKit.filename, description:L('A conceptual craft kit for learning forms and materials without indoor burning.','用于认识香文化形态与材料的概念手作套装，不作室内燃烧。','用於認識香文化形態與材料的概念手作套裝，不作室內燃燒。'), scent:L('Dry botanical materials','干燥植物材料','乾燥植物材料'), stock:'in', safety:true },
  { slug:'coloane-travel-journal', category:'memories', name:L('Coloane Travel Journal','路环旅行手帐','路環旅行手帳'), price:120, image:imageAssets.travelJournal.filename, description:L('An illustrated notebook for routes, stamps and slow observations.','记录路线、印章与缓慢观察的插画笔记本。','記錄路線、印章與緩慢觀察的插畫筆記本。'), stock:'in' },
  { slug:'watercolour-postcards', category:'memories', name:L('Watercolour Postcard Set','水彩明信片套装','水彩明信片套裝'), price:68, image:imageAssets.postcards.filename, description:L('Six illustrated views of the hotel and Coloane.','六幅酒店与路环插画景致。','六幅酒店與路環插畫景致。'), stock:'in' },
  { slug:'hotel-tote', category:'fragrance-free', name:L('Pousada Canvas Tote','竹湾隐舍帆布袋','竹灣隱舍帆布袋'), price:160, image:imageAssets.canvasTote.filename, description:L('A fragrance-free everyday bag with the hotel mark.','印有酒店标志的无香日常帆布袋。','印有酒店標誌的無香日常帆布袋。'), stock:'in' },
  { slug:'illustrated-route-map', category:'fragrance-free', name:L('Illustrated Route Map','插画路线图','插畫路線圖'), price:88, image:imageAssets.routeMap.filename, description:L('A fold-out watercolor guide to a slower side of Coloane.','通往路环慢生活的折叠水彩指南。','通往路環慢生活的摺疊水彩指南。'), stock:'in' }
];
