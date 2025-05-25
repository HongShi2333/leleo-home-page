const config = {
  //网页元数据
  metaData:{
    title: '红石空间站',
    description: '欢迎来到红石的空间站',
    keywords: 'HongShi,个人主页,个人网站',
    icon: 'https://s11.ax1x.com/2023/10/04/pPObVL6.jpg'   //网页图标，支持外链
  },

  avatar: "/img/avatar.jpg", // 头像
  welcometitle: "Hi, I'm HongShi", // 标题

  // 颜色配置
  color: {
    themecolor: "#FFFFFF", // 主题颜色，推荐趋于亮白可带有轻微色调，例： #D1FFEC
    welcometitlecolor: "#FFFFFF", // 标题颜色 例： #7BFFC9
  },
  
  brightness: 85, // 背景亮度 --%
  blur: 5, // 毛玻璃模糊效果

  // 我的标签
  tags : ['高中牲','热爱科技','喜欢摄影','困'],

  // 默认背景壁纸
  background: {
    "pc":{   //pc端
      "type":"pic",   //"pic":静态壁纸;"video":动态壁纸
      "datainfo":{
        "title":"MeUmy-弱虫", 
        "preview":"/img/wallpaper/static/",
        "url":"/img/wallpaper/static/d-background4.jpg",     //当然，也可填写网络地址或壁纸api，如随机PC壁纸api："url":"https://t.mwm.moe/pc"
      },
    },
    "mobile":{   //移动端
      "type":"pic",
      "datainfo":{
        "title":"0001", 
        "preview":"/img/wallpaper/static-mobile/0001/image-pre.webp",
        "url":"/img/wallpaper/static-mobile/0001/image.png"  //同理，随机移动端壁纸："url":"https://t.mwm.moe/mp"
      }
    }
      
  },

  //极坐标图数据
  polarChart:{
    skills: ['Vue', 'C++', 'JavaScript', 'Windows', 'Java', 'Python', 'linux', 'Docker', 'MySQL'],
    skillPoints: [65, 73, 42, 90, 52, 89, 77, 64, 44],
  },

  //社交按钮
  socialPlatformIcons: [
    {icon:"mdi-github",link:"https://www.github.com/HongShi2333"},
    {icon:"mdi-email",link:"mailto:hongshi2333@foxmail.com"},
    {icon:"mdi-television-classic",link:"https://space.bilibili.com/522549816"},
    {icon:"mdi-linux",link:"https://linux.do/u/hongshi/summary"}
  ],

  //打字机
  typeWriterStrings: [
    "人安静地生活，哪怕是静静地听着风声，亦能感觉到诗意的生活。",
    "光锥之内就是命运。",
    "每个人都是新手。你也是第一次参赛的新手，不要为失败感到沮丧。",
    "云朵即便不在，也会以雪或雨的形式延续。",
    "每个故事必须按照自己的方式、自己的时间节奏缓缓展开。",
    "感到孤独的真正原因，是无法与他人交流最要紧的感受。"
  ],

  //音乐播放配置，采用MetingJS Api(https://github.com/metowolf/MetingJS)
  musicPlayer:{
    server: 'netease',  //服务提供商 --网易云音乐
    type: 'playlist',   //歌单类型
    id: '12494451415'  //歌单id ---> music.163.com/#/playlist?id=2028178887
  },

  //壁纸数据 -----可以将壁纸文件上传到uhsea.com获取网络直链。若想调用api，请前往脚本自行修改逻辑
  wallpaper:{
    pic:[
      {"title":"d-background1","preview":"/img/wallpaper/static/d-background1.webp","url":"/img/wallpaper/static/d-background1.jpg"},
      {"title":"d-background2","preview":"/img/wallpaper/static/d-background2.webp","url":"/img/wallpaper/static/d-background2.jpg"},
      {"title":"d-background3","preview":"/img/wallpaper/static/d-background3.webp","url":"/img/wallpaper/static/d-background3.jpg"},
      {"title":"d-background4","preview":"/img/wallpaper/static/d-background4.webp","url":"/img/wallpaper/static/d-background4.jpg"},
      {"title":"d-background5","preview":"/img/wallpaper/static/d-background5.webp","url":"/img/wallpaper/static/d-background5.jpg"},
      {"title":"d-background6","preview":"/img/wallpaper/static/d-background6.webp","url":"/img/wallpaper/static/d-background6.jpg"},
      {"title":"d-background7","preview":"/img/wallpaper/static/d-background7.webp","url":"/img/wallpaper/static/d-background7.jpg"},
      {"title":"d-background8","preview":"/img/wallpaper/static/d-background8.webp","url":"/img/wallpaper/static/d-background8.jpg"},
      {"title":"d-background9","preview":"/img/wallpaper/static/d-background9.webp","url":"/img/wallpaper/static/d-background9.jpg"},
      {"title":"d-background10","preview":"/img/wallpaper/static/d-background10.webp","url":"/img/wallpaper/static/d-background10.jpg"},
      {"title":"d-background11","preview":"/img/wallpaper/static/d-background11.webp","url":"/img/wallpaper/static/d-background11.jpg"},
      {"title":"d-background12","preview":"/img/wallpaper/static/d-background12.webp","url":"/img/wallpaper/static/d-background12.jpg"},
      {"title":"d-background13","preview":"/img/wallpaper/static/d-background13.webp","url":"/img/wallpaper/static/d-background13.jpg"},
      {"title":"d-background14","preview":"/img/wallpaper/static/d-background14.webp","url":"/img/wallpaper/static/d-background14.jpg"},
      {"title":"d-background15","preview":"/img/wallpaper/static/d-background15.webp","url":"/img/wallpaper/static/d-background15.jpg"},
      {"title":"d-background16","preview":"/img/wallpaper/static/d-background16.webp","url":"/img/wallpaper/static/d-background16.jpg"},
      {"title":"d-background17","preview":"/img/wallpaper/static/d-background17.webp","url":"/img/wallpaper/static/d-background17.jpg"},
      {"title":"d-background18","preview":"/img/wallpaper/static/d-background18.webp","url":"/img/wallpaper/static/d-background18.jpg"},
      {"title":"jswcMaMj","preview":"https://file.uhsea.com/2503/76a4f03e8654d6e66bbbc7e8149c2fe33M.png","url":"https://file.uhsea.com/2503/5b8a20a5f2b269659911c9485d0d0c3f0F.png"},
      {"title":"pgtTqoqq","preview":"https://file.uhsea.com/2503/caeae6b4fc1aba41bff4ad4ec59d6d8aA5.png","url":"https://file.uhsea.com/2503/45aa0a5a31a0ae95f7cc660e3ab4148eUT.png"},
      {"title":"cvKMKhue","preview":"https://file.uhsea.com/2503/7a693bf725b501e0907ce40f18d2edc49P.png","url":"https://file.uhsea.com/2503/55e7191130d160a8e4421497308ffb67DT.png"},
      {"title":"XpxvQVoP","preview":"https://file.uhsea.com/2503/f4b6804c7189357d3252aa0f981b59c4EF.png","url":"https://file.uhsea.com/2503/66359907715d46e0a4523da0142a6f63EU.png"},
      {"title":"fVEEjEOA","preview":"https://file.uhsea.com/2503/ed0a4c0a43118ac4e2f39bab75ec19f4PI.png","url":"https://file.uhsea.com/2503/4adbf54af317a075c6b98483a552641f61.png"},
      {"title":"jgnIKMpd","preview":"https://file.uhsea.com/2503/5d4d35ed1c286afc930184231456edc9BR.png","url":"https://file.uhsea.com/2503/3bf8025d8ad7ccefcf7e72c9368a245cLL.png"},
      {"title":"mgqyySeh","preview":"https://file.uhsea.com/2503/38994dc4ef8659067537a3ea11af0927KB.png","url":"https://file.uhsea.com/2503/6e3b14778e879234826b9d5c793474ffOS.png"},
      {"title":"dSXZfZp","preview":"https://file.uhsea.com/2503/22c27ea8c1e44209a223a28026146115LS.png","url":"https://file.uhsea.com/2503/8d1203a01e7a5a639caf91ca6c9608acVL.png"},
      
    ],
    picMobile:[
      {"title":"m-background1","preview":"/img/wallpaper/static-mobile/m-background1.webp","url":"/img/wallpaper/static-mobile/m-background1.jpg"},
      {"title":"m-background2","preview":"/img/wallpaper/static-mobile/m-background2.webp","url":"/img/wallpaper/static-mobile/m-background2.jpg"},
      {"title":"m-background3","preview":"/img/wallpaper/static-mobile/m-background3.webp","url":"/img/wallpaper/static-mobile/m-background3.jpg"},
      {"title":"m-background4","preview":"/img/wallpaper/static-mobile/m-background4.webp","url":"/img/wallpaper/static-mobile/m-background4.jpg"},
      {"title":"m-background5","preview":"/img/wallpaper/static-mobile/m-background5.webp","url":"/img/wallpaper/static-mobile/m-background5.jpg"},
      {"title":"m-background6","preview":"/img/wallpaper/static-mobile/m-background6.webp","url":"/img/wallpaper/static-mobile/m-background6.jpg"},
      {"title":"m-background7","preview":"/img/wallpaper/static-mobile/m-background7.webp","url":"/img/wallpaper/static-mobile/m-background7.jpg"},
      {"title":"m-background8","preview":"/img/wallpaper/static-mobile/m-background8.webp","url":"/img/wallpaper/static-mobile/m-background8.jpg"},
      {"title":"m-background9","preview":"/img/wallpaper/static-mobile/m-background9.webp","url":"/img/wallpaper/static-mobile/m-background9.jpg"},
      {"title":"m-background10","preview":"/img/wallpaper/static-mobile/m-background10.webp","url":"/img/wallpaper/static-mobile/m-background10.jpg"},
      {"title":"m-background11","preview":"/img/wallpaper/static-mobile/m-background11.webp","url":"/img/wallpaper/static-mobile/m-background11.jpg"},
      {"title":"m-background12","preview":"/img/wallpaper/static-mobile/m-background12.webp","url":"/img/wallpaper/static-mobile/m-background12.jpg"},
      {"title":"m-background13","preview":"/img/wallpaper/static-mobile/m-background13.webp","url":"/img/wallpaper/static-mobile/m-background13.jpg"},
      {"title":"m-background14","preview":"/img/wallpaper/static-mobile/m-background14.webp","url":"/img/wallpaper/static-mobile/m-background14.jpg"},
      {"title":"m-background15","preview":"/img/wallpaper/static-mobile/m-background15.webp","url":"/img/wallpaper/static-mobile/m-background15.jpg"},
      {"title":"m-background16","preview":"/img/wallpaper/static-mobile/m-background16.webp","url":"/img/wallpaper/static-mobile/m-background16.jpg"},
      {"title":"m-background17","preview":"/img/wallpaper/static-mobile/m-background17.webp","url":"/img/wallpaper/static-mobile/m-background17.jpg"},
      {"title":"m-background18","preview":"/img/wallpaper/static-mobile/m-background18.webp","url":"/img/wallpaper/static-mobile/m-background18.jpg"},
      {"title":"m-background19","preview":"/img/wallpaper/static-mobile/m-background19.webp","url":"/img/wallpaper/static-mobile/m-background19.jpg"},
      {"title":"m-background20","preview":"/img/wallpaper/static-mobile/m-background20.webp","url":"/img/wallpaper/static-mobile/m-background20.jpg"},
      {"title":"m-background21","preview":"/img/wallpaper/static-mobile/m-background21.webp","url":"/img/wallpaper/static-mobile/m-background21.jpg"},
      {"title":"m-background22","preview":"/img/wallpaper/static-mobile/m-background22.webp","url":"/img/wallpaper/static-mobile/m-background22.jpg"},
      {"title":"m-background23","preview":"/img/wallpaper/static-mobile/m-background23.webp","url":"/img/wallpaper/static-mobile/m-background23.jpg"},
      {"title":"m-background24","preview":"/img/wallpaper/static-mobile/m-background24.webp","url":"/img/wallpaper/static-mobile/m-background24.jpg"},
      {"title":"m-background25","preview":"/img/wallpaper/static-mobile/m-background25.webp","url":"/img/wallpaper/static-mobile/m-background25.jpg"},
      {"title":"m-background26","preview":"/img/wallpaper/static-mobile/m-background26.webp","url":"/img/wallpaper/static-mobile/m-background26.jpg"},
      {"title":"m-background27","preview":"/img/wallpaper/static-mobile/m-background27.webp","url":"/img/wallpaper/static-mobile/m-background27.jpg"},
      {"title":"m-background28","preview":"/img/wallpaper/static-mobile/m-background28.webp","url":"/img/wallpaper/static-mobile/m-background28.jpg"},
      {"title":"m-background29","preview":"/img/wallpaper/static-mobile/m-background29.webp","url":"/img/wallpaper/static-mobile/m-background29.jpg"},
      {"title":"m-background30","preview":"/img/wallpaper/static-mobile/m-background30.webp","url":"/img/wallpaper/static-mobile/m-background30.jpg"},
      {"title":"m-background31","preview":"/img/wallpaper/static-mobile/m-background31.webp","url":"/img/wallpaper/static-mobile/m-background31.jpg"},
      {"title":"m-background32","preview":"/img/wallpaper/static-mobile/m-background32.webp","url":"/img/wallpaper/static-mobile/m-background32.jpg"},
      {"title":"m-background33","preview":"/img/wallpaper/static-mobile/m-background33.webp","url":"/img/wallpaper/static-mobile/m-background33.jpg"},
      {"title":"DfNHPPcc","preview":"https://file.uhsea.com/2503/e3510f4d0286e37b828f74494230f0efM2.png","url":"https://file.uhsea.com/2503/97b50adb3d4cd6f1a4132f6d3e8c98483T.png"},
      {"title":"WIOlrGSy","preview":"https://file.uhsea.com/2503/99162abfe07e18cfe6182ca3458561ef3A.png","url":"https://file.uhsea.com/2503/609532b992163117db9b341dde87b78f3C.png"},
      {"title":"cZZwzhis","preview":"https://file.uhsea.com/2503/cf558fa1989c07726778c60be47b9928K8.png","url":"https://file.uhsea.com/2503/e27b91f1604f73d0444c807024ef7c9fI3.png"},
      {"title":"aANKZHPX","preview":"https://file.uhsea.com/2503/0aa1cb875c8c7c20afd1aa72530294350K.png","url":"https://file.uhsea.com/2503/b09b65e20e176cb0d22dbc319981b5b45L.png"},
    ],
    video:[
      {
        "title":"xhs",
        "preview":"https://i1.xuehusang.cn/%E9%9D%99%E6%80%81%E5%86%85%E5%AE%B9/pic/%E9%BB%84%E6%98%8F%E6%94%B9%E5%8A%A82.mp4",
        "url":"https://i1.xuehusang.cn/%E9%9D%99%E6%80%81%E5%86%85%E5%AE%B9/pic/%E9%BB%84%E6%98%8F%E6%94%B9%E5%8A%A82.mp4"
      },
      {
        "title":"xhs-wt",
        "preview":"https://i1.xuehusang.cn/%E9%9D%99%E6%80%81%E5%86%85%E5%AE%B9/pic/OP.mp4",
        "url":"https://i1.xuehusang.cn/%E9%9D%99%E6%80%81%E5%86%85%E5%AE%B9/pic/OP.mp4"
      },
      {
        "title":"xhs-ml",
        "preview":"https://i1.xuehusang.cn/%E9%9D%99%E6%80%81%E5%86%85%E5%AE%B9/pic/%E6%A2%A6%E6%B3%A0%2B%E5%8F%8C%E4%BA%BA%E4%BA%92%E5%8A%A8%2B30.mp4",
        "url":"https://i1.xuehusang.cn/%E9%9D%99%E6%80%81%E5%86%85%E5%AE%B9/pic/%E6%A2%A6%E6%B3%A0%2B%E5%8F%8C%E4%BA%BA%E4%BA%92%E5%8A%A8%2B30.mp4"
      },
      {
        "title":"xhs-n",
        "preview":"https://i1.xuehusang.cn/%E9%9D%99%E6%80%81%E5%86%85%E5%AE%B9/pic/%E7%8B%90%E9%B8%BD%E8%8A%B1%E5%AB%81.mp4",
        "url":"https://i1.xuehusang.cn/%E9%9D%99%E6%80%81%E5%86%85%E5%AE%B9/pic/%E7%8B%90%E9%B8%BD%E8%8A%B1%E5%AB%81.mp4"
      },
      {
        "title":"xhs-yz",
        "preview":"https://i1.xuehusang.cn/%E9%9D%99%E6%80%81%E5%86%85%E5%AE%B9/pic/%E9%9B%AA%E7%8B%90%20%E5%AE%87%E5%AE%99.mp4",
        "url":"https://i1.xuehusang.cn/%E9%9D%99%E6%80%81%E5%86%85%E5%AE%B9/pic/%E9%9B%AA%E7%8B%90%20%E5%AE%87%E5%AE%99.mp4"
      },
      {
        "title":"尼尔：机械纪元 团队",
        "preview":"/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team-pre.webm",
        "url":"/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team.webm"
      },
      {
        "title":"向往航天的女孩",
        "preview":"/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane-pre.webm",
        "url":"/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane.webm"
      },
    ],
    videoMobile:[
      {
        "title":"幻觉镇-gaako_illust",
        "preview":"/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town-pre.mp4",
        "url":"/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town.mp4"
      },
      {
        "title":"chuva",
        "preview":"/img/wallpaper/dynamic-mobile/chuva/chuva-pre.mp4",
        "url":"/img/wallpaper/dynamic-mobile/chuva/chuva.mp4"
      },
      {
        "title":"Doodle-小猫女仆降临",
        "preview":"/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12-pre.mp4",
        "url":"/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12.mp4"
      },
    ],
  },

  //项目卡片 其中 字段"show"控制初始卡片的text是否展开
  projectcards:[ 
    {go:"🚀 前往",img:"/img/sunshine.jpg",title:"Project 1",subtitle:"1,000 miles of wonder", text:"If you see this line, I've managed to get your attention.",url:"https://leleo.top",show:false},
    {go:"🗂️ 前往",img:"/img/sunshine.jpg",title:"Project 2",subtitle:"2,000 miles of wonder", text:"If you see this line, I've managed to get your attention.",url:"https://leleo.top",show:false},
    {go:"📝 前往",img:"/img/sunshine.jpg",title:"Project 3",subtitle:"3,000 miles of wonder", text:"If you see this line, I've managed to get your attention.",url:"https://leleo.top",show:false},
    {go:"👍 前往",img:"/img/sunshine.jpg",title:"Project 4",subtitle:"4,000 miles of wonder", text:"If you see this line, I've managed to get your attention.",url:"https://leleo.top",show:false},
    {go:"🗃 前往",img:"/img/sunshine.jpg",title:"Project 5",subtitle:"5,000 miles of wonder", text:"If you see this line, I've managed to get your attention.",url:"https://leleo.top",show:false},
    {go:"🎨 前往",img:"/img/sunshine.jpg",title:"Project 6",subtitle:"6,000 miles of wonder", text:"If you see this line, I've managed to get your attention.",url:"https://leleo.top",show:false},
    {go:"💍 前往",img:"/img/sunshine.jpg",title:"Project 7",subtitle:"7,000 miles of wonder", text:"If you see this line, I've managed to get your attention.",url:"https://leleo.top",show:false},
    {go:"🔍 前往",img:"/img/sunshine.jpg",title:"Project 8",subtitle:"8,000 miles of wonder", text:"If you see this line, I've managed to get your attention.",url:"https://leleo.top",show:false},
  ],
  
  statement: ["Copyright © 2025 HongShi"],
}


export default config