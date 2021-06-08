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
          >购买者页面</a
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
          <el-tab-pane label="搜索任务" name="demand">
            <el-row>
              <el-col :span="20">
                <el-input
                  v-model="searchDemand"
                  placeholder="请输入任务"
                ></el-input>
              </el-col>
              <el-col :span="4">
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
              </el-col>
            </el-row>
            <el-row>
              <el-button type="primary" plain>网路爬虫</el-button>
              <el-button type="primary" plain>数据提取</el-button>
              <el-button type="primary" plain>数据挖掘</el-button>
            </el-row>
            <el-row>
              <el-button type="primary" plain>可视化</el-button>
              <el-button type="primary" plain>数据分析</el-button>
              <el-button type="primary" plain>网站建设</el-button>
            </el-row>
          </el-tab-pane>
          <!-- 点击搜索极客的页面 -->
          <el-tab-pane label="工具偏好" name="geek">
            <el-row>
              <el-col :span="20">
                <el-input
                  v-model="searchDemand"
                  placeholder="请输入工具偏好"
                ></el-input>
              </el-col>
              <el-col :span="4">
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
              </el-col>
            </el-row>
            <el-row>
              <el-button type="primary" plain>Java</el-button>
              <el-button type="primary" plain>C/C++</el-button>
              <el-button type="primary" plain>Python</el-button>
              <el-button type="primary" plain>Go</el-button>
            </el-row>
            <el-row>
              <el-button type="success" plain>Photoshop</el-button>
              <el-button type="success" plain>Office</el-button>
              <el-button type="success" plain>Pr</el-button>
              <el-button type="success" plain>AE</el-button>
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
</style>
<script>
  export default {
    name: "GeekPage",
    data() {
      return {
        activeIndex: "",
        activeIndex2: "",
        searchDemand: "",
        activeSearchChoice: "demand",
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
