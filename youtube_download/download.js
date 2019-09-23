setTimeout(function(){
  document.getElementsByClassName("btn btn-success")[0].click()
  a = document.getElementsByClassName("btn btn-success btn-file")

  setTimeout(function(){
      a[a.length-1].click()
    },500)
},2000)