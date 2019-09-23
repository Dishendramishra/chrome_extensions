 function download_page(){
  key = window.location.href
  key = key.slice(key.search("v=")+2)
  window.open("https://y2mate.com/youtube/"+key)
}

download_page()