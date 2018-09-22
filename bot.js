const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '*'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.login(process.env.BOT_TOKEN);



const craft = ['ماهو اسم احسن سيرفر اجنبي في ماين كرافت ؟',
'هل للريد ستون اهميه كبيره في ماين كرافت ؟',
'؟ Gold او الـ iron اي شيء احسن الـ',
'ماهو الشي الذي يمكن ان يتكاثر القروي فيه ؟',
'كم نوع اسهم في ماين كرافت تحديث 1.10 ؟',
'ماهو الامر اللذي يعطينا كوماند بلوك ؟',
'ماهو اقصى ارتفاع يمكنك البناء فيه ؟',
'ماهو اصغر وحش في ماين كرافت ؟',
'كم بلوكه توجد في ماين كرافت ؟',
'ماهو اقوى وحش في ماين كرافت ؟',
'ماهي اهم بلوكه في ماين كرافت ؟',
'ماهو اضعف وحش في ماين كرافت ؟',
'من منشئ ماين كرافت ؟',
'فأي عام اطلقت لعبه ماين كرافت ؟',
'في ماين كرافت العاديه ماهو الشئ الذي لا تستطيع ان تفعله في النذر ؟',
'ماهو الصوت مشابه الاسفنج عندما نكسره ؟',
'ماهو شئ الذي اقوى من الاوبسيدين ؟',
'ماهو الافضل للتسخين الافا او فحم ؟',
'من مطور ماين كرافت ؟']
  client.on('message', message => {
   if (message.content.startsWith("*mc-ask")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
 .addField('سؤال ماين كرافت' ,
  `${craft[Math.floor(Math.random() * craft.length)]}`)
  message.channel.sendEmbed(embed);
    }
});



client.on('ready', () => {
  console.log(`RqlixMc Network`);
});

function pluck(array) {
    return array.map('function(item) { return item["name"]; }');
}

client.on('ready', () => {
  console.log(` | By iTz_Volcano |`);
});



client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {      const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
  return channel.send(`*منور*

[ ${member} ]  مرحبا  **﹞`)
message.channel.send({embed})

}).catch(console.error)
})




client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** ممنوع النشر في السيرفر :angry: ! **`)
    }
}
});


client.on('message', message => {
    if(message.content.includes('كل خرا')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** لا تسب لا تبلع ميوت و خليك مثل ما تربيت  :angry: ! **`)
    }
}
});

client.on('message', message => {
    if(message.content.includes('kol 5ra')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** لا تسب لا تبلع ميوت و خليك مثل ما تربيت  :angry: ! **`)
    }
}
});



client.on('message', message => {
    if(message.content.includes('5ra+')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** لا تسب لا تبلع ميوت و خليك مثل ما تربيت  :angry: ! **`)
    }
}
});

client.on('message', message => {
    if(message.content.includes('5ra')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** لا تسب ترا تبلع ميوت و خليك مثل ما تربيت  :angry: ! **`)
    }
}
});



client.on('message', message => {
    if(message.content.includes('ابوك')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** لا تسب لا تبلع ميوت و خليك مثل ما تربيت  :angry: ! **`)
    }
}
});



client.on('message', message => {
     if (message.content === "*bot") {
            if(!message.channel.guild) return message.reply('** This command only for servers **');
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**عدد السيرفرات الي فيها البوت:**" , client.guilds.size)
  .addField("**المستخدمين:**", client.users.size)
  .addField("**قنوات:**", client.channels.size)
  .addField('الرام المستخدم', `${(process.memoryUsage().rss / 1048576).toFixed()}MB`, true)
  .addField('``سرعة اتصال البوت`` ' , `${Date.now() - message.createdTimestamp}` + ' ms')
  .addField('مدة تشغيل البوت', timeCon(process.uptime()), true)

function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}

message.channel.sendEmbed(embed);
    }
});




client.on('message', message => {
    if(message.content.includes('abook')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** لا تسب لا تبلع ميوت و خليك مثل ما تربيت  :angry: ! **`)
    }
}
});

client.on('message', msg => {
  if (msg.content === 'help') {
    msg.reply('**For Help Do *help**');
  }
});

client.on('message', msg => {
  if (msg.content === '*mc-ser') {
    msg.reply('**hypixel.net _ cubecraft.net _ blocksmc.com _ play.epicube.eu _ play.trixmc.net _ hivemc.com _ mc.spainpvp.com _ gommehd.net _ eu.mineplex.com _ play.roudmc.com _ eu.badlion.net _ play.timolia.de _ randymc.de _ play.last3rb.com **');
  }
});


client.on('message', msg => {
  if (msg.content === '.') {
    msg.reply('**Wlc To RqlixMc Network**');
  }
});

client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var stewart = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setTitle('``رساله جديده في خاص البوت``')
            .setThumbnail(`${message.author.avatarURL}`)
            .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
            .setFooter(`من (@${message.author.tag})  |  (${message.author.id})`)
        client.channels.get("491401386244702242").send({ embed: stewart });
    }
});


const Sra7a = [
    'صراحه  |  صوتك حلوة؟',
    'صراحه  |  التقيت الناس مع وجوهين؟',
    'صراحه  |  شيء وكنت تحقق اللسان؟',
    'صراحه  |  أنا شخص ضعيف عندما؟',
    'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
    'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
    'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
    'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
    'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
    'صراحه  |  أشجع شيء حلو في حياتك؟',
    'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
    'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
    'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
    'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
    'صراحه  |  نظرة و يفسد الصداقة؟',
    'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
    'صراحه  |  شخص معك بالحلوه والمُره؟',
    'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
    'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
    'صراحه  |  وش تتمنى الناس تعرف عليك؟',
    'صراحه  |  ابيع المجرة عشان؟',
    'صراحه  |  أحيانا احس ان الناس ، كمل؟',
    'صراحه  |  مع مين ودك تنام اليوم؟',
    'صراحه  |  صدفة العمر الحلوة هي اني؟',
    'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
    'صراحه  |  صفة تحبها في نفسك؟',
    'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
    'صراحه  |  تصلي صلواتك الخمس كلها؟',
    'صراحه  |  ‏تجامل أحد على راحتك؟',
    'صراحه  |  اشجع شيء سويتة بحياتك؟',
    'صراحه  |  وش ناوي تسوي اليوم؟',
    'صراحه  |  وش شعورك لما تشوف المطر؟',
    'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
    'صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  اي الدول تتمنى ان تزورها؟',
    'صراحه  |  متى اخر مره بكيت؟',
    'صراحه  |  تقيم حظك ؟ من عشره؟',
    'صراحه  |  هل تعتقد ان حظك سيئ؟',
    'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
    'صراحه  |  كلمة تود سماعها كل يوم؟',
    'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
    'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
    'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
    'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
    '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
    'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
    '‏صراحه | هل تحب عائلتك ام تكرههم؟',
    '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
    '‏صراحه  |  هل خجلت من نفسك من قبل؟',
    '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
    '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
    '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
     '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
    '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
    '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
    'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
    '‏صراحه  |  ما هو عمرك الحقيقي؟',
    '‏صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
  client.on('message', message => {
if (message.content.startsWith('*play')) {
    if(!message.channel.guild) return message.reply('** This command only for servers **');
 var client= new Discord.RichEmbed()
 .setTitle("لعبة صراحة ..")
 .setColor('RANDOM')
 .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
 .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                 .setTimestamp()

  message.channel.sendEmbed(client);
  message.react("??")
}
});



client.on('message', msg => {
  if (msg.content === '`invite') {
    msg.reply('**Rqlix Music Bot Link Is :  Soon');
  }
});


client.on('message', msg => {
  if (msg.content === '`play') {
    msg.reply('**Soory That Not Music Bot**');
  }
});

client.on('message', msg => {
  if (msg.content === 'hi') {
    msg.reply('**hi im RqlixMc Bot If You Want To Know My Command Do : (*help)     I Hope You Enjoy    **');
  }
});




client.on('message', msg => {
  if (msg.content === 'ip') {
    msg.reply('*IP : RqlixMc.net , All Versions');
  }
});


client.on('message', msg => {
  if (msg.content === 'IP') {
    msg.reply('*IP : RqlixMc.net , All Versions');
  }
});


client.on('message', message => {
    if(message.channel.type === 'dm') {
        var guildID = '414359547331739648'; // <=============== ايدي السيرفر حقك
        if(message.content.includes('discord.gg/')) {
            var member = client.guilds.find(g => g.id === guildID).members.find(m => m.id === message.author.id);
            member.ban({ reason: 'ADS In Private.' }).catch();
        }
    }
});



client.on('message', message => {
    if(message.content.includes('discord.gg/')) {
        if(message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete();
        message.guild.member(message.author).addRole(message.guild.roles.find(r => r.name === 'Muted'));
        let embedP = new Discord.RichEmbed()
        .setTitle('❌ | تمت معاقبتك')
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(`** لقد قمت بمخالفة قوانين السيرفر من خلال نشر روابط اضافة الى سيرفرات اخرى  **` , `**ملاحظة  : إن كآن هذآ الاسكات عن طريق الخطأ الرجاء التوجه والتكلم مع الادآرة**`)
        .addField(`by`,`Hello,Im'iiLizx`)
        .setColor('RED')
        .setThumbnail(message.author.avatarURL)
        .setFooter(`${message.guild.name} Server`, message.guild.iconURL)
        
        message.channel.send(embedP);
    }
});





client.on('guildDelete', g=>{
    var embed = new Discord.RichEmbed()
    .setDescription(`يا رب تكون استمتعت بالبوت ${g.name}`)
.addField('Bot Owner : iTz_Volcano ', '-_-')
.setFooter('all copyrights reserved©', client.user.avatarURL)

     g.owner.send({embed : embed})
})



client.on("message", (message) => {
    if (message.content.startsWith("*ban ")) {
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply(':warning: ماعندك الصلاحيات');
        var member= message.mentions.members.first();
        member.ban().then((member) => {
            message.channel.send(member.displayName + " مع السلامه :wave: ");
        }).catch(() => {
            message.channel.send("Error -_-");
        });
    }
});




client.on('message', message => {

     if (message.content === "*server") {
var year = message.guild.createdAt.getFullYear()
var month = message.guild.createdAt.getMonth()
var day = message.guild.createdAt.getDate()
     let embed = new Discord.RichEmbed()

.addField('**SERVER NAME💳**: ' , message.guild.name)
.addField('**SERVER ID🆔** :' , message.guild.id)
.addField(' SERVER VERIFICATIONLEVEL❓  : ' , message.guild.verificationLevel)
.addField('SERVER REGION�� : ' , message.guild.region)
.addField('CHANNELS SIZE🔋 : ' , message.guild.channels.size)
.addField('DEFAULT CHANNEL1⃣ : ' , message.guild.defaultChannel)
.addField('Roles🔢 : ' , message.guild.roles.size)
.addField('SERVER CREATED IN🕑 : ' ,year + "-"+ month +"-"+ day)
.addField('MEMBERS📡 : ' , message.guild.memberCount)
.addField('SERVER OWNER👑 : ' , message.guild.owner)
.setColor("#51cde6")
.setDescription(`By : iTz_Volcano`)
      message.author.sendEmbed(embed);

	  message.channel.send('**تم ارسال ال رسالة في الخاص **');

}

});





client.on('message', message => {
if (message.content.split(' ')[0] == '*bc')
 message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
member.send( `${member} ! ` + "**" + message.guild.name + " : ** " + message.content.substr(3));
                                                            message.delete();
});
});










client.on("message", (message) => {
    if (message.content.startsWith("*kick ")) {
      if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('? ماعندك الصلاحيات');
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(member.displayName + " مع السلامه :wave: ");
        }).catch(() => {
            message.channel.send("Error -_-");
        });
    }
});


 const cuttweet = [
     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت | الحرية لـ ... ؟',
     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏| كلمة للصُداع؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت | وش يفسد الصداقة؟',
     '‏كت تويت | شخص لاترفض له طلبا ؟',
     '‏كت تويت | كم مره خسرت شخص تحبه؟.',
     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت |أقوى كذبة مشت عليك ؟',
     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت | مطلبك الوحيد الحين ؟',
     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

 client.on('message', message => {
   if (message.content.startsWith("*cutt")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('لعبه كت تويت' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});


   
client.on("message", (message) => {
    /// ALPHA CODES
   if (message.content.startsWith("*ticket")) {     /// ALPHA CODES
        const reason = message.content.split(" ").slice(1).join(" ");     /// ALPHA CODES
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });    /// ALPHA CODES
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: Your ticket has been created, #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`Hey ${message.author.username}!`, `Please try explain why you opened this ticket with as much detail as possible. Our **Support Staff** will be here soon to help.`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error); 
    }


  if (message.content.startsWith("*close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);

        message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`*confirm\`. This will time out in 10 seconds and be cancelled.`)
            .then((m) => {
                message.channel.awaitMessages(response => response.content === '*confirm', {
                        max: 1,
                        time: 10000,
                        errors: ['time'],
                    })    /// ALPHA CODES
                    .then((collected) => {
                        message.channel.delete();
                    })    /// ALPHA CODES
                    .catch(() => {
                        m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                            m2.delete();
                        }, 3000);
                    });
            });
    }

});
    /// ALPHA CODES


client.on("guildCreate", guild => {
    console.log("Joined a new guild: " + guild.name);
    if(client.guilds.size > 1) {
        client.user.setActivity(`Im on ${client.guilds.size} servers!`);
    } else {
        client.user.setActivity(`Im on ${client.guilds.size} servers!`);
    }
});

client.on("guildDelete", guild => {
    console.log("Left a guild: " + guild.name);
    if(client.guilds.size > 1) {
        client.user.setActivity(`Im on ${client.guilds.size} servers!`);
    } else {
        client.user.setActivity(`Im on ${client.guilds.size} servers!`);
    }
});

client.on("message", async () => {
  
})


client.on('message', message => {
    if (message.content === prefix + "time") {
        var currentTime = new Date(),
            السنة = currentTime.getFullYear(),
            الشهر = currentTime.getMonth() + 1,
            اليوم = currentTime.getDate();
        message.channel.sendMessage( "التاريخ : " + اليوم + "-" + الشهر + "-" +السنة)
    }
});



client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`دخل اقول ليش السيرفر منوراليوم`)
    .setDescription(`هلا يا كينج`)
    .addField(' :bust_in_silhouette:  انت رقم',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('GREEN')
    .setFooter('RqlixMc Bot', 'https://discordapp.com/oauth2/authorize?client_id=489321043836796928&scope=bot&permissions=2146958847')

var channel =member.guild.channels.find('name', 'chat-الشات')
if (!channel) return;
channel.send({embed : embed});
});

client.on('guildMemberRemove', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`خرج عضو`)
    .setDescription(`الى اللقاء...`)
    .addField(':bust_in_silhouette:   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('RED')
    .setFooter(`RqlixMc Bot`, 'https://discordapp.com/oauth2/authorize?client_id=489321043836796928&scope=bot&permissions=2146958847')

var channel =member.guild.channels.find('name', 'console')
if (!channel) return;
channel.send({embed : embed});
});





client.on("message", msg => {
  if(msg.content === '*' + "id") {
      const embed = new Discord.RichEmbed();
  embed.addField(":trident:|Username", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField(":id:|iD", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField(':name_badge:|Status', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField(':game_die:|Playing', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
          .addField(':medal:|Roles', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField(':name_badge:|Discriminator', `${msg.discriminator}`, true)
          .addField(':date:|Created At', `${msg.createdAt}`,true)
          .addField(':robot:|Bot', `${msg.author.bot.toString().toUpperCase()}`, true);
      msg.channel.send({embed: embed})
  }
});




client.on("guildCreate", guild => {
console.log(` RqlixMc Bot Added From Server -- = ${guild.name} = -- , Server Owner -- = ${guild.owner.user.username} = --`)
client.channels.get("390462097873567744").send('* RqlixMc bot** ``Added`` To Server : '+`**${guild.name}**`+' : '+'**Server Owner** :' +`**${guild.owner.user.username}**` +':')
});;



client.on('message', msg => {
  if (msg.content === '5ra') {
   msg.delete(30)
    msg.reply('لا تسب لا تبلع ميوت و خليك مثل ما تربيت');
  }
});



client.on('message', msg => {
  if (msg.content === 'kol 5ra') {
   msg.delete(30)
    msg.reply('لا تسب لا تبلع ميوت و خليك مثل ما تربيت');
  }
});



client.on('message', msg => {
  if (msg.content === 'fuck') {
   msg.delete(30)
    msg.reply('لا تسب لا تبلع ميوت و خليك مثل ما تربيت');
  }
});



client.on('message', msg => {
  if (msg.content === 'wtf') {
   msg.delete(30)
    msg.reply('لا تسب لا تبلع ميوت و خليك مثل ما تربيت');
  }
});



client.on('message', msg => {
  if (msg.content === 'shit') {
   msg.delete(30)
    msg.reply('لا تسب لا تبلع ميوت و خليك مثل ما تربيت');
  }
});


client.on('message', msg => {
  if (msg.content === 'discord.gg') {
   msg.delete(30)
    msg.reply('ممنوع');
  }
});



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
/*جميع الحقوق محفوظهه لريبل ولسيرفر كودز
رآح يرسل للأونر تحذير + م يتطلب ملفات سويته لكم داتا مؤقت
سو روم بأسم log 
أو غيره من الكود عشان يرسل هنا التحذير
nvm i 10 
nvm use 10
npm i discord.js
*/
var guilds = {};
client.on('guildBanAdd', function(guild) {
            const rebellog = client.channels.find("name", "『console-🔄』"),
            Onumber = 3,
  Otime = 10000
guild.fetchAuditLogs({
    type: 22
}).then(audit => {
    let banner = audit.entries.map(banner => banner.executor.id)
    let bans = guilds[guild.id + banner].bans || 0 
    guilds[guild.id + banner] = {
        bans: 0
    }
      bans[guilds.id].bans += 1; 
if(guilds[guild.id + banner].bans >= Onumber) {
try {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);
  guild.guild.member(banner).kick();

} catch (error) {
console.log(error)
try {
guild.members.get(banner).ban();
  rebellog.send(`<@!${banner.id}>
حآول العبث بالسيرفر @everyone`);
guild.owner.send(`<@!${banner.id}>
حآول العبث بالسيرفر ${guild.name}`)
    setTimeout(() => {
 guilds[guild.id].bans = 0;
  },Otime)
} catch (error) {
console.log(error)
}
}
}
})
});
 let channelc = {};
  client.on('channelCreate', async (channel) => {
  const rebellog = client.channels.find("name", "『console-🔄』"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelcreate = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was Created By ${channelcreate.tag}`);
   if(!channelc[channelcreate.id]) {
    channelc[channelcreate.id] = {
    created : 0
     }
 }
 channelc[channelcreate.id].created += 1;
 if(channelc[channelcreate.id].created >= Onumber ) {
    Oguild.members.get(channelcreate.id).kick();
rebellog.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelc[channelcreate.id].created = 0;
  },Otime)
  });

let channelr = {};
  client.on('channelDelete', async (channel) => {
  const rebellog = client.channels.find("name", "『console-🔄』"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelremover = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was deleted By ${channelremover.tag}`);
   if(!channelr[channelremover.id]) {
    channelr[channelremover.id] = {
    deleted : 0
     }
 }
 channelr[channelremover.id].deleted += 1;
 if(channelr[channelremover.id].deleted >= Onumber ) {
  Oguild.guild.member(channelremover).kick();
rebellog.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelr[channelremover.id].deleted = 0;
  },Otime)
  });







client.on('message', message => {
     if (message.content === "*help") {
message.author.send("" + `  **

إذا حاب تكلمني ارسل رسالة لل بوت و انا اشوفها                                                                :                                                             if you want to talk with me you can send message to my bot (RqlixMc Bot)  I will read all message

┏┓╋╋┏┓╋┏┓╋╋╋╋╋╋╋╋╋╋╋╋╋┏━━┓╋╋╋┏┓
┃┗┓┏┛┃╋┃┃╋╋╋╋╋╋╋╋╋╋╋╋╋┃┏┓┃╋╋┏┛┗┓
┗┓┃┃┏┻━┫┃┏━━┳━━┳━┓┏━━┓┃┗┛┗┳━┻┓┏┛
╋┃┗┛┃┏┓┃┃┃┏━┫┏┓┃┏┓┫┏┓┃┃┏━┓┃┏┓┃┃
╋┗┓┏┫┗┛┃┗┫┗━┫┏┓┃┃┃┃┗┛┃┃┗━┛┃┗┛┃┗┓
╋╋┗┛┗━━┻━┻━━┻┛┗┻┛┗┻━━┛┗━━━┻━━┻━┛

Bot Command :     (Use Command On #『commands-📡』 )
1  -  | *server | To Know Stats Of Server
2  -  | *inv | To Know Bot : Link
3  -  | *kick | To Kick Member
4  -  | *bc | To Send Message To all Member
5  -  | *ping | To Know You Ping
6  -  | *help | To See Thats Menu
7  -  | *staff | To Know The Bot Owner
8  -  | *support | To See Support Server
9  -  | *perm | To See All Your Permissions
10 -  | *ser-av | To Get Server Avatar
11 -  | *mute | To Mute Member                                     (Create Rank And Set Name Is : Muted , And Create Text Room And Set Name Is : console )
12 -  | *unmute | To UnMute Member                                 (Create Rank And Set Name Is : Muted , And Create Text Room And Set Name Is : console )
13 -  | *Member | To Know How Much Member Online ...
14 -  | *ban | To Ban Member     (You Must Have Perm)
15 -  | *clear | To Clear Chat        (You Must Have Perm)
16 -  | *bot | To Know The Bot How Many Server Invited
17 -  | *emoji | To See Emoji Link
18 -  | *time | To Know What : Day , And , Month .....
19 -  | *update | To Know New update
20 -  | *games | To Know Games Command
21 -  | *rules | To Know Public Rules OR Server Rules
22 -  | *id | 	To Know You Id And Your Playing And More ...
23 -  | *ticket | To Open Ticket And Talk With Staff
24 -  | *close | To Close The Ticket
25 -  | *owner | To Know Bot Owner 
26 -  | *b-apply | If You Want To Add Your Discord Bot To Rqlix Network Server Try This Commands
27 -  | *setstats | To But Your Server Stats in Voice Rooms 
28 -  | *help-admin | If You Have Permissions Do That Command To Know Admins Commands In Bot
29 -  | *store | To Know Ranks Server Store
30 -  | *say | If You Want The Bot Send A message
31 -  | *cutt | To CutTweet Games
32 -  | *play | To Sra7a Game 

**`);

      message.channel.send('**تم ارسال ال رسالة في الخاص **');

    }
});




client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='*member')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle('🌷| Members info')
      .addBlankField(true)
      .addField('📗| Online',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField('📕| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField('📙| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
      .addField('📓| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField('➡| Server Members',`${message.guild.memberCount}`)
      message.author.send(IzRo);



    });



client.on('message', message => {
     if (message.content === "*update") {
message.author.send("" + `  **
إذا حاب تكلمني ارسل رسالة لل بوت و انا اشوفها                                                                :                                                             if you want to talk with me you can send message to my bot (Volcano Bot)  I will read all message

┏┓╋╋┏┓╋┏┓╋╋╋╋╋╋╋╋╋╋╋╋╋┏━━┓╋╋╋┏┓
┃┗┓┏┛┃╋┃┃╋╋╋╋╋╋╋╋╋╋╋╋╋┃┏┓┃╋╋┏┛┗┓
┗┓┃┃┏┻━┫┃┏━━┳━━┳━┓┏━━┓┃┗┛┗┳━┻┓┏┛
╋┃┗┛┃┏┓┃┃┃┏━┫┏┓┃┏┓┫┏┓┃┃┏━┓┃┏┓┃┃
╋┗┓┏┫┗┛┃┗┫┗━┫┏┓┃┃┃┃┗┛┃┃┗━┛┃┗┛┃┗┓
╋╋┗┛┗━━┻━┻━━┻┛┗┻┛┗┻━━┛┗━━━┻━━┻━┛



----------------------------------------------------------------------------------------------




New Update :      ( RqlixMc Bot )   ( English )

1 - As You Do Welcome And Departure Create Text Room And Set Name : Welcome

2 - New Command : *rules = To Know Server Rules OR Public Rules

3 - We Well Add Two Language  ( Arabic   -   English)

4 - The Spanking Block Was Aded To RqlixMc Bot

5 - New Commands And New Game *play To Sra7a

6 - New Commands With New Games *cutt To Cuttwet
7 - Ticket And Close | *help To Know




----------------------------------------------------------------------------------------------




تحديثات جديدة :   ( RqlixMc Bot )       ( العربية )

1 - عشان تفعل امر الترحيب و المغادرة انشأ رووم كتابية و سميها : welcome

2 - تم اضافة امر جديد ل فولكانو بوت وهو : *rules = عشان تعرف قوانين السيرفر او القوانين العامة

3 - سوف يتم اضافة لغتين لل بوت فريبآ     (انجليزي   -   عربي )

4 - تم اضافة منع السب على RqlixMc Bot




----------------------------------------------------------------------------------------------




Server Support : https://discord.gg/86Y5mjQ




----------------------------------------------------------------------------------------------




Bot Link : https://discordapp.com/oauth2/authorize?client_id=489321043836796928&scope=bot&permissions=2146958847
**`);

      message.channel.send('**تم ارسال ال رسالة في الخاص **');

    }
});












client.on('message', message => {
     if (message.content === "*rules") {
message.author.send("" + `  **
إذا حاب تكلمني ارسل رسالة لل بوت و انا اشوفها                                                                :                                                             if you want to talk with me you can send message to my bot (Volcano Bot)  I will read all message

┏┓╋╋┏┓╋┏┓╋╋╋╋╋╋╋╋╋╋╋╋╋┏━━┓╋╋╋┏┓
┃┗┓┏┛┃╋┃┃╋╋╋╋╋╋╋╋╋╋╋╋╋┃┏┓┃╋╋┏┛┗┓
┗┓┃┃┏┻━┫┃┏━━┳━━┳━┓┏━━┓┃┗┛┗┳━┻┓┏┛
╋┃┗┛┃┏┓┃┃┃┏━┫┏┓┃┏┓┫┏┓┃┃┏━┓┃┏┓┃┃
╋┗┓┏┫┗┛┃┗┫┗━┫┏┓┃┃┃┃┗┛┃┃┗━┛┃┗┛┃┗┓
╋╋┗┛┗━━┻━┻━━┻┛┗┻┛┗┻━━┛┗━━━┻━━┻━┛





----------------------------------------------------------------------------------------------



Server Rules :

Go To #Rules To Know Server Rules



----------------------------------------------------------------------------------------------


Public Rules :
1 - لا تسب ولا تضايق احد

2 - لا تخرب علا احد في ال رووم

3 - عندك مشكله كلمنا

4 - اوامر البوت في #『commands-📡』 

5 - لا تسوي سبام

6 - لا تنشر

7 - يذا تبي نشر كلمني انا انشرلك

8 - سبام + سب = ميوت

9 - خليك مثل ما انت تربيت

10 - اذا شفت شي خطأ جلنا حتا لو كان من ال  [.Owner:no_entry:️

11 - راح يكون فبه فعليات جامينج ينشااللة

12  - اتمنا انك تستمتع



----------------------------------------------------------------------------------------------


Server Support : https://discord.gg/86Y5mjQ


Bot Link : https://discordapp.com/oauth2/authorize?client_id=489321043836796928&scope=bot&permissions=2146958847
**`);

      message.channel.send('**تم ارسال ال رسالة في الخاص **');

    }
});





client.on('message', message => {
     if (message.content === "*games") {
message.author.send("" + `  **
إذا حاب تكلمني ارسل رسالة لل بوت و انا اشوفها                                                                :                                                             if you want to talk with me you can send message to my bot (Volcano Bot)  I will read all message



┃┗┓┏┛┃╋┃┃╋╋╋╋╋╋╋╋╋╋╋╋╋┃┏┓┃╋╋┏┛┗┓
┗┓┃┃┏┻━┫┃┏━━┳━━┳━┓┏━━┓┃┗┛┗┳━┻┓┏┛
╋┃┗┛┃┏┓┃┃┃┏━┫┏┓┃┏┓┫┏┓┃┃┏━┓┃┏┓┃┃
╋┗┓┏┫┗┛┃┗┫┗━┫┏┓┃┃┃┃┗┛┃┃┗━┛┃┗┛┃┗┓
╋╋┗┛┗━━┻━┻━━┻┛┗┻┛┗┻━━┛┗━━━┻━━┻━┛





----------------------------------------------------------------------------------------------



Games Command :         (On #『commands-📡』 )

1 -  | *roll | Type *roll And ( Number - 1 _ 10000000 )

2 -  | *mc-ask | Minecraft Questions

3 -  | *mc-ser | To Know Minecraft Servers



----------------------------------------------------------------------------------------------


Server Support : https://discord.gg/86Y5mjQ


Bot Link : https://discordapp.com/oauth2/authorize?client_id=489321043836796928&scope=bot&permissions=2146958847
**`);

      message.channel.send('**تم ارسال ال رسالة في الخاص **');

    }
});

















client.on("message", message => {

          if(!message.channel.guild) return;

   if(message.author.bot) return;

      if(message.content === "*ser-av"){

          const embed = new Discord.RichEmbed()



      .setTitle(`Avatar : ** ${message.guild.name} **`)

  .setAuthor(message.author.username, message.guild.iconrURL)

    .setColor('RANDOM')

    .setImage(message.guild.iconURL)



   message.author.send({embed});

    message.channel.send('**The Avatar Was Sent On Prevate **');


      }

  });



  client.on('message', message => {
     if (message.content === "*emoji") {
message.author.send("" + `  **

إذا حاب تكلمني ارسل رسالة لل بوت و انا اشوفها                                                                :                                                             if you want to talk with me you can send message to my bot (Volcano Bot)  I will read all message

┏┓╋╋┏┓╋┏┓╋╋╋╋╋╋╋╋╋╋╋╋╋┏━━┓╋╋╋┏┓
┃┗┓┏┛┃╋┃┃╋╋╋╋╋╋╋╋╋╋╋╋╋┃┏┓┃╋╋┏┛┗┓
┗┓┃┃┏┻━┫┃┏━━┳━━┳━┓┏━━┓┃┗┛┗┳━┻┓┏┛
╋┃┗┛┃┏┓┃┃┃┏━┫┏┓┃┏┓┫┏┓┃┃┏━┓┃┏┓┃┃
╋┗┓┏┫┗┛┃┗┫┗━┫┏┓┃┃┃┃┗┛┃┃┗━┛┃┗┛┃┗┓
╋╋┗┛┗━━┻━┻━━┻┛┗┻┛┗┻━━┛┗━━━┻━━┻━┛

Emoji Link : https://emojikeyboard.org/
**`);

      message.channel.send('**تم ارسال ال رسالة في الخاص **');

    }
});





client.on('message', message => {



if (message.content.startsWith(prefix + 'perm')) {

         if(!message.channel.guild) return;

         var perms = JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4);

         var zPeRms = new Discord.RichEmbed()

         .setColor('RANDOM')

         .setTitle(':tools: Permissions')

         .addField('Your Permissions:',perms)

                  message.author.send({embed:zPeRms});


   message.channel.send('**تم ارسال ال رسالة في الخاص **');



    }

});






client.on("message", message => {
      if (message.content === "*ping") {
      const embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField('**Ping:**' , `${Date.now() - message.createdTimestamp}` + ' ms')
  message.author.sendEmbed(embed);

     message.channel.send('**تم ارسال ال رسالة في الخاص **');

    }
});













client.on('message', function(message) {

    if(message.content.startsWith(prefix + 'roll')) {

        let args = message.content.split(" ").slice(1);

        if (!args[0]) {

            message.channel.send('**use 1 - 10000000**');

            return;

            }

    message.channel.send(Math.floor(Math.random() * args.join(' ')));

            if (!args[0]) {

          message.edit('1')

          return;

        }

    }

});



client.on('message', message => {

    if (message.author.bot) return;

     if (message.content === prefix + "staff") {





 message.author.sendMessage(`



 __~~Bot Staff~~__

┏┓╋╋┏┓╋┏┓╋╋╋╋╋╋╋╋╋╋╋╋╋┏━━┓╋╋╋┏┓
┃┗┓┏┛┃╋┃┃╋╋╋╋╋╋╋╋╋╋╋╋╋┃┏┓┃╋╋┏┛┗┓
┗┓┃┃┏┻━┫┃┏━━┳━━┳━┓┏━━┓┃┗┛┗┳━┻┓┏┛
╋┃┗┛┃┏┓┃┃┃┏━┫┏┓┃┏┓┫┏┓┃┃┏━┓┃┏┓┃┃
╋┗┓┏┫┗┛┃┗┫┗━┫┏┓┃┃┃┃┗┛┃┃┗━┛┃┗┛┃┗┓
╋╋┗┛┗━━┻━┻━━┻┛┗┻┛┗┻━━┛┗━━━┻━━┻━┛



 __Powered By__: RqlixMc Community

**Owner**: iTz_Volcano #8818




Server Support : https://discord.gg/86Y5mjQ



Bot Link : https://discordapp.com/oauth2/authorize?client_id=489321043836796928&scope=bot&permissions=2146958847

`);



message.channel.send('**تم ارسال ال رسالة في الخاص **');



    }

});

client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command === "*mute") {
          if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');
                  if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **");
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'console');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
  if (!modlog) return message.reply("**لا يوجد الروم المراد ارسال المعلومات له 'Mute-Log'**");
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **');
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField(' Mute ', ' | :white_check_mark: |')
    .addField('تم اعطاء الميوت ل', `${user.username}#${user.discriminator} `)
    .addField('السبب', '**تعكير نظام الشات**')
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   message.channel.send({embed: embed});

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
    });
  }

};
    if (command === "*unmute") {
          if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **");
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'console');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **");
  if (!modlog) return message.reply("**لا يوجد الروم المراد ارسال المعلومات له 'Mute-Log'**");
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **');
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField('UnMute ', ' | :white_check_mark: |')
    .addField('تم فك الميوت عن', `${user.username}#${user.discriminator} `)
    .addField('السبب', '**انتهاء مدة لميوت**')
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   message.channel.send({embed: embed});

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **');

  if (message.guild.member(user).removeRole(muteRole.id)) {
      client.channels.get(modlog.id).send({embed});
  } else {
    message.guild.member(user).removeRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed});
    });
  }

};


});





client.on('message', message => {

    if (message.author.bot) return;

     if (message.content === prefix + "inv") {





 message.author.sendMessage(`



 ┏┓╋╋┏┓╋┏┓╋╋╋╋╋╋╋╋╋╋╋╋╋┏━━┓╋╋╋┏┓
┃┗┓┏┛┃╋┃┃╋╋╋╋╋╋╋╋╋╋╋╋╋┃┏┓┃╋╋┏┛┗┓
┗┓┃┃┏┻━┫┃┏━━┳━━┳━┓┏━━┓┃┗┛┗┳━┻┓┏┛
╋┃┗┛┃┏┓┃┃┃┏━┫┏┓┃┏┓┫┏┓┃┃┏━┓┃┏┓┃┃
╋┗┓┏┫┗┛┃┗┫┗━┫┏┓┃┃┃┃┗┛┃┃┗━┛┃┗┛┃┗┓
╋╋┗┛┗━━┻━┻━━┻┛┗┻┛┗┻━━┛┗━━━┻━━┻━┛




Bot Link : https://discordapp.com/oauth2/authorize?client_id=489321043836796928&scope=bot&permissions=2146958847



Server Support : https://discord.gg/86Y5mjQ

`);



message.channel.send('تم ارسال ال رسالة في الخاص ');



    }

});


client.on('message', message => {

    if (message.author.bot) return;

     if (message.content === prefix + "support") {





 message.author.sendMessage(`



 ┏┓╋╋┏┓╋┏┓╋╋╋╋╋╋╋╋╋╋╋╋╋┏━━┓╋╋╋┏┓
┃┗┓┏┛┃╋┃┃╋╋╋╋╋╋╋╋╋╋╋╋╋┃┏┓┃╋╋┏┛┗┓
┗┓┃┃┏┻━┫┃┏━━┳━━┳━┓┏━━┓┃┗┛┗┳━┻┓┏┛
╋┃┗┛┃┏┓┃┃┃┏━┫┏┓┃┏┓┫┏┓┃┃┏━┓┃┏┓┃┃
╋┗┓┏┫┗┛┃┗┫┗━┫┏┓┃┃┃┃┗┛┃┃┗━┛┃┗┛┃┗┓
╋╋┗┛┗━━┻━┻━━┻┛┗┻┛┗┻━━┛┗━━━┻━━┻━┛




Bot Link : https://discordapp.com/oauth2/authorize?client_id=489321043836796928&scope=bot&permissions=2146958847



Server Support : https://discord.gg/86Y5mjQ

`);



message.channel.send('تم ارسال ال رسالة في الخاص ');



    }

});



















client.on('message', message => {

let args = message.content.split(' ').slice(1).join(' ');

if (message.content.startsWith('*bc_own')){

 if(!message.author.id === '334585041801969687') return;

message.channel.sendMessage('?? , The Message Was Sent On Prevate')

client.users.forEach(m =>{

m.sendMessage(args)

})

}

})
