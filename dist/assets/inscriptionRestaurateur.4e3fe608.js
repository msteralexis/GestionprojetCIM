import{r as c,o as a,c as r,a as e,i as n,v as s,b as d,w as m,d as u}from"./vendor.bac29d8a.js";import{_ as p}from"./index.9a9c254a.js";const v={methods:{suivant(){}},data(){return{nom:"nom du restaurant",siret:"N\xB0 de Siret",localisation:"localisation",email:"E-mail",mdp:"Mot de passe"}}},_={class:"row contenaire connection"},x={class:"col-lg-12 col-md-12 col-xs-12 col-sm-12 cadre"},y=e("div",{class:"col-lg-12 col-md-12 col-xs-12 col-sm-12",style:{"margin-top":"10vh"}},[e("h2",null," Rejoignez l'aventure Mijoto !"),e("p",null," cr\xE9er un compte ")],-1),f={class:"col-lg-12 col-md-12 col-xs-12 col-sm-12",style:{"margin-top":"5vh"}},h=e("div",null,[e("input",{type:"checkbox",name:"scales"}),e("label",{for:"scales"},"Je souhaite recevoir les newletters concernant les \xE9v\xE8nement Mijoto")],-1),g=e("div",null,[e("input",{type:"checkbox",name:"scales"}),e("label",{for:"scales"},"J'accepte les conditions d'utilisation de Mijoto")],-1),b=e("div",{class:"col-lg-12 col-md-12 col-xs-12 col-sm-12",style:{"margin-top":"4vh"}},[e("button",{class:"btn1"}," S'inscrire ")],-1),V={class:"col-lg-12 col-md-12 col-xs-12 col-sm-12",style:{"margin-top":"2vh"}},j=u(" D\xE9ja inscrit ? Se connecter");function k(w,o,M,U,t,N){const i=c("router-link");return a(),r("div",_,[e("div",x,[y,e("div",f,[e("form",null,[e("div",null,[n(e("input",{type:"text",name:"nom","onUpdate:modelValue":o[0]||(o[0]=l=>t.nom=l)},null,512),[[s,t.nom]])]),e("div",null,[n(e("input",{type:"text",name:"siret","onUpdate:modelValue":o[1]||(o[1]=l=>t.siret=l)},null,512),[[s,t.siret]])]),e("div",null,[n(e("input",{type:"text",name:"localisation:","onUpdate:modelValue":o[2]||(o[2]=l=>t.localisation=l)},null,512),[[s,t.localisation]])]),e("div",null,[n(e("input",{type:"email",name:"email","onUpdate:modelValue":o[3]||(o[3]=l=>t.email=l)},null,512),[[s,t.email]])]),e("div",null,[n(e("input",{type:"text",name:"mdp","onUpdate:modelValue":o[4]||(o[4]=l=>t.mdp=l)},null,512),[[s,t.mdp]])]),h,g])]),b,e("div",V,[d(i,{to:"/connection",style:{color:"#006281","font-size":"1.5vh"}},{default:m(()=>[j]),_:1})])])])}var S=p(v,[["render",k]]);export{S as default};
