import{r as d,o as p,c as u,a as t,k as s,v as l,b as v,w as f,d as m,l as x}from"./vendor.d05a24c9.js";import{_ as h}from"./index.cbf100a4.js";const y={methods:{ajoustClients(i){i.forEach((e,r)=>{e.mail==this.email&&e.numero==0&&alert("mail deja existant")}),this.nom.length>3&&this.prenom.length>3&&this.mdp.length>3?(this.users={nomRestaurant:"aucun",numero:0,localisation:"Lyon",mail:this.email,mdp:this.mdp,nom:this.nom,prenom:this.prenom},this.$store.commit("ajoutsUsers",this.users),this.$router.push("/connection")):alert("erreur dans la saisie")}},data(){return{nom:"Nom",prenom:"Prenom",email:"E-mail",mdp:"Mot de passe",users:{nomRestaurant:"Berk",numero:8,localisation:"Lyon",mail:"test3@gmail.com",mdp:"test3",nom:"jojo3",prenom:"toto3"}}}},g={class:"row contenaire connection"},_={class:"col-lg-12 col-md-12 col-xs-12 col-sm-12 cadre"},j=t("div",{class:"col-lg-12 col-md-12 col-xs-12 col-sm-12"},[t("h2",null,[m(" Rejoignez l'aventure "),t("br"),m(" Mijoto !")]),t("p",{style:{"font-size":"2.5vh"}}," Cr\xE9er un compte ")],-1),k={class:"col-lg-12 col-md-12 col-xs-12 col-sm-12"},C=x('<div style="text-align:left;"><input style="margin-left:64px;" type="checkbox" name="scales"><label style="margin-left:10px;width:70%;" for="scales">Je souhaite recevoir les newletters concernant les \xE9v\xE8nement Mijoto</label></div><div style="text-align:left;"><input style="margin-left:64px;" type="checkbox" name="scales"><label style="margin-left:10px;width:70%;" for="scales">J&#39;accepte les conditions d&#39;utilisation de Mijoto</label></div>',2),b={class:"col-lg-12 col-md-12 col-xs-12 col-sm-12",style:{"margin-top":"2vh"}},w={class:"col-lg-12 col-md-12 col-xs-12 col-sm-12",style:{"margin-top":"2vh"}},V=m(" D\xE9ja inscrit ? Se connecter");function M(i,e,r,N,o,a){const c=d("router-link");return p(),u("div",g,[t("div",_,[j,t("div",k,[t("form",null,[t("div",null,[s(t("input",{class:"modifInput",type:"text",name:"nom",onClick:e[0]||(e[0]=n=>o.nom=" "),"onUpdate:modelValue":e[1]||(e[1]=n=>o.nom=n)},null,512),[[l,o.nom]])]),t("div",null,[s(t("input",{class:"modifInput",type:"text",name:"prenom",onClick:e[2]||(e[2]=n=>o.prenom=" "),"onUpdate:modelValue":e[3]||(e[3]=n=>o.prenom=n)},null,512),[[l,o.prenom]])]),t("div",null,[s(t("input",{class:"modifInput",type:"email",name:"email",onClick:e[4]||(e[4]=n=>o.email=" "),"onUpdate:modelValue":e[5]||(e[5]=n=>o.email=n)},null,512),[[l,o.email]])]),t("div",null,[s(t("input",{class:"modifInput",type:"text",name:"mdp",onClick:e[6]||(e[6]=n=>o.mdp=" "),"onUpdate:modelValue":e[7]||(e[7]=n=>o.mdp=n)},null,512),[[l,o.mdp]])]),C])]),t("div",b,[t("button",{class:"btn1",style:{width:"256px"},onClick:e[8]||(e[8]=n=>a.ajoustClients(i.$store.state.users))}," S'inscrire ")]),t("div",w,[v(c,{to:"/connection",style:{color:"#006281","font-size":"1.5vh"}},{default:f(()=>[V]),_:1})])])])}var I=h(y,[["render",M]]);export{I as default};
