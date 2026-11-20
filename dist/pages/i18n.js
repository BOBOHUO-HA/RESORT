export const languages = [
  { code: 'en', short: 'EN', label: 'English' },
  { code: 'zh-CN', short: '简', label: '简体中文' },
  { code: 'zh-TW', short: '繁', label: '繁體中文' }
];

const dictionaries = {
  en: {
    nav: { hotel: 'Hotel', rooms: 'Rooms', journeys: 'Journeys', experiences: 'Experiences', shop: 'Shop', coloane: 'Coloane', scent: 'Find Your Scent', book: 'Book Your Stay', language: 'Language' },
    common: { explore: 'Explore', addStay: 'Add to My Stay', availability: 'Check Availability', from: 'From', guests: 'guests', proposed: 'Proposed / subject to availability', back: 'Back', next: 'Continue', select: 'Select', selected: 'Selected', remove: 'Remove', quantity: 'Quantity', subtotal: 'Subtotal', checkout: 'Checkout', confirm: 'Confirm', viewBag: 'View Bag', close: 'Close' },
    footer: { explore: 'Explore', practical: 'Practical', contact: 'Contact & Information', gallery: 'Gallery', policies: 'Policies', letters: 'Letters from Coloane', note: 'A quiet note, every now and then.', copyright: '© 2026 Pousada do Silêncio', line: 'Stay slowly · Explore deeply' }
  },
  'zh-CN': {
    nav: { hotel: '酒店', rooms: '客房', journeys: '旅程', experiences: '体验', shop: '商店', coloane: '路环', scent: '寻找你的路环香气', book: '预订住宿', language: '语言' },
    common: { explore: '探索', addStay: '加入我的住宿', availability: '查询房况', from: '起价', guests: '位宾客', proposed: '拟议安排／视供应情况而定', back: '返回', next: '继续', select: '选择', selected: '已选择', remove: '移除', quantity: '数量', subtotal: '小计', checkout: '结账', confirm: '确认', viewBag: '查看购物袋', close: '关闭' },
    footer: { explore: '探索', practical: '实用信息', contact: '联系与信息', gallery: '画廊', policies: '政策', letters: '来自路环的信', note: '偶尔寄来一封安静的信。', copyright: '© 2026 竹湾隐舍', line: '慢慢住下 · 深入探索' }
  },
  'zh-TW': {
    nav: { hotel: '酒店', rooms: '客房', journeys: '旅程', experiences: '體驗', shop: '商店', coloane: '路環', scent: '尋找你的路環香氣', book: '預訂住宿', language: '語言' },
    common: { explore: '探索', addStay: '加入我的住宿', availability: '查詢房況', from: '起價', guests: '位賓客', proposed: '擬議安排／視供應情況而定', back: '返回', next: '繼續', select: '選擇', selected: '已選擇', remove: '移除', quantity: '數量', subtotal: '小計', checkout: '結帳', confirm: '確認', viewBag: '查看購物袋', close: '關閉' },
    footer: { explore: '探索', practical: '實用資訊', contact: '聯絡與資訊', gallery: '畫廊', policies: '政策', letters: '來自路環的信', note: '偶爾寄來一封安靜的信。', copyright: '© 2026 竹灣隱舍', line: '慢慢住下 · 深入探索' }
  }
};

const phraseMap = {
  'zh-CN': {
    'Rooms at Pousada do Silêncio': '竹湾隐舍客房', 'Designed for slow mornings, quiet evenings and a deeper connection with Coloane.': '为缓慢的清晨、安静的夜晚与更深的路环连结而设计。',
    'Begin with an atmosphere': '从氛围开始', 'Three separate choices': '三个独立选择', 'Shape the Stay That Suits You': '塑造适合你的住宿', 'Room Type': '房型', 'Atmosphere': '视觉氛围', 'View': '景观',
    'Choose Your Atmosphere': '选择你的氛围', 'How would you like Coloane to feel?': '你希望如何感受路环？', 'Fragrance is always optional.': '香气体验始终可选。', 'Find Your Room': '寻找你的房间', 'Choose Your View': '选择你的景观', 'Compare the Rooms': '比较房型',
    'Pousada do Silêncio': 'Pousada do Silêncio', 'Discover Coloane Through Its Scents': '从香气中发现路环', 'A Quiet Side of Macao': '澳门安静的一面', 'How Would You Like Coloane to Feel?': '你希望如何感受路环？', 'Explore Rooms': '探索客房', 'Book Your Stay': '预订住宿', 'Discover the Hotel': '探索酒店',
    'Forest': '山林', 'Sea Breeze': '海风', 'Nostalgia': '旧时光', 'Street & Hills': '街景与山景', 'Sea View': '海景', 'Standard King': '标准大床房', 'Fragrance-Free King': '无香大床房', 'Twin': '双床房', 'Family': '家庭房', 'Suite': '套房'
  },
  'zh-TW': {
    'Rooms at Pousada do Silêncio': '竹灣隱舍客房', 'Designed for slow mornings, quiet evenings and a deeper connection with Coloane.': '為緩慢的清晨、安靜的夜晚與更深的路環連結而設計。',
    'Begin with an atmosphere': '從氛圍開始', 'Three separate choices': '三個獨立選擇', 'Shape the Stay That Suits You': '塑造適合你的住宿', 'Room Type': '房型', 'Atmosphere': '視覺氛圍', 'View': '景觀',
    'Choose Your Atmosphere': '選擇你的氛圍', 'How would you like Coloane to feel?': '你希望如何感受路環？', 'Fragrance is always optional.': '香氣體驗始終可選。', 'Find Your Room': '尋找你的房間', 'Choose Your View': '選擇你的景觀', 'Compare the Rooms': '比較房型',
    'Pousada do Silêncio': 'Pousada do Silêncio', 'Discover Coloane Through Its Scents': '從香氣中發現路環', 'A Quiet Side of Macao': '澳門安靜的一面', 'How Would You Like Coloane to Feel?': '你希望如何感受路環？', 'Explore Rooms': '探索客房', 'Book Your Stay': '預訂住宿', 'Discover the Hotel': '探索酒店',
    'Forest': '山林', 'Sea Breeze': '海風', 'Nostalgia': '舊時光', 'Street & Hills': '街景與山景', 'Sea View': '海景', 'Standard King': '標準大床房', 'Fragrance-Free King': '無香大床房', 'Twin': '雙床房', 'Family': '家庭房', 'Suite': '套房'
  }
};

Object.assign(phraseMap['zh-CN'], {
  'Skip to content':'跳到主要内容','Aromatic Eco-Boutique Hotel · Coloane, Macao':'芳香生态精品酒店 · 澳门路环','A quiet boutique retreat shaped by the coast, countryside and cultural memory of Coloane.':'一处由路环海岸、乡野与文化记忆塑造的安静精品旅居。','A hand-painted stay · Cheoc Van':'手绘旅居 · 竹湾',
  'The hotel':'酒店','A retreat between village and sea':'在村落与海之间的静居','Pousada do Silêncio is a proposed four-star boutique leisure hotel near Cheoc Van Beach in Coloane.':'竹湾隐舍是一间拟建于路环竹湾海滩附近的四星精品度假酒店。','It brings together accommodation, local culture, optional sensory experiences and slow exploration of the surrounding community—giving each guest room to notice what is usually passed by.':'这里将住宿、本地文化、可选感官体验与社区慢游相连，让宾客留意平日容易错过的细节。','Read our story':'阅读酒店故事','Coast':'海岸','Nature':'自然','Scent':'香气','Craft':'工艺','Community':'社区',
  'The mark we carry':'我们的标志','Inspired by Coloane':'灵感来自路环','The emblem is a small landscape: coastal waves below bamboo leaves, held together by a warm, flowing line. It speaks of scent moving through air—and of a hotel connected to its community and environment.':'标志像一幅小风景：竹叶下是海浪，暖色流线将两者相连，诉说香气在空气中流动，也象征酒店与社区和环境的连结。','Coast / waves':'海岸／波浪','Nature / bamboo':'自然／竹叶','Memory / scent':'记忆／香气','Community / circle':'社区／圆环',
  'Room atmospheres':'客房氛围','Three ways to settle in':'三种安住方式','Choose a visual atmosphere that suits your stay. Fragrance is always optional; designated fragrance-free King Rooms are available.':'选择适合你的视觉氛围。香气体验始终可选，并提供指定无香大床房。','Note':'提示','Atmospheres are not room types, and incense is never burned in guestrooms.':'氛围并非房型，客房内绝不燃烧香品。','The rooms themselves':'客房本身','Four practical room types, each interpreted through the quiet material language of the hotel.':'四种实用房型，以酒店安静克制的材质语言呈现。',
  'Window studies':'窗景研究','A glimpse beyond the room':'看向客房之外','Choose the View That Slows You Down':'选择让你慢下来的景观','A future stay may begin with the scene outside: village lanes and wooded hills, or the open blue of the Coloane coast.':'未来的住宿也许从窗外开始：村巷与青山，或路环海岸开阔的蓝。','Curated journeys':'策划旅程','Step into the landscape':'走进风景','Go Beyond the Room':'走出客房','Curated journeys through Coloane’s coast, countryside and cultural memory.':'穿行于路环海岸、乡野与文化记忆的策划旅程。','Explore Journeys':'探索旅程',
  'Small rituals':'小小仪式','Made for slower days':'为缓慢日子而设','Experience Coloane':'体验路环','Thoughtful additions to a stay, led by place rather than schedule.':'由地方而非行程表引导的贴心住宿体验。','A small collection':'小小收藏','Objects that hold a trace of the island—made to be used, kept and remembered.':'承载岛屿痕迹的物件，用来使用、珍藏与记忆。','Visit the Shop':'前往商店','A preview of your personal path':'个人旅程预览','Answer a few simple questions and discover the room atmosphere that feels most like you.':'回答几个简单问题，找到最像你的客房氛围。','Choose the feeling you need today':'选择今天需要的感觉','Stillness':'静谧','Lightness':'轻盈','Warmth':'温暖','Your path is waiting.':'你的旅程正在等待。','Find My Scent':'寻找我的香气',
  'Ground floor notebook':'一层手帐','Step Inside Pousada do Silêncio':'走进竹湾隐舍','Move through a sequence of spaces made for arrival, conversation, reading and quiet craft.':'穿行于为抵达、交谈、阅读与安静手作而设的空间。','Portuguese Arcade':'葡式拱廊','Scent Foyer':'气味玄关','Reception':'接待大堂','Reading Lounge':'阅读休憩','Local Shop':'本土小店','Sensory Workshop':'感官工作坊','Coloane is closer than it feels':'路环比想象中更近','Your Coloane Journey Begins Here':'你的路环旅程从这里开始','Stay slowly. Explore deeply. Take a little of Coloane home.':'慢慢住下，深入探索，把一点路环带回家。',
  'Coloane Nature Escape':'路环自然逸游','Coastal light, shaded trails and a slower morning rhythm.':'海岸光线、林荫步道与更慢的清晨节奏。','Coloane Cultural Discovery':'路环文化发现','Village lanes, old façades and stories held close to the sea.':'村巷、旧立面与贴近海岸的故事。','Traditional Incense Special Edition':'传统香文化特别篇','A considered introduction to local scent heritage and craft.':'细致认识本地香文化传承与工艺。','Bamboo-Bay Sunrise Breakfast Basket':'竹湾日出早餐篮','A quiet picnic prepared for the first light at Cheoc Van.':'为竹湾第一缕晨光准备的安静野餐。','Coloane Scent Walk':'路环气味漫步','Notice leaves, salt air, timber and the changing character of each lane.':'感受树叶、咸湿海风、木材与每条街巷的不同气质。','Cultural Craft Workshops':'文化手作坊','Small-group sessions shaped with local makers and material traditions.':'以本地匠人和材料传统为灵感的小组体验。',
  'Quiet · Natural · Grounded':'安静 · 自然 · 沉稳','Light · Airy · Coastal':'轻盈 · 通透 · 海岸','Warm · Familiar · Heritage-inspired':'温暖 · 亲切 · 传承感','Bamboo, natural wood and sage green settle the room into the shaded countryside of Coloane.':'竹材、天然木与鼠尾草绿，让客房融入路环林荫乡野。','Linen, soft blue-grey details and arched-window light recall the coast at Cheoc Van.':'亚麻、柔和蓝灰细节与拱窗光线，唤起竹湾海岸。','Portuguese tiles, warm timber and terracotta carry the familiar atmosphere of old Coloane streets.':'葡式瓷砖、暖木与陶土色，延续路环老街的熟悉气息。','Optional scent direction':'可选香气方向','Atmosphere 01':'氛围 01','Atmosphere 02':'氛围 02','Atmosphere 03':'氛围 03','Area':'面积','Guests':'宾客','Bed':'床型','From':'起价','View room':'查看客房','Views are subject to room availability and orientation. Exact availability is confirmed during booking.':'景观视房况与朝向而定，确切供应将在预订时确认。',
  'King bed':'大床','Two single beds':'两张单人床','One double + one single bed':'一张双人床＋一张单人床','2 guests':'2 位宾客','3 guests':'3 位宾客','A generous room for two, grounded by a bamboo-woven headboard and quiet natural materials.':'宽适双人客房，以竹编床头与安静自然材质营造沉稳感。','Two thoughtfully arranged beds with room to pause by the window and share the day.':'两张细致安排的床铺，留出临窗停歇与分享一天的空间。','A flexible family room with a double bed, single bed and its own relaxed sitting nook.':'灵活家庭客房，配备双人床、单人床与轻松休憩角。','A separate bedroom and living room create a slower, more residential way to stay.':'独立卧室与客厅，带来更从容、更居家的住宿方式。','The same considered King Room layout, prepared without added fragrance products.':'同样细致的大床房格局，不放置任何添加香气的用品。',
  'A closer look':'细看客房','Quiet Details, Considered Slowly':'安静细节，慢慢体会','Choose an Atmosphere':'选择氛围','Visual character, not inventory':'视觉个性，而非房型库存','Fragrance is always optional.':'香气始终可选。','Room atmosphere and fragrance preference are separate choices.':'客房氛围与香气偏好是独立选择。','Subject to orientation':'视朝向而定','Wake Up to Coloane':'在路环醒来','Preference preview':'偏好预览','Make It Yours':'让客房属于你','Check Availability':'查询房况','Book This Room':'预订此客房'
});

Object.assign(phraseMap['zh-TW'], {
  'Skip to content':'跳到主要內容','Aromatic Eco-Boutique Hotel · Coloane, Macao':'芳香生態精品酒店 · 澳門路環','A quiet boutique retreat shaped by the coast, countryside and cultural memory of Coloane.':'一處由路環海岸、鄉野與文化記憶塑造的安靜精品旅居。','A hand-painted stay · Cheoc Van':'手繪旅居 · 竹灣',
  'The hotel':'酒店','A retreat between village and sea':'在村落與海之間的靜居','Pousada do Silêncio is a proposed four-star boutique leisure hotel near Cheoc Van Beach in Coloane.':'竹灣隱舍是一間擬建於路環竹灣海灘附近的四星精品度假酒店。','It brings together accommodation, local culture, optional sensory experiences and slow exploration of the surrounding community—giving each guest room to notice what is usually passed by.':'這裡將住宿、本地文化、可選感官體驗與社區慢遊相連，讓賓客留意平日容易錯過的細節。','Read our story':'閱讀酒店故事','Coast':'海岸','Nature':'自然','Scent':'香氣','Craft':'工藝','Community':'社區',
  'The mark we carry':'我們的標誌','Inspired by Coloane':'靈感來自路環','The emblem is a small landscape: coastal waves below bamboo leaves, held together by a warm, flowing line. It speaks of scent moving through air—and of a hotel connected to its community and environment.':'標誌像一幅小風景：竹葉下是海浪，暖色流線將兩者相連，訴說香氣在空氣中流動，也象徵酒店與社區和環境的連結。','Coast / waves':'海岸／波浪','Nature / bamboo':'自然／竹葉','Memory / scent':'記憶／香氣','Community / circle':'社區／圓環',
  'Room atmospheres':'客房氛圍','Three ways to settle in':'三種安住方式','Choose a visual atmosphere that suits your stay. Fragrance is always optional; designated fragrance-free King Rooms are available.':'選擇適合你的視覺氛圍。香氣體驗始終可選，並提供指定無香大床房。','Note':'提示','Atmospheres are not room types, and incense is never burned in guestrooms.':'氛圍並非房型，客房內絕不燃燒香品。','The rooms themselves':'客房本身','Four practical room types, each interpreted through the quiet material language of the hotel.':'四種實用房型，以酒店安靜克制的材質語言呈現。',
  'Window studies':'窗景研究','A glimpse beyond the room':'看向客房之外','Choose the View That Slows You Down':'選擇讓你慢下來的景觀','A future stay may begin with the scene outside: village lanes and wooded hills, or the open blue of the Coloane coast.':'未來的住宿也許從窗外開始：村巷與青山，或路環海岸開闊的藍。','Curated journeys':'策劃旅程','Step into the landscape':'走進風景','Go Beyond the Room':'走出客房','Curated journeys through Coloane’s coast, countryside and cultural memory.':'穿行於路環海岸、鄉野與文化記憶的策劃旅程。','Explore Journeys':'探索旅程',
  'Small rituals':'小小儀式','Made for slower days':'為緩慢日子而設','Experience Coloane':'體驗路環','Thoughtful additions to a stay, led by place rather than schedule.':'由地方而非行程表引導的貼心住宿體驗。','A small collection':'小小收藏','Objects that hold a trace of the island—made to be used, kept and remembered.':'承載島嶼痕跡的物件，用來使用、珍藏與記憶。','Visit the Shop':'前往商店','A preview of your personal path':'個人旅程預覽','Answer a few simple questions and discover the room atmosphere that feels most like you.':'回答幾個簡單問題，找到最像你的客房氛圍。','Choose the feeling you need today':'選擇今天需要的感覺','Stillness':'靜謐','Lightness':'輕盈','Warmth':'溫暖','Your path is waiting.':'你的旅程正在等待。','Find My Scent':'尋找我的香氣',
  'Ground floor notebook':'一樓手帳','Step Inside Pousada do Silêncio':'走進竹灣隱舍','Move through a sequence of spaces made for arrival, conversation, reading and quiet craft.':'穿行於為抵達、交談、閱讀與安靜手作而設的空間。','Portuguese Arcade':'葡式拱廊','Scent Foyer':'氣味玄關','Reception':'接待大堂','Reading Lounge':'閱讀休憩','Local Shop':'本土小店','Sensory Workshop':'感官工作坊','Coloane is closer than it feels':'路環比想像中更近','Your Coloane Journey Begins Here':'你的路環旅程從這裡開始','Stay slowly. Explore deeply. Take a little of Coloane home.':'慢慢住下，深入探索，把一點路環帶回家。',
  'Coloane Nature Escape':'路環自然逸遊','Coastal light, shaded trails and a slower morning rhythm.':'海岸光線、林蔭步道與更慢的清晨節奏。','Coloane Cultural Discovery':'路環文化發現','Village lanes, old façades and stories held close to the sea.':'村巷、舊立面與貼近海岸的故事。','Traditional Incense Special Edition':'傳統香文化特別篇','A considered introduction to local scent heritage and craft.':'細緻認識本地香文化傳承與工藝。','Bamboo-Bay Sunrise Breakfast Basket':'竹灣日出早餐籃','A quiet picnic prepared for the first light at Cheoc Van.':'為竹灣第一縷晨光準備的安靜野餐。','Coloane Scent Walk':'路環氣味漫步','Notice leaves, salt air, timber and the changing character of each lane.':'感受樹葉、鹹濕海風、木材與每條街巷的不同氣質。','Cultural Craft Workshops':'文化手作坊','Small-group sessions shaped with local makers and material traditions.':'以本地匠人和材料傳統為靈感的小組體驗。',
  'Quiet · Natural · Grounded':'安靜 · 自然 · 沉穩','Light · Airy · Coastal':'輕盈 · 通透 · 海岸','Warm · Familiar · Heritage-inspired':'溫暖 · 親切 · 傳承感','Bamboo, natural wood and sage green settle the room into the shaded countryside of Coloane.':'竹材、天然木與鼠尾草綠，讓客房融入路環林蔭鄉野。','Linen, soft blue-grey details and arched-window light recall the coast at Cheoc Van.':'亞麻、柔和藍灰細節與拱窗光線，喚起竹灣海岸。','Portuguese tiles, warm timber and terracotta carry the familiar atmosphere of old Coloane streets.':'葡式瓷磚、暖木與陶土色，延續路環老街的熟悉氣息。','Optional scent direction':'可選香氣方向','Atmosphere 01':'氛圍 01','Atmosphere 02':'氛圍 02','Atmosphere 03':'氛圍 03','Area':'面積','Guests':'賓客','Bed':'床型','From':'起價','View room':'查看客房','Views are subject to room availability and orientation. Exact availability is confirmed during booking.':'景觀視房況與朝向而定，確切供應將在預訂時確認。',
  'King bed':'大床','Two single beds':'兩張單人床','One double + one single bed':'一張雙人床＋一張單人床','2 guests':'2 位賓客','3 guests':'3 位賓客','A generous room for two, grounded by a bamboo-woven headboard and quiet natural materials.':'寬適雙人客房，以竹編床頭與安靜自然材質營造沉穩感。','Two thoughtfully arranged beds with room to pause by the window and share the day.':'兩張細緻安排的床鋪，留出臨窗停歇與分享一天的空間。','A flexible family room with a double bed, single bed and its own relaxed sitting nook.':'靈活家庭客房，配備雙人床、單人床與輕鬆休憩角。','A separate bedroom and living room create a slower, more residential way to stay.':'獨立臥室與客廳，帶來更從容、更居家的住宿方式。','The same considered King Room layout, prepared without added fragrance products.':'同樣細緻的大床房格局，不放置任何添加香氣的用品。',
  'A closer look':'細看客房','Quiet Details, Considered Slowly':'安靜細節，慢慢體會','Choose an Atmosphere':'選擇氛圍','Visual character, not inventory':'視覺個性，而非房型庫存','Fragrance is always optional.':'香氣始終可選。','Room atmosphere and fragrance preference are separate choices.':'客房氛圍與香氣偏好是獨立選擇。','Subject to orientation':'視朝向而定','Wake Up to Coloane':'在路環醒來','Preference preview':'偏好預覽','Make It Yours':'讓客房屬於你','Check Availability':'查詢房況','Book This Room':'預訂此客房'
});

Object.assign(phraseMap['zh-CN'], {
  'At your own pace':'按自己的节奏',
  'Coloane Nature Notes':'路环自然观察',
  'A complimentary prompt to notice leaves, salt air, timber and changing light.':'一份免费的观察提示，邀请你留意叶片、海风、木材与变化的光线。'
});
Object.assign(phraseMap['zh-TW'], {
  'At your own pace':'按自己的節奏',
  'Coloane Nature Notes':'路環自然觀察',
  'A complimentary prompt to notice leaves, salt air, timber and changing light.':'一份免費的觀察提示，邀請你留意葉片、海風、木材與變化的光線。'
});

Object.assign(phraseMap['zh-CN'], {
  'Discover Coloane':'发现路环','Through Its Scents':'循香而行','A Quiet Side':'安静的一面','of Macao':'澳门','How Would You Like':'你希望如何','Coloane to Feel?':'感受路环？','Choose the View':'选择景观','That Slows You Down':'让你慢下来','Go Beyond':'走出','the Room':'客房','Find Your':'寻找你的','Coloane Scent':'路环香气','Step Inside':'走进','Your Coloane Journey':'你的路环旅程','Begins Here':'从这里开始','Discover This Atmosphere':'探索这一氛围','Explore Room':'探索客房','Open the route':'打开路线','Watercolour route · 01':'水彩路线 · 01','Watercolour route · 02':'水彩路线 · 02','Watercolour route · 03':'水彩路线 · 03','Early morning':'清晨','Slow afternoon':'悠缓午后','By appointment':'预约体验','Forest incense':'山林香品','Sea Breeze fragrance':'海风香气','Nostalgia scent card':'旧时光香气卡','Coloane travel journal':'路环旅行手帐','Local craft souvenir':'本地工艺纪念品','Botanical study':'植物研究','Coastal note':'海岸气息','Memory object':'记忆物件','Paper goods':'纸品','Made nearby':'本地制作','Join newsletter':'订阅酒店来信',"Curated journeys through Coloane's coast, countryside and cultural memory.":'穿行于路环海岸、乡野与文化记忆的策划旅程。','Room study / 01':'客房研究 / 01','Room study / 02':'客房研究 / 02','Room study / 03':'客房研究 / 03','Room study / 04':'客房研究 / 04'
});
Object.assign(phraseMap['zh-TW'], {
  'Discover Coloane':'發現路環','Through Its Scents':'循香而行','A Quiet Side':'安靜的一面','of Macao':'澳門','How Would You Like':'你希望如何','Coloane to Feel?':'感受路環？','Choose the View':'選擇景觀','That Slows You Down':'讓你慢下來','Go Beyond':'走出','the Room':'客房','Find Your':'尋找你的','Coloane Scent':'路環香氣','Step Inside':'走進','Your Coloane Journey':'你的路環旅程','Begins Here':'從這裡開始','Discover This Atmosphere':'探索這一氛圍','Explore Room':'探索客房','Open the route':'打開路線','Watercolour route · 01':'水彩路線 · 01','Watercolour route · 02':'水彩路線 · 02','Watercolour route · 03':'水彩路線 · 03','Early morning':'清晨','Slow afternoon':'悠緩午後','By appointment':'預約體驗','Forest incense':'山林香品','Sea Breeze fragrance':'海風香氣','Nostalgia scent card':'舊時光香氣卡','Coloane travel journal':'路環旅行手帳','Local craft souvenir':'本地工藝紀念品','Botanical study':'植物研究','Coastal note':'海岸氣息','Memory object':'記憶物件','Paper goods':'紙品','Made nearby':'本地製作','Join newsletter':'訂閱酒店來信',"Curated journeys through Coloane's coast, countryside and cultural memory.":'穿行於路環海岸、鄉野與文化記憶的策劃旅程。','Room study / 01':'客房研究 / 01','Room study / 02':'客房研究 / 02','Room study / 03':'客房研究 / 03','Room study / 04':'客房研究 / 04'
});

Object.assign(phraseMap['zh-CN'], {
  'Second-floor dining · Coast in view':'二楼餐厅 · 临海而坐',
  'Dining at':'餐饮于',
  'Pousada':'竹湾隐舍',
  'A quiet room above the arcades, where coastal light settles across timber tables and hand-painted Portuguese tiles.':'拱廊之上的安静餐厅，海岸光线落在木质餐桌与手绘葡式瓷砖之间。',
  'Natural wood, woven rattan and open arched windows create an unhurried dining atmosphere shaped by the colours and character of Coloane.':'天然木材、藤编与敞开的拱窗，共同营造从容的用餐氛围，延续路环的色彩与气质。',
  'Discover Our Restaurant':'探索酒店餐厅'
});
Object.assign(phraseMap['zh-TW'], {
  'Second-floor dining · Coast in view':'二樓餐廳 · 臨海而坐',
  'Dining at':'餐飲於',
  'Pousada':'竹灣隱舍',
  'A quiet room above the arcades, where coastal light settles across timber tables and hand-painted Portuguese tiles.':'拱廊之上的安靜餐廳，海岸光線落在木質餐桌與手繪葡式瓷磚之間。',
  'Natural wood, woven rattan and open arched windows create an unhurried dining atmosphere shaped by the colours and character of Coloane.':'天然木材、藤編與敞開的拱窗，共同營造從容的用餐氛圍，延續路環的色彩與氣質。',
  'Discover Our Restaurant':'探索酒店餐廳'
});

export const L = (en, zhCN, zhTW = zhCN) => ({ en, 'zh-CN': zhCN, 'zh-TW': zhTW });

export function getLanguage() {
  const saved = localStorage.getItem('pousadaLanguage');
  if (languages.some(item => item.code === saved)) return saved;
  const browser = navigator.language;
  if (browser === 'zh-TW' || browser === 'zh-HK' || browser === 'zh-MO') return 'zh-TW';
  if (browser?.startsWith('zh')) return 'zh-CN';
  return 'en';
}

export function setLanguage(code) {
  if (!languages.some(item => item.code === code)) return;
  localStorage.setItem('pousadaLanguage', code);
  document.documentElement.lang = code;
  window.dispatchEvent(new CustomEvent('pousada:language', { detail: code }));
}

export function t(path, fallback = path) {
  const lang = getLanguage();
  const read = code => path.split('.').reduce((value, key) => value?.[key], dictionaries[code]);
  return read(lang) ?? read('en') ?? fallback;
}

export function localize(value) {
  if (typeof value === 'string') return value;
  const lang = getLanguage();
  return value?.[lang] ?? value?.en ?? '';
}

export function formatMoney(value) {
  return `MOP ${Number(value).toLocaleString(getLanguage() === 'en' ? 'en-US' : 'zh-HK')}`;
}

function translateTextNodes(root) {
  const lang = getLanguage();
  const map = phraseMap[lang];
  if (!map || !root) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode(node) { return node.parentElement?.closest('script,style') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT; } });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => {
    const trimmed = node.nodeValue.trim();
    if (map[trimmed]) node.nodeValue = node.nodeValue.replace(trimmed, map[trimmed]);
  });
}

export function startI18n() {
  const lang = getLanguage();
  document.documentElement.lang = lang;
  document.documentElement.classList.toggle('lang-zh', lang.startsWith('zh'));
  translateTextNodes(document.body);
  const observer = new MutationObserver(entries => entries.forEach(entry => entry.addedNodes.forEach(node => {
    if (node.nodeType === Node.ELEMENT_NODE) translateTextNodes(node);
    else if (node.nodeType === Node.TEXT_NODE) translateTextNodes(node.parentElement);
  })));
  observer.observe(document.body, { childList: true, subtree: true });
}
