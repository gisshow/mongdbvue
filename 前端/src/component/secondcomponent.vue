<template>
  <div id="secondcomponent">
    <h1>I am another page</h1>
    <a> written by {{ author }} </a>
    <p> 感谢 <a href="https://github.com/showonne">showonne</a>大神的技术指导</p>

<ul>
  <li v-for="article in articles">
    {{article.title}}
  </li>
</ul>


<el-card class="box-card">
      <div slot="header" class="clearfix">
        <h2 style="line-height: 36px; color: #20A0FF">豆瓣电影排行榜</h2>
      </div>
      <div v-for="article in articles" class="text item">
        {{article.title}}
      </div>
</el-card>

  </div>
</template>
 
<script>
export default {
  data() {
    return {
      author: "微信公众号 jinkey-love",
      articles: []
    }
  },
created1:function(){

  let _self = this;
        $.ajax({
          type:"get",
          url:"http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10",
          dataType :"jsonp",
          success:function(data){
          //  console.log(data)
                         _self.hotMovie=data.subjects;
                       //  console.log(11);
          }
        });
 

 },
mounted: function() {

   this.$http.jsonp('http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10', {}, {
        headers: {
 
        },
        emulateJSON: true
    }).then(function(response) {
      // 这里是处理正确的回调
   //  console.log(response.data);
        //this.articles = response.data.subjects
         this.articles = response.data["subjects"] //也可以
 
    }, function(response) {
        // 这里是处理错误的回调
        console.log(response)
    });


  }

  }
</script>
 
<style>
</style>