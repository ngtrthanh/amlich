const THEMES={
original:{name:'Original',bg:'#e8e8e8',primary:'#3a8a3e',accent:'#60ae64',text:'#333',border:'#ccc',font:'Inter',layout:'default'},
traditional:{name:'Traditional',bg:'linear-gradient(135deg,#8b0000,#dc143c,#ff6347)',primary:'#dc143c',accent:'#ffd700',text:'#8b0000',border:'#8b4513',font:'Poppins',layout:'vertical'},
minimal:{name:'Minimal',bg:'#fafafa',primary:'#000',accent:'#666',text:'#000',border:'#e0e0e0',font:'Space Grotesk',layout:'grid'},
cyberpunk:{name:'Cyberpunk',bg:'linear-gradient(135deg,#0a0a0f,#1a0a2e,#0a0a0f)',primary:'#ff006e',accent:'#00f5ff',text:'#fff',border:'#00f5ff',font:'Roboto Condensed',layout:'neon'},
nature:{name:'Nature Zen',bg:'linear-gradient(135deg,#e8f5e9,#c8e6c9,#a5d6a7)',primary:'#2d5016',accent:'#4a7c59',text:'#2c3e2c',border:'#4a7c59',font:'IBM Plex Sans',layout:'circular'},
sunset:{name:'Sunset',bg:'linear-gradient(135deg,#ff6b6b,#feca57,#ee5a6f)',primary:'#c44569',accent:'#f8b500',text:'#2c2c54',border:'#f8b500',font:'Poppins',layout:'magazine'},
ocean:{name:'Ocean',bg:'linear-gradient(135deg,#667eea,#764ba2,#f093fb)',primary:'#4834d4',accent:'#686de0',text:'#130f40',border:'#686de0',font:'Inter',layout:'wave'}
};

let currentTheme='original',autoMode=false;

function applyTheme(theme){
const t=THEMES[theme];
document.body.style.background=t.bg;
document.body.style.color=t.text;
document.body.style.fontFamily=`'${t.font}',sans-serif`;
document.documentElement.style.setProperty('--theme-primary',t.primary);
document.documentElement.style.setProperty('--theme-accent',t.accent);
document.documentElement.style.setProperty('--theme-text',t.text);
document.documentElement.style.setProperty('--theme-border',t.border);
document.body.className=`layout-${t.layout}`;
currentTheme=theme;
localStorage.setItem('theme',theme);
}

function getAutoTheme(){
const h=new Date().getHours();
const m=new Date().getMonth();
if(h>=6&&h<12)return'nature';
if(h>=12&&h<18)return'sunset';
if(h>=18&&h<22)return'traditional';
if(h>=22||h<6)return'cyberpunk';
if(m>=2&&m<=4)return'nature';
if(m>=5&&m<=7)return'sunset';
if(m>=8&&m<=10)return'original';
return'minimal';
}

function initTheme(){
const saved=localStorage.getItem('theme');
const auto=localStorage.getItem('autoMode')==='true';
autoMode=auto;
if(auto)applyTheme(getAutoTheme());
else if(saved)applyTheme(saved);
else applyTheme('original');
}

function toggleAuto(){
autoMode=!autoMode;
localStorage.setItem('autoMode',autoMode);
if(autoMode)applyTheme(getAutoTheme());
}

window.setTheme=function(t){autoMode=false;localStorage.setItem('autoMode','false');applyTheme(t);};
window.toggleAutoTheme=toggleAuto;

initTheme();
