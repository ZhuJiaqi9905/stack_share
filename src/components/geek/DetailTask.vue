<template>
  <div>
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1"
          ><a href="http://localhost:8080/#/geek/post-skill" target="_blank"
          >张贴技能</a
          ></el-menu-item
          >
          <el-menu-item index="2"
          ><a href="http://localhost:8080/#/user/user-page" target="_blank"
          >购买者界面</a
          ></el-menu-item
          >
          <el-submenu index="3">
            <template slot="title">注册/登录</template>
            <el-menu-item index="3-1"
            ><a href="http://localhost:8080/#/signup" target="_blank"
            >注册</a
            ></el-menu-item
            >
            <el-menu-item index="3-2"
            ><a href="http://localhost:8080/#/login" target="_blank"
            >登录</a
            ></el-menu-item
            >
          </el-submenu>
          <el-menu-item index="4"
          ><a href="http://localhost:8080/#/geek-page" target="_blank"
          >个人中心</a
          ></el-menu-item
          >
        </el-menu>
      </el-header>
      <el-container>
        <el-aside width="500px">
          <div class="app-image" style="padding: 50px">
            <div class="block">
              <el-image :src="url" :fit="fit"></el-image>
            </div>
          </div>
        </el-aside>
        <el-main>
          <div style="padding: 25px">
            <el-card class="box-card" shadow="always">
              <div slot="header" class="clearfix">
                <span>豆瓣电影爬虫任务 (python)</span>
              </div>
              <div style="text-align:left">
                任务描述：<br>
                用python爬取豆瓣所有评分8分以上的电影标题与简介<br>
                <br>
                标签：网络爬虫，python <br>
                时间：2021.7.1 10:00:00 - 2021.7.5 10:00:00 <br>
                价格预算：50元
              </div>
            </el-card>
          </div>

          <el-button style="margin-left:-60px" type="primary" @click="Accept">接单</el-button>
        </el-main>
      </el-container>

    </el-container>



  </div>
</template>

<script>
  export default {
    name: "DetailDemand",
    data() {
      return {
        theScore: 4.5,
        activeIndex: "",
        fit: "fill",
        url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa428.phobos.apple.com%2Fus%2Fr30%2FPurple5%2Fv4%2F2d%2F98%2F04%2F2d980427-a84e-962d-c5d1-5d567911190c%2Fmzl.gbvxddgi.png&refer=http%3A%2F%2Fa428.phobos.apple.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625765381&t=4e945598d0b59a465f1c528ed48349ba",
        description: ["安卓系统", "提供源代码", "文档详细", "质量保证"],
        btnShow: false,
        index: "0",
        replyComment: "",
        myName: "Lana Del Rey",
        myHeader:
          "https://ae01.alicdn.com/kf/Hd60a3f7c06fd47ae85624badd32ce54dv.jpg",
        myId: 19870621,
        to: "",
        toId: -1,
        comments: [
          {
            name: "Lana Del Rey",
            id: 19870621,
            headImg:
              "https://ae01.alicdn.com/kf/Hd60a3f7c06fd47ae85624badd32ce54dv.jpg",
            comment: "完成了我的需求，代码详细，非常感谢",
            time: "2019年9月16日 18:43",
            commentNum: 2,
            like: 15,
            inputShow: false,
            reply: [
              {
                from: "Taylor Swift",
                fromId: 19891221,
                fromHeadImg:
                  "https://ae01.alicdn.com/kf/H94c78935ffa64e7e977544d19ecebf06L.jpg",
                to: "Lana Del Rey",
                toId: 19870621,
                comment: "谢谢你的肯定",
                time: "2019年9月16日 18:43",
                commentNum: 1,
                like: 15,
                inputShow: false,
              },
              // {
              //   from: "Ariana Grande",
              //   fromId: 1123,
              //   fromHeadImg:
              //     "https://ae01.alicdn.com/kf/Hf6c0b4a7428b4edf866a9fbab75568e6U.jpg",
              //   to: "Lana Del Rey",
              //   toId: 19870621,
              //   comment: "别忘记宣传我们的合作单曲啊",
              //   time: "2019年9月16日 18:43",
              //   commentNum: 0,
              //   like: 5,
              //   inputShow: false,
              // },
            ],
          },
          // {
          //   name: "Taylor Swift",
          //   id: 19891221,
          //   headImg:
          //     "https://ae01.alicdn.com/kf/H94c78935ffa64e7e977544d19ecebf06L.jpg",
          //   comment: "我发行了我的新专辑Lover",
          //   time: "2019年9月16日 18:43",
          //   commentNum: 1,
          //   like: 5,
          //   inputShow: false,
          //   reply: [
          //     {
          //       from: "Lana Del Rey",
          //       fromId: 19870621,
          //       fromHeadImg:
          //         "https://ae01.alicdn.com/kf/Hd60a3f7c06fd47ae85624badd32ce54dv.jpg",
          //       to: "Taylor Swift",
          //       toId: 19891221,
          //       comment: "新专辑和speak now 一样棒！",
          //       time: "2019年9月16日 18:43",
          //       commentNum: 25,
          //       like: 5,
          //       inputShow: false,
          //     },
          //   ],
          // },
          // {
          //   name: "Norman Fucking Rockwell",
          //   id: 20190830,
          //   headImg:
          //     "https://ae01.alicdn.com/kf/Hdd856ae4c81545d2b51fa0c209f7aa28Z.jpg",
          //   comment: "Plz buy Norman Fucking Rockwell on everywhere",
          //   time: "2019年9月16日 18:43",
          //   commentNum: 0,
          //   like: 5,
          //   inputShow: false,
          //   reply: [],
          // },
        ],
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      inputFocus() {
        var replyInput = document.getElementById("replyInput");
        replyInput.style.padding = "8px 8px";
        replyInput.style.border = "2px solid blue";
        replyInput.focus();
      },
      showReplyBtn() {
        this.btnShow = true;
      },
      hideReplyBtn() {
        this.btnShow = false;
        replyInput.style.padding = "10px";
        replyInput.style.border = "none";
      },
      showReplyInput(i, name, id) {
        this.comments[this.index].inputShow = false;
        this.index = i;
        this.comments[i].inputShow = true;
        this.to = name;
        this.toId = id;
      },
      _inputShow(i) {
        return this.comments[i].inputShow;
      },
      sendComment() {
        if (!this.replyComment) {
          this.$message({
            showClose: true,
            type: "warning",
            message: "评论不能为空",
          });
        } else {
          let a = {};
          let input = document.getElementById("replyInput");
          let timeNow = new Date().getTime();
          let time = this.dateStr(timeNow);
          a.name = this.myName;
          a.comment = this.replyComment;
          a.headImg = this.myHeader;
          a.time = time;
          a.commentNum = 0;
          a.like = 0;
          this.comments.push(a);
          this.replyComment = "";
          input.innerHTML = "";
        }
      },
      sendCommentReply(i, j) {
        if (!this.replyComment) {
          this.$message({
            showClose: true,
            type: "warning",
            message: "评论不能为空",
          });
        } else {
          let a = {};
          let timeNow = new Date().getTime();
          let time = this.dateStr(timeNow);
          a.from = this.myName;
          a.to = this.to;
          a.fromHeadImg = this.myHeader;
          a.comment = this.replyComment;
          a.time = time;
          a.commentNum = 0;
          a.like = 0;
          this.comments[i].reply.push(a);
          this.replyComment = "";
          document.getElementsByClassName("reply-comment-input")[i].innerHTML =
            "";
        }
      },
      onDivInput: function (e) {
        this.replyComment = e.target.innerHTML;
      },
      dateStr(date) {
        //获取js 时间戳
        var time = new Date().getTime();
        //去掉 js 时间戳后三位，与php 时间戳保持一致
        time = parseInt((time - date) / 1000);
        //存储转换值
        var s;
        if (time < 60 * 10) {
          //十分钟内
          return "刚刚";
        } else if (time < 60 * 60 && time >= 60 * 10) {
          //超过十分钟少于1小时
          s = Math.floor(time / 60);
          return s + "分钟前";
        } else if (time < 60 * 60 * 24 && time >= 60 * 60) {
          //超过1小时少于24小时
          s = Math.floor(time / 60 / 60);
          return s + "小时前";
        } else if (time < 60 * 60 * 24 * 30 && time >= 60 * 60 * 24) {
          //超过1天少于30天内
          s = Math.floor(time / 60 / 60 / 24);
          return s + "天前";
        } else {
          //超过30天ddd
          var date = new Date(parseInt(date));
          return (
            date.getFullYear() +
            "/" +
            (date.getMonth() + 1) +
            "/" +
            date.getDate()
          );
        }
      },
    },
  };
</script>

<style>
  a {
    text-decoration: none;
    color: #aaa;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }

  .box-card {
    width: 480px;
  }

  .my-reply {
    padding: 10px;
    background-color: #fafbfc;
  }
  .my-reply .header-img {
    display: inline-block;
    vertical-align: top;
  }
  .my-reply .reply-info {
    display: inline-block;
    margin-left: 5px;
    width: 90%;
  }
  @media screen and (max-width: 1200px) {
    .my-reply .reply-info {
      width: 80%;
    }
  }
  .my-reply .reply-info .reply-input {
    min-height: 20px;
    line-height: 22px;
    padding: 10px 10px;
    color: #ccc;
    background-color: #fff;
    border-radius: 5px;
  }
  .my-reply .reply-info .reply-input:empty:before {
    content: attr(placeholder);
  }
  .my-reply .reply-info .reply-input:focus:before {
    content: none;
  }
  .my-reply .reply-info .reply-input:focus {
    padding: 8px 8px;
    border: 2px solid #00f;
    box-shadow: none;
    outline: none;
  }
  .my-reply .reply-btn-box {
    height: 25px;
    margin: 10px 0;
  }
  .my-reply .reply-btn-box .reply-btn {
    position: relative;
    float: right;
    margin-right: 15px;
  }
  .my-comment-reply {
    margin-left: 50px;
  }
  .my-comment-reply .reply-input {
    width: flex;
  }
  .author-title:not(:last-child) {
    border-bottom: 1px solid rgba(178,186,194,0.3);
  }
  .author-title {
    padding: 10px;
  }
  .author-title .header-img {
    display: inline-block;
    vertical-align: top;
  }
  .author-title .author-info {
    display: inline-block;
    margin-left: 5px;
    width: 60%;
    height: 40px;
    line-height: 20px;
  }
  .author-title .author-info >span {
    display: block;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .author-title .author-info .author-name {
    color: #000;
    font-size: 18px;
    font-weight: bold;
  }
  .author-title .author-info .author-time {
    font-size: 14px;
  }
  .author-title .icon-btn {
    width: 30%;
    padding: 0 !important;
    float: right;
  }
  @media screen and (max-width: 1200px) {
    .author-title .icon-btn {
      width: 20%;
      padding: 7px;
    }
  }
  .author-title .icon-btn >span {
    cursor: pointer;
  }
  .author-title .icon-btn .iconfont {
    margin: 0 5px;
  }
  .author-title .talk-box {
    margin: 0 50px;
  }
  .author-title .talk-box >p {
    margin: 0;
  }
  .author-title .talk-box .reply {
    font-size: 16px;
    color: #000;
  }
  .author-title .reply-box {
    margin: 10px 0 0 50px;
    background-color: #efefef;
  }

</style>

