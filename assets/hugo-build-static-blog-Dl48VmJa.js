import{u as o,_ as r}from"./WrapperPost.vue_vue_type_script_setup_true_lang-DdweoeRH.js";import{o as g,c as d,w as e,a as s,b as t,d as u,_ as h}from"./app-BxHlxSeQ.js";const p={class:"prose m-auto slide-enter-content"},y={__name:"hugo-build-static-blog",setup(f){const a={title:"使用hugo搭建静态博客",date:"2023-01-28T03:13:35.000Z",lang:"zh",meta:[{property:"og:title",content:"使用hugo搭建静态博客"},{name:"twitter:title",content:"使用hugo搭建静态博客"}]};return o({title:"使用hugo搭建静态博客",meta:[{property:"og:title",content:"使用hugo搭建静态博客"},{name:"twitter:title",content:"使用hugo搭建静态博客"}]}),(b,l)=>{const n=h,i=r;return g(),d(i,{frontmatter:a},{default:e(()=>[s("div",p,[l[5]||(l[5]=s("div",{class:"table-of-contents"},[s("div",{class:"table-of-contents-anchor"},[s("div",{class:"i-line-md-align-left"})]),s("ul",null,[s("li",null,[s("a",{href:"#什么是hugo？"},"什么是Hugo？ ")]),s("li",null,[s("a",{href:"#安装hugo"},"安装Hugo ")]),s("li",null,[s("a",{href:"#生成站点"},"生成站点 ")]),s("li",null,[s("a",{href:"#安装主题"},"安装主题 ")]),s("li",null,[s("a",{href:"#本地调试和预览"},"本地调试和预览 ")]),s("li",null,[s("a",{href:"#构建网站"},"构建网站 ")])])],-1)),l[6]||(l[6]=s("h2",{id:"什么是hugo？",tabindex:"-1"},[t("什么是Hugo？ "),s("a",{class:"header-anchor",href:"#什么是hugo？","aria-hidden":"true"},"#")],-1)),l[7]||(l[7]=s("p",null,[s("a",{href:"https://gohugo.io/",target:"_blank",rel:"noopener"},"Hugo"),t("是一个快速且灵活的静态网站生成器，用于创建博客、文档和其他类型的网站。它使用Go语言编写，具有高性能和简便的使用体验，允许用户通过 Markdown 文件来管理内容，并支持主题定制和多种输出格式。")],-1)),l[8]||(l[8]=s("h2",{id:"安装hugo",tabindex:"-1"},[t("安装Hugo "),s("a",{class:"header-anchor",href:"#安装hugo","aria-hidden":"true"},"#")],-1)),l[9]||(l[9]=s("p",null,[t("安装方式有很多种，参考"),s("a",{href:"https://gohugo.io/installation/",target:"_blank",rel:"noopener"},"官方文档"),t("安装即可，Windows可下载对应的操作系统版本的Hugo二进制文件，并将二进制文件的放置路径配置在环境变量中，即可使用Hugo CLI来快速创建静态网站。")],-1)),l[10]||(l[10]=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--s-dark":"#dbd7caee","--s-light":"#393a34","--s-dark-bg":"#121212","--s-light-bg":"#ffffff"},tabindex:"0"},[s("code",{class:"language-bash"},[s("span",{class:"line"},[s("span",{style:{"--s-dark":"#80A665","--s-light":"#59873A"}},"hugo"),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}}," version"),s("span",{style:{"--s-dark":"#758575DD","--s-light":"#A0ADA0"}}," # 查看版本，验证安装情况")])])],-1)),l[11]||(l[11]=s("h2",{id:"生成站点",tabindex:"-1"},[t("生成站点 "),s("a",{class:"header-anchor",href:"#生成站点","aria-hidden":"true"},"#")],-1)),l[12]||(l[12]=s("p",null,"安装完成后，使用下面命令生成站点。",-1)),l[13]||(l[13]=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--s-dark":"#dbd7caee","--s-light":"#393a34","--s-dark-bg":"#121212","--s-light-bg":"#ffffff"},tabindex:"0"},[s("code",{class:"language-bash"},[s("span",{class:"line"},[s("span",{style:{"--s-dark":"#80A665","--s-light":"#59873A"}},"hugo"),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}}," new"),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}}," site"),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}}," blogDemo"),s("span",{style:{"--s-dark":"#758575DD","--s-light":"#A0ADA0"}}," # 使用Hugo新建blogDemo项目，名称可自定义")])])],-1)),l[14]||(l[14]=s("p",null,"用 Hugo 创建的网站共有 7 个文件夹和 1 个文件，这些文件分别代表：",-1)),l[15]||(l[15]=s("ul",null,[s("li",null,[s("p",null,[s("strong",null,"archetypes"),t("：存放用 hugo 命令新建的 Markdown 文件应用的 front matter 模版")])]),s("li",null,[s("p",null,[s("strong",null,"content"),t("：存放内容页面，比如博客、笔记等")])]),s("li",null,[s("p",null,[s("strong",null,"layouts"),t("：存放定义网站的样式，写在"),s("code",null,"layouts"),t("文件下的样式会覆盖安装的主题中的 "),s("code",null,"layouts"),t("文件同名的样式")])]),s("li",null,[s("p",null,[s("strong",null,"static"),t("：存放所有静态文件，如图片")])]),s("li",null,[s("p",null,[s("strong",null,"data"),t("：存放创建站点时 Hugo 使用的其他数据")])]),s("li",null,[s("p",null,[s("strong",null,"public"),t("：存放 Hugo 生成的静态网页")])]),s("li",null,[s("p",null,[s("strong",null,"themes"),t("：存放主题文件")])]),s("li",null,[s("p",null,[s("strong",null,"config.toml"),t("：网站配置文件")])])],-1)),l[16]||(l[16]=s("div",{class:"markdown-alert markdown-alert-important"},[s("p",{class:"markdown-alert-title"},[s("svg",{class:"octicon octicon-report mr-2",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true"},[s("path",{d:"M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Zm7 2.25v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"})]),t("Important")]),s("p",null,[t("创建完项目后,在使用"),s("code",null,"hugo"),t("命令时，当前目录下必须要有配置文件，即"),s("code",null,"config.toml")])],-1)),l[17]||(l[17]=s("p",null,[t("新建完成后进入"),s("strong",null,"blogDemo"),t("目录可以看到网站的文件目录。")],-1)),l[18]||(l[18]=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--s-dark":"#dbd7caee","--s-light":"#393a34","--s-dark-bg":"#121212","--s-light-bg":"#ffffff"},tabindex:"0"},[s("code",{class:"language-bash"},[s("span",{class:"line"},[s("span",{style:{"--s-dark":"#B8A965","--s-light":"#998418"}},"cd"),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}}," blogDemo"),s("span",{style:{"--s-dark":"#758575DD","--s-light":"#A0ADA0"}}," # 进入blogDemo目录")])])],-1)),l[19]||(l[19]=s("h2",{id:"安装主题",tabindex:"-1"},[t("安装主题 "),s("a",{class:"header-anchor",href:"#安装主题","aria-hidden":"true"},"#")],-1)),l[20]||(l[20]=s("p",null,[t("Hugo的官网"),s("a",{href:"https://themes.gohugo.io/",target:"_blank",rel:"noopener"},"主题"),t("种类很多，基本能满足各类需求，安装只需把对应的主题clone到themes目录，具体的主题配置参考其文档即可，这里就以"),s("a",{href:"https://github.com/olOwOlo/hugo-theme-even",target:"_blank",rel:"noopener"},"even主题"),t("为例。")],-1)),l[21]||(l[21]=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--s-dark":"#dbd7caee","--s-light":"#393a34","--s-dark-bg":"#121212","--s-light-bg":"#ffffff"},tabindex:"0"},[s("code",{class:"language-bash"},[s("span",{class:"line"},[s("span",{style:{"--s-dark":"#80A665","--s-light":"#59873A"}},"git"),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}}," clone"),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}}," https://github.com/olOwOlo/hugo-theme-even.git")])])],-1)),l[22]||(l[22]=s("h2",{id:"本地调试和预览",tabindex:"-1"},[t("本地调试和预览 "),s("a",{class:"header-anchor",href:"#本地调试和预览","aria-hidden":"true"},"#")],-1)),s("p",null,[l[1]||(l[1]=t("安装完主题后，在网站的配置文件目录，输入下面命令，就可以在本地预览了，服务器的默认地址是")),u(n,{inline:""},{default:e(()=>l[0]||(l[0]=[s("a",{href:"http://localhost:1313/",target:"_blank",rel:"noopener"},"http://localhost:1313/",-1)])),_:1}),l[2]||(l[2]=t(", 端口号可以通过 ")),l[3]||(l[3]=s("strong",null,"-p",-1)),l[4]||(l[4]=t(" 参数自定义端口来修改。"))]),l[23]||(l[23]=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--s-dark":"#dbd7caee","--s-light":"#393a34","--s-dark-bg":"#121212","--s-light-bg":"#ffffff"},tabindex:"0"},[s("code",{class:"language-bash"},[s("span",{class:"line"},[s("span",{style:{"--s-dark":"#80A665","--s-light":"#59873A"}},"hugo"),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}}," server"),s("span",{style:{"--s-dark":"#758575DD","--s-light":"#A0ADA0"}}," # 启动本地调试服务")])])],-1)),l[24]||(l[24]=s("p",null,[t("至此就可以在"),s("strong",null,"content"),t("下的"),s("strong",null,"post"),t("目录中添加文章，进行创作记录了。")],-1)),l[25]||(l[25]=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--s-dark":"#dbd7caee","--s-light":"#393a34","--s-dark-bg":"#121212","--s-light-bg":"#ffffff"},tabindex:"0"},[s("code",{class:"language-bash"},[s("span",{class:"line"},[s("span",{style:{"--s-dark":"#80A665","--s-light":"#59873A"}},"hugo"),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}}," new"),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}}," post/demo.md")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#758575DD","--s-light":"#A0ADA0"}},"# hugo new的命令格式")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#758575DD","--s-light":"#A0ADA0"}},"# hugo new [path]")])])],-1)),l[26]||(l[26]=s("h2",{id:"构建网站",tabindex:"-1"},[t("构建网站 "),s("a",{class:"header-anchor",href:"#构建网站","aria-hidden":"true"},"#")],-1)),l[27]||(l[27]=s("p",null,[t("最后再通过下面命令，即可在"),s("strong",null,"public"),t("目录生成构建的产物，最后把生成的文件部署上服务器即可。")],-1)),l[28]||(l[28]=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--s-dark":"#dbd7caee","--s-light":"#393a34","--s-dark-bg":"#121212","--s-light-bg":"#ffffff"},tabindex:"0"},[s("code",{class:"language-bash"},[s("span",{class:"line"},[s("span",{style:{"--s-dark":"#80A665","--s-light":"#59873A"}},"hugo"),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}}," build"),s("span",{style:{"--s-dark":"#758575DD","--s-light":"#A0ADA0"}}," # 生成静态网站")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#80A665","--s-light":"#59873A"}},"hugo"),s("span",{style:{"--s-dark":"#C99076","--s-light":"#A65E2B"}}," --minify"),s("span",{style:{"--s-dark":"#758575DD","--s-light":"#A0ADA0"}}," # 生成静态网站并进行压缩，可减少产物大小，建议使用该命令")])])],-1))])]),_:1})}}};export{y as default};