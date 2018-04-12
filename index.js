var jquery = require('jquery')
var Nightmare=require('nightmare'),
nightmare=Nightmare()

var updatedSku=[]
nightmare.goto('https://www.backcountry.com/mens-jackets')
  .wait(3000)
  .evaluate(function(){
    var coats =[]
    $('.ui-pl-link').each(function(){
      item={}
      item["product"]=$(this).text()
      item["link"]=$(this).attr("href")
      coats.push(item)
    })
    return coats
  })
  .end()
  .then(function(result){
    for(coat in result){
      // console.log(result[coat].product);
      updatedSku.push(result[coat].link);
      // console.log(result[coat].link);
      // console.log("\n");
      ;
    }
    return updatedSku
  })
