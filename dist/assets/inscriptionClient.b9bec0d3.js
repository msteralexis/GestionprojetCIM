import{r as d,o as p,c as u,a as e,k as s,v as l,b as v,w as h,d as r}from"./vendor.d05a24c9.js";import{_ as f}from"./index.66b888e8.js";const x={methods:{ajoustClients(i){i.forEach((o,m)=>{o.mail==this.email&&o.numero==0&&alert("mail deja existant")}),this.nom.length>3&&this.prenom.length>3&&this.mdp.length>3?(this.users={nomRestaurant:"aucun",numero:0,localisation:"Lyon",mail:this.email,mdp:this.mdp,nom:this.nom,prenom:this.prenom},this.$store.commit("ajoutsUsers",this.users),this.$router.push("/connection")):alert("erreur dans la saisie")}},data(){return{nom:"Nom",prenom:"Prenom",email:"E-mail",mdp:"Mot de passe",users:{nomRestaurant:"Berk",numero:8,localisation:"Lyon",mail:"test3@gmail.com",mdp:"test3",nom:"jojo3",prenom:"toto3"}}}},_={class:"row contenaire connection"},C={class:"col-lg-12 col-md-12 col-xs-12 col-sm-12 cadre"},y=e("div",{class:"col-lg-12 col-md-12 col-xs-12 col-sm-12"},[e("h2",null,[r(" Rejoignez l'aventure "),e("br"),r(" Mijoto !")]),e("p",{style:{"font-size":"2.5vh"}}," Cr\xE9er un compte ")],-1),g={class:"col-lg-12 col-md-12 col-xs-12 col-sm-12"},j=e("div",null,[e("input",{id:"carreCoche",type:"checkbox",name:"scales"}),e("label",{id:"carreCoche2",for:"scales"},"Je souhaite recevoir les newletters concernant les \xE9v\xE8nement Mijoto")],-1),k=e("div",null,[e("input",{id:"carreCocheBis",type:"checkbox",name:"scales"}),e("label",{id:"carreCoche2Bis",for:"scales"},"J'accepte les conditions d'utilisation de Mijoto")],-1),b={class:"col-lg-12 col-md-12 col-xs-12 col-sm-12",style:{"padding-top":"5vh"}},V={class:"col-lg-12 col-md-12 col-xs-12 col-sm-12",style:{"margin-top":"2vh"}},w=r(" D\xE9ja inscrit ? Se connecter");function B(i,o,m,M,n,c){const a=d("router-link");return p(),u("div",_,[e("div",C,[y,e("div",g,[e("form",null,[e("div",null,[s(e("input",{class:"modifInput",type:"text",name:"nom",onClick:o[0]||(o[0]=t=>n.nom=" "),"onUpdate:modelValue":o[1]||(o[1]=t=>n.nom=t)},null,512),[[l,n.nom]])]),e("div",null,[s(e("input",{class:"modifInput",type:"text",name:"prenom",onClick:o[2]||(o[2]=t=>n.prenom=" "),"onUpdate:modelValue":o[3]||(o[3]=t=>n.prenom=t)},null,512),[[l,n.prenom]])]),e("div",null,[s(e("input",{class:"modifInput",type:"email",name:"email",onClick:o[4]||(o[4]=t=>n.email=" "),"onUpdate:modelValue":o[5]||(o[5]=t=>n.email=t)},null,512),[[l,n.email]])]),e("div",null,[s(e("input",{class:"modifInput",type:"text",name:"mdp",onClick:o[6]||(o[6]=t=>n.mdp=" "),"onUpdate:modelValue":o[7]||(o[7]=t=>n.mdp=t)},null,512),[[l,n.mdp]])]),j,k])]),e("div",b,[e("button",{class:"btn1",style:{width:"256px"},onClick:o[8]||(o[8]=t=>c.ajoustClients(i.$store.state.users))}," S'inscrire ")]),e("div",V,[v(a,{to:"/connection",style:{color:"#006281","font-size":"1.5vh"}},{default:h(()=>[w]),_:1})])])])}var N=f(x,[["render",B]]);export{N as default};
