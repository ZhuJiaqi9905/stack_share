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
            ><a href="http://localhost:8080/#/user/post-demand" target="_blank"
              >发布需求</a
            ></el-menu-item
          >
          <el-menu-item index="2"
            ><a href="http://localhost:8080/#/geek/geek-page" target="_blank"
              >开发者页面</a
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

      <el-main>
        <el-tabs v-model="activeSearchChoice" @tab-click="handleClick" type="border-card">
          <!-- 点击搜索服务的页面 -->
          <el-tab-pane label="搜索服务" name="demand">
            <el-row>
              <el-col :span="20">
                <el-input
                  v-model="searchDemand"
                  placeholder="请输入需求"
                ></el-input>
              </el-col>
              <el-col :span="4">
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :offset="2" :span="5">
                <div class="demo-image__placeholder">
                  <div class="block">
                    <el-image :src="service1"></el-image>
                    <span class="demonstration">C#开发</span>
                  </div>
                </div>
              </el-col>
              <el-col :offset="2" :span="5">
                <div class="demo-image__placeholder">
                  <div class="block">
                    <el-image :src="service2"></el-image>
                    <span class="demonstration">数据库开发</span>
                  </div>
                </div>
              </el-col>
              <el-col :offset="2" :span="5">
                <div class="demo-image__placeholder">
                  <div class="block">
                    <el-image :src="service3"></el-image>
                    <span class="demonstration">网络爬虫</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :type="flex" :justify="start" :align="bottom">
              <el-col :offset="0" :span="1">
                  <el-button type="info">筛选</el-button>
              </el-col>
              <el-col :offset="1" :span="2">
                  <el-input v-model="input1" placeholder="价格下限"></el-input>
              </el-col>
              <el-col :offset="0" :span="2">
                  <el-button plain>——</el-button>
              </el-col>
              <el-col :offset="0" :span="2">
                  <el-input v-model="input2" placeholder="价格上限"></el-input>
              </el-col>
              <el-col :offset="1" :span="2">
                  <el-button type="danger" round>成交量升序</el-button>
              </el-col>
              <el-col :offset="1" :span="2">
                  <el-button type="success" round>成交量降序</el-button>
              </el-col>
            </el-row>
            <el-row :type="flex" :justify="start" :align="middle">
              <el-col :offset="0" :span="1">
                <el-button type="info">分类</el-button>
              </el-col>
              <el-col :offset="0" :span="10">
                <el-checkbox-group v-model="checkList">
                    <el-checkbox-button label="数据挖掘"></el-checkbox-button>
                    <el-checkbox-button label="数据分析"></el-checkbox-button>
                    <el-checkbox-button label="数据可视化"></el-checkbox-button>
                </el-checkbox-group>
              </el-col>
            </el-row>
          </el-tab-pane>
          <!-- 点击搜索极客的页面 -->
          <el-tab-pane label="搜索极客" name="geek">
            <el-row>
              <el-col :span="20">
                <el-input
                  v-model="searchDemand"
                  placeholder="请输入极客"
                ></el-input>
              </el-col>
              <el-col :span="4">
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :offset="2" :span="5">
                <div class="demo-image__placeholder">
                  <div class="block">
                    <el-image :src="geek1"></el-image>
                    <span class="demonstration">擅长移动端开发</span>
                  </div>
                </div>
              </el-col>
              <el-col :offset="2" :span="5">
                <div class="demo-image__placeholder">
                  <div class="block">
                    <el-image :src="geek2"></el-image>
                    <span class="demonstration">擅长网页爬虫</span>
                  </div>
                </div>
              </el-col>
              <el-col :offset="2" :span="5">
                <div class="demo-image__placeholder">
                  <div class="block">
                    <el-image :src="geek3"></el-image>
                    <span class="demonstration">擅长编写SQL</span>
                  </div>
                </div>
              </el-col>

            </el-row>
            <el-row :type="flex" :justify="start" :align="bottom">
              <el-col :offset="0" :span="1">
                  <el-button type="info">筛选</el-button>
              </el-col>
              <el-col :offset="1" :span="2">
                  <el-input v-model="input3" placeholder="价格下限"></el-input>
              </el-col>
              <el-col :offset="0" :span="2">
                  <el-button plain>——</el-button>
              </el-col>
              <el-col :offset="0" :span="2">
                  <el-input v-model="input4" placeholder="价格上限"></el-input>
              </el-col>
              <el-col :offset="1" :span="2">
                  <el-button type="danger" round>成交量升序</el-button>
              </el-col>
              <el-col :offset="1" :span="2">
                  <el-button type="success" round>成交量降序</el-button>
              </el-col>
            </el-row>
            <el-row :type="flex" :justify="start" :align="middle">
              <el-col :offset="0" :span="1">
                <el-button type="info">分类</el-button>
              </el-col>
              <el-col :offset="0" :span="10"> 
                <el-checkbox-group v-model="checkList">
                    <el-checkbox-button label="网页开发"></el-checkbox-button>
                    <el-checkbox-button label="数据分析"></el-checkbox-button>
                    <el-checkbox-button label="数据可视化"></el-checkbox-button>
                </el-checkbox-group>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </div>
</template>
<style>
a {
  text-decoration: none;
  color: #aaa;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.p{font-family: Arial,sans-serif; font-size: 2px;}
</style>
<script>
export default {
  name: "UserPage",
  data() {
    return {
      activeIndex: "",
      searchDemand: "",
      activeSearchChoice: "demand",
      checkList: ["数据挖掘"],
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      service1: './static/c_sharp.jpg',
      service2: './static/database.png',
      service3: './static/web.jpg',
      geek1: './static/mobile_app.jpg',
      geek2: './static/web_scrap.jpg',
      geek3: './static/write_sql.jpg'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
