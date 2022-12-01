
var fs = require('fs');

var page1 = fs.readFileSync('Page1.txt', 'utf-8');
var page2 = fs.readFileSync('Page2.txt', 'utf-8');
var page3 = fs.readFileSync('Page3.txt', 'utf-8');
 
var all_page = page1 + page2 + page3

const words = all_page.split(" ")
function  removeDub(arr){
    return [...new Set(arr)];
}


const words1 = removeDub(words);
const not_allowed = ['and','or','of','an','a','It','to','is','the','are','The','A','in']
words1.sort(function(a,b){return a.toLowerCase().localeCompare(b.toLowerCase())})
words1.map((word)=>{
    var reg = /^[a-zA-Z]*$/
    if (reg.test(word) & !not_allowed.includes(word)){
    let res1 = page1.includes(word)
    let res2 = page2.includes(word)
    let res3 = page3.includes(word)
    if(res1 || res2 || res3){
      fs.writeFile('index.txt','',(err)=>{if(err) throw err})
      fs.appendFile('index.txt',`${word}${res1?",1":""}${res2?",2":""}${res3?",3":""}\n`,(err)=>{if(err) throw err})
    }
   }
})