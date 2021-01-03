(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),l=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,f=p["".concat(o,".").concat(d)]||p[d]||b[d]||s;return n?i.a.createElement(f,a(a({ref:t},c),{},{components:n})):i.a.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var c=2;c<s;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),i=n(7),s=(n(0),n(100)),o={id:"github-issues",title:"Working with Github issues and Zenhub"},a={unversionedId:"github-issues",id:"github-issues",isDocsHomePage:!1,title:"Working with Github issues and Zenhub",description:"Please follow these guidelines, when working with Github issues",source:"@site/docs/doc1d-github-issues.md",slug:"/github-issues",permalink:"/docs/github-issues",editUrl:"https://github.com/giveth/giveth-docs/edit/master/docs/doc1d-github-issues.md",version:"current"},u=[{value:"Github issue management:",id:"github-issue-management",children:[]},{value:"New issue templates",id:"new-issue-templates",children:[]},{value:"Use of Epics",id:"use-of-epics",children:[]},{value:"Milestones",id:"milestones",children:[]}],c={rightToc:u};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Please follow these guidelines, when working with Github issues"),Object(s.b)("h2",{id:"github-issue-management"},"Github issue management:"),Object(s.b)("p",null,"If an issue is in progress for too long (1 week), it may be a sign that it's not clearly defined. In this case, move it back to 'To do', and add a 'question' label."),Object(s.b)("h2",{id:"new-issue-templates"},"New issue templates"),Object(s.b)("p",null,"The new issue template is a guide only."),Object(s.b)("h2",{id:"use-of-epics"},"Use of Epics"),Object(s.b)("p",null,"Epics are for breakup issues into smaller issues"),Object(s.b)("h2",{id:"milestones"},"Milestones"),Object(s.b)("p",null,"Milestones have a date attached to them"))}l.isMDXComponent=!0}}]);