<template>
<div>
  <Header></Header>
  <div class="article_list">
    <ul>
      <li v-for="i in list" :key="i.id">
        <time v-text="$utils.goodTime(i.create_at)"></time>
        <router-link :to="'/content/'+i.id">
          {{i.title}}
        </router-link>
      </li>
    </ul>
  </div>
  <Footer></Footer>
</div>
</template>

<script>
  import Header from '../components/header.vue'
  import Footer from '../components/footer.vue'

    export default {
    components:{ Header,Footer},

      data(){
          return{
            list:[]
          }
      },
      created(){
           this.getData()
      },
      methods:{
          getData:function () {
            this.$api.get("topics",null,r=>{
               this.list=r.data
            })

          }
      }
    }
</script>

<style scoped>
  .article_list{margin:auto}
</style>
<!--
author
:
avatar_url
:
"https://avatars2.githubusercontent.com/u/7995232?v=4&s=120"
loginname
:
"JZLeung"
__proto__
:
Object
author_id
:
"57bbcb58b32043f532d40e6f"
content
:
"<div class="markdown-text"><p>但是我主要的数据库是 mongodb。</p>↵<p>而用户数据则是存放在 mysql 中的。那么我该如何去获取用户数据？</p>↵<p>已知 uid 获取用户信息。</p>↵</div>"
create_at
:
"2018-07-28T13:26:36.855Z"
good
:
false
id
:
"5b5c6f0c673571454c633c97"
last_reply_at
:
"2018-07-29T03:04:42.802Z"
reply_count
:
6
tab
:
"ask"
title
:
"egg 里头，如何访问 mysql 的数据？"
top
:
false
visit_count
:
208-->
