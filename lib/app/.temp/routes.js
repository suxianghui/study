import Vue from 'vue'
Vue.component("Bit", () => import("D:\\1\\实训一\\study\\study\\src\\.vuepress\\components\\Bit.vue"))
import ThemeLayout from '@themeLayout'
import ThemeNotFound from '@themeNotFound'
import { injectMixins } from '@app/util'
import rootMixins from '@app/root-mixins'

injectMixins(ThemeLayout, rootMixins)
injectMixins(ThemeNotFound, rootMixins)

export const routes = [
  {
    name: "v-e3c459ce7f344",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\README.md").then(comp => {
        Vue.component("v-e3c459ce7f344", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-52fa1bf75c65b",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\config\\README.md").then(comp => {
        Vue.component("v-52fa1bf75c65b", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-494e62929ac27",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-494e62929ac27", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-3bc7b27a9b2a2",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\guide\\README.md").then(comp => {
        Vue.component("v-3bc7b27a9b2a2", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-20c43955cb105",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-20c43955cb105", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e4b87a01884e5",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-e4b87a01884e5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fc10a9f067eed",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-fc10a9f067eed", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ad2f26cc7b895",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-ad2f26cc7b895", comp.default)
        next()
      })
    }
  },
  {
    name: "v-678ef894d02aa",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-678ef894d02aa", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7ef2918a5976a",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-7ef2918a5976a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e376a667293bb",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-e376a667293bb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5598e29a03907",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-5598e29a03907", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5d70c82bcb5c5",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\README.md").then(comp => {
        Vue.component("v-5d70c82bcb5c5", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-379846e1482e1",
    path: "/zh/article/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\article\\README.md").then(comp => {
        Vue.component("v-379846e1482e1", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/article/index.html",
    redirect: "/zh/article/"
  },
  {
    name: "v-106da068663da",
    path: "/zh/article/coding.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\article\\coding.md").then(comp => {
        Vue.component("v-106da068663da", comp.default)
        next()
      })
    }
  },
  {
    name: "v-14cf63d8c90ac",
    path: "/zh/article/interaction.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\article\\interaction.md").then(comp => {
        Vue.component("v-14cf63d8c90ac", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e06d283eb8063",
    path: "/zh/article/react.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\article\\react.md").then(comp => {
        Vue.component("v-e06d283eb8063", comp.default)
        next()
      })
    }
  },
  {
    name: "v-628b4ce51b885",
    path: "/zh/article/vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\article\\vue.md").then(comp => {
        Vue.component("v-628b4ce51b885", comp.default)
        next()
      })
    }
  },
  {
    name: "v-dbbc5f5356017",
    path: "/zh/chain/Diff%20DOM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\chain\\Diff DOM.md").then(comp => {
        Vue.component("v-dbbc5f5356017", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/chain/Diff DOM.html",
    redirect: "/zh/chain/Diff%20DOM.html"
  },
  {
    name: "v-62d0a83c39761",
    path: "/zh/chain/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\chain\\MVVM.md").then(comp => {
        Vue.component("v-62d0a83c39761", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e5c609cd6555e",
    path: "/zh/chain/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\chain\\README.md").then(comp => {
        Vue.component("v-e5c609cd6555e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/chain/index.html",
    redirect: "/zh/chain/"
  },
  {
    name: "v-8cd1e7f35009a",
    path: "/zh/chain/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\chain\\React组件.md").then(comp => {
        Vue.component("v-8cd1e7f35009a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/chain/React组件.html",
    redirect: "/zh/chain/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-d5f2e9a79ba93",
    path: "/zh/chain/Vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\chain\\Vue.md").then(comp => {
        Vue.component("v-d5f2e9a79ba93", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a8bbc2ac5d3bc",
    path: "/zh/chain/page.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\chain\\page.md").then(comp => {
        Vue.component("v-a8bbc2ac5d3bc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1744f77144bf5",
    path: "/zh/chain/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\chain\\redux中间件.md").then(comp => {
        Vue.component("v-1744f77144bf5", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/chain/redux中间件.html",
    redirect: "/zh/chain/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-0594b28323e18",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-0594b28323e18", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-1a4fcfa8a20ed",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-1a4fcfa8a20ed", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-7a9590c68b85a",
    path: "/zh/diff/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\diff\\README.md").then(comp => {
        Vue.component("v-7a9590c68b85a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/diff/index.html",
    redirect: "/zh/diff/"
  },
  {
    name: "v-c7424f5a5833d",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-c7424f5a5833d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-42c09a32fe616",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-42c09a32fe616", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4d99665b903a7",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-4d99665b903a7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fa9ceade0143a",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-fa9ceade0143a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-234d0335ca307",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-234d0335ca307", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ea6f107fdc1c8",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-ea6f107fdc1c8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0ba6d6826db42",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-0ba6d6826db42", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c1bc38bd8f478",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-c1bc38bd8f478", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b91637faec87e",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-b91637faec87e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-14e808eec5f6c",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-14e808eec5f6c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ae4a10a0dc072",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-ae4a10a0dc072", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6e0125ea5ce93",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-6e0125ea5ce93", comp.default)
        next()
      })
    }
  },
  {
    name: "v-eb44d95a53034",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-eb44d95a53034", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a0c2ff4747eaa",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\interview\\README.md").then(comp => {
        Vue.component("v-a0c2ff4747eaa", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-dda13c2c9ee36",
    path: "/zh/interview/js.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\interview\\js.md").then(comp => {
        Vue.component("v-dda13c2c9ee36", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f2219e0377ddf",
    path: "/zh/interview/network.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\interview\\network.md").then(comp => {
        Vue.component("v-f2219e0377ddf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-32805d3d3e9f6",
    path: "/zh/interview/questions.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\interview\\questions.md").then(comp => {
        Vue.component("v-32805d3d3e9f6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-223051daf1d05",
    path: "/zh/interview/vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\interview\\vue.md").then(comp => {
        Vue.component("v-223051daf1d05", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7f1bf4e879b",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-7f1bf4e879b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-e51e88f30e32e",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-e51e88f30e32e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1cf8ff97c5ade",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-1cf8ff97c5ade", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-85c87d9ff1259",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-85c87d9ff1259", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-be7071523157a",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-be7071523157a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-1235654fcc6be",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-1235654fcc6be", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-ae860ec94028d",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-ae860ec94028d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-a072a60055bd5",
    path: "/zh/preview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\preview\\ali.md").then(comp => {
        Vue.component("v-a072a60055bd5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-49f614ceaec2e",
    path: "/zh/preview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\preview\\index.md").then(comp => {
        Vue.component("v-49f614ceaec2e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/preview/index.html",
    redirect: "/zh/preview/"
  },
  {
    name: "v-9a3e4e1ee1375",
    path: "/zh/preview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\preview\\longhu.md").then(comp => {
        Vue.component("v-9a3e4e1ee1375", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3bb829cab5a6a",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-3bb829cab5a6a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-38ea7ea43818b",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-38ea7ea43818b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-37d39866e75af",
    path: "/zh/standard/Improve.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\standard\\Improve.md").then(comp => {
        Vue.component("v-37d39866e75af", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7c4daceea3f3d",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-7c4daceea3f3d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9f386532dfde7",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-9f386532dfde7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1ce485ee1f474",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-1ce485ee1f474", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e8dd0bce29044",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-e8dd0bce29044", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f171364a28aa2",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-f171364a28aa2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a23081133e76d",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-a23081133e76d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-8ca1acc12ea96",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-8ca1acc12ea96", comp.default)
        next()
      })
    }
  },
  {
    name: "v-95cb9d72df659",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-95cb9d72df659", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-bad086a0de723",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-bad086a0de723", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-220815fe0865f",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-220815fe0865f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-63c79a0a9a977",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-63c79a0a9a977", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-b3b96d1d8d8",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-b3b96d1d8d8", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-b4735f4037749",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-b4735f4037749", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f01e1be2972fb",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-f01e1be2972fb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-207896341fae5",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\1\\实训一\\study\\study\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-207896341fae5", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/vue钩子函数.html",
    redirect: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html"
  },
  {
    path: '*',
    component: ThemeNotFound
  }
]