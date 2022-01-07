"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[3538],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return d}});var o=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=o.createContext({}),c=function(t){var e=o.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=c(t.components);return o.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,u=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(u,".").concat(d)]||m[d]||p[d]||r;return n?o.createElement(h,i(i({ref:e},l),{},{components:n})):o.createElement(h,i({ref:e},l))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7599:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=n(4996),s=["components"],u={id:"donatingmetamask",title:"Donating with Metamask",slug:"dapps/donatingmetamask"},c=void 0,l={unversionedId:"donatingmetamask",id:"donatingmetamask",title:"Donating with Metamask",description:"We'll walk you through the process of making a crypto donation via Metamask here. If you do not have a metamask wallet well then you should head on over to the Metamask website and learn how to get one!",source:"@site/dapps/donatingmetamask.md",sourceDirName:".",slug:"/dapps/donatingmetamask",permalink:"/dapps/donatingmetamask",editUrl:"https://github.com/giveth/giveth-docs/edit/master/dapps/donatingmetamask.md",tags:[],version:"current",lastUpdatedBy:"mitch",lastUpdatedAt:1641567780,formattedLastUpdatedAt:"1/7/2022",frontMatter:{id:"donatingmetamask",title:"Donating with Metamask",slug:"dapps/donatingmetamask"},sidebar:"dapps",previous:{title:"Donating with Fiat via the Torus on-ramp",permalink:"/dapps/torusonramp"},next:{title:"Troubleshooting",permalink:"/dapps/troubleshooting"}},p=[{value:"How to Make a Donation",id:"how-to-make-a-donation",children:[],level:3},{value:"To Donate with xDai",id:"to-donate-with-xdai",children:[],level:3}],m={toc:p};function d(t){var e=t.components,n=(0,a.Z)(t,s);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We'll walk you through the process of making a crypto donation via Metamask here. If you do not have a metamask wallet well then you should ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.zendesk.com/hc/en-us/articles/360015489531-Getting-Started-With-MetaMask"},"head on over to the Metamask website and learn how to get one!")),(0,r.kt)("h3",{id:"how-to-make-a-donation"},"How to Make a Donation"),(0,r.kt)("p",null," Once you have chosen a project and set an amount to donate go ahead and click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Donate")," button. This should bring up a pop-up window from metamask to confirm the transaction details."),(0,r.kt)("img",{id:"contentimg",alt:"Confirm Metamask transaction",src:(0,i.Z)("img/content/metamaskconfirmTransaction.png")}),(0,r.kt)("p",null," Verify that the amount on the Metamask pop-up corresponds with the amount you specified on the project page. Take note that the gas fee from the Ethereum network is added on top of the donation amount. Make sure you have enough Ethereum in your wallet to cover the gas fees."),(0,r.kt)("p",null," If it looks good hit ",(0,r.kt)("inlineCode",{parentName:"p"},"CONFIRM")," and your donation transaction will start. You should see a pop-up that looks like this:"),(0,r.kt)("img",{id:"contentimg",alt:"Transaction in Progress",src:(0,i.Z)("img/content/metamaskTransactionprogress.png")}),(0,r.kt)("p",null," You can check your transaction by following the link 'View on Etherscan' and you should also see the transaction pop up on your Metamask under the 'Activity' Tab. a Note that here we used the Ropsten Test Network for demonstration. You should be using 'Ethereum Mainnet' to make your donation."),(0,r.kt)("p",null," Once the transaction has been confirmed on the blockchain you'll be taken to the page next page confirming your successful donation. Nice work!"),(0,r.kt)("img",{id:"contentimg",alt:"Successful Donation",src:(0,i.Z)("img/content/metamaskSuccessfulDonation.png")}),(0,r.kt)("h3",{id:"to-donate-with-xdai"},"To Donate with xDai"),(0,r.kt)("p",null,"If you're tired of paying outrageous gas fees on Mainnet Giveth supports donations on xDai. To get Metamask ",(0,r.kt)("a",{parentName:"p",href:"https://www.xdaichain.com/for-users/wallets/metamask/metamask-setup"},"setup on the xDai network go here"),". Log in with the xDai network via MetaMask on Giveth.io. You can follow the same process for making donations on xDai as on Mainnet."))}d.isMDXComponent=!0}}]);