import{r as n,o as r,c,a as t,b as o,w as i,F as l,e as s,d as e}from"./app.541ccc13.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const p={},h=s('<div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>We do not recommend using banking apps on a jailbroken device. Use a separate secure device to access your bank account.</p></div><p>Many apps, which rely on security, will have algorithms to detect and block jailbroken users from using the app. This includes banking apps, some online videogames (e.g. Pokemon Go, Mario Kart Tour) and other privacy focused apps such as Snapchat.</p><p>This is great from a security standpoint, as a jailbroken device is much more likely to become compromised compared to stock iOS. This can cause an issue, however, when some of us just want to use the apps we need to use.</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Blocking jailbreak detection can stop you from accessing photos and other files while in selected applications.</p></div><p>Now, we&#39;ll go through each tweak that can be used to minimize jailbreak detection. Some apps, however, cannot be patched and will not work when jailbroken, regardless of the content below. Other apps may need bypasses made specifically for them.</p><h2 id="tweaks" tabindex="-1"><a class="header-anchor" href="#tweaks" aria-hidden="true">#</a> Tweaks</h2><ul><li><a href="cydia://url/https://cydia.saurik.com/api/share#?source=https://repo.co.kr/&amp;package=com.rpgfarm.a-bypass">A-Bypass</a> (<a href="cydia://url/https://cydia.saurik.com/api/share#?source=https://repo.co.kr/">repo.co.kr</a>)</li><li><a href="cydia://url/https://cydia.saurik.com/api/share#?source=https://ryleyangus.com/repo/&amp;package=com.ryleyangus.libertylite.beta">Liberty Lite (Beta)</a> (<a href="cydia://url/https://cydia.saurik.com/api/share#?source=https://ryleyangus.com/repo/">ryleyangus.com/repo</a>)</li><li><a href="cydia://url/https://cydia.saurik.com/api/share#?source=https://opa334.github.io/&amp;package=com.opa334.choicy">Choicy</a> (<a href="cydia://url/https://cydia.saurik.com/api/share#?source=https://opa334.github.io/">opa334.github.io</a>)</li><li>Libhooker Configurator (available on the Odyssey repo)</li><li><a href="cydia://url/https://cydia.saurik.com/api/share#?source=https://cydia.ichitaso.com/&amp;package=jp.akusio.kernbypass-unofficial">KernBypass</a> (<a href="cydia://url/https://cydia.saurik.com/api/share#?source=https://cydia.ichitaso.com/">cydia.ichitaso.com</a>)</li><li><a href="cydia://url/https://cydia.saurik.com/api/share#?source=https://repo.xsf1re.kr/&amp;package=kr.xsf1re.vnodebypass">vnodebypass</a> (<a href="cydia://url/https://cydia.saurik.com/api/share#?source=https://repo.xsf1re.kr/">repo.xsf1re.kr</a>)</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Choicy is available on the default BigBoss repo, however we recommend adding the developer&#39;s repo to ensure you have the most up-to-date version.</p></div><p>There is other software available for hiding jailbreak, such as <a href="sileo://package/me.jjolano.shadow">Shadow</a> (<a href="sileo://source/https://ios.jjolano.me/">ios.jjolano.me</a>), however we&#39;ll only be covering the above tweaks in this guide.</p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><ol><li>Open your package manager app (e.g. Cydia, Sileo, Zebra)</li><li>Add the three repos linked above</li><li>Search for and install the three packages</li><li>Respring when prompted</li></ol><h2 id="a-bypass" tabindex="-1"><a class="header-anchor" href="#a-bypass" aria-hidden="true">#</a> A-Bypass</h2>',12),u={class:"custom-container tip"},y=t("p",{class:"custom-container-title"},"TIP",-1),b=e("According to the tweak's author, A-Bypass works better on libhooker-based jailbreaks, such as "),k=e("Chimera"),m=e(", "),w=e("Odyssey"),f=e(", "),g=e("odysseyra1n"),_=e(", and "),v=e("Taurine"),T=e(". It still works on Substrate/Substitute-based jailbreaks, such as checkra1n and unc0ver, however."),j=s('<ol><li>Open the Settings application</li><li>Scroll down to <code>A-Bypass</code></li><li>Tap on <code>Check for Updates</code><ul><li>If a new app doesn&#39;t work with A-Bypass, you should always try to go back and try to check for updates in the A-Bypass preferences again.</li></ul></li><li>Scroll down and enable any apps you wish to block jailbreak detection with.</li></ol><h2 id="liberty-lite" tabindex="-1"><a class="header-anchor" href="#liberty-lite" aria-hidden="true">#</a> Liberty Lite</h2><ol><li>Open the Settings application</li><li>Scroll down to <code>Liberty Lite</code></li><li>Enable <code>Enable Liberty</code></li><li>Tap on <code>Block Jailbreak Detection</code></li><li>Enable all the apps you want to block jailbreak detection with</li></ol><h2 id="choicy" tabindex="-1"><a class="header-anchor" href="#choicy" aria-hidden="true">#</a> Choicy</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>This is the best option for users wanting to use Snapchat on their jailbroken device.</p></div>',5),S={class:"custom-container tip"},B=t("p",{class:"custom-container-title"},"TIP",-1),A=e("If you use a libhooker-based jailbreak, such as "),x=e("Chimera"),C=e(", "),I=e("Odyssey"),L=e(", "),O=e("odysseyra1n"),E=e(", or "),N=e("Taurine"),z=e(", then "),D=t("a",{href:"#libhooker-configurator"},"libhooker configurator",-1),K=e(" serves the same purpose as Choicy, while being natively integrated into libhooker."),P=s('<ol><li>Open the Settings application</li><li>Scroll down to <code>Choicy</code></li><li>Tap on <code>Applications</code></li><li>Tap on an application that you selected with Liberty Lite</li><li>Enable <code>Custom Tweak Configuration</code><ul><li>For Snapchat, enable <code>Disable Tweak Injection</code> and skip the next steps</li></ul></li><li>Make sure <code>Whitelist</code> is selected</li><li>Enable the bypass you&#39;re using - for Liberty Lite this would be <code>zzzzzLiberty</code>, or <code>!ABypass2</code> for A-Bypass.</li><li>Repeat this for every app you&#39;ve selected to use with your bypass tweak.</li></ol><h2 id="libhooker-configurator" tabindex="-1"><a class="header-anchor" href="#libhooker-configurator" aria-hidden="true">#</a> libhooker configurator</h2><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>This only works on libhooker-based jailbreaks! If you use a Substrate or Substitute based jailbreak, such as checkra1n or unc0ver, then this <em>will not work</em>, and you should use <a href="#choicy">Choicy</a> instead!</p></div><ol><li>Open the <code>libhooker</code> application</li><li>Tap &quot;Applications&quot;</li><li>Scroll down to the application you wish to configure, and tap on it</li><li>Here, you can either disable tweaks entirely in this application, or configure individual tweaks. <ul><li>To configure individual tweaks, enable &quot;Override Configuration&quot;, which will open up options to only allow specific tweaks or deny specific tweaks.</li><li>For example, to allow only Liberty Lite, you&#39;d select <code>Allow</code>, then select <code>zzzzzLiberty</code>.</li><li>If you&#39;re using A-Bypass, you&#39;d enable <code>!ABypass2</code> instead.</li></ul></li></ol><h2 id="kernbypass-ios-12-0-14-2" tabindex="-1"><a class="header-anchor" href="#kernbypass-ios-12-0-14-2" aria-hidden="true">#</a> KernBypass (iOS 12.0 - 14.2)</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>This is the best option for users wanting to use Nintendo apps (Mario Kart Tour, Animal Crossing: Pocket Camp, etc) and Pokemon GO on their jailbroken device.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>KernBypass will not work on iOS 14 using unc0ver. Look into <a href="#vnodebypass">vnodebypass</a> instead.</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>KernBypass is a kernel tweak. Do not install on unsupported devices, use it at your own risk.</p></div><ol><li>Open the Settings application</li><li>Scroll down to <code>KernBypass</code></li><li>Tap <code>Enable KernBypass</code></li><li>Enable all the apps you want to block jailbreak detection with</li></ol><h2 id="vnodebypass" tabindex="-1"><a class="header-anchor" href="#vnodebypass" aria-hidden="true">#</a> vnodebypass</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>vnodebypass is similar to KernBypass in regards to what it can bypass, but be aware that while it is active, you will lose access to your tweaks!</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>vnodebypass is a kernel tweak. Do not install on unsupported devices, use it at your own risk.</p></div><ol><li>If you are on iOS 14, ensure that <code>libkrw</code> 1.1.0 or later is installed. It is available in the default Elucubratus repository, if you are using unc0ver or checkra1n.</li><li>Open the <code>vnodebypass</code> app</li><li>Tap the <code>Enable</code> button</li><li>When done using the app with jailbreak detection, go back into the <code>vnodebypass</code> app and tap <code>Disable</code></li></ol>',13);function G(R,W){const a=n("router-link");return r(),c(l,null,[h,t("div",u,[y,t("p",null,[b,o(a,{to:"/installing-chimera"},{default:i(()=>[k]),_:1}),m,o(a,{to:"installing-odyssey"},{default:i(()=>[w]),_:1}),f,o(a,{to:"/installing-odysseyra1n"},{default:i(()=>[g]),_:1}),_,o(a,{to:"/installing-taurine"},{default:i(()=>[v]),_:1}),T])]),j,t("div",S,[B,t("p",null,[A,o(a,{to:"/installing-chimera"},{default:i(()=>[x]),_:1}),C,o(a,{to:"installing-odyssey"},{default:i(()=>[I]),_:1}),L,o(a,{to:"/installing-odysseyra1n"},{default:i(()=>[O]),_:1}),E,o(a,{to:"/installing-taurine"},{default:i(()=>[N]),_:1}),z,D,K])]),P],64)}var M=d(p,[["render",G]]);export{M as default};
