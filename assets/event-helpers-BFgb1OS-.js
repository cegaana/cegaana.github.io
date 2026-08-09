(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e,t,n,r,i,a){let o=e||`CEG Converge 2026: Leaders Forum`,s=t||`20260926T160000Z`,c=n||`20260927T010000Z`,l=r||`Computer History Museum, 1401 N Shoreline Blvd, Mountain View, CA 94043`,u=i||`CEGAANA CEG Converge 2026 Leaders Forum at Computer History Museum, Mountain View, CA.`,d=a||`ceg-converge-2026-leaders-forum.ics`,f=`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//CEGAANA//Event Calendar//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
SUMMARY:${o}
DTSTART:${s}
DTEND:${c}
LOCATION:${l.replace(/,/g,`\\,`)}
DESCRIPTION:${u.replace(/,/g,`\\,`)}
URL:${window.location.href}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`,p=new Blob([f],{type:`text/calendar;charset=utf-8`}),m=document.createElement(`a`);m.href=window.URL.createObjectURL(p),m.setAttribute(`download`,d),document.body.appendChild(m),m.click(),document.body.removeChild(m)}async function t(e,t,r){let i=e||`CEG Converge 2026: Leaders Forum`,a=r||`https://cegaana.org/converge/2026/lf`,o=t||`I am registered for CEG Converge 2026: Leaders Forum on Sept 26, 2026! Please join me at: ${a}`;if(navigator.share)try{await navigator.share({title:i,text:o,url:a}),n(o)}catch(e){console.log(`Native share canceled or unhandled, executing clipboard fallback:`,e),n(o)}else n(o)}function n(e,t=`toastMsg`){let n=e||`I am registered for CEG Converge 2026: Leaders Forum on Sept 26, 2026! Please join me at: https://cegaana.org/converge/2026/lf`;navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(n).then(()=>{i(t)}).catch(()=>{r(n,t)}):r(n,t)}function r(e,t=`toastMsg`){try{let n=document.createElement(`textarea`);n.value=e,n.style.position=`fixed`,n.style.left=`-9999px`,n.style.top=`-9999px`,document.body.appendChild(n),n.focus(),n.select();let r=document.execCommand(`copy`);document.body.removeChild(n),r?i(t):prompt(`Copy this share text:`,e)}catch{prompt(`Copy this share text:`,e)}}function i(e=`toastMsg`){let t=document.getElementById(e);t&&(t.style.display=`inline-block`,setTimeout(()=>{t.style.display=`none`},3e3))}function a(e,t=new Date){let n=e.is_early_bird||e.tier_id?.includes(`early_bird`)?e.early_bird_deadline||e.conference_date:e.conference_date||e.early_bird_deadline;if(!n)return!1;let r=new Date(`${n}T23:59:59-07:00`);if(isNaN(r.getTime())){let e=n.split(`-`);if(e.length===3){let n=parseInt(e[0],10),r=parseInt(e[1],10)-1,i=parseInt(e[2],10),a=new Date(Date.UTC(n,r,i,30,59,59));return t.getTime()>a.getTime()}return!1}return t.getTime()>r.getTime()}function o(e,t){let n=typeof e==`string`?document.getElementById(e):e;if(!n||!Array.isArray(t))return;let r=t.filter(e=>!a(e));if(r.length===0){n.innerHTML=`
            <div class="registration-closed-box" style="text-align: center; padding: 2rem 1rem; background: #FFF5F5; border: 1px solid #FEB2B2; border-radius: 12px; color: #9B2C2C;">
                <h3 style="font-family: 'Outfit', sans-serif; margin-bottom: 0.5rem; font-size: 1.2rem;">Registration Closed</h3>
                <p style="font-size: 0.92rem; margin: 0; color: #742A2A;">Online registration for CEG Converge 2026 is currently closed.</p>
            </div>
        `;return}let i=new Map;r.forEach(e=>{let t=e.group_key||(e.tier_id.includes(`single`)?`single`:e.tier_id.includes(`double`)?`double`:`student`);i.has(t)||i.set(t,{key:t,title:e.group_title||(t===`single`?`Single Ticket`:t===`double`?`Double Tickets`:`Student & Recent Grad Pass`),icon:e.group_icon||(t===`single`?`👤`:t===`double`?`👥`:`🎓`),badge:e.group_badge||e.num_tickets||``,description:e.group_description||e.description||``,items:[]}),i.get(t).items.push(e)});let o=Array.from(i.values()).map(e=>(e.items.sort((e,t)=>e.is_early_bird||e.tier_id.includes(`early_bird`)?-1:1),e)),s=e=>{let t=!!(e.is_early_bird||e.tier_id.includes(`early_bird`)),n=e.option_label||(t?`⚡ Early Bird Special`:`Regular Registration`),r=e.savings_badge||(t?e.tier_id.includes(`double`)?`Save $20`:`Save $15`:``),i=e.expiration_label||(t?`Ends Sep 12`:``);return`
        <div class="option-row ${t?`option-early-bird`:`option-regular`}">
            <div class="option-title-group">
                <span class="option-label">${n}</span>
                ${r||i?`
                <div class="option-badges">
                    ${r?`<span class="option-savings-tag">${r}</span>`:``}
                    ${i?`<span class="option-expiry-tag">${i}</span>`:``}
                </div>
                `:``}
            </div>
            <div class="option-action-group">
                <span class="option-price">${e.price}</span>
                <a href="${e.stripe_link||`#`}" target="_blank" rel="noopener noreferrer" class="option-btn ${t?`btn-eb`:`btn-reg`}">Register &rarr;</a>
            </div>
        </div>
        `};n.innerHTML=o.map(e=>`
        <div class="type-card-block">
            <div class="type-card-header">
                <div class="type-icon-badge">${e.icon}</div>
                <div class="type-header-content">
                    <div class="type-title-line">
                        <h3 class="type-title">${e.title}</h3>
                        ${e.badge?`<span class="type-count-badge">${e.badge}</span>`:``}
                    </div>
                    <p class="type-description">${e.description}</p>
                </div>
            </div>
            <div class="type-options-list">
                ${e.items.map(s).join(``)}
            </div>
        </div>
    `).join(``)}function s(e,t){let n=typeof e==`string`?document.getElementById(e):e;if(!n||!t)return;let r=t.title||`CEG Converge 2026`,i=t.dtStart||`20260926T190000Z`,a=t.dtEnd||`20260927T010000Z`,o=t.location||`Computer History Museum, 1401 N Shoreline Blvd, Mountain View, CA 94043`,s=t.description||`CEGAANA ${r} at ${o}.`,c=t.icsFilename||`ceg-converge-2026.ics`,l=t.shareUrl||window.location.href,u=t.shareText||`I am registered for ${r}! Please join me at: ${l}`,d=t.shareLabel||`Share with Other Alumni`,f=`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(r)}&dates=${i}%2F${a}&details=${encodeURIComponent(s)}&location=${encodeURIComponent(o)}`,p=`https://api.whatsapp.com/send?text=${encodeURIComponent(u)}`,m=e=>String(e).replace(/'/g,`\\'`);n.innerHTML=`
        <!-- Card 1: Calendar Integration -->
        <div class="action-card">
            <div class="action-card-title">
                <span>📅</span> Add to Calendar
            </div>
            <div class="action-grid">
                <a href="${f}" target="_blank" rel="noopener noreferrer" class="action-btn btn-google">
                    Google Cal
                </a>
                <button onclick="downloadICS('${m(r)}', '${i}', '${a}', '${m(o)}', '${m(s)}', '${c}')" class="action-btn btn-ical">
                    iCal / Outlook
                </button>
            </div>
        </div>

        <!-- Card 2: Social Sharing -->
        <div class="action-card">
            <div class="action-card-title">
                <span>📣</span> ${d}
            </div>
            <div class="action-grid">
                <a href="${p}" target="_blank" rel="noopener noreferrer" class="action-btn btn-wa">
                    💬 WhatsApp
                </a>
                <button onclick="shareEvent('${m(r)}', '${m(u)}', '${l}')" class="action-btn btn-share">
                    🔗 Share Link
                </button>
            </div>
        </div>
    `}typeof window<`u`&&(window.downloadICS=e,window.shareEvent=t,window.copyShareText=n,window.showToast=i,window.renderProductCatalog=o,window.renderThankYouActions=s);export{s as n,o as t};