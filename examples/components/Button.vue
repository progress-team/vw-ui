<template>
  <div class="hello">
    <div class="vw-row">
      <vw-button>默认按钮</vw-button>
      <vw-button type="primary">主要按钮</vw-button>
      <vw-button type="success">成功按钮</vw-button>
      <vw-button type="info">信息按钮</vw-button>
      <vw-button type="warning">警告按钮</vw-button>
      <vw-button type="danger">危险按钮</vw-button>
    </div>

    <div class="vw-row">
      <vw-button round>圆角按钮</vw-button>
      <vw-button type="primary" :loading="loading" round>主要按钮</vw-button>
      <vw-button type="success" :loading="loading" round>成功按钮</vw-button>
      <vw-button type="info" round>信息按钮</vw-button>
      <vw-button type="warning" round>警告按钮</vw-button>
      <vw-button type="danger" round>危险按钮</vw-button>
    </div>

    <div class="vw-row">
      <vw-button circle icon="vw-icon-search"></vw-button>
      <vw-button
        type="primary"
        size="medium"
        circle
        icon="vw-icon-back"
      ></vw-button>
      <vw-button
        type="success"
        size="small"
        circle
        icon="vw-icon-success"
      ></vw-button>
      <vw-button type="info" size="mini" circle icon="vw-icon-info"></vw-button>
      <vw-button type="info" size="tiny" circle icon="vw-icon-info"></vw-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      loading: true,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vw-row {
  margin-bottom: 20px;
}
.vw-row .vw-button {
  margin-left: 10px;
}
</style>
