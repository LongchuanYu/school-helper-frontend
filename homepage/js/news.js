
const NewsListTempl = `
<div class="container">
  <div class="row">
    <div v-for="(news, index) in newsList" :key="news.id">
      <div class="row mb-5 mt-5">
        <div class="col-lg-4 cover-wrapper" @click="gotoNewsDetail(news)">
          <img :src="news.coverUrl">
        </div>
        <div class="col-lg-8">
          <div class="news-title" @click="gotoNewsDetail(news)">{{news.title}}</div>
          <div class="news-brief">{{news.brief}}</div>
        </div>
      </div>
      <hr v-if="index < newsList.length - 1"/>
    </div>
  </div>
</div>
`
const NewsDetailTempl = `
<div class="container">
  <div class="row">
    <div class="col-lg-12">
      <div class="section-text text-center">
        <h3 class="color-gray">{{news.title}}</h3>
      </div>
      <div class="news-detail-content">
        <div v-html="news.content"></div>
      </div>
    </div>
  </div>
</div>
`

const NewsListComponent = { template: '<news-list></news-list>' }
const NewsDetailComponent = { template: '<news-detail></news-detail>' }

const routes = [
  { path: '/', component: NewsListComponent },
  { path: '/:postId', component: NewsDetailComponent },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

const newsApp = Vue.createApp({})

newsApp.component('news-list', {
  data() {
    return {
      newsList: [...NEWS_LIST]
    }
  },
  methods: {
    gotoNewsDetail(news) {
      console.log('here..')
      this.$router.push({path: `/${news.id}`})
    }
  },
  template: NewsListTempl
})

newsApp.component('news-detail', {
  data() {
    return {
      news: null
    }
  },
  created() {
    const news = NEWS_LIST.find(o => o.id === Number(this.$route.params.postId))
    this.news = news
  },
  template: NewsDetailTempl
})

newsApp.use(router)

newsApp.mount('#news_app')