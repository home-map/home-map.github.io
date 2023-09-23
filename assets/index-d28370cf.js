(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const n=`
<header>
    <div class="pt-[82px] pl-[86px] pr-[86px] pb-[214px] flex justify-between items-center text-center">
        <div class="flex gap-[10px] items-center">
            <img src="/logo-home-map.svg" class="w-10 h-10 ">  
            <h1 class="text-zinc-200 font-normal font-sans text-4xl tracking-[0.96px]">Home Map</h1>
        </div>
        <bottom class="cursor-pointer text-2xl font-medium text-[#00AB47] bg-trasnparent border border-[#00AB47] hover:bg-[#00AB47] hover:text-slate-50 rounded-lg pt-[5px] pb-[7px] pl-[42px] pr-[42px]">login</bottom>
    </div>
</header>
`,c=`
<main>
    <div class="pl-[86px]">
        <h1 class="text-[#ADADAD] text-5xl tracking-[5.76px] font-medium max-w-4xl">App que revela um mapa de oportunidades únicas no mercado imobiliário.</h1>
        <p class="pt-[26px] text-2xl max-w-4xl tracking-[2.88px] text-[#ADADAD] font-light">Explore regiões onde você possa encontrar imóveis com valores atrativos de mercado e também imóveis elegantes e exclusivos.</p>
    </div>
</main>
`;document.querySelector("#app").innerHTML=`
${n}
${c}
`;
