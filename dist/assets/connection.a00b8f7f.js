import{r as i,o as a,c as r,a as e,i as l,v as n,b as d,w as m,d as p}from"./vendor.bac29d8a.js";import{_}from"./index.9a9c254a.js";const u={methods:{suivant(){}},data(){return{email:"E-mail",mdp:"Mot de passe"}}},v={class:"row contenaire connection"},x={class:"col-lg-12 col-md-12 col-xs-12 col-sm-12 cadre"},h=e("div",{class:"col-lg-12 col-md-12 col-xs-12 col-sm-12",style:{"margin-top":"10vh"}},[e("h2",null," Heureux de vous revoir !"),e("p",null," Se connecter \xE0 mon compte ")],-1),f={class:"col-lg-12 col-md-12 col-xs-12 col-sm-12",style:{"margin-top":"10vh"}},g=e("div",{class:"col-lg-12 col-md-12 col-xs-12 col-sm-12",style:{"margin-top":"4vh"}},[e("button",{class:"btn1"}," Se Connecter ")],-1),y={class:"col-lg-12 col-md-12 col-xs-12 col-sm-12",style:{"margin-top":"2vh"}},V=p(" Pas encore de compte ? S'inscrire");function b(k,o,w,B,s,C){const c=i("router-link");return a(),r("div",v,[e("div",x,[h,e("div",f,[e("form",null,[e("div",null,[l(e("input",{type:"email",name:"email","onUpdate:modelValue":o[0]||(o[0]=t=>s.email=t)},null,512),[[n,s.email]])]),e("div",null,[l(e("input",{type:"text",name:"mdp","onUpdate:modelValue":o[1]||(o[1]=t=>s.mdp=t)},null,512),[[n,s.mdp]])])])]),g,e("div",y,[d(c,{to:"/inscription",style:{color:"#006281","font-size":"1.5vh"}},{default:m(()=>[V]),_:1})])])])}var j=_(u,[["render",b]]);export{j as default};
