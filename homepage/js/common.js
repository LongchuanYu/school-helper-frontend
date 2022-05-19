const DOMAIN ='http://' + location.host + '/homepage/'


function initNavUrl() {
  $("#nav_home").attr("href", DOMAIN)
  $("#nav_feature").attr("href", DOMAIN + '#feature')
  $("#nav_life").attr("href", DOMAIN + '#school-life')
  $("#nav_news").attr("href", DOMAIN + 'news.html')
  $("#nav_about").attr("href", DOMAIN + '#about')
}

initNavUrl();

