<!--
 * @Author: xiazhi
 * @Date: 2021-12-22 16:16:27
 * @LastEditors: xiazhi
 * @LastEditTime: 2021-12-22 16:38:45
 * @Descripttion: 文件名称
-->
<template>
  <div>登录页</div>
  <el-button @click="goHome">回首页</el-button>
</template>


<script setup>
import { defineProps, reactive } from "vue";
import { useRouter } from "vue-router";
defineProps({
  msg: String,
});
const state = reactive({ count: 0 });
const router = useRouter();
const goHome = () => {
  router.push("/welcome");
};
</script>