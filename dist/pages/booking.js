import { localize, L, t, formatMoney } from './i18n.js';
import { loadState, saveState } from './state.js';
import { roomTypes, themes } from '../data/rooms.js';
import { journeys, experiences } from '../data/catalog.js';

const c=(en,zhCN,zhTW=zhCN)=>localize(L(en,zhCN,zhTW));
const root=document.querySelector('[data-booking-root]');
const state=loadState();
const params=new URLSearchParams(location.search);
const today=new Date();
const dateValue=offset=>{const d=new Date(today);d.setDate(d.getDate()+offset);return d.toISOString().slice(0,10);};
const nextDate=value=>{const d=new Date(`${value}T12:00:00`);d.setDate(d.getDate()+1);return d.toISOString().slice(0,10);};
const validJourney=value=>journeys.some(x=>x.slug===value)?value:null;
const culturalJourney=journeys.find(x=>x.slug==='cultural-discovery');
const validWorkshop=value=>culturalJourney.workshopOptions.some(x=>x.id===value)?value:'perfume-blending';

const saved=state.booking||{};
const legacyExtras=Array.isArray(saved.experiences)?saved.experiences:[];
let migratedJourney=validJourney(saved.journey)||validJourney(legacyExtras.find(validJourney));
let migratedWorkshop=saved.culturalWorkshop||saved.workshop;
if(legacyExtras.includes('incense-special')){migratedJourney='cultural-discovery';migratedWorkshop='traditional-incense';}
const blockedLegacy=new Set(['nature-escape','cultural-discovery','incense-special','scent-walk']);
const base={step:0,checkin:dateValue(1),checkout:dateValue(2),adults:2,children:0,room:null,theme:'none',fragrance:'recommended',view:'none',journey:migratedJourney,culturalWorkshop:validWorkshop(migratedWorkshop),experiences:legacyExtras.filter(x=>!blockedLegacy.has(x)),guest:{},...saved};
base.journey=migratedJourney;
base.culturalWorkshop=validWorkshop(migratedWorkshop);
base.experiences=(Array.isArray(base.experiences)?base.experiences:[]).filter(x=>!blockedLegacy.has(x));
['room','theme','fragrance'].forEach(key=>{if(params.get(key))base[key]=params.get(key);});
if(params.get('journey'))base.journey=validJourney(params.get('journey'));
if(params.get('workshop'))base.culturalWorkshop=validWorkshop(params.get('workshop'));
if(params.get('checkin'))base.checkin=params.get('checkin');
if(params.get('checkout'))base.checkout=params.get('checkout');
if(params.get('guests'))base.adults=parseInt(params.get('guests'),10)||2;
if(!base.checkin||base.checkin<dateValue(0)){base.checkin=dateValue(1);base.checkout=dateValue(2);}
else if(!base.checkout||base.checkout<=base.checkin)base.checkout=nextDate(base.checkin);
base.adults=Math.min(6,Math.max(1,Number(base.adults)||2));
base.children=Math.min(4,Math.max(0,Number(base.children)||0));
if(params.has('journey'))base.step=base.room?3:0;
else if(params.has('room')||params.has('theme')||params.has('fragrance'))base.step=base.room?1:0;

let booking=base;
let step=Math.min(6,Math.max(0,booking.step||0));
const labels=[c('Stay','住宿'),c('Room','客房'),c('Personalise','个性化','個人化'),c('Experiences','体验','體驗'),c('Guest Details','宾客资料','賓客資料'),c('Review','确认内容','確認內容'),c('Confirmation','完成','完成')];
const roomOptions=[roomTypes[0],{...roomTypes[0],key:'king-fragrance-free',name:'Fragrance-Free King',price:1000},...roomTypes.slice(1)];
if(step>1&&!roomOptions.some(room=>room.key===booking.room))step=1;
const roomLabel=r=>r?({king:c('Standard King','标准大床房','標準大床房'),'king-fragrance-free':c('Fragrance-Free King','无香大床房','無香大床房'),twin:c('Twin','双床房','雙床房'),family:c('Family','家庭房'),suite:c('Suite','套房')}[r.key]||r.name):c('Not selected','未选择','未選擇');
const bedLabel=r=>({king:c('King bed','大床'),'king-fragrance-free':c('King bed','大床'),twin:c('Two single beds','两张单人床','兩張單人床'),family:c('One double + one single bed','一张双人床＋一张单人床','一張雙人床＋一張單人床'),suite:c('King bed','大床')}[r.key]||r.bed);
const capacityLabel=r=>`${Number.parseInt(r.guests,10)} ${c('guests','位宾客','位賓客')}`;
const themeLabel=k=>({forest:c('Forest','山林'),'sea-breeze':c('Sea Breeze','海风','海風'),nostalgia:c('Nostalgia','旧时光','舊時光'),none:c('No preference','无偏好','無偏好')}[k]||k);
const fragranceLabel=k=>({recommended:c('Recommended fragrance','推荐香气','推薦香氣'),light:c('Light fragrance','淡雅香气','淡雅香氣'),remove:c('Remove where practical','尽量移除香气','盡量移除香氣'),'fragrance-free':c('Designated fragrance-free room','指定无香客房','指定無香客房')}[k]||k);
const viewLabel=k=>({street:c('Street & Hills','街景与山景','街景與山景'),sea:c('Sea View','海景'),none:c('No preference','无偏好','無偏好')}[k]||k);
const nights=()=>Math.max(1,Math.round((new Date(booking.checkout)-new Date(booking.checkin))/86400000));
const selectedRoom=()=>roomOptions.find(r=>r.key===booking.room);
const selectedJourney=()=>journeys.find(j=>j.slug===booking.journey);
const selectedWorkshop=()=>culturalJourney.workshopOptions.find(w=>w.id===booking.culturalWorkshop);
const extraOptions=experiences.map(x=>({key:x.slug,name:localize(x.name),price:x.price,type:c('Individual experience','单项体验','單項體驗')}));
const includedExtra=key=>Boolean(booking.journey&&(key==='breakfast-basket'||(booking.journey==='cultural-discovery'&&(key==='craft-workshop'||key==='traditional-incense-individual'))));
const normalizeSelections=()=>{booking.experiences=[...new Set(booking.experiences)].filter(key=>extraOptions.some(x=>x.key===key)&&!includedExtra(key));if(booking.journey!=='cultural-discovery')booking.culturalWorkshop='perfume-blending';};
const journeyTotal=()=>{const journey=selectedJourney();if(!journey)return 0;const basePrice=journey.slug==='cultural-discovery'&&booking.culturalWorkshop==='traditional-incense'?journey.upgradePrice:journey.price;return basePrice+(booking.children*journey.childPrice);};
const extrasTotal=()=>booking.experiences.reduce((sum,key)=>sum+(extraOptions.find(x=>x.key===key)?.price||0),0);
const roomTotal=()=>selectedRoom()?selectedRoom().price*nights():0;
const total=()=>roomTotal()+journeyTotal()+extrasTotal();
function persist(){normalizeSelections();booking.step=step;state.booking=booking;saveState(state);}
function progress(){return `<div class="booking-progress" aria-label="${c('Booking progress','预订进度','預訂進度')}">${labels.map((x,i)=>`<button type="button" data-progress="${i}" ${i>step?'disabled':''} aria-current="${i===step?'step':'false'}"><span>${String(i+1).padStart(2,'0')}</span>${x}</button>`).join('')}</div>`;}
function controls(next=true){return `<div class="flow-controls">${step>0?`<button type="button" class="button button--outline" data-back>${t('common.back')}</button>`:''}${next?`<button type="button" class="button button--solid" data-next>${t('common.next')}</button>`:''}</div><p class="form-error" data-error role="alert"></p>`;}
function journeyCard(j){return `<button type="button" class="journey-choice" data-journey="${j.slug}" aria-pressed="${booking.journey===j.slug}"><span>${j.number}</span><strong>${localize(j.name)}</strong><small>${localize(j.duration)}</small><b>${formatMoney(j.price)} / 2 ${c('guests','位宾客','位賓客')} · ${c('child','儿童','兒童')} +${formatMoney(j.childPrice)}</b></button>`;}
function addOnCard(x){const included=includedExtra(x.key);return `<label class="${included?'is-included':''}"><input type="checkbox" data-extra="${x.key}" ${booking.experiences.includes(x.key)?'checked':''} ${included?'disabled':''}><span><small>${included?c('Included in selected package','已包含于所选套餐','已包含於所選套餐'):x.type}</small><strong>${x.name}</strong></span><b>${included?c('Included','已包含','已包含'):`+ ${formatMoney(x.price)}`}</b></label>`;}
function createReservation(){const reservation={number:`PDS-${Date.now().toString().slice(-6)}`,checkin:booking.checkin,checkout:booking.checkout,roomKey:selectedRoom().key,themeKey:booking.theme,fragranceKey:booking.fragrance,viewKey:booking.view,room:roomLabel(selectedRoom()),theme:themeLabel(booking.theme),fragrance:fragranceLabel(booking.fragrance),view:viewLabel(booking.view),guests:booking.adults+booking.children,journey:booking.journey,culturalWorkshop:booking.journey==='cultural-discovery'?booking.culturalWorkshop:null,experiences:[...booking.experiences],roomSubtotal:roomTotal(),journeySubtotal:journeyTotal(),experienceSubtotal:extrasTotal(),total:total()};state.reservation=reservation;return reservation;}

function draw(){
  normalizeSelections();
  root.innerHTML=progress()+`<section class="booking-stage" data-stage></section>`;
  const stage=root.querySelector('[data-stage]');
  if(step===0)stage.innerHTML=`<p class="eyebrow">01 · ${labels[0]}</p><h1>${c('When Will You Arrive?','你何时抵达？','你何時抵達？')}</h1><form class="booking-form"><div class="form-grid"><label>${c('Check-in','入住日期')}<input name="checkin" type="date" min="${dateValue(0)}" value="${booking.checkin}" required></label><label>${c('Check-out','退房日期')}<input name="checkout" type="date" min="${dateValue(1)}" value="${booking.checkout}" required></label><label>${c('Adults','成人')}<input name="adults" type="number" min="1" max="6" value="${booking.adults}" required></label><label>${c('Children','儿童','兒童')}<input name="children" type="number" min="0" max="4" value="${booking.children}" required></label></div>${controls()}</form>`;
  if(step===1)stage.innerHTML=`<p class="eyebrow">02 · ${labels[1]}</p><h1>${c('Choose Your Room','选择房型','選擇房型')}</h1><p>${nights()} ${c('night stay · simulated availability','晚住宿 · 模拟房况','晚住宿 · 模擬房況')}</p><div class="booking-room-grid">${roomOptions.map(r=>`<button type="button" data-room="${r.key}" aria-pressed="${booking.room===r.key}"><img src="${r.image}" alt=""><span><strong>${roomLabel(r)}</strong><small>${r.size} · ${bedLabel(r)} · ${capacityLabel(r)}</small><b>${formatMoney(r.price)} / ${c('night','晚')}</b><em>${c('Estimated stay','预计住宿','預計住宿')} ${formatMoney(r.price*nights())}</em></span></button>`).join('')}</div>${controls()}`;
  if(step===2)stage.innerHTML=`<p class="eyebrow">03 · ${labels[2]}</p><h1>${c('Make the Room Yours','让客房属于你','讓客房屬於你')}</h1><div class="separate-choice-note"><strong>${c('Theme and fragrance are separate preferences.','视觉主题与香气是独立偏好。','視覺主題與香氣是獨立偏好。')}</strong><p>${c('A visual atmosphere never requires fragrance.','选择视觉氛围并不代表必须使用香气。','選擇視覺氛圍並不代表必須使用香氣。')}</p></div><fieldset><legend>${c('Visual Theme','视觉主题','視覺主題')}</legend><div class="choice-grid">${[...themes.map(x=>x.key),'none'].map(k=>`<button type="button" data-choice="theme" data-value="${k}" aria-pressed="${booking.theme===k}">${themeLabel(k)}</button>`).join('')}</div></fieldset><fieldset><legend>${c('Fragrance Preference','香气偏好','香氣偏好')}</legend><div class="choice-grid">${['recommended','light','remove','fragrance-free'].map(k=>`<button type="button" data-choice="fragrance" data-value="${k}" aria-pressed="${booking.fragrance===k}">${fragranceLabel(k)}</button>`).join('')}</div></fieldset><fieldset><legend>${c('View Preference','景观偏好','景觀偏好')} <small>${c('Subject to availability','视供应情况而定','視供應情況而定')}</small></legend><div class="choice-grid">${['street','sea','none'].map(k=>`<button type="button" data-choice="view" data-value="${k}" aria-pressed="${booking.view===k}">${viewLabel(k)}</button>`).join('')}</div></fieldset>${controls()}`;
  if(step===3)stage.innerHTML=renderExtras();
  if(step===4)stage.innerHTML=`<p class="eyebrow">05 · ${labels[4]}</p><h1>${c('Who Is Staying?','入住宾客','入住賓客')}</h1><form class="booking-form"><div class="form-grid"><label>${c('First name','名字')}<input name="first" value="${booking.guest.first||''}" required></label><label>${c('Last name','姓氏')}<input name="last" value="${booking.guest.last||''}" required></label><label>Email<input name="email" type="email" value="${booking.guest.email||''}" required></label><label>${c('Phone','电话','電話')}<input name="phone" type="tel" value="${booking.guest.phone||''}" required></label><label>${c('Country / region','国家／地区','國家／地區')}<input name="country" value="${booking.guest.country||''}" required></label><label class="form-wide">${c('Special requests','特别要求','特別要求')}<textarea name="requests">${booking.guest.requests||''}</textarea></label></div>${controls()}</form>`;
  if(step===5)stage.innerHTML=renderReview();
  if(step===6)stage.innerHTML=renderConfirmation();
  bind();persist();
}

function renderExtras(){
  const workshopSection=booking.journey==='cultural-discovery'?`<section class="booking-option-section cultural-workshop-choice"><div><p class="eyebrow">${c('Included workshop choice','包含的手作选择','包含的手作選擇')}</p><h2>${c('Select the Cultural Discovery Workshop','选择文化发现手作','選擇文化發現手作')}</h2><p>${c('Traditional Incense replaces the standard workshop. The package total becomes MOP 920 for two guests; it is not an additional MOP 920 charge.','传统香文化特别体验将替代标准手作，双人套餐总价变为澳门币 920 元，并非额外加收 920 元。','傳統香文化特別體驗將替代標準手作，雙人套餐總價變為澳門幣 920 元，並非額外加收 920 元。')}</p></div><div class="choice-grid">${culturalJourney.workshopOptions.map(w=>`<button type="button" data-workshop="${w.id}" aria-pressed="${booking.culturalWorkshop===w.id}"><strong>${localize(w.name)}</strong><small>${w.special?`${formatMoney(culturalJourney.upgradePrice)} / 2 ${c('guests total','位宾客总价','位賓客總價')}`:c('Included in MOP 580 package','包含于 MOP 580 套餐','包含於 MOP 580 套餐')}</small></button>`).join('')}</div></section>`:'';
  return `<p class="eyebrow">04 · ${labels[3]}</p><h1>${c('Shape the Stay Beyond Your Room','安排客房之外的旅程','安排客房之外的旅程')}</h1><section class="booking-option-section"><div><p class="eyebrow">${c('Choose one journey package','选择一项旅程套餐','選擇一項旅程套餐')}</p><p>${c('Packages are complete supplements; included items are never charged twice.','套餐为完整附加产品，所含项目不会重复收费。','套餐為完整附加產品，所含項目不會重複收費。')}</p></div><div class="journey-choice-grid"><button type="button" class="journey-choice" data-journey="" aria-pressed="${!booking.journey}"><span>00</span><strong>${c('No journey package','不选择旅程套餐','不選擇旅程套餐')}</strong><small>${c('Continue with room only','仅预订客房','僅預訂客房')}</small></button>${journeys.map(journeyCard).join('')}</div></section>${workshopSection}<section class="booking-option-section"><div><p class="eyebrow">${c('Optional individual experiences','可选单项体验','可選單項體驗')}</p><p>${c('Anything already included in your journey is marked and cannot be charged again.','旅程已包含的项目会被标记，无法重复收费。','旅程已包含的項目會被標記，無法重複收費。')}</p></div><div class="add-on-list">${extraOptions.map(addOnCard).join('')}</div></section><div class="live-total"><span>${c('Journey package','旅程套餐','旅程套餐')}: <strong>${formatMoney(journeyTotal())}</strong></span><span>${c('Individual experiences','单项体验','單項體驗')}: <strong>${formatMoney(extrasTotal())}</strong></span></div>${controls()}`;
}

function renderReview(){
  const journey=selectedJourney(),workshop=booking.journey==='cultural-discovery'?selectedWorkshop():null;
  return `<p class="eyebrow">06 · ${labels[5]}</p><h1>${c('Review Your Stay','确认住宿内容','確認住宿內容')}</h1><div class="booking-review"><section><h2>${c('Stay','住宿')}</h2><p>${booking.checkin} → ${booking.checkout} · ${nights()} ${c('nights','晚')}</p><p>${booking.adults} ${c('adults','位成人')} · ${booking.children} ${c('children','位儿童','位兒童')}</p></section><section><h2>${c('Room','客房')}</h2><p>${roomLabel(selectedRoom())}</p><p>${themeLabel(booking.theme)} · ${fragranceLabel(booking.fragrance)} · ${viewLabel(booking.view)}</p></section><section><h2>${c('Journey & experiences','旅程与体验','旅程與體驗')}</h2>${journey?`<p><strong>${localize(journey.name)}</strong>${workshop?`<br>${localize(workshop.name)}`:''}</p>`:`<p>${c('No journey package selected','未选择旅程套餐','未選擇旅程套餐')}</p>`}${booking.experiences.map(key=>`<p>${extraOptions.find(x=>x.key===key)?.name||key}</p>`).join('')}</section><section><h2>${c('Estimated total','预计总额','預計總額')}</h2><p>${c('Room subtotal','客房小计','客房小計')}: ${formatMoney(roomTotal())}</p><p>${c('Journey subtotal','旅程小计','旅程小計')}: ${formatMoney(journeyTotal())}</p><p>${c('Individual experiences','单项体验','單項體驗')}: ${formatMoney(extrasTotal())}</p><strong>${formatMoney(total())}</strong><small>${c('Prototype estimate; final taxes and fees are not processed.','原型估算；不会处理最终税费。','原型估算；不會處理最終稅費。')}</small></section></div><div class="flow-controls"><button class="button button--outline" data-back>${t('common.back')}</button><button class="button button--solid" data-confirm>${c('Confirm Reservation','确认预订','確認預訂')}</button></div>`;
}

function renderConfirmation(){
  const reservation=state.reservation||createReservation(),journey=journeys.find(x=>x.slug===reservation.journey),workshop=culturalJourney.workshopOptions.find(x=>x.id===reservation.culturalWorkshop);
  return `<div class="booking-confirmation"><p class="eyebrow">07 · ${labels[6]}</p><h1>${c('Your Coloane Journey Begins Here','你的路环旅程从这里开始','你的路環旅程從這裡開始')}</h1><strong>${reservation.number}</strong><p>${reservation.checkin} → ${reservation.checkout}</p><p>${roomLabel(roomOptions.find(x=>x.key===(reservation.roomKey||booking.room)))} · ${reservation.guests} ${c('guests','位宾客','位賓客')}</p><p>${themeLabel(reservation.themeKey||booking.theme)} · ${fragranceLabel(reservation.fragranceKey||booking.fragrance)} · ${viewLabel(reservation.viewKey||booking.view)}</p>${journey?`<p><strong>${localize(journey.name)}</strong>${workshop?` · ${localize(workshop.name)}`:''}</p>`:''}<h2>${formatMoney(reservation.total)}</h2><div class="button-row"><a class="button button--solid" href="/reservation/">${c('View Reservation','查看预订','查看預訂')}</a><a class="button button--outline" href="/">${c('Return Home','返回首页','返回首頁')}</a><a class="text-link" href="/shop/">${c('Explore Shop','探索商店')} <span>→</span></a></div></div>`;
}

function bind(){
  root.querySelector('[data-back]')?.addEventListener('click',()=>{step--;draw();});
  root.querySelectorAll('[data-progress]').forEach(button=>button.addEventListener('click',()=>{if(Number(button.dataset.progress)<=step){step=Number(button.dataset.progress);draw();}}));
  root.querySelectorAll('[data-room]').forEach(button=>button.addEventListener('click',()=>{booking.room=button.dataset.room;root.querySelectorAll('[data-room]').forEach(x=>x.setAttribute('aria-pressed',String(x===button)));persist();}));
  root.querySelectorAll('[data-choice]').forEach(button=>button.addEventListener('click',()=>{booking[button.dataset.choice]=button.dataset.value;root.querySelectorAll(`[data-choice="${button.dataset.choice}"]`).forEach(x=>x.setAttribute('aria-pressed',String(x===button)));persist();}));
  root.querySelectorAll('[data-journey]').forEach(button=>button.addEventListener('click',()=>{booking.journey=validJourney(button.dataset.journey);normalizeSelections();draw();}));
  root.querySelectorAll('[data-workshop]').forEach(button=>button.addEventListener('click',()=>{booking.culturalWorkshop=validWorkshop(button.dataset.workshop);draw();}));
  root.querySelectorAll('[data-extra]').forEach(input=>input.addEventListener('change',()=>{const selected=new Set(booking.experiences);input.checked?selected.add(input.dataset.extra):selected.delete(input.dataset.extra);booking.experiences=[...selected];draw();}));
  root.querySelector('[data-next]')?.addEventListener('click',()=>{const form=root.querySelector('form');if(form&&!form.reportValidity())return;if(step===0){const data=new FormData(form),checkin=data.get('checkin'),checkout=data.get('checkout');if(new Date(checkout)<=new Date(checkin)){root.querySelector('[data-error]').textContent=c('Check-out must be later than check-in.','退房日期必须晚于入住日期。','退房日期必須晚於入住日期。');return;}booking={...booking,checkin,checkout,adults:Number(data.get('adults')),children:Number(data.get('children'))};}if(step===1&&!booking.room){root.querySelector('[data-error]').textContent=c('Please select a room.','请选择房型。','請選擇房型。');return;}if(step===4)booking.guest=Object.fromEntries(new FormData(form));step++;draw();});
  root.querySelector('[data-confirm]')?.addEventListener('click',()=>{state.reservation=null;createReservation();step=6;booking.step=6;saveState(state);draw();});
}

draw();
