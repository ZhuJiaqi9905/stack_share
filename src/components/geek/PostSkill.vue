<template>
  <div>
    <el-container>
      <el-header>
        <span>请填写技能描述</span>
      </el-header>
      <el-main>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="标题">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item label="技能详细描述">
            <el-input
              type="textarea"
              :autosize="{ minRows: 8 }"
              v-model="form.description"
            ></el-input>
          </el-form-item>
          <el-form-item label="起步价">
            <el-input v-model="form.money" size="small"></el-input>
          </el-form-item>
          <el-form-item label="技能标签">
            <el-checkbox-group v-model="form.skills">
              <el-checkbox label="C/C++" name="skills"></el-checkbox>
              <el-checkbox label="Python" name="skills"></el-checkbox>
              <el-checkbox label="SPSS" name="skills"></el-checkbox>
              <el-checkbox label="安卓应用" name="skills"></el-checkbox>
              <el-checkbox label="数据挖掘" name="skills"></el-checkbox>
              <el-checkbox label="其它" name="skills"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">发布</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          title: "",
          description: "",
          startTime: [
            new Date(2000, 10, 10, 10, 10),
            new Date(2000, 10, 11, 10, 10),
          ],
          endTime: "",
          money: "",
          skills: [],
        },
        pickerOptions: {
          shortcuts: [
            {
              text: "最近一周",
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit("pick", [start, end]);
              },
            },
            {
              text: "最近一个月",
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                picker.$emit("pick", [start, end]);
              },
            },
            {
              text: "最近三个月",
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                picker.$emit("pick", [start, end]);
              },
            },
          ],
        },
      };
    },
    methods: {
      onSubmit() {
        console.log("submit!");
      },
    },
  };
</script>
