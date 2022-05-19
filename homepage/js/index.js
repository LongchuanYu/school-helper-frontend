function initQrCode() {
  $('[data-toggle="tooltip"]').tooltip(); 
}

function initNews() {
  for (let i = 0; i<4; ++i) {
    const news = NEWS_LIST[i]
    let newsTemplate = `
    <div class="col-md-3 col-sm-6 news-block">
      <div class="img-wrapper">
        <img src="image/comming.jpg" alt="">
      </div>
    </div>
    `
    if (news) {
      newsTemplate = `
      <div class="col-md-3 col-sm-6 news-block" style="cursor: pointer" data-id=${news.id}>
        <div class="img-wrapper">
          <img src="image/express.jpg" alt="">
        </div>
        <div class="news-title text-center">${news.title}</div>
        <div class="news-content">${news.brief}</div>
      </div>
      `
    }
    newsNode = $.parseHTML(newsTemplate)
    $(".news-block-parent").append(newsNode)
  }

  $(".news-block").click(function(e) {
    const id = e.currentTarget.dataset.id
    if (id) {
      location.href = DOMAIN + 'news.html#/' + id
    }
  })
}

initQrCode();
initNews();
