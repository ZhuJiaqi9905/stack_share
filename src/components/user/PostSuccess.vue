<template>
  <div>
    <el-container>
      <el-main>
        <el-row>
          <el-col :span="8" :offset="8">
            <el-image :src="src"></el-image>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8" :offset="0">
            <span>这些开发者与您的需求匹配度很高，需要了解一下吗？</span>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :span="5" :offset="3">
            <el-image :src="demo"></el-image>
            <span class="demonstration">极客A</span>
          </el-col>
          <el-col :span="5" :offset="2">
            <el-image :src="demo"></el-image>
            <span class="demonstration">极客A</span>
          </el-col>
          <el-col :span="5" :offset="2">
            <el-image :src="demo"></el-image>
            <span class="demonstration">极客A</span>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :span="5" :offset="3">
            <el-image :src="demo"></el-image>
            <span class="demonstration">极客A</span>
          </el-col>
          <el-col :span="5" :offset="2">
            <el-image :src="demo"></el-image>
            <span class="demonstration">极客A</span>
          </el-col>
          <el-col :span="5" :offset="2">
            <el-image :src="demo"></el-image>
            <span class="demonstration">极客A</span>
          </el-col>
        </el-row>
      </el-main>
    
    </el-container>
  </div>
</template>

<style>
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
  name: "Success",
  data() {
    return {
      src: 'https://p26.toutiaoimg.com/origin/pgc-image/8146e1a1a9464d4c92408b8c30b289ea.png',
      demo: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
    };
  },
};
</script>