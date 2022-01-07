"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[7622],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(r),h=i,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||a;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9824:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),l=["components"],o={id:"testing-guidelines",title:"Testing Guidelines",slug:"dapps/testing-guidelines"},s=void 0,u={unversionedId:"testing-guidelines",id:"testing-guidelines",title:"Testing Guidelines",description:"This guide provides a framework for testing the Giveth.io DApp.",source:"@site/dapps/doc1b-testing-guidelines.md",sourceDirName:".",slug:"/dapps/testing-guidelines",permalink:"/dapps/testing-guidelines",editUrl:"https://github.com/giveth/giveth-docs/edit/master/dapps/doc1b-testing-guidelines.md",tags:[],version:"current",lastUpdatedBy:"mitch",lastUpdatedAt:1641567780,formattedLastUpdatedAt:"1/7/2022",frontMatter:{id:"testing-guidelines",title:"Testing Guidelines",slug:"dapps/testing-guidelines"},sidebar:"dapps",previous:{title:"Contributor Guide",permalink:"/dapps/contributors"},next:{title:"Developer Guidelines",permalink:"/dev-guidelines"}},p=[{value:"Requirements",id:"requirements",children:[],level:2},{value:"Use Cases",id:"use-cases",children:[{value:"Project Creator",id:"project-creator",children:[{value:"Create Project",id:"create-project",children:[],level:4},{value:"Edit Project",id:"edit-project",children:[],level:4},{value:"Edit Profile",id:"edit-profile",children:[],level:4}],level:3},{value:"Donor",id:"donor",children:[],level:3},{value:"General",id:"general",children:[],level:3}],level:2}],c={toc:p};function d(e){var t=e.components,r=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide provides a framework for testing the ",(0,a.kt)("a",{parentName:"p",href:"https://giveth.io/"},"Giveth.io")," DApp."),(0,a.kt)("p",null,"Each use case has a corresponding issue (linked in the titles below) in our GitHub. These issues will be closed after testing each sprint and reopened for the following one. If you wish to take on testing a use case, please assign yourself to the issue for that sprint."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"User testing should be done on ",(0,a.kt)("a",{parentName:"li",href:"https://next.giveth.io"},"https://next.giveth.io")),(0,a.kt)("li",{parentName:"ul"},"Please use a modern browser. If you encounter a bug, please try the same thing with another browser. Please make an issue in any case, but tell us if the issue might be browser specific"),(0,a.kt)("li",{parentName:"ul"},"Use issues in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Giveth/giveth-next"},"GitHub")," for reports and feedback")),(0,a.kt)("h2",{id:"use-cases"},"Use Cases"),(0,a.kt)("p",null,"The following actions are defined as core functionality. If one of these steps is buggy, that represents a critical error."),(0,a.kt)("h3",{id:"project-creator"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/Giveth/giveth-2/issues/798"},"Project Creator")),(0,a.kt)("p",null,"This use case is partially automated to ensure functionality before changes are made. However, user testing is still required."),(0,a.kt)("h4",{id:"create-project"},"Create Project"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Project details"),(0,a.kt)("li",{parentName:"ul"},"Upload image / image formatting"),(0,a.kt)("li",{parentName:"ul"},"Location selection / global impact"),(0,a.kt)("li",{parentName:"ul"},"Category select"),(0,a.kt)("li",{parentName:"ul"},"Google maps selection"),(0,a.kt)("li",{parentName:"ul"},'Check that projects are all listed in "my projects"'),(0,a.kt)("li",{parentName:"ul"},"Check that projects show up on homepage"),(0,a.kt)("li",{parentName:"ul"},"Deactivate/reactivate project")),(0,a.kt)("h4",{id:"edit-project"},"Edit Project"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Change photo"),(0,a.kt)("li",{parentName:"ul"},"Change text fields"),(0,a.kt)("li",{parentName:"ul"},"Update donation address"),(0,a.kt)("li",{parentName:"ul"},"Check that updates are applied")),(0,a.kt)("h4",{id:"edit-profile"},"Edit Profile"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name"),(0,a.kt)("li",{parentName:"ul"},"Email"),(0,a.kt)("li",{parentName:"ul"},"Location"),(0,a.kt)("li",{parentName:"ul"},"Website")),(0,a.kt)("h3",{id:"donor"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/Giveth/giveth-2/issues/799"},"Donor")),(0,a.kt)("p",null,"This use case does not include any automated testing and must be fully user-tested."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Donate in different tokens: ETH, ERC20, Mainnet, xDai"),(0,a.kt)("li",{parentName:"ul"},"Donate with alternate wallets (other than sign in)"),(0,a.kt)("li",{parentName:"ul"},"Check that funds leave wallet"),(0,a.kt)("li",{parentName:"ul"},"Check that funds received/tracked by project"),(0,a.kt)("li",{parentName:"ul"},"View donations made (correct ","$"," amount, correct currency type)")),(0,a.kt)("h3",{id:"general"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/Giveth/giveth-2/issues/800"},"General")),(0,a.kt)("p",null,"This use case will be partially automated, but requires user-testing, especially to ensure that all external links function correctly."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'"Liking" projects'),(0,a.kt)("li",{parentName:"ul"},"Sharing via Social"),(0,a.kt)("li",{parentName:"ul"},"All links on homepage"),(0,a.kt)("li",{parentName:"ul"},"Signup for newsletter"),(0,a.kt)("li",{parentName:"ul"},'"My wallet"'),(0,a.kt)("li",{parentName:"ul"},"Report a Bug"),(0,a.kt)("li",{parentName:"ul"},"Sign in/sign out"),(0,a.kt)("li",{parentName:"ul"},"Sort/Filter/Seach projects"),(0,a.kt)("li",{parentName:"ul"},"Check that projects appear in project page (correct format, correct number)")))}d.isMDXComponent=!0}}]);