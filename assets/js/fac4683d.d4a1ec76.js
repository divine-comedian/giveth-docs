"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[5633],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9366:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o={id:"run-giveth2-backend",title:"Run backend for Giveth2"},s=void 0,l={unversionedId:"run-giveth2-backend",id:"run-giveth2-backend",isDocsHomePage:!1,title:"Run backend for Giveth2",description:"In order to develop locally you need to clone the backend server as well. We are using https://github.com/topiahq/impact-graph for this. Under the hood it is running Apollo.",source:"@site/docs/doc0b-installation-giveth2-backend.md",sourceDirName:".",slug:"/run-giveth2-backend",permalink:"/docs/run-giveth2-backend",tags:[],version:"current",frontMatter:{id:"run-giveth2-backend",title:"Run backend for Giveth2"},sidebar:"defaultSidebar",previous:{title:"Run Giveth2",permalink:"/docs/run-giveth2"},next:{title:"Style Guide",permalink:"/docs/styleguide"}},c=[{value:"Impact graph for Giveth2",id:"impact-graph-for-giveth2",children:[{value:"Install Prerequisites",id:"install-prerequisites",children:[]},{value:"Install impact-graph from GitHub",id:"install-impact-graph-from-github",children:[]},{value:"Create a database and user in postgres using psql",id:"create-a-database-and-user-in-postgres-using-psql",children:[]},{value:"Get environment variables",id:"get-environment-variables",children:[]}]}],p={toc:c};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In order to develop locally you need to clone the backend server as well. We are using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/topiahq/impact-graph"},"https://github.com/topiahq/impact-graph")," for this. Under the hood it is running Apollo."),(0,i.kt)("p",null,"Please follow the readme of ",(0,i.kt)("inlineCode",{parentName:"p"},"impact-graph")," to install it. "),(0,i.kt)("p",null,"Here are more detailed instructions specific to giveth2:"),(0,i.kt)("h2",{id:"impact-graph-for-giveth2"},"Impact graph for Giveth2"),(0,i.kt)("p",null,"These instructions were executed on Ubuntu 18.04 but should stay the same regardless of operating system (ymmv)."),(0,i.kt)("h3",{id:"install-prerequisites"},"Install Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"install ",(0,i.kt)("a",{parentName:"li",href:"https://redis.io/topics/quickstart"},"Redis")),(0,i.kt)("li",{parentName:"ul"},"install ",(0,i.kt)("a",{parentName:"li",href:"https://www.postgresql.org/download"},"Postgres"))),(0,i.kt)("h3",{id:"install-impact-graph-from-github"},"Install impact-graph from GitHub"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:topiahq/impact-graph.git\ncd impact-graph\nnpm i\ncp .env.example .env\n")),(0,i.kt)("h3",{id:"create-a-database-and-user-in-postgres-using-psql"},"Create a database and user in postgres using psql"),(0,i.kt)("p",null,"i.e. follow this tutorial\n",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e"},"https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e"),")"),(0,i.kt)("p",null,"to do something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u postgres psql\npostgres=# create database mydb;\npostgres=# create user myuser with encrypted password 'mypass';\npostgres=# grant all privileges on database mydb to myuser;\n")),(0,i.kt)("h3",{id:"get-environment-variables"},"Get environment variables"),(0,i.kt)("p",null,"For more information about a local development environment please ask in the giveth2 dev channel - i.e. in telegram, discord or (",(0,i.kt)("a",{parentName:"p",href:"https://riot.im/app/#/room/!zFyfjCfKHawjZJcueK:matrix.org?via=matrix.org)%5BRiot.im%5D"},"https://riot.im/app/#/room/!zFyfjCfKHawjZJcueK:matrix.org?via=matrix.org)[Riot.im]"),"."))}u.isMDXComponent=!0}}]);