import{r as c,o as a,c as r,a as e,j as n,v as s,b as d,w as m,d as u}from"./vendor.02d5ff3c.js";import{_ as p}from"./index.44988fe6.js";const v={methods:{suivant(){}},data(){return{nom:"nom du restaurant",siret:"N\xB0 de Siret",localisation:"localisation",email:"E-mail",mdp:"Mot de passe"}}},_={class:"row contenaire connection"},x={class:"col-lg-12 col-md-12 col-xs-12 col-sm-12 cadre"},f=e("div",{class:"col-lg-12 col-md-12 col-xs-12 col-sm-12"},[e("h2",null," Rejoignez l'aventure Mijoto !"),e("p",null," cr\xE9er un compte ")],-1),y={class:"col-lg-12 col-md-12 col-xs-12 col-sm-12"},h=e("div",null,[e("input",{type:"checkbox",name:"scales"}),e("label",{for:"scales"},"Je souhaite recevoir les newletters concernant les \xE9v\xE8nement Mijoto")],-1),g=e("div",null,[e("input",{type:"checkbox",name:"scales"}),e("label",{for:"scales"},"J'accepte les conditions d'utilisation de Mijoto")],-1),j=e("div",{class:"col-lg-12 col-md-12 col-xs-12 col-sm-12"},[e("button",{class:"btn1"}," S'inscrire ")],-1),V={class:"col-lg-12 col-md-12 col-xs-12 col-sm-12",style:{"margin-top":"2vh"}},b=u(" D\xE9ja inscrit ? Se connecter");function k(w,o,M,U,l,N){const i=c("router-link");return a(),r("div",_,[e("div",x,[f,e("div",y,[e("form",null,[e("div",null,[n(e("input",{type:"text",name:"nom","onUpdate:modelValue":o[0]||(o[0]=t=>l.nom=t)},null,512),[[s,l.nom]])]),e("div",null,[n(e("input",{type:"text",name:"siret","onUpdate:modelValue":o[1]||(o[1]=t=>l.siret=t)},null,512),[[s,l.siret]])]),e("div",null,[n(e("input",{type:"text",name:"localisation:","onUpdate:modelValue":o[2]||(o[2]=t=>l.localisation=t)},null,512),[[s,l.localisation]])]),e("div",null,[n(e("input",{type:"email",name:"email","onUpdate:modelValue":o[3]||(o[3]=t=>l.email=t)},null,512),[[s,l.email]])]),e("div",null,[n(e("input",{type:"text",name:"mdp","onUpdate:modelValue":o[4]||(o[4]=t=>l.mdp=t)},null,512),[[s,l.mdp]])]),h,g])]),j,e("div",V,[d(i,{to:"/connection",style:{color:"#006281","font-size":"1.5vh"}},{default:m(()=>[b]),_:1})])])])}var S=p(v,[["render",k]]);export{S as default};
