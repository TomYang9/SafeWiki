(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[28],{170:function(e,a,t){"use strict";t.r(a),function(e){t.d(a,"default",(function(){return i}));var n,c=t(95),b=(t(139),t(0),t(96));function s(){return(s=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function r(e,a){if(null==e)return{};var t,n,c=function(e,a){if(null==e)return{};var t,n,c={},b=Object.keys(e);for(n=0;n<b.length;n++)t=b[n],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,a);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)t=b[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,o,p=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(b.b)("div",a)}},m={},N="wrapper";function i(e){var a=e.components,t=r(e,["components"]);return Object(b.b)(N,s({},m,t,{components:a,mdxType:"MDXLayout"}),Object(b.b)("h1",{className:"__internal",id:"账号和口令"},"账号和口令",Object(b.b)("a",s({parentName:"h1"},{href:"#%E8%B4%A6%E5%8F%B7%E5%92%8C%E5%8F%A3%E4%BB%A4","aria-hidden":!0,className:"anchor"}),"#")),Object(b.b)("h2",{className:"__internal",id:"11-禁用或删除无用账号"},"1.1 禁用或删除无用账号",Object(b.b)("a",s({parentName:"h2"},{href:"#11-%E7%A6%81%E7%94%A8%E6%88%96%E5%88%A0%E9%99%A4%E6%97%A0%E7%94%A8%E8%B4%A6%E5%8F%B7","aria-hidden":!0,className:"anchor"}),"#")),Object(b.b)("p",null,"减少系统无用账号，降低安全风险。"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"操作步骤")),Object(b.b)("ul",null,Object(b.b)("li",s({parentName:"ul"},{className:"__internal"}),"使用命令 ",Object(b.b)("inlineCode",{parentName:"li"},"userdel <用户名>")," 删除不必要的账号。"),Object(b.b)("li",s({parentName:"ul"},{className:"__internal"}),"使用命令 ",Object(b.b)("inlineCode",{parentName:"li"},"passwd -l <用户名>")," 锁定不必要的账号。"),Object(b.b)("li",s({parentName:"ul"},{className:"__internal"}),"使用命令 ",Object(b.b)("inlineCode",{parentName:"li"},"passwd -u <用户名>")," 解锁必要的账号。")),Object(b.b)("h2",{className:"__internal",id:"12-检查特殊账号"},"1.2 检查特殊账号",Object(b.b)("a",s({parentName:"h2"},{href:"#12-%E6%A3%80%E6%9F%A5%E7%89%B9%E6%AE%8A%E8%B4%A6%E5%8F%B7","aria-hidden":!0,className:"anchor"}),"#")),Object(b.b)("p",null,"检查是否存在空口令和root权限的账号。"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"操作步骤")),Object(b.b)("ol",null,Object(b.b)("li",s({parentName:"ol"},{className:"__internal"}),"查看空口令和root权限账号，确认是否存在异常账号：",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",s({parentName:"ul"},{className:"__internal"}),"使用命令 ",Object(b.b)("inlineCode",{parentName:"li"},"awk -F: '($2==\"\")' /etc/shadow")," 查看空口令账号。"),Object(b.b)("li",s({parentName:"ul"},{className:"__internal"}),"使用命令 ",Object(b.b)("inlineCode",{parentName:"li"},"awk -F: '($3==0)' /etc/passwd")," 查看UID为零的账号。"))),Object(b.b)("li",s({parentName:"ol"},{className:"__internal"}),"加固空口令账号：",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",s({parentName:"ul"},{className:"__internal"}),"使用命令 ",Object(b.b)("inlineCode",{parentName:"li"},"passwd <用户名>")," 为空口令账号设定密码。"),Object(b.b)("li",s({parentName:"ul"},{className:"__internal"}),"确认UID为零的账号只有root账号。")))),Object(b.b)("h2",{className:"__internal",id:"13-添加口令策略"},"1.3 添加口令策略",Object(b.b)("a",s({parentName:"h2"},{href:"#13-%E6%B7%BB%E5%8A%A0%E5%8F%A3%E4%BB%A4%E7%AD%96%E7%95%A5","aria-hidden":!0,className:"anchor"}),"#")),Object(b.b)("p",null,"加强口令的复杂度等，降低被猜解的可能性。"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"操作步骤")),Object(b.b)("ol",null,Object(b.b)("li",s({parentName:"ol"},{className:"__internal"}),Object(b.b)("p",{parentName:"li"},"使用命令"),Object(b.b)("div",s({parentName:"li"},{className:"rcpress-highlight","data-language":"bash"}),Object(b.b)("pre",s({parentName:"div"},{className:"language-bash"}),Object(b.b)("code",s({parentName:"pre"},{className:"language-bash"}),Object(b.b)("span",s({parentName:"code"},{className:"token function"}),"vi")," /etc/login.defs"))),Object(b.b)("p",{parentName:"li"},"修改配置文件。"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",s({parentName:"ul"},{className:"__internal"}),Object(b.b)("inlineCode",{parentName:"li"},"PASS_MAX_DAYS 90 #新建用户的密码最长使用天数")),Object(b.b)("li",s({parentName:"ul"},{className:"__internal"}),Object(b.b)("inlineCode",{parentName:"li"},"PASS_MIN_DAYS 0 #新建用户的密码最短使用天数")),Object(b.b)("li",s({parentName:"ul"},{className:"__internal"}),Object(b.b)("inlineCode",{parentName:"li"},"PASS_WARN_AGE 7 #新建用户的密码到期提前提醒天数")))),Object(b.b)("li",s({parentName:"ol"},{className:"__internal"}),Object(b.b)("p",{parentName:"li"},"使用chage命令修改用户设置。\n例如，",Object(b.b)("inlineCode",{parentName:"p"},"chage -m 0 -M 30 -E 2000-01-01 -W 7 <用户名>"),"表示将此用户的密码最长使用天数设为30，最短使用天数设为0，密码2000年1月1日过期，过期前七天警告用户。")),Object(b.b)("li",s({parentName:"ol"},{className:"__internal"}),Object(b.b)("p",{parentName:"li"},"设置连续输错三次密码，账号锁定五分钟。使用命令 ",Object(b.b)("inlineCode",{parentName:"p"},"vi /etc/pam.d/common-auth"),"修改配置文件，在配置文件中添加 ",Object(b.b)("inlineCode",{parentName:"p"},"auth required pam_tally.so onerr=fail deny=3 unlock_time=300"),"。"))),Object(b.b)("h2",{className:"__internal",id:"14-限制用户su"},"1.4 限制用户su",Object(b.b)("a",s({parentName:"h2"},{href:"#14-%E9%99%90%E5%88%B6%E7%94%A8%E6%88%B7su","aria-hidden":!0,className:"anchor"}),"#")),Object(b.b)("p",null,"限制能su到root的用户。"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"操作步骤")),Object(b.b)("p",null,"使用命令 ",Object(b.b)("inlineCode",{parentName:"p"},"vi /etc/pam.d/su"),"修改配置文件，在配置文件中添加行。例如，只允许test组用户su到root，则添加 ",Object(b.b)("inlineCode",{parentName:"p"},"auth required pam_wheel.so group=test"),"。"),Object(b.b)("h2",{className:"__internal",id:"14-禁止root用户直接登录"},"1.4 禁止root用户直接登录",Object(b.b)("a",s({parentName:"h2"},{href:"#14-%E7%A6%81%E6%AD%A2root%E7%94%A8%E6%88%B7%E7%9B%B4%E6%8E%A5%E7%99%BB%E5%BD%95","aria-hidden":!0,className:"anchor"}),"#")),Object(b.b)("p",null,"限制root用户直接登录。"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"操作步骤")),Object(b.b)("ol",null,Object(b.b)("li",s({parentName:"ol"},{className:"__internal"}),"创建普通权限账号并配置密码,防止无法远程登录;"),Object(b.b)("li",s({parentName:"ol"},{className:"__internal"}),"使用命令 ",Object(b.b)("inlineCode",{parentName:"li"},"vi /etc/ssh/sshd_config"),"修改配置文件将PermitRootLogin的值改成no，并保存，然后使用",Object(b.b)("inlineCode",{parentName:"li"},"service sshd restart"),"重启服务。")),Object(b.b)("h1",{className:"__internal",id:"服务"},"服务",Object(b.b)("a",s({parentName:"h1"},{href:"#%E6%9C%8D%E5%8A%A1","aria-hidden":!0,className:"anchor"}),"#")),Object(b.b)("h2",{className:"__internal",id:"21-关闭不必要的服务"},"2.1 关闭不必要的服务",Object(b.b)("a",s({parentName:"h2"},{href:"#21-%E5%85%B3%E9%97%AD%E4%B8%8D%E5%BF%85%E8%A6%81%E7%9A%84%E6%9C%8D%E5%8A%A1","aria-hidden":!0,className:"anchor"}),"#")),Object(b.b)("p",null,"关闭不必要的服务（如普通服务和xinetd服务），降低风险。"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"操作步骤")),Object(b.b)("p",null,"使用命令",Object(b.b)("inlineCode",{parentName:"p"},"systemctl disable <服务名>"),"设置服务在开机时不自动启动。"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"说明"),"： "),Object(b.b)("p",null,"对于部分老版本的Linux操作系统（如CentOS 6），可以使用命令",Object(b.b)("inlineCode",{parentName:"p"},"chkconfig --level  <服务名> off")),Object(b.b)("p",null,"设置服务在指定init级别下开机时不自动启动。"),Object(b.b)("h2",{className:"__internal",id:"22-ssh服务安全"},"2.2 SSH服务安全",Object(b.b)("a",s({parentName:"h2"},{href:"#22-ssh%E6%9C%8D%E5%8A%A1%E5%AE%89%E5%85%A8","aria-hidden":!0,className:"anchor"}),"#")),Object(b.b)("p",null,"对SSH服务进行安全加固，防止暴力破解成功。"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"操作步骤")),Object(b.b)("p",null,"使用命令 ",Object(b.b)("inlineCode",{parentName:"p"},"vim /etc/ssh/sshd_config")," 编辑配置文件。"),Object(b.b)("ul",null,Object(b.b)("li",s({parentName:"ul"},{className:"__internal"}),"不允许root账号直接登录系统。\n设置 PermitRootLogin 的值为 no。"),Object(b.b)("li",s({parentName:"ul"},{className:"__internal"}),"修改SSH使用的协议版本。\n设置 Protocol 的版本为 2。"),Object(b.b)("li",s({parentName:"ul"},{className:"__internal"}),"修改允许密码错误次数（默认6次）。\n设置 MaxAuthTries 的值为 3。")),Object(b.b)("p",null,"配置文件修改完成后，重启sshd服务生效。"),Object(b.b)("h1",{className:"__internal",id:"文件系统"},"文件系统",Object(b.b)("a",s({parentName:"h1"},{href:"#%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F","aria-hidden":!0,className:"anchor"}),"#")),Object(b.b)("h2",{className:"__internal",id:"linux文件系统文件格式分类"},"Linux文件系统文件格式分类",Object(b.b)("a",s({parentName:"h2"},{href:"#linux%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F%E6%96%87%E4%BB%B6%E6%A0%BC%E5%BC%8F%E5%88%86%E7%B1%BB","aria-hidden":!0,className:"anchor"}),"#")),Object(b.b)("div",{className:"rcpress-highlight","data-language":"bash"},Object(b.b)("pre",s({parentName:"div"},{className:"language-bash"}),Object(b.b)("code",s({parentName:"pre"},{className:"language-bash"}),Object(b.b)("span",s({parentName:"code"},{className:"token function"}),"df")," -T\t",Object(b.b)("span",s({parentName:"code"},{className:"token comment"}),"#查看已经挂载的分区和文件系统类型")))),Object(b.b)("h4",{className:"__internal",id:"常见的文件系统有："},Object(b.b)("strong",{parentName:"h4"},"常见的文件系统有："),Object(b.b)("a",s({parentName:"h4"},{href:"#%E5%B8%B8%E8%A7%81%E7%9A%84%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F%E6%9C%89%EF%BC%9A","aria-hidden":!0,className:"anchor"}),"#")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"ext4："),"4级扩展文件系统，启动快，文件易恢复；"),Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"ReiserFS："),"日志型文件系统，效率高；"),Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"NTF："),"网络文件系统，一种分布式文件系统，不同机器能共享文件"),Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"tmpfs："),"临时文件系统，是一种基于内存的文件系统 "),Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"xfs："),"一种高性能日志系统")),Object(b.b)("h4",{className:"__internal",id:"常见文件格式有："},Object(b.b)("strong",{parentName:"h4"},"常见文件格式有："),Object(b.b)("a",s({parentName:"h4"},{href:"#%E5%B8%B8%E8%A7%81%E6%96%87%E4%BB%B6%E6%A0%BC%E5%BC%8F%E6%9C%89%EF%BC%9A","aria-hidden":!0,className:"anchor"}),"#")),Object(b.b)("div",{className:"rcpress-highlight","data-language":"bash"},Object(b.b)("pre",s({parentName:"div"},{className:"language-bash"}),Object(b.b)("code",s({parentName:"pre"},{className:"language-bash"}),Object(b.b)("span",s({parentName:"code"},{className:"token function"}),"file")," *\t",Object(b.b)("span",s({parentName:"code"},{className:"token comment"}),"#查看文件详细信息，格式类型")))),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"}," ",Object(b.b)("strong",{parentName:"p"},"ASCII text"),"\t  纯文本文件"),Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"binary(ELF)"),"\t二进制文件"),Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"data"),"\t数据文件"),Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"directory"),"\t目录文件"),Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"symbolic link"),"\t链接文件"),Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"block special"),"\t块设备文件( 硬盘 )"),Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"character special"),"\t字符设备文件（即串行端口的接口设备，例如键盘、鼠标 ）"),Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"socket"),"\t套接字文件（ 通常用在网络数据连接 ）")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"检查系统中存在的 SUID 和 SGID 程序")),Object(b.b)("div",{className:"rcpress-highlight","data-language":"bash"},Object(b.b)("pre",s({parentName:"div"},{className:"language-bash"}),Object(b.b)("code",s({parentName:"pre"},{className:"language-bash"}),Object(b.b)("span",s({parentName:"code"},{className:"token function"}),"find")," / -perm +6000"))),Object(b.b)("h2",{className:"__internal",id:"31-设置umask值"},"3.1 设置umask值",Object(b.b)("a",s({parentName:"h2"},{href:"#31-%E8%AE%BE%E7%BD%AEumask%E5%80%BC","aria-hidden":!0,className:"anchor"}),"#")),Object(b.b)("p",null,"设置默认的umask值，增强安全性。"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"操作步骤")),Object(b.b)("p",null,"使用命令 ",Object(b.b)("inlineCode",{parentName:"p"},"vi /etc/profile")," 修改配置文件，添加行 ",Object(b.b)("inlineCode",{parentName:"p"},"umask 027"),"， 即新创建的文件属主拥有读写执行权限；"),Object(b.b)("p",null,"同组用户拥有读和执行权限，其他用户无权限。"),Object(b.b)("h2",{className:"__internal",id:"32-设置登录超时"},"3.2 设置登录超时",Object(b.b)("a",s({parentName:"h2"},{href:"#32-%E8%AE%BE%E7%BD%AE%E7%99%BB%E5%BD%95%E8%B6%85%E6%97%B6","aria-hidden":!0,className:"anchor"}),"#")),Object(b.b)("p",null,"设置系统登录后，连接超时时间，增强安全性。"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"操作步骤")),Object(b.b)("p",null,"使用命令 ",Object(b.b)("inlineCode",{parentName:"p"},"vi /etc/profile")," 修改配置文件，将以 ",Object(b.b)("inlineCode",{parentName:"p"},"TMOUT=")," 开头的行注释，设置为",Object(b.b)("inlineCode",{parentName:"p"},"TMOUT=180"),"，即超时时间为三分钟。"),Object(b.b)("h1",{className:"__internal",id:"日志"},"日志",Object(b.b)("a",s({parentName:"h1"},{href:"#%E6%97%A5%E5%BF%97","aria-hidden":!0,className:"anchor"}),"#")),Object(b.b)("h2",{className:"__internal",id:"41-syslogd日志"},"4.1 syslogd日志",Object(b.b)("a",s({parentName:"h2"},{href:"#41-syslogd%E6%97%A5%E5%BF%97","aria-hidden":!0,className:"anchor"}),"#")),Object(b.b)("p",null,"启用日志功能，并配置日志记录。"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"操作步骤")),Object(b.b)("p",null,"Linux系统默认启用以下类型日志："),Object(b.b)("ul",null,Object(b.b)("li",s({parentName:"ul"},{className:"__internal"}),"系统日志（默认）/var/log/messages"),Object(b.b)("li",s({parentName:"ul"},{className:"__internal"}),"cron日志（默认）/var/log/cron"),Object(b.b)("li",s({parentName:"ul"},{className:"__internal"}),"安全日志（默认）/var/log/secure")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"注意"),"："),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"部分系统可能使用syslog-ng日志，配置文件为：/etc/syslog-ng/syslog-ng.conf，可以根据需求配置详细日志。")),Object(b.b)("p",null,"日志默认存放位置：/var/log/"),Object(b.b)("p",null,"查看日志配置情况：more /etc/rsyslog.conf"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",s({parentName:"tr"},{align:"center"}),"日志文件"),Object(b.b)("th",s({parentName:"tr"},{align:"center"}),"说明"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",s({parentName:"tr"},{align:"center"}),"/var/log/cron"),Object(b.b)("td",s({parentName:"tr"},{align:"center"}),"记录系统定时任务相关的日志")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",s({parentName:"tr"},{align:"center"}),"/var/log/messages"),Object(b.b)("td",s({parentName:"tr"},{align:"center"}),"记录Linux操作系统常见的系统和服务错误信息(首要检查对象)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",s({parentName:"tr"},{align:"center"}),"/var/log/btmp"),Object(b.b)("td",s({parentName:"tr"},{align:"center"}),"记录",Object(b.b)("strong",{parentName:"td"},"错误登录（登陆失败）"),"日志；使用",Object(b.b)("strong",{parentName:"td"},"lastb"),"命令查看")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",s({parentName:"tr"},{align:"center"}),"/var/log/lastlog"),Object(b.b)("td",s({parentName:"tr"},{align:"center"}),"记录系统中所有用户最后一次成功登录时间，使用",Object(b.b)("strong",{parentName:"td"},"lastlog"),"命令查看")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",s({parentName:"tr"},{align:"center"}),"/var/log/wtmp"),Object(b.b)("td",s({parentName:"tr"},{align:"center"}),"永久记录所有用户的登录、注销信息，同时记录系统的启动、重启、关机事件；用",Object(b.b)("strong",{parentName:"td"},"last"),"命令来查看")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",s({parentName:"tr"},{align:"center"}),"/var/log/utmp"),Object(b.b)("td",s({parentName:"tr"},{align:"center"}),"只记录",Object(b.b)("strong",{parentName:"td"},"当前登录用户"),"的信息；使用",Object(b.b)("strong",{parentName:"td"},"w,who,users"),"等命令来查询")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",s({parentName:"tr"},{align:"center"}),"/var/log/secure"),Object(b.b)("td",s({parentName:"tr"},{align:"center"}),"记录验证和授权方面的信息，如SSH登录，su切换用户，sudo授权，甚至添加用户和修改用户密码")))),Object(b.b)("h3",{className:"__internal",id:"varlogsyslog："},"var/log/syslog：",Object(b.b)("a",s({parentName:"h3"},{href:"#varlogsyslog%EF%BC%9A","aria-hidden":!0,className:"anchor"}),"#")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"只记录警告信息，常常是系统出问题的信息；")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"syslog是Linux系统默认的日志守护进程"),Object(b.b)("p",{parentName:"blockquote"},"默认的syslog配置文件是/etc/sysctl.conf文件"),Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"syslog不可以使用vi等工具直接查看，它是二进制文件，使用 lastlog 查看"))),Object(b.b)("p",null,"默认Centos，Fedora不生成该日志文件，但可以配置让系统生成该日志文件"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"/etc/rsyslog.conf"),"文件中加上：",Object(b.b)("inlineCode",{parentName:"p"},"*.warning /var/log/syslog")," "),Object(b.b)("p",null,"该日志文件能记录当用户登录时login记录下的错误口令、Sendmail的问题、su命令执行失败等信息 "),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"正确清空syslog日志的方式")),Object(b.b)("div",{className:"rcpress-highlight","data-language":"bash"},Object(b.b)("pre",s({parentName:"div"},{className:"language-bash"}),Object(b.b)("code",s({parentName:"pre"},{className:"language-bash"}),Object(b.b)("span",s({parentName:"code"},{className:"token function"}),"cat")," /dev/null ",Object(b.b)("span",s({parentName:"code"},{className:"token operator"}),">")," /etc/init.d/syslog"))),Object(b.b)("h2",{className:"__internal",id:"42-记录所有用户的登录和操作日志"},"4.2 记录所有用户的登录和操作日志",Object(b.b)("a",s({parentName:"h2"},{href:"#42-%E8%AE%B0%E5%BD%95%E6%89%80%E6%9C%89%E7%94%A8%E6%88%B7%E7%9A%84%E7%99%BB%E5%BD%95%E5%92%8C%E6%93%8D%E4%BD%9C%E6%97%A5%E5%BF%97","aria-hidden":!0,className:"anchor"}),"#")),Object(b.b)("p",null,"通过脚本代码实现记录所有用户的登录操作日志，防止出现安全事件后无据可查。"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"操作步骤")),Object(b.b)("ol",null,Object(b.b)("li",s({parentName:"ol"},{className:"__internal"}),Object(b.b)("p",{parentName:"li"},"运行 ",Object(b.b)("inlineCode",{parentName:"p"},"[root@xxx /]# vim /etc/profile"),"打开配置文件。")),Object(b.b)("li",s({parentName:"ol"},{className:"__internal"}),Object(b.b)("p",{parentName:"li"},"在配置文件中输入以下内容："),Object(b.b)("div",s({parentName:"li"},{className:"rcpress-highlight","data-language":"bash"}),Object(b.b)("pre",s({parentName:"div"},{className:"language-bash"}),Object(b.b)("code",s({parentName:"pre"},{className:"language-bash"})," ",Object(b.b)("span",s({parentName:"code"},{className:"token function"}),"history"),"\n ",Object(b.b)("span",s({parentName:"code"},{className:"token assign-left variable"}),Object(b.b)("span",s({parentName:"span"},{className:"token environment constant"}),"USER")),Object(b.b)("span",s({parentName:"code"},{className:"token operator"}),"="),Object(b.b)("span",s({parentName:"code"},{className:"token variable"}),Object(b.b)("span",s({parentName:"span"},{className:"token variable"}),"`"),Object(b.b)("span",s({parentName:"span"},{className:"token function"}),"whoami"),Object(b.b)("span",s({parentName:"span"},{className:"token variable"}),"`")),"\n ",Object(b.b)("span",s({parentName:"code"},{className:"token assign-left variable"}),"USER_IP"),Object(b.b)("span",s({parentName:"code"},{className:"token operator"}),"="),Object(b.b)("span",s({parentName:"code"},{className:"token variable"}),Object(b.b)("span",s({parentName:"span"},{className:"token variable"}),"`"),Object(b.b)("span",s({parentName:"span"},{className:"token function"}),"who")," -u am i ",Object(b.b)("span",s({parentName:"span"},{className:"token operator"}),Object(b.b)("span",s({parentName:"span"},{className:"token file-descriptor important"}),"2"),">"),"/dev/null",Object(b.b)("span",s({parentName:"span"},{className:"token operator"}),"|")," ",Object(b.b)("span",s({parentName:"span"},{className:"token function"}),"awk")," ",Object(b.b)("span",s({parentName:"span"},{className:"token string"}),"'{print ",Object(b.b)("span",s({parentName:"span"},{className:"token variable"}),"$NF"),"}'"),Object(b.b)("span",s({parentName:"span"},{className:"token operator"}),"|"),Object(b.b)("span",s({parentName:"span"},{className:"token function"}),"sed")," -e ",Object(b.b)("span",s({parentName:"span"},{className:"token string"}),"'s/[()]//g'"),Object(b.b)("span",s({parentName:"span"},{className:"token variable"}),"`")),"\n ",Object(b.b)("span",s({parentName:"code"},{className:"token keyword"}),"if")," ",Object(b.b)("span",s({parentName:"code"},{className:"token punctuation"}),"[")," ",Object(b.b)("span",s({parentName:"code"},{className:"token string"}),'"',Object(b.b)("span",s({parentName:"span"},{className:"token variable"}),"$USER_IP"),'"')," ",Object(b.b)("span",s({parentName:"code"},{className:"token operator"}),"=")," ",Object(b.b)("span",s({parentName:"code"},{className:"token string"}),'""')," ",Object(b.b)("span",s({parentName:"code"},{className:"token punctuation"}),"]"),Object(b.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")," ",Object(b.b)("span",s({parentName:"code"},{className:"token keyword"}),"then"),"\n ",Object(b.b)("span",s({parentName:"code"},{className:"token assign-left variable"}),"USER_IP"),Object(b.b)("span",s({parentName:"code"},{className:"token operator"}),"="),Object(b.b)("span",s({parentName:"code"},{className:"token variable"}),Object(b.b)("span",s({parentName:"span"},{className:"token variable"}),"`"),Object(b.b)("span",s({parentName:"span"},{className:"token function"}),"hostname"),Object(b.b)("span",s({parentName:"span"},{className:"token variable"}),"`")),"\n ",Object(b.b)("span",s({parentName:"code"},{className:"token keyword"}),"fi"),"\n ",Object(b.b)("span",s({parentName:"code"},{className:"token keyword"}),"if")," ",Object(b.b)("span",s({parentName:"code"},{className:"token punctuation"}),"[")," ",Object(b.b)("span",s({parentName:"code"},{className:"token operator"}),"!")," -d /var/log/history ",Object(b.b)("span",s({parentName:"code"},{className:"token punctuation"}),"]"),Object(b.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")," ",Object(b.b)("span",s({parentName:"code"},{className:"token keyword"}),"then"),"\n ",Object(b.b)("span",s({parentName:"code"},{className:"token function"}),"mkdir")," /var/log/history\n ",Object(b.b)("span",s({parentName:"code"},{className:"token function"}),"chmod")," ",Object(b.b)("span",s({parentName:"code"},{className:"token number"}),"777")," /var/log/history\n ",Object(b.b)("span",s({parentName:"code"},{className:"token keyword"}),"fi"),"\n ",Object(b.b)("span",s({parentName:"code"},{className:"token keyword"}),"if")," ",Object(b.b)("span",s({parentName:"code"},{className:"token punctuation"}),"[")," ",Object(b.b)("span",s({parentName:"code"},{className:"token operator"}),"!")," -d /var/log/history/",Object(b.b)("span",s({parentName:"code"},{className:"token variable"}),"${",Object(b.b)("span",s({parentName:"span"},{className:"token environment constant"}),"LOGNAME"),"}")," ",Object(b.b)("span",s({parentName:"code"},{className:"token punctuation"}),"]"),Object(b.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")," ",Object(b.b)("span",s({parentName:"code"},{className:"token keyword"}),"then"),"\n ",Object(b.b)("span",s({parentName:"code"},{className:"token function"}),"mkdir")," /var/log/history/",Object(b.b)("span",s({parentName:"code"},{className:"token variable"}),"${",Object(b.b)("span",s({parentName:"span"},{className:"token environment constant"}),"LOGNAME"),"}"),"\n ",Object(b.b)("span",s({parentName:"code"},{className:"token function"}),"chmod")," ",Object(b.b)("span",s({parentName:"code"},{className:"token number"}),"300")," /var/log/history/",Object(b.b)("span",s({parentName:"code"},{className:"token variable"}),"${",Object(b.b)("span",s({parentName:"span"},{className:"token environment constant"}),"LOGNAME"),"}"),"\n ",Object(b.b)("span",s({parentName:"code"},{className:"token keyword"}),"fi"),"\n ",Object(b.b)("span",s({parentName:"code"},{className:"token builtin class-name"}),"export")," ",Object(b.b)("span",s({parentName:"code"},{className:"token assign-left variable"}),Object(b.b)("span",s({parentName:"span"},{className:"token environment constant"}),"HISTSIZE")),Object(b.b)("span",s({parentName:"code"},{className:"token operator"}),"="),Object(b.b)("span",s({parentName:"code"},{className:"token number"}),"4096"),"\n ",Object(b.b)("span",s({parentName:"code"},{className:"token assign-left variable"}),"DT"),Object(b.b)("span",s({parentName:"code"},{className:"token operator"}),"="),Object(b.b)("span",s({parentName:"code"},{className:"token variable"}),Object(b.b)("span",s({parentName:"span"},{className:"token variable"}),"`"),Object(b.b)("span",s({parentName:"span"},{className:"token function"}),"date")," +",Object(b.b)("span",s({parentName:"span"},{className:"token string"}),'"%Y%m%d_%H:%M:%S"'),Object(b.b)("span",s({parentName:"span"},{className:"token variable"}),"`")),"\n ",Object(b.b)("span",s({parentName:"code"},{className:"token builtin class-name"}),"export")," ",Object(b.b)("span",s({parentName:"code"},{className:"token assign-left variable"}),Object(b.b)("span",s({parentName:"span"},{className:"token environment constant"}),"HISTFILE")),Object(b.b)("span",s({parentName:"code"},{className:"token operator"}),"="),Object(b.b)("span",s({parentName:"code"},{className:"token string"}),'"/var/log/history/',Object(b.b)("span",s({parentName:"span"},{className:"token variable"}),"${",Object(b.b)("span",s({parentName:"span"},{className:"token environment constant"}),"LOGNAME"),"}"),"/",Object(b.b)("span",s({parentName:"span"},{className:"token variable"}),"${",Object(b.b)("span",s({parentName:"span"},{className:"token environment constant"}),"USER"),"}"),"@",Object(b.b)("span",s({parentName:"span"},{className:"token variable"}),"${USER_IP}"),"_",Object(b.b)("span",s({parentName:"span"},{className:"token variable"}),"$DT"),'"'),"\n ",Object(b.b)("span",s({parentName:"code"},{className:"token function"}),"chmod")," ",Object(b.b)("span",s({parentName:"code"},{className:"token number"}),"600")," /var/log/history/",Object(b.b)("span",s({parentName:"code"},{className:"token variable"}),"${",Object(b.b)("span",s({parentName:"span"},{className:"token environment constant"}),"LOGNAME"),"}"),"/*history* ",Object(b.b)("span",s({parentName:"code"},{className:"token operator"}),Object(b.b)("span",s({parentName:"span"},{className:"token file-descriptor important"}),"2"),">"),"/dev/null")))),Object(b.b)("li",s({parentName:"ol"},{className:"__internal"}),Object(b.b)("p",{parentName:"li"},"运行 ",Object(b.b)("inlineCode",{parentName:"p"},"[root@xxx /]# source /etc/profile")," 加载配置生效。\n",Object(b.b)("strong",{parentName:"p"},"注意"),"： /var/log/history 是记录日志的存放位置，可以自定义。"))),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"通过上述步骤，可以在 /var/log/history 目录下以每个用户为名新建一个文件夹；"),Object(b.b)("p",{parentName:"blockquote"},"每次用户退出后都会产生以用户名、登录IP、时间的日志文件，包含此用户本次的所有操作（root用户除外）"),Object(b.b)("p",{parentName:"blockquote"},"同时，建议使用OSS服务收集存储日志。")),Object(b.b)("h2",{className:"__internal",id:"43日志审计方法"},"4.3日志审计方法",Object(b.b)("a",s({parentName:"h2"},{href:"#43%E6%97%A5%E5%BF%97%E5%AE%A1%E8%AE%A1%E6%96%B9%E6%B3%95","aria-hidden":!0,className:"anchor"}),"#")),Object(b.b)("div",{className:"rcpress-highlight","data-language":"bash"},Object(b.b)("pre",s({parentName:"div"},{className:"language-bash"}),Object(b.b)("code",s({parentName:"pre"},{className:"language-bash"}),Object(b.b)("span",s({parentName:"code"},{className:"token comment"}),"#查询ssh登录记录"),"\n",Object(b.b)("span",s({parentName:"code"},{className:"token function"}),"more")," /var/log/secure\n\n",Object(b.b)("span",s({parentName:"code"},{className:"token comment"}),"#安装软件的日志-> Centos"),"\n",Object(b.b)("span",s({parentName:"code"},{className:"token function"}),"more")," /var/log/yum.log\n",Object(b.b)("span",s({parentName:"code"},{className:"token comment"}),"#安装软件的日志-> Ubuntu"),"\n",Object(b.b)("span",s({parentName:"code"},{className:"token function"}),"more")," /var/log/apt/"))),Object(b.b)("h3",{className:"__internal",id:"相关工具：elk、goaccess"},"相关工具：",Object(b.b)("a",s({parentName:"h3"},{href:"https://www.elastic.co/cn/products/",target:"_blank"}),"ELK"),"、",Object(b.b)("a",s({parentName:"h3"},{href:"https://goaccess.cc/",target:"_blank"}),"Goaccess"),Object(b.b)("a",s({parentName:"h3"},{href:"#%E7%9B%B8%E5%85%B3%E5%B7%A5%E5%85%B7%EF%BC%9Aelk%E3%80%81goaccess","aria-hidden":!0,className:"anchor"}),"#")),Object(b.b)("h1",{className:"__internal",id:"ip协议安全要求"},"IP协议安全要求",Object(b.b)("a",s({parentName:"h1"},{href:"#ip%E5%8D%8F%E8%AE%AE%E5%AE%89%E5%85%A8%E8%A6%81%E6%B1%82","aria-hidden":!0,className:"anchor"}),"#")),Object(b.b)("blockquote",null,Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",s({parentName:"ul"},{className:"__internal"}),"远程登录取消telnet采用ssh"),Object(b.b)("li",s({parentName:"ul"},{className:"__internal"}),"设置/etc/hosts.allow和deny"),Object(b.b)("li",s({parentName:"ul"},{className:"__internal"}),"禁止ICMP重定向"),Object(b.b)("li",s({parentName:"ul"},{className:"__internal"}),"禁止源路由转发"),Object(b.b)("li",s({parentName:"ul"},{className:"__internal"}),"防ssh破解，iptables(对已经建立的所有链接都放行，限制每分钟连接ssh的次数)+denyhost(添加ip拒绝访问)"))))}i.isMDXComponent=!0,i=Object(c.hot)(e)(i),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(p,"makeShortcode","E:\\Code\\Project\\wgpsec\\WgpsecWiki\\docs\\knowledge\\hw\\linux-baselinesec.md"),l.register(m,"layoutProps","E:\\Code\\Project\\wgpsec\\WgpsecWiki\\docs\\knowledge\\hw\\linux-baselinesec.md"),l.register(N,"MDXLayout","E:\\Code\\Project\\wgpsec\\WgpsecWiki\\docs\\knowledge\\hw\\linux-baselinesec.md"),l.register(i,"MDXContent","E:\\Code\\Project\\wgpsec\\WgpsecWiki\\docs\\knowledge\\hw\\linux-baselinesec.md")),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&o(e)}.call(this,t(23)(e))}}]);