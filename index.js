const Discord =require("discord.js");
const ytdl = require("ytdl-core");
const prefix ="//"
const Client=new Discord.Client;
Client.on("ready",()=>{
    console.log("bot opértionnel");

});
Client.on("message",message =>{
    if(message.author.bot)return; 
    ///////////////////////////////////////////////////////////////////////////////////////////////////////
    if(message.content==("//"+"bonjour")){
    message.reply("bonjour!!!");
    message.channel.send("comment ça va?");}
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    if(message.content.startsWith(prefix+"Hinata")){
    var embed = new Discord.MessageEmbed()
        
        .setColor("#FFAF33 ")
        .setTitle("**Shôyô Hinata (日向翔陽, Hinata Shōyō) **")
        .setDescription("Shôyô Hinata (日向翔陽, Hinata Shōyō) est le personnage principal de la série Haikyū!!, écrit et illustré par Haruichi Furudate. Il est en première année au lycée Karasuno et il a rejoint l'équipe de volley en étant central. Le rêve d'Hinata est de devenir assez fort pour savoir attaquer grâce à n'importe quelle passe comme le Petit Géant. C'est pourquoi il se spécialise dans le saut pour combler son manque de hauteur.")
        .setImage("https://p.kindpng.com/picc/s/232-2324871_transparent-haikyuu-png-hinata-haikyuu-icon-png-download.png")
        message.channel.send(embed);
       }
       if(message.content.startsWith(prefix+"manon")){
        var embed = new Discord.MessageEmbed()
            
            .setColor("#FFF933 ")
            .setTitle("**Manon Couffin **")
            .setDescription("Manon Couffin,dites Pouf ")
            .setImage("https://i.ytimg.com/vi/A1-VvpCuPM0/hqdefault.jpg")
            message.channel.send(embed);
           }
           if(message.content.startsWith(prefix+"sacha")){
            var embed = new Discord.MessageEmbed()
                
                .setColor("#FFF933 ")
                .setTitle("**Sacha Lustro **")
                .setDescription("Sacha Lustro,dit browleur fou ")
                .setImage("https://www.madmoizelle.com/wp-content/uploads/2019/09/sacha-maitre-pokemon.png")
                message.channel.send(embed);
               }
               if(message.content.startsWith(prefix+"nathan")){
                var embed = new Discord.MessageEmbed()
                    
                    .setColor("#FFF933 ")
                    .setTitle("**Nathan Dagoury **")
                    .setDescription("Nathan Dagoury ,dit tata yasmina ")
                    .setImage("https://static.tvtropes.org/pmwiki/pub/images/luffy_moron_1_2273.jpg")
                    message.channel.send(embed);
                   }
                   if(message.content.startsWith(prefix+"josephine")){
                    var embed = new Discord.MessageEmbed()
                        
                        .setColor("#FFF933 ")
                        .setTitle("**Joséphine Dimon **")
                        .setDescription("Joséphine Dimon,dite José l'hasardeuse ")
                        .setImage("https://testeusedemangas.files.wordpress.com/2018/04/attackntitan2.jpg")
                        message.channel.send(embed);
                       }
                       if(message.content.startsWith(prefix+"laurie")){
                        var embed = new Discord.MessageEmbed()
                            
                            .setColor("#FFF933 ")
                            .setTitle("**Laurie Cousineau Neuville **")
                            .setDescription("Laurie Cousineau Neuville ,dite l'angoissée ")
                            .setImage("https://lh3.googleusercontent.com/proxy/lb2LaO1mF9LIQMwuO2k15KhQBRci6mY4MANYfnRIll_urq3YpOpXotStguQzAeewhyHrAJVCAq_z8AhyiLKNvl9A1AiWVHFj8jN1i2ASBofoXfacV_himHnZSyw")
                            message.channel.send(embed);
                           }
                           if(message.content.startsWith(prefix+"julian")){
                            var embed = new Discord.MessageEmbed()
                                
                                .setColor("#FFF933 ")
                                .setTitle("**Julian Salvy **")
                                .setImage("https://www.screeninvasion.com/wp-content/uploads/2015/11/thumbnail_22545.jpg")
                                message.channel.send(embed);
                               }
                               if(message.content.startsWith(prefix+"tata")){
                                var embed = new Discord.MessageEmbed()
                                    
                                    .setColor("#FFF933 ")
                                    .setTitle("** Tata Yasmina **")
                                    .setDescription("Tata Yasmina,dite rien du tout car elle est morte  ")
                                    .setImage("https://i1.wp.com/www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2020/09/among-us-dead-body-reported.jpg?resize=800%2C450&ssl=1")
                                    message.channel.send(embed);
                                   }

               
    if(message.content==("//"+"cmd")){
     message.channel.send("ban : pour bannir quelqu'un \n kick : pour kick quelqu'un \n mute:pour mute quelqu'un \n unmute:pour lui rendre la parole\njeu:affiche la liste de jeu\n clear : efface le nombre de ligne souhaité");
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    if(message.member.hasPermission("ADMINISTRATOR"))
    {
       if(message.content.startsWith(prefix+"ban"))
       {
           let mention = message.mentions.members.first();
           if(mention == undefined)
           {
               message.reply("membre non trouvé");
           }
           else
           {
               if(mention.bannable)
               {
                  mention.ban();
                  message.channel.send("bannissement éffectuer");
               }
               else
               {
                   message.reply("impossible de ban");
               }
           }
       }
       ////////////////////////////////////////////////////////////////////////////////////////////////////////
       if(message.content.startsWith(prefix+"kick"))
       {
           let mention = message.mentions.members.first();
           if(mention == undefined)
           {
               message.reply("membre non trouvé");
           }
           else
           {
               if(mention.kickable)
               {
                  mention.kick();
                  message.channel.send("kick éffectuer");
               }
               else
               {
                   message.reply("impossible de kick");
               }
           }
       }  
       //////////////////////////////////////////////////////////////////////////////////////////////////////
       if(message.content.startsWith(prefix+"mute"))
       {
           let mention = message.mentions.members.first();
           if(mention == undefined)
           {
               message.reply("membre non trouvé");
           }
           else
           {
               mention.roles.add("806227567647522857");
               message.reply(mention.displayName+"n'a plus le droit de parler");
           }
       }
       if(message.content.startsWith(prefix+"unmute"))
       {
           let mention = message.mentions.members.first();
           if(mention == undefined)
           {
               message.reply("membre non trouvé");
           }
           else
           {
               mention.roles.remove("806227567647522857");
               message.reply(mention.displayName+  "a le droit de parler");
           }
       }
       ////////////////////////////////////////////////////////////////////////////////////////////////  

       }
    

   
       if(message.content==("//"+"jeu"))
       {
       message.channel.send("         "+"Liste de jeux en lignes \n-bombparty:\nLes joueurs doivent à tour de rôle trouver un mot avec les lettres proposées avant que le temps soit écoulé et que la bombe n'explose. Le dernier participant en lice remporte la partie.\nhttps://jklm.fun/\n-le loup garou \n-Le pictionary\nSkribbl est un jeu en ligne qui reprend le concept du Pictionary.Le but ? Faire deviner le mot dessiné par un joueur le plus rapidement possible.Le jeu propose aussi de créer une salle privée pour inviter vos amis en toute tranquillité.\n https://skribbl.io/?pIBQPT5zmM \n ou bien appli sur telephone\n-Un blind test\nDe nombreuses applications (notamment le Massive Music Quiz) et vidéos proposent des Quizz musicaux à faire entre amis. Spécialement consacrées au cinéma, séries TV, années 60 ou dessins animés de votre enfance… toutes les catégories existent.Il ne reste plus qu’à choisir celle que vous préférez.\n-Among Us\n-le petit bac en ligne\nhttps://petitbacenligne.net/ \n-Code name\nhttp://pink-cell.com/codenames/\nVersion avec des thèmes\nhttps://codenames.game/ \n Version qui ressemble le plus a la version physique.\n Le jeu du téléphone arabe \n https://garticphone.com/fr \n ");
       }
       ///////////////////////////////////////////////////////////////////////////////////////////////////
    if(message.content==("//"+"equipe")){
     message.channel.send("des equipes de combien?");
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    if(message.content.startsWith(prefix+"play"))
    {
        if(message.member.voice.channel)
        {
            message.member.voice.channel.join().then(connection =>{
            let arg = message.content.split(" ");
            if(!arg[1]){
                message.reply("Lien de la video manquant");
                connection.disconnect();
            }
            else{
            let dispatcher = connection.play(ytdl(arg[1],{quality:"highestaudio"}));
            dispatcher.on("finish",()=> {
                connection.disconnect();
                dispatcher.destroy();
            });
            dispatcher.on("error",err=>{
                console.log("erreur de dispatcher:"+err);
            });
        }
            }).catch(err=>{
                message.reply("Erreur lors de laconnexion :"+ err);
            });

        }
        else{
            message.reply("Vous n'etes pas connecté en vocal");
        }
       
        
    }
    /////////////////////////////////////////////////////////////////////////////
                     // if(message.member.permissions.has("ADMINISTRATOR"))
                     //{ 
                        if(message.content.startsWith(prefix+"noob"))
                        {
                          let mention = message.mentions.members.first();
                          if(mention == undefined)
                           {
                             message.reply("membre non trouvé");
                           }
                          else
                           {
                           mention.roles.add("805835116974571580");
                           message.reply(mention.displayName+"est passée noob");
                           }
                        }
                        if(message.content.startsWith(prefix+"villageois"))
                        {
                          let mention = message.mentions.members.first();
                          if(mention == undefined)
                           {
                             message.reply("membre non trouvé");
                           }
                          else
                           {
                           mention.roles.add("805837596768731176");
                           message.reply(mention.displayName+"est passée villageois");
                           }
                        }
                        if(message.content.startsWith(prefix+"winner"))
                        {
                          let mention = message.mentions.members.first();
                          if(mention == undefined)
                           {
                             message.reply("membre non trouvé");
                           }
                          else
                           {
                           mention.roles.add("805836630333194291");
                           message.reply(mention.displayName+"est passée winner");
                           }
                        }
                        if(message.content.startsWith(prefix+"boss"))
                        {
                          let mention = message.mentions.members.first();
                          if(mention == undefined)
                           {
                             message.reply("membre non trouvé");
                           }
                          else
                           {
                           mention.roles.add("805836630333194291");
                           message.reply(mention.displayName+"est devenu le Boss en titre");
                           }
                        }
                        
                    //}
            ///////////////////////////////////////////////////////////////////////////
               if(message.content.startsWith(prefix+"clear"))
        {
            let args =message.content.split(" ");
            
            if(args[1] == undefined)
            {
                message.reply("Nombre de message non défini");
            }
            else{

                let number = parseInt(args[1]);
                if(isNaN(number))
                {
                    message.reply("Nombre de message non ou mal définie");
                }
                else
                {
                    message.channel.bulkDelete(number).then(messages =>{
                        console.log("Supression de",message.size +"messages réussi!")
                    }).catch(err=>{
                        console.log("Erreur de clear:",err);
                    })
                }
           }
        }
   
    });
Client.login(process.env.TOKEN);

