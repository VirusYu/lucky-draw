<template>
  <div class="home">
    <LuckyGrid
      ref="myLucky"
      :blocks="blocks"
      :prizes="prizes"
      :buttons="buttons"
      :defaultStyle="defaultStyle"
      @start="startCallBack"
      @end="endCallBack"
    />
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted } from "vue";

let currentInstance = "";

onMounted(() => {
  currentInstance = getCurrentInstance();
});

const defaultStyle = {
  background: "#b8c5f2",
};
const blocks = [
  { padding: "10px", background: "#869cfa" },
  { padding: "10px", background: "#e9e8fe" },
];
const prizes = [
  { x: 0, y: 0, fonts: [{ text: "800", top: "35%" }] },
  { x: 1, y: 0, fonts: [{ text: "200", top: "35%" }] },
  { x: 2, y: 0, fonts: [{ text: "500", top: "35%" }] },
  { x: 2, y: 1, fonts: [{ text: "600", top: "35%" }] },
  { x: 2, y: 2, fonts: [{ text: "1888", top: "35%" }] },
  { x: 1, y: 2, fonts: [{ text: "1000", top: "35%" }] },
  { x: 0, y: 2, fonts: [{ text: "600", top: "35%" }] },
  { x: 0, y: 1, fonts: [{ text: "200", top: "35%" }] },
];
const buttons = [
  {
    x: 1,
    y: 1,
    background: "#7f95d1",
    fonts: [{ text: "开始", top: "35%" }],
  },
];

function random() {
  return Math.floor(Math.random() * prizes.length);
}
function startCallBack() {
  // 开始游戏
  currentInstance.ctx.$refs.myLucky.play();
  // 假设接口的请求速度是5s
  setTimeout(() => {
    // 5s后拿到后端返回的中奖索引
    const index = random();
    // 然后停止游戏 (缓慢停止)
    currentInstance.ctx.$refs.myLucky.stop(index);
  }, 2000);
}
function endCallBack(prize) {
  // 当完全停止时, 触发回调函数
  console.log(prize);
}
</script>
