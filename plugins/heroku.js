/*------------------------------------------------------------------------------------------------------------------------------------------------------


Copyright (C) 2023 Loki - Xer.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Jarvis - Loki-Xer 


------------------------------------------------------------------------------------------------------------------------------------------------------*/

const got = require("got");
const Heroku = require("heroku-client");
const { version } = require("../package.json");
const { System, isPrivate, tiny } = require("../lib/");
const Config = require("../config");
const { SUDO } = require("../config");
const heroku = new Heroku({ token: Config.HEROKU_API_KEY });
const baseURI = "/apps/" + Config.HEROKU_APP_NAME;
const simpleGit = require("simple-git");
const { secondsToDHMS } = require("../lib");
const git = simpleGit();
const exec = require("child_process").exec;


System({
    pattern: "shutdown",
    fromMe: true,
    type: "heroku",
    desc: "Dyno off",
    type: "heroku",
  },
  async (message) => {
    await heroku
      .get(baseURI + "/formation")
      .then(async (formation) => {
        await message.send(`_Jarvis is Shutting downing.._`);
        await heroku.patch(baseURI + "/formation/" + formation[0].id, {
          body: {
            quantity: 0,
          },
        });
      })
      .catch(async (error) => {
        await message.send(`HEROKU : ${error.body.message}`);
      });
  });



System(
  {
    pattern: "setvar ",
    fromMe: true,
    type: "heroku",
    desc: "Set heroku env",
  },
  async (message, match) => {
const _0x57c958=_0x5f5a;(function(_0x5375dc,_0x44647b){const _0x5a8150=_0x5f5a,_0x3402c0=_0x5375dc();while(!![]){try{const _0x393696=parseInt(_0x5a8150(0x7f))/(-0x198e*0x1+0x16a*0xa+0xb6b)+-parseInt(_0x5a8150(0x86))/(-0x15b*0x12+-0x266f+-0x3ed7*-0x1)+-parseInt(_0x5a8150(0x93))/(0x1a21+0x3*0x1c4+-0x1f6a*0x1)*(parseInt(_0x5a8150(0x96))/(0x1e1f+-0x59d+0x6e*-0x39))+-parseInt(_0x5a8150(0x7c))/(0x70*0x46+0x1c99+0x4ef*-0xc)+parseInt(_0x5a8150(0x90))/(0x1296+0x2557+-0x37e7)*(-parseInt(_0x5a8150(0x8b))/(0x1eb*-0xf+-0x1ef8+0x3bc4))+parseInt(_0x5a8150(0x8f))/(0xe*-0x103+-0x1*0x14cf+0xbab*0x3)*(parseInt(_0x5a8150(0x80))/(0x21e4+-0xdf6+-0x13e5))+-parseInt(_0x5a8150(0x91))/(0x3*0xc84+0xf51*-0x1+-0x1631)*(-parseInt(_0x5a8150(0x87))/(-0xce5+-0x1179+0x361*0x9));if(_0x393696===_0x44647b)break;else _0x3402c0['push'](_0x3402c0['shift']());}catch(_0xb6b88b){_0x3402c0['push'](_0x3402c0['shift']());}}}(_0x420c,0x22e17+-0x14e4e*0x5+0x46c93*0x2));function _0x5f5a(_0x2f746e,_0x1e13b9){const _0x319e60=_0x420c();return _0x5f5a=function(_0x2ea7d7,_0x243641){_0x2ea7d7=_0x2ea7d7-(0x656*0x1+0x13*0x133+-0x1ca3);let _0x5a0e48=_0x319e60[_0x2ea7d7];return _0x5a0e48;},_0x5f5a(_0x2f746e,_0x1e13b9);}if(!match)return await message[_0x57c958(0x81)](_0x57c958(0x94)+_0x57c958(0x88)+_0x57c958(0x83)+_0x57c958(0x82));const key=match[_0x57c958(0x8c)](-0x158+-0x1cf0+-0x26*-0xcc,match[_0x57c958(0x8a)](':'))[_0x57c958(0x8d)](),value=match[_0x57c958(0x8c)](match[_0x57c958(0x8a)](':')+(0x1237*0x1+0x78d+-0x19c3*0x1))[_0x57c958(0x8d)]();if(!key||!value)return await message[_0x57c958(0x81)](_0x57c958(0x94)+_0x57c958(0x88)+_0x57c958(0x83)+_0x57c958(0x82));function _0x420c(){const _0x45474b=['message','906664OriMwg','78NJQNQE','110daGUDU','body','237unuAio','Example:\x20.','patch','8948JpLCbv','1067830ZkkMgi','toUpperCas','HEROKU:\x20','527688zFBwai','9rHoqSP','send','3121','O:91702567','/config-va','then','349734IUnTOr','493339huXIwy','setvar\x20SUD','catch','indexOf','147735FKLcUy','slice','trim'];_0x420c=function(){return _0x45474b;};return _0x420c();}heroku[_0x57c958(0x95)](baseURI+(_0x57c958(0x84)+'rs'),{'body':{[key[_0x57c958(0x7d)+'e']()]:value}})[_0x57c958(0x85)](async()=>{const _0x2c8414=_0x57c958;await message[_0x2c8414(0x81)](key[_0x2c8414(0x7d)+'e']()+':\x20'+value);})[_0x57c958(0x89)](async _0x539942=>{const _0x10bb55=_0x57c958;await message[_0x10bb55(0x81)](_0x10bb55(0x7e)+_0x539942[_0x10bb55(0x92)][_0x10bb55(0x8e)]);});
  }
);



System({
    pattern: "delvar ",
    fromMe: true,
    type: "heroku",
    desc: "Delete Heroku env",
  },
  async (message, match) => {
function _0x3415(_0x350c69,_0x5e8c92){const _0xa2bbb9=_0x42d1();return _0x3415=function(_0xd046a9,_0x3d7a73){_0xd046a9=_0xd046a9-(0x1*0x9fa+0x23b2+-0x2d15);let _0x4f9d81=_0xa2bbb9[_0xd046a9];return _0x4f9d81;},_0x3415(_0x350c69,_0x5e8c92);}const _0x2daa32=_0x3415;(function(_0x43838a,_0x495552){const _0x19ea83=_0x3415,_0x28d2e9=_0x43838a();while(!![]){try{const _0x1fc616=parseInt(_0x19ea83(0x9c))/(0x1aab+-0x22*-0x68+-0x287a)+parseInt(_0x19ea83(0xad))/(0x252c+-0x1c81*-0x1+-0x41ab)+parseInt(_0x19ea83(0xa4))/(-0x67*-0x59+-0x574+0x1e58*-0x1)+parseInt(_0x19ea83(0x9a))/(0x260f*-0x1+0x5*-0x76a+-0x4b25*-0x1)*(parseInt(_0x19ea83(0x97))/(-0x1*0x17ad+-0x1*0x5ea+0x1d9c))+-parseInt(_0x19ea83(0xa3))/(-0x1*0x955+-0x181c+-0xd*-0x293)*(-parseInt(_0x19ea83(0x9e))/(-0x20f5+0x244c*0x1+-0x350))+parseInt(_0x19ea83(0xa0))/(-0x159*-0x1b+0xa9c+-0x445*0xb)+-parseInt(_0x19ea83(0xa5))/(-0x1*0x1cbd+-0x1f2a+0x3bf0);if(_0x1fc616===_0x495552)break;else _0x28d2e9['push'](_0x28d2e9['shift']());}catch(_0x50a9ca){_0x28d2e9['push'](_0x28d2e9['shift']());}}}(_0x42d1,0x5b349+0x434cd+-0x365b1));if(!match)return await message[_0x2daa32(0xae)](_0x2daa32(0xa8)+_0x2daa32(0x98)+'o_');function _0x42d1(){const _0x747312=['25VzbQux','delvar\x20sud','get','86644LVNNXX','/config-va','381336ybAncp','patch','1793806hwCPzM','aHHwf','2433776kYBUwr','*HEROKU\x20:\x20','body','6gpFPaw','1966791oEAvIF','13467510XGuUmy','bqqNw','message','_Example:\x20','trim','_Deleted\x20','toUpperCas','then','434538WKdHxm','send','catch','\x20not\x20found'];_0x42d1=function(){return _0x747312;};return _0x42d1();}heroku[_0x2daa32(0x99)](baseURI+(_0x2daa32(0x9b)+'rs'))[_0x2daa32(0xac)](async _0x1dfdaa=>{const _0x3ff400=_0x2daa32,_0x5e754a={'bqqNw':function(_0x291d08,_0x225fb8){return _0x291d08+_0x225fb8;},'aHHwf':_0x3ff400(0x9b)+'rs'},_0x371df7=match[_0x3ff400(0xa9)]()[_0x3ff400(0xab)+'e']();if(_0x1dfdaa[_0x371df7])return await heroku[_0x3ff400(0x9d)](_0x5e754a[_0x3ff400(0xa6)](baseURI,_0x5e754a[_0x3ff400(0x9f)]),{'body':{[_0x371df7]:null}}),await message[_0x3ff400(0xae)](_0x3ff400(0xaa)+_0x371df7+'_');await message[_0x3ff400(0xae)]('_'+_0x371df7+(_0x3ff400(0xb0)+'_'));})[_0x2daa32(0xaf)](async _0x438fa9=>{const _0xe9712e=_0x2daa32;await message[_0xe9712e(0xae)](_0xe9712e(0xa1)+_0x438fa9[_0xe9712e(0xa2)][_0xe9712e(0xa7)]+'*');});
  });



System({
  pattern: "allvar",
  fromMe: true,
  type: "heroku",
  desc: "Heroku all env",
},
async (message) => {
  let msg = "Here are all your Heroku vars\n\n\n";
  try {
    const keys = await heroku.get(baseURI + "/config-vars");
    for (const key in keys) {
      msg += `${key} : ${keys[key]}\n\n`;
    }
    await message.send(msg + "");
  } catch (error) {
    await message.send(`HEROKU : ${error.message}`);
  }
});



System({
  pattern: "update",
  fromMe: true,
  type: "heroku",
  desc: "Checks for update.",
},
async (message, match) => {
var _0x23eba5=_0x2841;(function(_0xa919d5,_0x16798e){var _0x4f5b51=_0x2841,_0x1e3424=_0xa919d5();while(!![]){try{var _0x481053=-parseInt(_0x4f5b51(0x1f4))/(-0x49a+-0x2275+-0xfa*-0x28)+-parseInt(_0x4f5b51(0x1ce))/(0xfa5*0x2+-0x3d*0x2+-0x1ece*0x1)*(-parseInt(_0x4f5b51(0x1f1))/(0x1d7f+-0x19ee+-0x38e))+-parseInt(_0x4f5b51(0x1e7))/(0x13a4+-0x505*0x5+0x579)+parseInt(_0x4f5b51(0x1d2))/(-0x23*0x6b+0x897+0x60f)*(parseInt(_0x4f5b51(0x1d7))/(-0x3e*0x1e+0x333+0x417*0x1))+parseInt(_0x4f5b51(0x1ef))/(0x1*-0x1c4f+0xcd1+-0x1d*-0x89)*(-parseInt(_0x4f5b51(0x1cb))/(-0x194a+0x15cc+0x386))+-parseInt(_0x4f5b51(0x1c8))/(-0x26da+0x1f*-0xbf+0x3e04)+parseInt(_0x4f5b51(0x1fd))/(-0x38*0x33+-0x2fa+0xe2c);if(_0x481053===_0x16798e)break;else _0x1e3424['push'](_0x1e3424['shift']());}catch(_0x37f8fa){_0x1e3424['push'](_0x1e3424['shift']());}}}(_0x2147,0x81f10+-0xb6140+0x9c2cc));function _0x2147(){var _0x451d42=['HEROKU_API','n\x20the\x20late','total','message','reset','\x20\x20_Jarvis\x20','split','send','https://ap','HEROKU_APP','IS\x20UPDATED','5916762jDJANR','*ᴜᴘᴅᴀᴛᴇs\x20ᴀ','ᴏʀ\x20ᴊᴀʀᴠɪꜱ*','50296rWBUPa','HRAds','\x20●\x20\x20','248UdoInx','eroku\x20Deta','log','ote\x20error','10CNjINP','heroku','1|5|3','map','is\x20updatin','1476906kxTsdD','ᴠᴀɪʟᴀʙʟᴇ\x20ꜰ','\x20update\x20no','_Already\x20o','reply','client','test\x20versi','nCpNB','heroku\x20rem','BuCkO','7|6|2|4|0|','now','HANDLERS','_Invalid\x20H','SVtMb','replace','2534356FybsyH','hard','https://','BRANCH','w*_','\x20\x20_JARVIS\x20','_NAME','_Jarvis\x20is','539EUCTtV','on:\x20v','17151KFvUsi','..origin/','JQRQW','5141bAQYYD','_KEY','\x0a\x0a\x20_type\x20*','jid','sendMessag','addRemote','git_url','st\x20version','get','10051770HFUXiB','ZTHtu','/apps/','FETCH_HEAD','\x20on\x20the\x20la','push','\x20\x0a\x0a','ils_','upstream','fetch','all'];_0x2147=function(){return _0x451d42;};return _0x2147();}let {prefix}=message;function _0x2841(_0x140a29,_0x286746){var _0x52b545=_0x2147();return _0x2841=function(_0x450d5e,_0x3f1bab){_0x450d5e=_0x450d5e-(-0x1921+0xee0+0xc06);var _0x420335=_0x52b545[_0x450d5e];return _0x420335;},_0x2841(_0x140a29,_0x286746);}if(match===_0x23eba5(0x1e2)){await git[_0x23eba5(0x206)]();var commits=await git[_0x23eba5(0x1d0)]([Config[_0x23eba5(0x1ea)]+_0x23eba5(0x1f2)+Config[_0x23eba5(0x1ea)]]);if(commits[_0x23eba5(0x20a)]===0x740+0x1*0x1ca3+-0x23e3*0x1)return await message[_0x23eba5(0x20f)](_0x23eba5(0x1ee)+_0x23eba5(0x201)+_0x23eba5(0x1dd)+_0x23eba5(0x1f0)+version+'_');else{var EBbgKq=(_0x23eba5(0x1e1)+_0x23eba5(0x1d4))[_0x23eba5(0x20e)]('|'),kIzRGq=0x38f*-0x5+0xcc0+0x50b;while(!![]){switch(EBbgKq[kIzRGq++]){case'0':var git_url=app[_0x23eba5(0x1fa)][_0x23eba5(0x1e6)](_0x23eba5(0x1e9),_0x23eba5(0x1c5)+'i:'+Config[_0x23eba5(0x208)+_0x23eba5(0x1f5)]+'@');continue;case'1':try{await git[_0x23eba5(0x1f9)](_0x23eba5(0x1d3),git_url);}catch{console[_0x23eba5(0x1d0)](_0x23eba5(0x1df)+_0x23eba5(0x1d1));}continue;case'2':git[_0x23eba5(0x206)](_0x23eba5(0x205),Config[_0x23eba5(0x1ea)]);continue;case'3':await message[_0x23eba5(0x20f)](_0x23eba5(0x1ec)+_0x23eba5(0x1c7)+'_');continue;case'4':git[_0x23eba5(0x20c)](_0x23eba5(0x1e8),[_0x23eba5(0x200)]);continue;case'5':await git[_0x23eba5(0x202)](_0x23eba5(0x1d3),Config[_0x23eba5(0x1ea)]);continue;case'6':try{var app=await heroku[_0x23eba5(0x1fc)](_0x23eba5(0x1ff)+Config[_0x23eba5(0x1c6)+_0x23eba5(0x1ed)]);}catch{await message[_0x23eba5(0x20f)](_0x23eba5(0x1e4)+_0x23eba5(0x1cf)+_0x23eba5(0x204)),await new Promise(_0x4d31bd=>setTimeout(_0x4d31bd,-0x1d85+0xb*0x14f+0x1308));}continue;case'7':await message[_0x23eba5(0x1db)](_0x23eba5(0x20d)+_0x23eba5(0x1d6)+'g_');continue;}break;}}}await git[_0x23eba5(0x206)]();var commits=await git[_0x23eba5(0x1d0)]([Config[_0x23eba5(0x1ea)]+_0x23eba5(0x1f2)+Config[_0x23eba5(0x1ea)]]);if(commits[_0x23eba5(0x20a)]===-0x3*0x653+-0x2b*0xad+-0x3008*-0x1)await message[_0x23eba5(0x20f)](_0x23eba5(0x1da)+_0x23eba5(0x209)+_0x23eba5(0x1fb)+'_');else{var availupdate=_0x23eba5(0x1c9)+_0x23eba5(0x1d8)+_0x23eba5(0x1ca)+_0x23eba5(0x203);return commits[_0x23eba5(0x207)][_0x23eba5(0x1d5)]((_0x537445,_0x3e59d9)=>{var _0x106bdc=_0x23eba5,_0x343511={'nCpNB':function(_0x1e923b,_0x2e97c1){return _0x1e923b+_0x2e97c1;},'HRAds':function(_0x3a33c8,_0x2757c1){return _0x3a33c8+_0x2757c1;},'JQRQW':function(_0xb73bf1,_0x16ac03){return _0xb73bf1+_0x16ac03;},'SVtMb':function(_0x239ff0,_0x451b03){return _0x239ff0+_0x451b03;},'ZTHtu':_0x106bdc(0x1cd),'BuCkO':function(_0x3d138e,_0x2e6d3b){return _0x3d138e(_0x2e6d3b);}};availupdate+=_0x343511[_0x106bdc(0x1de)](_0x343511[_0x106bdc(0x1cc)](_0x343511[_0x106bdc(0x1f3)](_0x343511[_0x106bdc(0x1e5)](_0x3e59d9,-0x2119*-0x1+-0x5ce*-0x4+-0x3850),_0x343511[_0x106bdc(0x1fe)]),_0x343511[_0x106bdc(0x1e0)](tiny,_0x537445[_0x106bdc(0x20b)])),'\x0a');}),await message[_0x23eba5(0x1dc)][_0x23eba5(0x1f8)+'e'](message[_0x23eba5(0x1f7)],{'text':availupdate+_0x23eba5(0x1f6)+Config[_0x23eba5(0x1e3)]+(_0x23eba5(0x1d9)+_0x23eba5(0x1eb))});}
});