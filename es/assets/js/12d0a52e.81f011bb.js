"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[6416],{3905:(e,a,r)=>{r.d(a,{Zo:()=>p,kt:()=>m});var o=r(7294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function t(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?t(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function i(e,a){if(null==e)return{};var r,o,n=function(e,a){if(null==e)return{};var r,o,n={},t=Object.keys(e);for(o=0;o<t.length;o++)r=t[o],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)r=t[o],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=o.createContext({}),l=function(e){var a=o.useContext(d),r=a;return e&&(r="function"==typeof e?e(a):s(s({},a),e)),r},p=function(e){var a=l(e.components);return o.createElement(d.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},u=o.forwardRef((function(e,a){var r=e.components,n=e.mdxType,t=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,f=u["".concat(d,".").concat(m)]||u[m]||c[m]||t;return r?o.createElement(f,s(s({ref:a},p),{},{components:r})):o.createElement(f,s({ref:a},p))}));function m(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var t=r.length,s=new Array(t);s[0]=u;var i={};for(var d in a)hasOwnProperty.call(a,d)&&(i[d]=a[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<t;l++)s[l]=r[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},508:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const t={id:"technicalWhitePaper",title:"White Paper t\xe9cnico",slug:"technicalWhitePaper"},s=void 0,i={unversionedId:"technicalWhitePaper",id:"technicalWhitePaper",title:"White Paper t\xe9cnico",description:"El prop\xf3sito de nuestra tecnolog\xeda es brindar a los usuarios de criptomonedas la capacidad de donar sin esfuerzo a campa\xf1as enfocadas en hacer del mundo un lugar mejor. Pueden usar la plataforma Giveth para encontrar esas Campa\xf1as y donar directamente, o pueden comprometer su criptograf\xeda a una causa y hacer que un Delegado elija una Campa\xf1a o Seguimiento apropiado para ellos. Como alternativa a los sistemas de donaci\xf3n tradicionales, nuestro contrato de Promesa l\xedquida permite a los Donantes retirar su promesa si no est\xe1n de acuerdo con la forma en que se asignaron sus donaciones. Esto solo puede ocurrir antes de que se haya bloqueado en una Campa\xf1a para un prop\xf3sito espec\xedfico.",source:"@site/i18n/es/docusaurus-plugin-content-docs-dapps/current/technicalWhitePaper.md",sourceDirName:".",slug:"/technicalWhitePaper",permalink:"/es/technicalWhitePaper",draft:!1,editUrl:"https://github.com/giveth/giveth-docs/edit/master/dapps/technicalWhitePaper.md",tags:[],version:"current",lastUpdatedBy:"MrBearCr",lastUpdatedAt:1657816341,formattedLastUpdatedAt:"14 jul 2022",frontMatter:{id:"technicalWhitePaper",title:"White Paper t\xe9cnico",slug:"technicalWhitePaper"},sidebar:"dapps",previous:{title:"Dejando Traces (anteriormente Creando hitos)",permalink:"/es/dapps/leavingTraces"},next:{title:"Los tipos de cambio",permalink:"/es/dapps/exchangeRates"}},d={},l=[{value:"Para hacer posible esta nueva forma de dar, tenemos que superar algunos desaf\xedos:",id:"para-hacer-posible-esta-nueva-forma-de-dar-tenemos-que-superar-algunos-desaf\xedos",level:4},{value:"Desaf\xedo n.\xba 1: donar sin perder la propiedad",id:"desaf\xedo-n\xba-1-donar-sin-perder-la-propiedad",level:4},{value:"Desaf\xedo #2 - Distribuir los fondos recaudados",id:"desaf\xedo-2---distribuir-los-fondos-recaudados",level:4},{value:"Desaf\xedo n.\xba 3: transferir la propiedad",id:"desaf\xedo-n\xba-3-transferir-la-propiedad",level:4},{value:"Desaf\xedo n.\xb0 4: determinar si se debe realizar la transferencia",id:"desaf\xedo-n-4-determinar-si-se-debe-realizar-la-transferencia",level:4}],p={toc:l};function c(e){let{components:a,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"El prop\xf3sito de nuestra tecnolog\xeda es brindar a los usuarios de criptomonedas la capacidad de donar sin esfuerzo a campa\xf1as enfocadas en hacer del mundo un lugar mejor. Pueden usar la plataforma Giveth para encontrar esas Campa\xf1as y donar directamente, o pueden comprometer su criptograf\xeda a una causa y hacer que un Delegado elija una Campa\xf1a o Seguimiento apropiado para ellos. Como alternativa a los sistemas de donaci\xf3n tradicionales, nuestro contrato de ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Promesa l\xedquida"))," permite a los Donantes retirar su promesa si no est\xe1n de acuerdo con la forma en que se asignaron sus donaciones. Esto solo puede ocurrir antes de que se haya bloqueado en una Campa\xf1a para un prop\xf3sito espec\xedfico."),(0,n.kt)("h4",{id:"para-hacer-posible-esta-nueva-forma-de-dar-tenemos-que-superar-algunos-desaf\xedos"},"Para hacer posible esta nueva forma de dar, tenemos que superar algunos desaf\xedos:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"1.")," C\xf3mo ofrecer un medio para que los Donantes donen sin perder la propiedad de sus fondos.\n",(0,n.kt)("strong",{parentName:"p"},"2.")," C\xf3mo permitir que terceros distribuyan estas donaciones criptogr\xe1ficas a personas que puedan usarlas de manera efectiva.\n",(0,n.kt)("strong",{parentName:"p"},"3.")," C\xf3mo transferir de forma segura la propiedad a las personas que est\xe1n haciendo del mundo un lugar mejor.\n",(0,n.kt)("strong",{parentName:"p"},"4.")," C\xf3mo determinar si la propiedad de los tokens Ethereum distribuidos debe transferirse o no. En otras palabras: c\xf3mo asegurarse de que un destinatario merece la criptograf\xeda donada antes de que la transfiramos."),(0,n.kt)("h4",{id:"desaf\xedo-n\xba-1-donar-sin-perder-la-propiedad"},"Desaf\xedo n.\xba 1: donar sin perder la propiedad"),(0,n.kt)("p",null,"Esto es manejado por nuestro contrato ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Giveth/vaultcontract"},"vault"),". Este es un contrato inteligente de solidez que puede almacenar criptograf\xeda de forma segura en nombre del propietario de la criptomoneda. As\xed es como y por qu\xe9 un Donante puede controlar o retirar sus donaciones. Cuando un donante dona criptomonedas a trav\xe9s de Giveth, las monedas se almacenan en una b\xf3veda con el donante como propietario."),(0,n.kt)("p",null,"Una vez almacenada en la b\xf3veda, la criptomoneda se mantiene en su lugar y no se puede mover m\xe1s sin el permiso del propietario."),(0,n.kt)("h4",{id:"desaf\xedo-2---distribuir-los-fondos-recaudados"},"Desaf\xedo #2 - Distribuir los fondos recaudados"),(0,n.kt)("p",null," Nuestro contrato ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Giveth/minime"},"Minime")," maneja en parte este desaf\xedo. Este es un contrato inteligente de solidez que puede representar Ether y ERC-20 con tokens de r\xe9plica."),(0,n.kt)("p",null,"En lugar de transferir tokens reales de Ethereum a individuos por sus esfuerzos para hacer el bien, podemos distribuir tokens Minime con la seguridad de que las criptomonedas reales se almacenan en la b\xf3veda. Los tokens Minime son utilizados por varios proyectos conocidos en el espacio Ethereum."),(0,n.kt)("p",null,"Nuestro Giveth TRACE utiliza otra estrategia para transferencias flexibles. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Giveth/liquidpledging"},(0,n.kt)("strong",{parentName:"a"},(0,n.kt)("em",{parentName:"strong"},"Liquid Pledging")))," es un contrato inteligente de solidez que nos permite redistribuir Ether en una mir\xedada de permutaciones en red (tambi\xe9n conocido como un gr\xe1fico). Es un poco como democracia l\xedquida, pero no hay votaci\xf3n (a menos que lo agregues como complemento)."),(0,n.kt)("p",null,"En su esencia, Liquid Pledging mantiene una lista de propietarios y transferencias de tokens de Ethereum. Estas dos listas sirven como estructura de datos para el gr\xe1fico. La API del contrato proporciona los medios para donar, delegar y transferir tokens de Ethereum almacenados en la b\xf3veda."),(0,n.kt)("h4",{id:"desaf\xedo-n\xba-3-transferir-la-propiedad"},"Desaf\xedo n.\xba 3: transferir la propiedad"),(0,n.kt)("p",null,"Una vez m\xe1s, esto se resuelve mediante nuestro contrato ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Giveth/vaultcontract"},"vault"),". Los tokens de Ethereum solo se env\xedan a direcciones incluidas en la lista blanca con el permiso del donante original. Para cumplir completamente con los requisitos del desaf\xedo n.\xba 3, debemos establecer alg\xfan tipo de proceso de aprobaci\xf3n."),(0,n.kt)("h4",{id:"desaf\xedo-n-4-determinar-si-se-debe-realizar-la-transferencia"},"Desaf\xedo n.\xb0 4: determinar si se debe realizar la transferencia"),(0,n.kt)("p",null,"Las reglas sobre c\xf3mo se aprueban las transferencias se manejan mediante complementos de compromiso l\xedquido (lpp). Estos complementos son contratos separados a los que se hace referencia en el contrato de Liquid Pledge (",(0,n.kt)("em",{parentName:"p"},"ver desaf\xedo #2"),")."),(0,n.kt)("p",null,"Por ejemplo, podr\xeda usar nuestro complemento ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Giveth/lpp-milestone"},"lpp-milestone")," para solicitar la aprobaci\xf3n del revisor como condici\xf3n para liberar Ether de su donante original. En este caso, el revisor es otra direcci\xf3n de Ethereum. Si se llama a 'acceptMilestone' desde esta direcci\xf3n de revisor aprobado, entonces la propiedad de Ether donado puede transferirse a la direcci\xf3n del destinatario de Trace (anteriormente Milestone)."),(0,n.kt)("p",null,"No tiene que usar nuestro complemento lpp-milestone. Puedes hacer el tuyo con lo que quieras. Use un contrato que ordene las reglas que necesita para su comunidad."),(0,n.kt)("p",null,"Esto concluye el White Paper t\xe9cnico de Giveth TRACE por ahora. Comun\xedquese con nosotros en ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/qf7XZ48gCU"},"Discord")," si desea hacer algo con las ideas enumeradas. Somos un proyecto de c\xf3digo abierto y nuestra misi\xf3n es ayudar a las comunidades."))}c.isMDXComponent=!0}}]);