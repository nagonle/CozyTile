"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[7379],{85967:(e,t,l)=>{l.d(t,{u:()=>S});var i=l(59496),s=l(84875),a=l.n(s),r=l(65748),n=l(73549),o=l(61873),d=l(87088);const c="FvfvGU3jvHRskUU9v9_8",u="Q9AlbZn2EGzy3MTWXa8X",m="mxmxS0y8LiwSs5nueKPT",x="GXxVAveNFStY3pBI_NO4",g="eHcXC2s97InYP7rMNT0H";var h=l(4637);const S=(0,i.memo)((function(e){const{children:t,message:l,title:i,linkTitle:s,linkTo:S,onClick:A,renderInline:k=!1}=e,{isXSOnly:C,isSMOnly:D}=(0,o.e)(),y=C||D;return(0,h.jsxs)("section",{className:a()(c,{[u]:k}),children:[t,(0,h.jsx)(r.D,{as:"h1",variant:y?"cello":"alto",className:x,children:i}),(0,h.jsx)(r.D,{variant:y?"mesto":"ballad",className:g,children:l}),s&&(S||A)&&(0,h.jsx)(n.D,{colorSet:"invertedLight",className:m,href:S,onClick:A,component:d.Z,children:s})]})}))},48947:(e,t,l)=>{l.d(t,{l:()=>S});var i=l(59496),s=l(60378),a=l(22525),r=l(48349),n=l(57142);const o={"custom-order":r.HI,title:{column:n.Q.TITLE,order:n.k.ASC},artist:{column:n.Q.TITLE,order:n.k.SECONDARY_ASC},"added-by":{column:n.Q.ADDED_BY,order:n.k.ASC},"added-at":{column:n.Q.ADDED_AT,order:n.k.ASC},duration:{column:n.Q.DURATION,order:n.k.ASC},album:{column:n.Q.ALBUM,order:n.k.ASC},"album-or-podcast":{column:n.Q.ALBUM_OR_PODCAST,order:n.k.ASC},"album-or-show":{column:n.Q.ALBUM_OR_SHOW,order:n.k.ASC}},d={title:n.Q.TITLE,artist:n.Q.TITLE,"added-by":n.Q.ADDED_BY,"added-at":n.Q.ADDED_AT,duration:n.Q.DURATION,album:n.Q.ALBUM,"album-or-podcast":n.Q.ALBUM_OR_PODCAST,"album-or-show":n.Q.ALBUM_OR_SHOW},c={[n.k.NONE]:n.k.NONE,[n.k.ASC]:n.k.DESC,[n.k.DESC]:n.k.ASC,[n.k.SECONDARY_ASC]:n.k.SECONDARY_DESC,[n.k.SECONDARY_DESC]:n.k.SECONDARY_ASC},u={[n.Q.INDEX]:{key:"custom-order",get value(){return s.ag.get("sort.custom-order")}},[n.Q.TITLE]:{key:"title",get value(){return s.ag.get("sort.title")}},[n.Q.ARTIST]:{key:"artist",get value(){return s.ag.get("sort.artist")}},[n.Q.ADDED_BY]:{key:"added-by",get value(){return s.ag.get("sort.added-by")}},[n.Q.ADDED_AT]:{key:"added-at",get value(){return s.ag.get("sort.date-added")}},[n.Q.DURATION]:{key:"duration",get value(){return s.ag.get("sort.duration")}},[n.Q.EVENT_DATE]:null,[n.Q.ALBUM]:{key:"album",get value(){return s.ag.get("sort.album")}},[n.Q.ALBUM_OR_PODCAST]:{key:"album-or-podcast",get value(){return s.ag.get("sort.album-or-podcast")}},[n.Q.ALBUM_OR_SHOW]:{key:"album-or-show",get value(){return s.ag.get("sort.album-or-show")}},[n.Q.PLAYS]:null,[n.Q.RELEASE_DATE]:null,[n.Q.ADD]:null,[n.Q.ACTIONS]:null};var m=l(40822),x=l(2019),g=l(4637);function h(e){return!!e}const S=({columns:e,disabled:t,onSort:l})=>{const S=[...e];S.splice(2,0,m.QD.ARTIST);const{sortState:A,setSortState:k}=(0,i.useContext)(r.Gb),C=function(e){return null===e.column?u[m.QD.INDEX]:(0,x.cB)(e.column,e.order)?u[m.QD.ARTIST]:u[e.column]}(A),D=(0,i.useCallback)((e=>{l?.(),k(((e,t,l)=>e?t!==d[e]||"artist"===e&&[n.k.ASC,n.k.DESC].includes(l)||"title"===e&&[n.k.SECONDARY_ASC,n.k.SECONDARY_DESC].includes(l)?o[e]:{column:d[e],order:c[l]}:r.HI)(e,A.column,A.order))}),[l,k,A.column,A.order]),y=(0,i.useCallback)((()=>null!==A.column),[A.column]),p=S.map((e=>u[e])).filter(h);return(0,g.jsx)(a.A,{options:p,onSelect:D,selected:C,isSelectionChanged:y,sortOrder:A.order,heading:s.ag.get("drop_down.sort_by"),disabled:t})}},46994:(e,t,l)=>{l.r(t),l.d(t,{default:()=>X});var i=l(59496),s=l(42197),a=l(30962),r=l(60378),n=l(43234),o=l(85967),d=l(37611),c=l(26553),u=l(65476),m=l(99811),x=l(37277),g=l(23534),h=l(2019),S=l(48947),A=l(12646),k=l(40822),C=l(48349),D=l(70357),y=l(68164),p=l(69092),b=l(59913),j=l(67551),f=l(23484),T=l(20863),E=l(78061),v=l(59362),O=l(87064),_=l(62001),I=l(59634),Q=l(70924),N=l(46828),R=l(4637);const P=i.memo((function({uri:e,uid:t,name:l,duration_ms:s,artists:a,album:n,is19PlusOnly:o,isExplicit:d,isPlayable:c,index:u,contextUri:m,imgUrl:x,usePlayContextItem:g}){const{filter:h}=(0,i.useContext)(A.fo),{isActive:S,isPlaying:k,triggerPlay:C,togglePlay:D}=g({uid:t,uri:e,index:u}),{badges:y,hasBadges:p}=(0,v.r)({isExplicit:d}),b=a?.map((e=>e.name)).join(r.ag.getSeparator())||"";return(0,R.jsx)(E.ZP,{value:"row",index:u,children:(0,R.jsx)(f._,{menu:(0,R.jsx)(O.N,{uri:e,uid:t,contextUri:m}),children:(0,R.jsxs)(N.c,{uri:e,contextUri:m,isActive:S,index:u,onTriggerPlay:()=>{C()},ariaRowIndex:u+1,isPlayable:c,ageRestricted:o,dragMetadata:{name:l,createdBy:b},children:[(0,R.jsx)(I.Dd,{ariaColIndex:0,children:(0,R.jsx)(I.Du,{uri:e,playAriaLabel:r.ag.get("tracklist.a11y.play",l,b),isPlaying:k,isActive:S,onClick:()=>{D()},children:(0,R.jsx)(I.km,{children:u+1})})}),(0,R.jsxs)(I.vZ,{ariaColIndex:1,children:[(0,R.jsx)(I.lD,{src:x}),(0,R.jsxs)(I.vm,{children:[(0,R.jsx)(I.Wh,{titleText:l,children:(0,R.jsx)(_.o,{searchWords:[h],textToHighlight:l})}),p&&(0,R.jsx)(I.g3,{children:y.explicit?(0,R.jsx)(T.N,{}):null}),(0,R.jsx)(I.K9,{children:a&&(0,R.jsx)(Q.o,{nonInteractive:!0,artists:a,filter:h})})]})]}),(0,R.jsx)(I.UA,{ariaColIndex:2,children:n?.name&&(0,R.jsx)(I.BM,{nonInteractive:!0,uri:n?.uri,name:n?.name,children:(0,R.jsx)(_.o,{searchWords:[h],textToHighlight:n?.name})})}),(0,R.jsxs)(I.mU,{ariaColIndex:3,children:[(0,R.jsx)(I.A$,{duration:s}),(0,R.jsx)(I.Zv,{menu:(0,R.jsx)(O.N,{uri:e,uid:t,contextUri:m}),label:r.ag.get("more.label.track",l,b)})]})]})})})}),((e,t)=>e.uri===t.uri&&e.index===t.index));var w=l(35804);const U=new Set(C.MI),L=i.memo((function({uri:e,tracks:t,columns:l,sortState:s,handleSort:a,usePlayContextItem:n,tracklistDomRef:o}){const d=(0,i.useRef)(null),c=(0,i.useCallback)(((t,l)=>{const i=(0,w.X)(t.album?.images,{desiredSize:40,desiredLabel:"small"});return(0,R.jsx)(P,{index:l,contextUri:e,uri:t.uri,uid:t.uid,isPlayable:t.isPlayable,duration_ms:t.duration.milliseconds,name:t.name,artists:t.artists,album:t.album||void 0,isExplicit:t.isExplicit,is19PlusOnly:t.is19PlusOnly,type:t.type,imgUrl:i?.url||"",usePlayContextItem:n},t.uid)}),[e,n]);return(0,R.jsx)(R.Fragment,{children:(0,R.jsx)(E.ZP,{value:"playlist-tracklist",children:(0,R.jsx)(k.Pv,{ariaLabel:r.ag.get("local-files"),hasHeaderRow:!0,columns:l,sortableColumns:U,sortState:s,onSort:a,renderRow:c,resolveUri:e=>e.uri,resolveUid:e=>e.uid,tracks:t,nrTracks:t.length,limit:100,outerRef:d,outerDomRef:o},e)})})})),M="uCHqQ74vvHOnctGg0X0B",B="feuNq1FTxMbdeOTuFgpA",Y=[k.QD.INDEX,k.QD.TITLE,k.QD.ALBUM,k.QD.DURATION],H=()=>{const{filter:e}=(0,i.useContext)(A.fo),{sortState:t,setSortState:l}=(0,i.useContext)(C.Gb),k=(0,i.useContext)(p.t),f=(0,b.I)(),[T,E]=(0,i.useState)(),v=(0,D.Y)(s.Fzl),O=(0,i.useRef)(null),_=(0,i.useCallback)((e=>{l((0,h.VK)(e,t))}),[t,l]),I=(0,i.useCallback)((async()=>{const l=await k.getTracks((0,h._j)(t),e);E(l)}),[k,t,e]);(0,i.useEffect)((()=>{I()}),[I]);const{isPlaying:Q,togglePlay:N,usePlayContextItem:P}=(0,j.n)({uri:y.b,pages:[{items:(T??[]).map((e=>({...e,provider:null})))}]},{featureIdentifier:"local_files"});return T?e||T.length&&f?(0,R.jsxs)("div",{role:"presentation",className:M,children:[(0,R.jsxs)(d.gF,{backgroundColor:v,children:[(0,R.jsxs)(c.W,{children:[(0,R.jsx)(g.$,{size:"md",onClick:()=>N(),isPlaying:Q,uri:y.b}),(0,R.jsx)(u.i,{text:r.ag.get("local-files")})]}),(0,R.jsxs)(d.sP,{children:[(0,R.jsx)(d.xd,{children:r.ag.get("local-files")}),(0,R.jsx)(d.T0,{children:r.ag.get("local-files.description")})]})]}),(0,R.jsx)(n.o,{backgroundColor:v,children:(0,R.jsxs)(n.F,{children:[(0,R.jsx)(g.$,{size:"lg",onClick:()=>N(),isPlaying:Q,uri:y.b}),(0,R.jsxs)("div",{className:B,children:[(0,R.jsx)(i.Suspense,{fallback:null,children:(0,R.jsx)(m.K,{placeholder:r.ag.get("playlist.search_in_playlist"),clearOnEscapeInElementRef:O})}),(0,R.jsx)(S.l,{columns:C.MI})]})]})}),(0,R.jsx)("div",{className:"contentSpacing",children:(0,R.jsx)(L,{tracks:T,uri:y.b,columns:Y,handleSort:_,sortState:t,usePlayContextItem:P,tracklistDomRef:O})})]}):(0,R.jsx)(o.u,{linkTo:"/preferences",linkTitle:r.ag.get("local-files.empty-button"),message:r.ag.get("local-files.empty-description"),title:r.ag.get("local-files.empty-header"),children:(0,R.jsx)(a.Y,{iconSize:64,"aria-hidden":"true"})}):(0,R.jsx)(x.h,{hasError:!1,errorMessage:r.ag.get("error.request-artist-failure"),loadOffline:!0})},X=()=>(0,R.jsx)(C.kz,{uri:"spotify:internal:local-files",children:(0,R.jsx)(A.hz,{uri:"spotify:internal:local-files",children:(0,R.jsx)(H,{})})})},61873:(e,t,l)=>{l.d(t,{e:()=>x});var i=l(80701);const s="(min-width: 0px)",a="(min-width: 0px) and (max-width: 767px)",r="(min-width: 768px)",n="(min-width: 768px) and (max-width: 1023px)",o="(min-width: 1024px)",d="(min-width: 1024px) and (max-width: 1279px)",c="(min-width: 1280px)",u="(min-width: 1280px) and (max-width: 1919px)",m="(min-width: 1920px)",x=()=>({isXS:(0,i.a)(s),isXSOnly:(0,i.a)(a),isSM:(0,i.a)(r),isSMOnly:(0,i.a)(n),isMD:(0,i.a)(o),isMDOnly:(0,i.a)(d),isLG:(0,i.a)(c),isLGOnly:(0,i.a)(u),isXL:(0,i.a)(m)})}}]);
//# sourceMappingURL=xpui-routes-collection-local-files.js.map