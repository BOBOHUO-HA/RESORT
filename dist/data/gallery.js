import { L } from '../pages/i18n.js';
import { imageAssets } from './images.js';

export const galleryCategories = [
  { id:'all', name:L('All','全部','全部') },
  { id:'hotel', name:L('Hotel & Architecture','酒店与建筑','酒店與建築') },
  { id:'spaces', name:L('Spaces & Interiors','空间与室内','空間與室內') },
  { id:'nature', name:L('Nature & Coloane','自然与路环','自然與路環') },
  { id:'culture', name:L('Culture & Craft','文化与工艺','文化與工藝') },
  { id:'scent', name:L('Scent & Objects','香气与物件','香氣與物件') },
  { id:'moments', name:L('Moments & Experiences','时刻与体验','時刻與體驗') }
];

const item = (asset, category, title, caption, size='standard') => ({ asset, category, title, caption, size });

export const galleryItems = [
  item(imageAssets.hotelExterior,'hotel',L('A Pousada by the Water','海边的葡式旅舍','海邊的葡式旅舍'),L('The official watercolor concept brings together arcades, green shutters, terracotta roofs and the Coloane coast.','官方水彩概念将拱廊、绿色百叶窗、陶瓦屋顶与路环海岸融为一体。','官方水彩概念將拱廊、綠色百葉窗、陶瓦屋頂與路環海岸融為一體。'),'wide'),
  item(imageAssets.groundFloorPlan,'spaces',L('The Ground-Floor Journey','一层空间旅程','一樓空間旅程'),L('A conceptual plan connecting the arcade, scent foyer, reception, reading lounge, local shop and sensory workshop.','概念平面图连接拱廊、气味玄关、接待处、阅读休憩、本土小店与感官工作坊。','概念平面圖連接拱廊、氣味玄關、接待處、閱讀休憩、本土小店與感官工作坊。'),'tall'),
  item(imageAssets.restaurantOverview,'spaces',L('Dining Above the Arcade','拱廊之上的餐厅','拱廊之上的餐廳'),L('The second-floor restaurant brings arched coastal windows, timber, rattan and Portuguese tilework into one unhurried room.','二楼餐厅以临海拱窗、木材、藤编与葡式瓷砖营造从容空间。','二樓餐廳以臨海拱窗、木材、藤編與葡式瓷磚營造從容空間。'),'wide'),
  item(imageAssets.restaurantWindowTable,'spaces',L('A Table by the Coast','海岸窗边一席','海岸窗邊一席'),L('A quiet table setting faces Coloane through an open arched window.','安静餐席透过敞开的拱窗望向路环。','安靜餐席透過敞開的拱窗望向路環。')),
  item(imageAssets.restaurantDetails,'spaces',L('Materials with Memory','承载记忆的材质','承載記憶的材質'),L('Warm timber, botanical details and blue-and-white ceramics continue the hotel’s Portuguese coastal identity.','暖木、植物细节与蓝白陶瓷延续酒店的葡式海岸气质。','暖木、植物細節與藍白陶瓷延續酒店的葡式海岸氣質。'),'tall'),
  item(imageAssets.windowA,'hotel',L('Shutters Toward the Hills','通向山景的木百叶','通向山景的木百葉'),L('An official window study frames Coloane streets and wooded hills through warm timber shutters.','官方窗景研究以温暖木百叶框住路环街巷与青翠山景。','官方窗景研究以溫暖木百葉框住路環街巷與青翠山景。')),
  item(imageAssets.cheocVan,'nature',L('Cheoc Van in Quiet Light','静光中的竹湾','靜光中的竹灣'),L('A conceptual watercolor impression of the sheltered beach and its wooded edges.','竹湾海滩及其林木边缘的概念水彩印象。','竹灣海灘及其林木邊緣的概念水彩印象。'),'wide'),
  item(imageAssets.coloaneVillage,'nature',L('A Lane Through Coloane','路环街巷','路環街巷'),L('Pastel façades, shutters and bougainvillea express the village character through a conceptual illustration.','概念插画以粉彩立面、百叶窗与簕杜鹃呈现村落气质。','概念插畫以粉彩立面、百葉窗與簕杜鵑呈現村落氣質。')),
  item(imageAssets.experiencePassport,'culture',L('The Experience Passport','路环体验护照','路環體驗護照'),L('The guest passport turns slow exploration into a collection of illustrated stamps and small memories.','宾客护照把缓慢探索变成插画印章与细小记忆的收藏。','賓客護照把緩慢探索變成插畫印章與細小記憶的收藏。'),'wide'),
  item(imageAssets.shipyards,'culture',L('Timber and Tide','木构与潮水','木構與潮水'),L('A conceptual heritage study of Lai Chi Vun and its boat-building structures.','荔枝碗船厂片区及其造船木构的概念历史研究。','荔枝碗船廠片區及其造船木構的概念歷史研究。')),
  item(imageAssets.craftWorkshop,'culture',L('Hands Around the Workshop Table','围坐手作桌','圍坐手作桌'),L('A conceptual small-group setting for perfume blending and unlit incense-related craft.','用于香水调配与无明火香文化手作的小组概念场景。','用於香水調配與無明火香文化手作的小組概念場景。'),'tall'),
  item(imageAssets.breakfastBasket,'moments',L('Breakfast at First Light','晨光早餐','晨光早餐'),L('A conceptual sunrise basket with local bakery items, seasonal fruit and coffee for two.','包含本地烘焙、时令水果与双人咖啡的概念晨光早餐篮。','包含本地烘焙、時令水果與雙人咖啡的概念晨光早餐籃。')),
  item(imageAssets.natureEscape,'moments',L('A Route from Shade to Coast','从林荫到海岸','從林蔭到海岸'),L('The Nature Escape is illustrated as a journal route rather than a conventional map.','自然逸游以旅行手帐路线呈现，而非传统地图。','自然逸遊以旅行手帳路線呈現，而非傳統地圖。'),'wide'),
  item(imageAssets.forestMist,'scent',L('Forest, Held in Glass','玻璃瓶中的山林','玻璃瓶中的山林'),L('A conceptual object study inspired by shaded paths, green leaves and quiet timber.','受林荫小径、绿叶与安静木质启发的概念物件研究。','受林蔭小徑、綠葉與安靜木質啟發的概念物件研究。')),
  item(imageAssets.seaBreezeCard,'scent',L('A Paper Memory of the Coast','海岸的纸上记忆','海岸的紙上記憶'),L('Sea Breeze scent cards translate salt air, citrus light and linen into a keepsake.','海风香气卡把盐空气息、柑橘光线与亚麻化作纪念物。','海風香氣卡把鹽空氣息、柑橘光線與亞麻化作紀念物。')),
  item(imageAssets.incenseKit,'scent',L('Material, Form and Ritual','材料、形态与仪式','材料、形態與儀式'),L('A conceptual unlit craft kit introduces traditional forms without suggesting indoor burning.','概念无明火手作套装介绍传统形态，不暗示在室内燃烧。','概念無明火手作套裝介紹傳統形態，不暗示在室內燃燒。'),'tall'),
  item(imageAssets.shopCollection,'spaces',L('The Local Shop Shelf','本土小店陈列','本土小店陳列'),L('A conceptual hotel-shop collection of paper, scent, craft and textile memories.','酒店商店中纸品、香气、工艺与织物纪念的概念陈列。','酒店商店中紙品、香氣、工藝與織物紀念的概念陳列。'),'wide'),
  item(imageAssets.countryside,'nature',L('Under the Green Canopy','绿荫之下','綠蔭之下'),L('A conceptual walking path captures Coloane’s quieter countryside character.','概念步道捕捉路环乡野较安静的一面。','概念步道捕捉路環鄉野較安靜的一面。')),
  item(imageAssets.travelJournal,'moments',L('Notes from a Slower Stay','慢旅手记','慢旅手記'),L('An illustrated journal holds routes, stamps and observations gathered at an unhurried pace.','插画手帐收纳慢慢积累的路线、印章与观察。','插畫手帳收納慢慢積累的路線、印章與觀察。')),
  item(imageAssets.postcards,'hotel',L('Architecture in Miniature','明信片上的建筑','明信片上的建築'),L('A conceptual postcard set revisits arches, windows, hotel façades and the coast.','概念明信片套装重访拱门、窗景、酒店立面与海岸。','概念明信片套裝重訪拱門、窗景、酒店立面與海岸。')),
  item(imageAssets.culturalDiscovery,'culture',L('Village, Shipyard, Workshop','村落、船厂、手作坊','村落、船廠、手作坊'),L('The Cultural Discovery route connects place, memory and making in one illustrated sequence.','文化发现路线以插画串联地点、记忆与手作。','文化發現路線以插畫串聯地點、記憶與手作。'),'wide')
];
