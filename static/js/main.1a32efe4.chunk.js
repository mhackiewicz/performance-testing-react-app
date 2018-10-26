(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{187:function(t,e,l){t.exports=l(343)},192:function(t,e,l){},194:function(t,e,l){},343:function(t,e,l){"use strict";l.r(e);var i=l(0),u=l.n(i),d=l(33),a=l.n(d),n=(l(192),l(10)),o=l(11),g=l(13),c=l(12),r=l(14),s=l(43),m=l.n(s),p=l(44),h=l.n(p),E=l(20),f=l.n(E),v=l(35),b=l.n(v),y=l(34),j=l.n(y),k=(l(194),l(345)),O=l(346),w=l(344),N=l(16),C=l.n(N),M=function(t){function e(){return Object(n.a)(this,e),Object(g.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(r.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return u.a.createElement("div",{className:"MenuComponent"},u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement(w.a,{to:"/list/50"},u.a.createElement(C.a,{variant:"outlined",color:"primary"},"List 50 persons"))),u.a.createElement("li",null,u.a.createElement(w.a,{to:"/list/100"},u.a.createElement(C.a,{variant:"outlined",color:"primary"},"List 100 persons"))),u.a.createElement("li",null,u.a.createElement(w.a,{to:"/list/500"},u.a.createElement(C.a,{variant:"outlined",color:"primary"},"List 500 persons"))),u.a.createElement("li",null,u.a.createElement(w.a,{to:"/list/5000"},u.a.createElement(C.a,{variant:"outlined",color:"primary"},"List 5000 persons"))),u.a.createElement("li",null,u.a.createElement(w.a,{to:"/map/10"},u.a.createElement(C.a,{variant:"outlined",color:"primary"},"Map 10 points"))),u.a.createElement("li",null,u.a.createElement(w.a,{to:"/map/100"},u.a.createElement(C.a,{variant:"outlined",color:"primary"},"Map 100 points"))),u.a.createElement("li",null,u.a.createElement(w.a,{to:"/map/500"},u.a.createElement(C.a,{variant:"outlined",color:"primary"},"Map 500 points")))))}}]),e}(i.Component),x=l(91),A=l.n(x),W=l(47),L=l(29),R=l.n(L),B=l(36),S=l.n(B),D=l(45),T=l.n(D),J=l(92),I=l.n(J),P=function(t){function e(){return Object(n.a)(this,e),Object(g.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(r.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this.props.person,e=[t.location.coordinates];return u.a.createElement(W.a,null,u.a.createElement(R.a,{alt:"Adelle Charles",src:t.picture.medium}),u.a.createElement(W.c,{primary:"".concat(t.name.last," ").concat(t.name.first),secondary:"".concat(t.location.state,", ").concat(t.location.city,", ").concat(t.location.street)}),u.a.createElement(W.b,null,u.a.createElement(w.a,{to:{pathname:"/map",state:{location:e}}},u.a.createElement(S.a,{"aria-label":"location"},u.a.createElement(T.a,null))),u.a.createElement(w.a,{to:{pathname:"/details",state:{person:t}}},u.a.createElement(S.a,{"aria-label":"location"},u.a.createElement(I.a,null)))))}}]),e}(i.Component),U=l(93),Y=l.n(U),Z=function(t){function e(){var t,l;Object(n.a)(this,e);for(var i=arguments.length,u=new Array(i),d=0;d<i;d++)u[d]=arguments[d];return(l=Object(g.a)(this,(t=Object(c.a)(e)).call.apply(t,[this].concat(u)))).click=function(){l.props.goBack()},l}return Object(r.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return u.a.createElement("div",{className:"button-back-container"},u.a.createElement(C.a,{variant:"outlined",onClick:this.click,color:"primary"},u.a.createElement(Y.a,null),"  Back "))}}]),e}(i.Component),z=l(42),F=l.n(z),V=function(t){function e(){var t,l;Object(n.a)(this,e);for(var i=arguments.length,u=new Array(i),d=0;d<i;d++)u[d]=arguments[d];return(l=Object(g.a)(this,(t=Object(c.a)(e)).call.apply(t,[this].concat(u)))).state={persons:[]},l}return Object(r.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.count;A.a.get("https://randomuser.me/api/?results=".concat(e)).then(function(e){t.setState({persons:e.data.results})})}},{key:"componentWillMount",value:function(){console.time("Render List")}},{key:"componentDidUpdate",value:function(){console.timeEnd("Render List")}},{key:"render",value:function(){return u.a.createElement("div",{className:"ListComponent"},u.a.createElement(Z,{goBack:this.props.history.goBack}),u.a.createElement("div",null,u.a.createElement(F.a,null,this.state.persons.map(function(t,e){return u.a.createElement(P,{key:e,person:t})}))))}}]),e}(i.Component),X=l(60),q=l.n(X),G=l(94),H=l(95),K=l(96),$=q()({accessToken:"pk.eyJ1IjoibWhhY2tpZXdpY3oiLCJhIjoiY2poZzRyZ3VsMDdsZTM2cHRjdGhqOTM1biJ9.MXgY2Vvcp1FzwwTgK54oWA"}),Q=function(t){function e(){var t,l;Object(n.a)(this,e);for(var i=arguments.length,u=new Array(i),d=0;d<i;d++)u[d]=arguments[d];return(l=Object(g.a)(this,(t=Object(c.a)(e)).call.apply(t,[this].concat(u)))).state={location:[{longitude:23.1688403,latitude:53.13248859}]},l.renderMapEnd=function(){console.timeEnd("Render map")},l}return Object(r.a)(e,t),Object(o.a)(e,[{key:"componentWillMount",value:function(){console.time("Render map")}},{key:"componentDidMount",value:function(){var t=this.props.match.params.count;void 0!==t?"10"===t?this.setState({location:G.data}):"100"===t?this.setState({location:H.data}):"500"===t&&this.setState({location:K.data}):this.props.location.state&&this.setState({location:this.props.location.state.location})}},{key:"render",value:function(){return u.a.createElement("div",{className:"MapComponent"},u.a.createElement(Z,{goBack:this.props.history.goBack}),u.a.createElement("div",null,u.a.createElement($,{style:"mapbox://styles/mapbox/streets-v8",center:[this.state.location[0].longitude,this.state.location[0].latitude],zoom:[6],onStyleLoad:this.renderMapEnd,containerStyle:{height:"65vh",width:"100%",textAlign:"left"}},this.state.location.map(function(t,e){return u.a.createElement(X.Marker,{key:e,coordinates:[t.longitude,t.latitude],anchor:"bottom"},u.a.createElement(T.a,null))}))))}}]),e}(i.Component),_=function(t){function e(){return Object(n.a)(this,e),Object(g.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(r.a)(e,t),Object(o.a)(e,[{key:"componentWillMount",value:function(){console.timeEnd("Render details")}},{key:"componentDidMount",value:function(){console.time("Render details")}},{key:"render",value:function(){var t=this.props.location.state.person;return u.a.createElement("div",{className:"DetailsComponent"},u.a.createElement(Z,{goBack:this.props.history.goBack}),u.a.createElement(f.a,{container:!0,spacing:16},u.a.createElement(f.a,{item:!0,xs:4,className:"details-image"},u.a.createElement(R.a,{alt:"Adelle Charles",src:t.picture.large})),u.a.createElement(f.a,{item:!0,xs:8,className:"detail-form"},u.a.createElement("div",{className:"details-pool"},u.a.createElement("span",{className:"label"},"First name:"),u.a.createElement("span",{className:"text"},t.name.first)),u.a.createElement("div",{className:"details-pool"},u.a.createElement("span",{className:"label"},"Last name:"),u.a.createElement("span",{className:"text"},t.name.last)),u.a.createElement("div",{className:"details-pool"},u.a.createElement("span",{className:"label"},"Adress:"),u.a.createElement("span",{className:"text"},"".concat(t.location.state,", ").concat(t.location.city,", ").concat(t.location.street))),u.a.createElement("div",{className:"details-pool"},u.a.createElement("span",{className:"label"},"Phone number"),u.a.createElement("span",{className:"text"},t.cell)),u.a.createElement("div",{className:"details-pool"},u.a.createElement("span",{className:"label"},"Email:"),u.a.createElement("span",{className:"text"},t.email)))))}}]),e}(i.Component),tt=function(t){function e(){return Object(n.a)(this,e),Object(g.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(r.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return u.a.createElement(k.a,null,u.a.createElement("div",{className:"App"},u.a.createElement(m.a,{position:"static"},u.a.createElement(h.a,null,u.a.createElement(j.a,{variant:"h6",color:"inherit",noWrap:!0},"Performance testing app"))),u.a.createElement(f.a,{container:!0,direction:"row",justify:"center",alignItems:"center",className:"main-container"},u.a.createElement(f.a,{item:!0,xs:12},u.a.createElement(b.a,{className:"main-paper"},u.a.createElement(O.a,{exact:!0,path:"/",component:M}),u.a.createElement(O.a,{path:"/list/:count",component:V}),u.a.createElement(O.a,{path:"/map/:count?",component:Q}),u.a.createElement(O.a,{path:"/details",component:_}))))))}}]),e}(i.Component),et=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function lt(t,e){navigator.serviceWorker.register(t).then(function(t){t.onupdatefound=function(){var l=t.installing;l.onstatechange=function(){"installed"===l.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))}}}).catch(function(t){console.error("Error during service worker registration:",t)})}a.a.render(u.a.createElement(tt,null),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/performance-testing-react-app",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/performance-testing-react-app","/service-worker.js");et?(function(t,e){fetch(t).then(function(l){404===l.status||-1===l.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(t){t.unregister().then(function(){window.location.reload()})}):lt(t,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,t),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):lt(e,t)})}}()},94:function(t){t.exports={data:[{latitude:53.09078688,longitude:21.82433958},{latitude:53.93051446,longitude:22.74902873},{latitude:52.6411847,longitude:23.27931146},{latitude:53.17077615,longitude:22.21815527},{latitude:52.28219247,longitude:23.13347524},{latitude:52.52624181,longitude:23.38136039},{latitude:53.09217227,longitude:22.44677182},{latitude:52.47435037,longitude:22.34312548},{latitude:52.80517913,longitude:21.85035179},{latitude:53.9551137,longitude:22.93405505}]}},95:function(t){t.exports={data:[{latitude:52.99249018,longitude:22.05943298},{latitude:53.43958549,longitude:24.41650438},{latitude:53.29455826,longitude:23.99726403},{latitude:52.79628678,longitude:24.03810996},{latitude:52.3251478,longitude:23.54518664},{latitude:53.12423071,longitude:22.77528688},{latitude:53.78988392,longitude:22.96510264},{latitude:53.01254364,longitude:22.11906641},{latitude:53.01436048,longitude:24.33711228},{latitude:52.72772846,longitude:23.41656878},{latitude:53.20110358,longitude:24.03413726},{latitude:53.33851992,longitude:21.9682841},{latitude:52.96983504,longitude:22.39624647},{latitude:53.50287461,longitude:22.79381847},{latitude:53.37045182,longitude:24.46935933},{latitude:53.75789719,longitude:22.22371088},{latitude:53.10694074,longitude:22.06810058},{latitude:53.34233643,longitude:21.78432867},{latitude:53.84159298,longitude:23.83927986},{latitude:53.97110811,longitude:23.61378376},{latitude:53.72808603,longitude:22.04819733},{latitude:53.26417774,longitude:22.07021143},{latitude:53.63800098,longitude:23.49274694},{latitude:53.45545448,longitude:22.35325876},{latitude:53.73402674,longitude:22.18040744},{latitude:52.60286252,longitude:22.22354869},{latitude:53.7165041,longitude:22.12010857},{latitude:53.8596758,longitude:23.37736618},{latitude:52.53636788,longitude:23.81507117},{latitude:52.9175443,longitude:21.79008412},{latitude:53.88987735,longitude:22.63012682},{latitude:52.41465348,longitude:23.44114722},{latitude:53.07914838,longitude:24.05039285},{latitude:53.48649599,longitude:23.90301236},{latitude:52.46426664,longitude:22.74705877},{latitude:53.21660369,longitude:24.14836969},{latitude:53.37583419,longitude:21.73659489},{latitude:52.973426,longitude:22.48215498},{latitude:53.17246712,longitude:24.14019961},{latitude:53.30953053,longitude:21.89909931},{latitude:53.12933832,longitude:23.82790648},{latitude:52.44747629,longitude:23.33777588},{latitude:53.55579771,longitude:23.94116287},{latitude:53.22464515,longitude:21.88807498},{latitude:53.93055638,longitude:23.62594307},{latitude:53.50111504,longitude:22.43920016},{latitude:53.09027463,longitude:22.07908053},{latitude:52.51186653,longitude:22.2388579},{latitude:53.11008603,longitude:23.73869912},{latitude:52.75785632,longitude:23.92136605},{latitude:52.93576317,longitude:22.86976009},{latitude:52.94272526,longitude:24.45908435},{latitude:53.15672245,longitude:23.3427946},{latitude:53.84045466,longitude:24.09127712},{latitude:52.5887251,longitude:22.37431639},{latitude:52.86635924,longitude:22.65559979},{latitude:53.46400521,longitude:23.95768309},{latitude:52.8723817,longitude:22.46705032},{latitude:53.56730851,longitude:23.74132123},{latitude:53.10332735,longitude:22.3044528},{latitude:52.42804132,longitude:23.77592408},{latitude:52.30547231,longitude:23.36982465},{latitude:53.19364087,longitude:23.03312394},{latitude:52.68439684,longitude:22.69093078},{latitude:52.7023823,longitude:23.00974967},{latitude:53.57754019,longitude:24.39952008},{latitude:53.2599092,longitude:22.50211779},{latitude:53.247216,longitude:22.95577857},{latitude:53.81926024,longitude:23.79904932},{latitude:52.39920465,longitude:23.51426443},{latitude:53.21253484,longitude:23.90893604},{latitude:54.00353666,longitude:23.37555014},{latitude:52.45049744,longitude:23.62627387},{latitude:52.26835292,longitude:23.49102654},{latitude:52.89073368,longitude:23.98743204},{latitude:53.125883,longitude:23.53392431},{latitude:52.9002617,longitude:23.42831437},{latitude:53.23687876,longitude:22.58992353},{latitude:53.2241579,longitude:21.69866977},{latitude:52.30460886,longitude:23.48038789},{latitude:53.35719258,longitude:23.98323098},{latitude:53.32171169,longitude:24.44837773},{latitude:52.95722063,longitude:22.35773008},{latitude:53.81705656,longitude:23.10102161},{latitude:53.17977178,longitude:23.78504463},{latitude:52.49970121,longitude:22.84917951},{latitude:53.80945049,longitude:23.37824021},{latitude:52.54812461,longitude:23.99565507},{latitude:52.47744562,longitude:22.85695445},{latitude:52.47365379,longitude:23.9899541},{latitude:52.42453693,longitude:22.85959359},{latitude:53.55453121,longitude:23.14277621},{latitude:53.19497828,longitude:24.12466249},{latitude:53.8446932,longitude:22.63350002},{latitude:53.07449335,longitude:24.24386408},{latitude:53.14261032,longitude:21.8189582},{latitude:52.80154304,longitude:24.12361402},{latitude:53.77268146,longitude:24.21872692},{latitude:53.12356937,longitude:21.90969109},{latitude:52.89536119,longitude:22.4958841}]}},96:function(t){t.exports={data:[{latitude:53.10679428,longitude:24.60484698},{latitude:53.44427492,longitude:23.55400449},{latitude:52.48242081,longitude:23.82147526},{latitude:53.16321084,longitude:21.86692817},{latitude:53.64876694,longitude:24.3907836},{latitude:53.31053363,longitude:22.08823822},{latitude:53.51303884,longitude:22.05931413},{latitude:53.39778772,longitude:24.31171219},{latitude:53.91519344,longitude:23.81988682},{latitude:52.50209173,longitude:22.56568878},{latitude:53.93707888,longitude:23.81930008},{latitude:53.43280392,longitude:23.55966795},{latitude:53.379163,longitude:23.75639396},{latitude:52.45239234,longitude:23.72928135},{latitude:52.98379709,longitude:21.72874282},{latitude:53.60823439,longitude:21.95412625},{latitude:53.52636679,longitude:23.58346753},{latitude:52.5621476,longitude:22.17347185},{latitude:53.62256172,longitude:24.34849174},{latitude:52.72938297,longitude:23.8420233},{latitude:53.65865435,longitude:23.18295305},{latitude:52.47763641,longitude:23.55027265},{latitude:53.63648612,longitude:23.93256008},{latitude:53.55921271,longitude:22.35249},{latitude:52.93612911,longitude:21.78998769},{latitude:52.34993063,longitude:23.23983169},{latitude:53.6152965,longitude:22.71875275},{latitude:53.4863183,longitude:24.39836769},{latitude:53.44024256,longitude:22.85084885},{latitude:52.66116001,longitude:24.24461599},{latitude:53.97941546,longitude:23.46147782},{latitude:53.07709131,longitude:22.96545923},{latitude:53.80972487,longitude:23.62204701},{latitude:53.19291253,longitude:22.54966592},{latitude:53.25042273,longitude:22.62516468},{latitude:53.07288597,longitude:23.21157844},{latitude:53.56794726,longitude:23.05419573},{latitude:52.86578938,longitude:23.88550957},{latitude:53.50163556,longitude:22.27024435},{latitude:52.95294659,longitude:22.21077517},{latitude:53.3357915,longitude:22.53644399},{latitude:53.13535972,longitude:22.41968379},{latitude:52.36950926,longitude:23.31346685},{latitude:52.77322683,longitude:22.3243555},{latitude:52.88795089,longitude:22.85229695},{latitude:53.2673981,longitude:22.07806847},{latitude:53.15540168,longitude:22.99903801},{latitude:53.29806703,longitude:22.02160575},{latitude:53.59372431,longitude:24.40035298},{latitude:52.44309687,longitude:22.84549534},{latitude:53.09702724,longitude:23.24192939},{latitude:53.96608426,longitude:22.65639015},{latitude:53.02995879,longitude:24.1451843},{latitude:52.88896531,longitude:24.06043028},{latitude:53.28806896,longitude:23.1802644},{latitude:52.84914791,longitude:22.56357895},{latitude:52.95802368,longitude:21.79543651},{latitude:53.56263406,longitude:23.37970705},{latitude:53.88439056,longitude:23.6259124},{latitude:52.99897806,longitude:23.73257168},{latitude:53.07496688,longitude:22.14380309},{latitude:52.31071088,longitude:23.1179203},{latitude:53.36423184,longitude:22.55553109},{latitude:53.87520417,longitude:23.3174904},{latitude:52.8623314,longitude:23.84982275},{latitude:53.23063392,longitude:22.66936626},{latitude:52.85655165,longitude:23.9681625},{latitude:52.83894493,longitude:23.71441927},{latitude:52.68113394,longitude:22.22433707},{latitude:52.66608737,longitude:24.07627285},{latitude:53.1345426,longitude:23.55085657},{latitude:52.9388581,longitude:21.91799879},{latitude:52.88644684,longitude:24.28665813},{latitude:52.55962712,longitude:23.06482243},{latitude:53.80811932,longitude:22.75428102},{latitude:52.85093347,longitude:21.94592808},{latitude:53.16035521,longitude:23.734889},{latitude:53.02715611,longitude:21.8073307},{latitude:53.47714322,longitude:23.38406019},{latitude:52.94190949,longitude:22.25667411},{latitude:53.795149,longitude:22.42033417},{latitude:53.74157186,longitude:22.6075914},{latitude:53.13604126,longitude:24.50171375},{latitude:53.70836884,longitude:23.99094167},{latitude:53.82151912,longitude:22.52976743},{latitude:53.70343006,longitude:23.76308265},{latitude:53.24768818,longitude:24.45282612},{latitude:53.941519,longitude:22.86578753},{latitude:52.73626461,longitude:24.25820173},{latitude:53.45476003,longitude:21.80600567},{latitude:53.38876229,longitude:22.18115341},{latitude:52.49586829,longitude:23.2064497},{latitude:52.7783651,longitude:23.50460141},{latitude:52.6861164,longitude:24.18743162},{latitude:53.17339639,longitude:21.77954466},{latitude:53.16259758,longitude:22.87963186},{latitude:52.61250267,longitude:23.41667126},{latitude:53.32037542,longitude:24.06892845},{latitude:54.00959436,longitude:23.28828904},{latitude:52.87269267,longitude:22.6164372},{latitude:53.07942753,longitude:23.31702045},{latitude:53.34965632,longitude:22.48438627},{latitude:53.49047067,longitude:23.83844545},{latitude:53.62895513,longitude:23.46683953},{latitude:52.39102713,longitude:22.53801912},{latitude:52.52533292,longitude:23.59461514},{latitude:53.47680877,longitude:22.10411156},{latitude:52.56107575,longitude:24.221131},{latitude:52.36625009,longitude:22.91368134},{latitude:53.75055526,longitude:22.55816476},{latitude:53.35571531,longitude:22.37623638},{latitude:52.83301607,longitude:24.26051377},{latitude:53.75146442,longitude:22.93726203},{latitude:53.61335977,longitude:23.72580829},{latitude:53.77861768,longitude:23.33323127},{latitude:53.12152498,longitude:23.71776932},{latitude:53.07397754,longitude:23.72617342},{latitude:53.17117238,longitude:24.50374915},{latitude:53.28014888,longitude:24.16328022},{latitude:53.32942984,longitude:23.22393175},{latitude:53.34646048,longitude:23.8376588},{latitude:52.54502456,longitude:23.88636274},{latitude:52.64109775,longitude:23.90632478},{latitude:52.28642065,longitude:23.52412546},{latitude:52.70633931,longitude:23.84503626},{latitude:53.70449179,longitude:22.70335161},{latitude:52.46154346,longitude:22.344613},{latitude:53.6753322,longitude:24.33401063},{latitude:53.24092081,longitude:24.09605416},{latitude:52.61731049,longitude:23.25750789},{latitude:52.99861712,longitude:22.62246063},{latitude:52.92777194,longitude:22.38284184},{latitude:53.75892516,longitude:23.35288178},{latitude:53.59535452,longitude:23.11285473},{latitude:52.59100342,longitude:23.4795923},{latitude:52.65886996,longitude:24.28295422},{latitude:53.62781993,longitude:22.70124637},{latitude:53.75595626,longitude:22.11901619},{latitude:52.29486876,longitude:23.37754212},{latitude:52.37504171,longitude:22.51535711},{latitude:53.07177596,longitude:22.00206616},{latitude:53.46769935,longitude:22.1612005},{latitude:52.58539932,longitude:23.41401209},{latitude:53.87967628,longitude:22.36210957},{latitude:52.95721254,longitude:21.76473597},{latitude:52.77039235,longitude:23.87306456},{latitude:53.30938266,longitude:23.57862786},{latitude:53.43898899,longitude:24.26142664},{latitude:53.65701055,longitude:22.96208827},{latitude:52.37189239,longitude:23.89842535},{latitude:52.43167854,longitude:23.34345368},{latitude:53.62302797,longitude:24.13789589},{latitude:53.5225721,longitude:22.32331624},{latitude:53.12818384,longitude:23.87840842},{latitude:53.00465193,longitude:22.62868913},{latitude:52.30747619,longitude:23.64331888},{latitude:53.14242065,longitude:22.18446528},{latitude:52.58245529,longitude:23.3456611},{latitude:52.93839813,longitude:22.49859827},{latitude:53.52537617,longitude:22.67926669},{latitude:52.58722414,longitude:22.17391982},{latitude:52.45219312,longitude:24.12428442},{latitude:52.42165503,longitude:22.58511593},{latitude:53.55462434,longitude:23.72675186},{latitude:53.98184824,longitude:22.68396403},{latitude:52.67611292,longitude:22.63220655},{latitude:53.65051399,longitude:23.11983332},{latitude:53.52276332,longitude:22.91976083},{latitude:53.18887934,longitude:24.19953433},{latitude:53.57087374,longitude:23.65014888},{latitude:53.59540098,longitude:22.47858964},{latitude:52.37077949,longitude:22.65391435},{latitude:53.44453596,longitude:23.82833568},{latitude:52.79107945,longitude:24.37834501},{latitude:52.56079852,longitude:22.47644261},{latitude:53.96386663,longitude:23.70126821},{latitude:52.68838182,longitude:23.4825654},{latitude:52.3149297,longitude:23.49870377},{latitude:52.76037132,longitude:23.1033712},{latitude:52.2716885,longitude:22.92199216},{latitude:53.34753694,longitude:22.10172764},{latitude:53.63404623,longitude:22.53239699},{latitude:53.05910488,longitude:23.71116767},{latitude:52.62556805,longitude:22.9637716},{latitude:52.53771429,longitude:22.56828415},{latitude:53.86971807,longitude:22.55006931},{latitude:53.1249874,longitude:23.82695895},{latitude:53.76281267,longitude:22.16073554},{latitude:52.37351813,longitude:22.42721689},{latitude:52.38423325,longitude:22.40349916},{latitude:53.61854743,longitude:21.9817487},{latitude:53.13777688,longitude:24.21142434},{latitude:53.77043604,longitude:22.58343412},{latitude:52.54267468,longitude:24.23142448},{latitude:52.96512735,longitude:24.58381643},{latitude:52.84672112,longitude:24.35424065},{latitude:53.90833476,longitude:23.18496671},{latitude:53.28042677,longitude:23.5145996},{latitude:52.52490651,longitude:22.46616203},{latitude:52.57721212,longitude:23.61502383},{latitude:53.14932606,longitude:23.40906682},{latitude:53.52302864,longitude:23.42170237},{latitude:53.53434433,longitude:24.19955524},{latitude:53.50577125,longitude:23.18074484},{latitude:53.94176949,longitude:22.68992509},{latitude:52.89179326,longitude:23.83017264},{latitude:53.42364171,longitude:23.82657627},{latitude:53.18278202,longitude:23.14885395},{latitude:52.94742732,longitude:24.06414712},{latitude:53.0235382,longitude:22.88544566},{latitude:53.87907917,longitude:23.39975378},{latitude:52.32893466,longitude:23.64677563},{latitude:53.45498029,longitude:23.31867689},{latitude:52.80533479,longitude:23.87597906},{latitude:53.41383943,longitude:22.11228894},{latitude:53.09747463,longitude:21.72385291},{latitude:52.4083992,longitude:23.75822552},{latitude:53.12091549,longitude:23.35049751},{latitude:52.91538877,longitude:24.02798353},{latitude:52.47932967,longitude:23.236597},{latitude:52.28458238,longitude:23.30577629},{latitude:52.95371156,longitude:24.24944997},{latitude:53.58815366,longitude:23.15453152},{latitude:53.96283042,longitude:23.36783318},{latitude:52.48264352,longitude:22.24719538},{latitude:53.49478776,longitude:23.89037175},{latitude:53.3524303,longitude:22.14591944},{latitude:53.70488919,longitude:24.17783455},{latitude:52.5265333,longitude:22.44544688},{latitude:53.4265312,longitude:24.14710601},{latitude:52.77307577,longitude:23.88314502},{latitude:52.32100753,longitude:23.19998122},{latitude:53.4653173,longitude:22.86002724},{latitude:54.01653896,longitude:22.9159367},{latitude:52.54268484,longitude:24.03711626},{latitude:52.51683373,longitude:23.91121426},{latitude:53.12494036,longitude:22.76220602},{latitude:53.27215854,longitude:23.9367084},{latitude:53.35735743,longitude:24.40269609},{latitude:53.7166311,longitude:23.49490978},{latitude:53.41758533,longitude:24.43275701},{latitude:53.23150374,longitude:21.69953129},{latitude:52.60707289,longitude:22.03505442},{latitude:53.9286673,longitude:23.37738974},{latitude:52.74649409,longitude:22.2159922},{latitude:53.13574713,longitude:23.0048608},{latitude:53.47025222,longitude:23.57039786},{latitude:52.82584496,longitude:24.08072815},{latitude:52.95510318,longitude:23.26507724},{latitude:53.00820944,longitude:24.44411737},{latitude:52.33905302,longitude:22.55833735},{latitude:52.72993547,longitude:23.05392063},{latitude:52.84079982,longitude:23.02503755},{latitude:53.4951869,longitude:23.78846396},{latitude:53.65036189,longitude:24.32720772},{latitude:53.7702632,longitude:22.13968739},{latitude:52.60638841,longitude:22.07041971},{latitude:52.89918597,longitude:22.44099722},{latitude:53.55583755,longitude:23.47507643},{latitude:52.78288999,longitude:23.17379458},{latitude:53.62657549,longitude:24.0859997},{latitude:53.46652289,longitude:22.89238203},{latitude:53.43046109,longitude:21.78199318},{latitude:52.89584946,longitude:24.38844582},{latitude:53.24091342,longitude:23.30887588},{latitude:53.23230566,longitude:21.74161478},{latitude:52.69911828,longitude:22.23703331},{latitude:53.82046889,longitude:22.28058428},{latitude:52.80229274,longitude:23.69544501},{latitude:52.28049199,longitude:23.27006223},{latitude:52.93597863,longitude:23.84045049},{latitude:53.32101089,longitude:22.96268943},{latitude:52.85682432,longitude:22.94396044},{latitude:53.29673278,longitude:23.12049734},{latitude:52.81433019,longitude:24.25767857},{latitude:53.12486911,longitude:23.54543683},{latitude:53.10183458,longitude:23.79203374},{latitude:52.73350774,longitude:24.2339756},{latitude:52.80213268,longitude:22.89015329},{latitude:52.82036449,longitude:24.52402939},{latitude:53.8452152,longitude:23.29751373},{latitude:53.18458461,longitude:23.17415225},{latitude:52.38699954,longitude:22.72049795},{latitude:52.4144044,longitude:23.5750296},{latitude:53.28810558,longitude:23.26807861},{latitude:53.85369239,longitude:23.4402195},{latitude:53.05152084,longitude:24.22398882},{latitude:53.31297923,longitude:23.69750852},{latitude:52.77465359,longitude:23.79428717},{latitude:53.54638015,longitude:23.93273088},{latitude:52.8846545,longitude:22.6250341},{latitude:52.69379689,longitude:22.95942391},{latitude:53.06853718,longitude:23.13974794},{latitude:52.82953009,longitude:23.49868253},{latitude:53.47803138,longitude:24.13916224},{latitude:52.91384981,longitude:22.78126717},{latitude:53.72880597,longitude:22.72675115},{latitude:53.22435938,longitude:24.10960471},{latitude:53.38521782,longitude:23.75086699},{latitude:53.81142215,longitude:23.48093256},{latitude:52.82043998,longitude:24.03099633},{latitude:53.04869552,longitude:24.51725645},{latitude:52.88109206,longitude:23.73602739},{latitude:53.45721048,longitude:23.30255652},{latitude:53.50883176,longitude:22.70439365},{latitude:53.50993538,longitude:23.76133764},{latitude:53.53454631,longitude:24.29440645},{latitude:52.52589222,longitude:23.16975523},{latitude:53.52718472,longitude:22.84945903},{latitude:52.76522485,longitude:24.40884621},{latitude:53.25421412,longitude:21.91277733},{latitude:53.07441928,longitude:22.85882593},{latitude:52.50704424,longitude:23.22747102},{latitude:53.11259883,longitude:21.88916768},{latitude:52.76237954,longitude:23.42366109},{latitude:53.38651247,longitude:22.99627926},{latitude:53.23650567,longitude:23.12223725},{latitude:53.56369678,longitude:23.65493798},{latitude:53.02008381,longitude:22.33808433},{latitude:52.92588919,longitude:21.91114241},{latitude:52.54423644,longitude:22.10421529},{latitude:53.29571678,longitude:23.43806518},{latitude:53.16020243,longitude:21.69864032},{latitude:52.81844971,longitude:24.01406623},{latitude:53.26922839,longitude:22.25036404},{latitude:53.4165123,longitude:22.95926226},{latitude:53.21308417,longitude:24.40545828},{latitude:53.64649558,longitude:23.6030748},{latitude:52.71908395,longitude:23.69750621},{latitude:53.72995397,longitude:22.45428274},{latitude:53.70512898,longitude:23.77308064},{latitude:52.83736334,longitude:22.19895528},{latitude:53.16204814,longitude:22.22063949},{latitude:52.9242101,longitude:23.05453619},{latitude:52.73652044,longitude:21.83661477},{latitude:53.21436748,longitude:21.7409177},{latitude:53.1413633,longitude:24.63502756},{latitude:53.17912632,longitude:23.71548329},{latitude:52.72098421,longitude:23.63377284},{latitude:52.48901738,longitude:23.94751472},{latitude:53.75988873,longitude:23.65602312},{latitude:53.47837813,longitude:22.50337201},{latitude:53.2153334,longitude:23.777667},{latitude:52.83299536,longitude:23.3281868},{latitude:53.13867793,longitude:23.71613807},{latitude:53.07915928,longitude:23.61587677},{latitude:53.29074625,longitude:22.13119104},{latitude:52.39826661,longitude:22.89564775},{latitude:53.29654943,longitude:21.99862183},{latitude:53.13006896,longitude:24.34041749},{latitude:53.00984891,longitude:23.47559365},{latitude:53.45682183,longitude:23.93107468},{latitude:53.52983312,longitude:22.47042542},{latitude:52.28894086,longitude:22.89626078},{latitude:53.05458543,longitude:23.47420817},{latitude:52.90273653,longitude:22.10570873},{latitude:53.26773957,longitude:22.8979639},{latitude:52.95731305,longitude:23.51941424},{latitude:53.50890174,longitude:24.35476823},{latitude:52.53158346,longitude:24.02473384},{latitude:53.22702276,longitude:23.89411999},{latitude:53.55975162,longitude:24.10336109},{latitude:52.32421075,longitude:23.37517687},{latitude:53.1634905,longitude:23.7658051},{latitude:52.92369459,longitude:21.80213871},{latitude:53.11610897,longitude:22.96601532},{latitude:53.06290797,longitude:23.52072215},{latitude:53.76630767,longitude:23.84007264},{latitude:52.73074787,longitude:23.57520571},{latitude:53.73958781,longitude:24.15594851},{latitude:53.00134296,longitude:23.57152099},{latitude:53.13520551,longitude:23.47339122},{latitude:52.60531131,longitude:22.92265919},{latitude:53.09382148,longitude:23.20211665},{latitude:53.652668,longitude:24.35459525},{latitude:53.36740065,longitude:24.57675757},{latitude:53.77590439,longitude:23.72743259},{latitude:53.50375177,longitude:22.44214937},{latitude:53.60371591,longitude:24.43278034},{latitude:52.99210269,longitude:22.02036389},{latitude:53.19605328,longitude:22.33132693},{latitude:52.68569281,longitude:23.80827147},{latitude:53.93784967,longitude:22.92283899},{latitude:53.71646614,longitude:24.06274085},{latitude:53.16317754,longitude:22.02719959},{latitude:53.70436544,longitude:22.74368822},{latitude:53.23612457,longitude:23.23784998},{latitude:53.76772015,longitude:22.47131079},{latitude:53.21367167,longitude:23.50988914},{latitude:53.68158531,longitude:23.50261694},{latitude:53.42707977,longitude:24.56153662},{latitude:53.29214064,longitude:22.40039791},{latitude:52.52292603,longitude:23.138205},{latitude:53.24450097,longitude:24.23259551},{latitude:52.9695618,longitude:24.3317983},{latitude:53.16206581,longitude:21.75419474},{latitude:52.66015528,longitude:22.43682984},{latitude:52.95577236,longitude:24.1894628},{latitude:52.66129743,longitude:23.8920544},{latitude:53.80737066,longitude:23.54251982},{latitude:52.361827,longitude:23.55354119},{latitude:53.57181571,longitude:23.85222193},{latitude:52.29057199,longitude:23.33014454},{latitude:53.82157263,longitude:22.37424344},{latitude:52.95162535,longitude:22.46813672},{latitude:53.29830474,longitude:22.07158208},{latitude:53.60744373,longitude:23.94735007},{latitude:53.41626687,longitude:22.80006603},{latitude:52.66419129,longitude:21.92229264},{latitude:53.13692884,longitude:22.11089283},{latitude:53.69422715,longitude:24.1254739},{latitude:53.98321555,longitude:23.64574593},{latitude:53.00024846,longitude:23.19551991},{latitude:52.61671138,longitude:21.97503293},{latitude:53.27917222,longitude:22.11338579},{latitude:53.64115338,longitude:23.69902781},{latitude:53.53424357,longitude:22.56258282},{latitude:53.50783225,longitude:22.91916433},{latitude:53.57695821,longitude:24.12048356},{latitude:53.71654767,longitude:23.85547079},{latitude:53.58276491,longitude:22.88483031},{latitude:52.52887525,longitude:23.94348912},{latitude:53.58297443,longitude:23.15065002},{latitude:52.29757178,longitude:22.92150258},{latitude:53.83311977,longitude:22.36789072},{latitude:53.51390252,longitude:22.47412248},{latitude:52.46716868,longitude:22.17110995},{latitude:52.79257677,longitude:24.33344108},{latitude:53.50382148,longitude:23.48678463},{latitude:53.11798185,longitude:21.87177841},{latitude:53.08812062,longitude:22.37602866},{latitude:53.06777386,longitude:23.28143732},{latitude:53.15702628,longitude:24.35594233},{latitude:53.52040568,longitude:23.95111763},{latitude:53.62393308,longitude:22.46221007},{latitude:52.33380465,longitude:23.09259894},{latitude:53.30826225,longitude:24.47467224},{latitude:53.28753882,longitude:23.46420195},{latitude:53.54873709,longitude:22.05752185},{latitude:53.14143559,longitude:24.09700857},{latitude:52.32273021,longitude:23.26045668},{latitude:52.685967,longitude:23.10485838},{latitude:53.20751673,longitude:23.11222206},{latitude:53.63134647,longitude:23.11140865},{latitude:52.43981848,longitude:23.93663327},{latitude:53.3412864,longitude:22.7849941},{latitude:52.26118336,longitude:23.11149077},{latitude:52.73230319,longitude:22.45465788},{latitude:53.38633072,longitude:24.53911516},{latitude:53.17022772,longitude:22.36512155},{latitude:53.35438001,longitude:22.44068163},{latitude:52.62362475,longitude:23.04312166},{latitude:53.01149011,longitude:23.81575379},{latitude:53.73326301,longitude:24.27155911},{latitude:53.69735065,longitude:23.77488693},{latitude:52.52144168,longitude:24.06644235},{latitude:53.3949256,longitude:23.7665491},{latitude:53.71138378,longitude:23.10768078},{latitude:53.29665075,longitude:22.12079028},{latitude:52.87405231,longitude:23.49973453},{latitude:52.72793274,longitude:22.75608612},{latitude:52.85441284,longitude:23.81523317},{latitude:52.51538372,longitude:23.97756502},{latitude:53.761208,longitude:23.65473956},{latitude:53.70050205,longitude:22.75108749},{latitude:53.28378138,longitude:24.44961027},{latitude:52.93392432,longitude:24.55617529},{latitude:53.58392375,longitude:22.94778884},{latitude:53.6755072,longitude:23.85014344},{latitude:53.30054647,longitude:24.51909759},{latitude:52.80311934,longitude:22.82691437},{latitude:53.1714185,longitude:23.83933846},{latitude:52.84839048,longitude:24.57979624},{latitude:52.86031619,longitude:23.85798897},{latitude:52.63903213,longitude:24.01115112},{latitude:53.0685284,longitude:23.72271255},{latitude:52.43465616,longitude:23.12356703},{latitude:53.16796944,longitude:24.26820251},{latitude:52.9634183,longitude:22.80609192},{latitude:53.8196323,longitude:23.76221186},{latitude:53.01511388,longitude:22.21140245},{latitude:52.65631776,longitude:24.39283995},{latitude:52.69349007,longitude:22.74715574},{latitude:53.03782717,longitude:23.13649372},{latitude:53.83846829,longitude:23.00549891},{latitude:52.32875797,longitude:22.70237962},{latitude:52.46011778,longitude:22.47409467},{latitude:53.96419528,longitude:23.02828251},{latitude:53.45845133,longitude:23.25324752},{latitude:52.70443678,longitude:24.3117088},{latitude:52.62299518,longitude:22.43323792},{latitude:53.3972684,longitude:23.98830283},{latitude:53.9441392,longitude:22.89663094},{latitude:53.59495303,longitude:23.82568101},{latitude:53.65273068,longitude:23.45918497},{latitude:52.28590887,longitude:22.96660557},{latitude:52.96875888,longitude:22.91636982},{latitude:52.53605508,longitude:23.9834363},{latitude:53.48612723,longitude:22.08446494},{latitude:53.27379692,longitude:22.54149854}]}}},[[187,2,1]]]);
//# sourceMappingURL=main.1a32efe4.chunk.js.map