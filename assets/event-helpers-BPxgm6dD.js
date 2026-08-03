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
END:VCALENDAR`,p=new Blob([f],{type:`text/calendar;charset=utf-8`}),m=document.createElement(`a`);m.href=window.URL.createObjectURL(p),m.setAttribute(`download`,d),document.body.appendChild(m),m.click(),document.body.removeChild(m)}async function t(e,t,r){let i=e||`CEG Converge 2026: Leaders Forum`,a=r||`https://cegaana.org/converge/2026/lf`,o=t||`I am registered for CEG Converge 2026: Leaders Forum on Sept 26, 2026! Please join me at: ${a}`;if(navigator.share)try{await navigator.share({title:i,text:o,url:a}),n(o)}catch(e){console.log(`Native share canceled or unhandled, executing clipboard fallback:`,e),n(o)}else n(o)}function n(e,t=`toastMsg`){let n=e||`I am registered for CEG Converge 2026: Leaders Forum on Sept 26, 2026! Please join me at: https://cegaana.org/converge/2026/lf`;navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(n).then(()=>{i(t)}).catch(()=>{r(n,t)}):r(n,t)}function r(e,t=`toastMsg`){try{let n=document.createElement(`textarea`);n.value=e,n.style.position=`fixed`,n.style.left=`-9999px`,n.style.top=`-9999px`,document.body.appendChild(n),n.focus(),n.select();let r=document.execCommand(`copy`);document.body.removeChild(n),r?i(t):prompt(`Copy this share text:`,e)}catch{prompt(`Copy this share text:`,e)}}function i(e=`toastMsg`){let t=document.getElementById(e);t&&(t.style.display=`inline-block`,setTimeout(()=>{t.style.display=`none`},3e3))}function a(e,t){let n=typeof e==`string`?document.getElementById(e):e;!n||!Array.isArray(t)||(n.innerHTML=t.map(e=>`
        <div class="tier-card" data-tier-id="${e.tier_id||``}">
            ${e.image_url?`<img src="${e.image_url}" alt="${e.short_title||``}" class="tier-thumb" />`:``}
            <div class="tier-info">
                <div class="tier-header">
                    <span class="tier-title">${e.short_title||``}</span>
                    ${e.num_tickets?`<span class="tier-badge">${e.num_tickets}</span>`:``}
                </div>
                <div class="tier-desc">${e.description||``}</div>
            </div>
            <div class="tier-action">
                <div class="tier-price">${e.price||``}</div>
                <a href="${e.stripe_link||`#`}" target="_blank" rel="noopener noreferrer" class="tier-btn">Register &rarr;</a>
            </div>
        </div>
    `).join(``))}function o(e,t){let n=typeof e==`string`?document.getElementById(e):e;if(!n||!t)return;let r=t.title||`CEG Converge 2026`,i=t.dtStart||`20260926T190000Z`,a=t.dtEnd||`20260927T010000Z`,o=t.location||`Computer History Museum, 1401 N Shoreline Blvd, Mountain View, CA 94043`,s=t.description||`CEGAANA ${r} at ${o}.`,c=t.icsFilename||`ceg-converge-2026.ics`,l=t.shareUrl||window.location.href,u=t.shareText||`I am registered for ${r}! Please join me at: ${l}`,d=t.shareLabel||`Share with Other Alumni`,f=`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(r)}&dates=${i}%2F${a}&details=${encodeURIComponent(s)}&location=${encodeURIComponent(o)}`,p=`https://api.whatsapp.com/send?text=${encodeURIComponent(u)}`,m=e=>String(e).replace(/'/g,`\\'`);n.innerHTML=`
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
    `}typeof window<`u`&&(window.downloadICS=e,window.shareEvent=t,window.copyShareText=n,window.showToast=i,window.renderProductCatalog=a,window.renderThankYouActions=o);export{o as n,a as t};