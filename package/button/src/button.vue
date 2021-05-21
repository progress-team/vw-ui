<template>
  <button
    type="button"
    class="vw-button"
    :class="[
      'vw-button--' + type,
      buttonSizeClass,
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disable,
        'is-loading': loading,
      },
    ]"
    @click="handleClick"
  >
    <i v-if="loading" class="vw-icon-loading"></i>

    <i v-if="!loading && icon" :class="icon"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "VwButton",
  props: {
    type: {
      default: "default",
      type: String,
    },
    plain: {
      type: Boolean,
    },
    round: {
      type: Boolean,
    },
    circle: {
      type: Boolean,
    },
    disable: {
      type: Boolean,
    },
    loading: {
      type: Boolean,
    },
    icon: {
      type: String,
    },
    size: {
      type: String,
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ["medium", "small", "mini", "tiny"].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    buttonSizeClass: function () {
      if (this.size) {
        return "vw-button--" + this.size;
      }
      return null;
    },
  },
  methods: {
    handleClick: function (event) {
      if (this.$props.disable) {
        return;
      }
      this.$emit("click", event);
    },
  },
};
</script>

<style lang="scss" >
@font-face {
  font-family: "element-icons";
  src: url(./../assets/element-icons.woff) format("woff"),
    url(./../assets/element-icons.ttf) format("truetype");
  /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  font-weight: normal;
  font-style: normal;
}

[class^="vw-icon-"],
[class*=" vw-icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: "element-icons" !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  vertical-align: baseline;
  display: inline-block;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.vw-icon-info:before {
  content: "\E61A";
}

.vw-icon-error:before {
  content: "\E62C";
}

.vw-icon-success:before {
  content: "\E62D";
}

.vw-icon-warning:before {
  content: "\E62E";
}

.vw-icon-question:before {
  content: "\E634";
}

.vw-icon-back:before {
  content: "\E606";
}

.vw-icon-arrow-left:before {
  content: "\E600";
}

.vw-icon-arrow-down:before {
  content: "\E603";
}

.vw-icon-arrow-right:before {
  content: "\E604";
}

.vw-icon-arrow-up:before {
  content: "\E605";
}

.vw-icon-caret-left:before {
  content: "\E60A";
}

.vw-icon-caret-bottom:before {
  content: "\E60B";
}

.vw-icon-caret-top:before {
  content: "\E60C";
}

.vw-icon-caret-right:before {
  content: "\E60E";
}

.vw-icon-d-arrow-left:before {
  content: "\E610";
}

.vw-icon-d-arrow-right:before {
  content: "\E613";
}

.vw-icon-minus:before {
  content: "\E621";
}

.vw-icon-plus:before {
  content: "\E62B";
}

.vw-icon-remove:before {
  content: "\E635";
}

.vw-icon-circle-plus:before {
  content: "\E601";
}

.vw-icon-remove-outline:before {
  content: "\E63C";
}

.vw-icon-circle-plus-outline:before {
  content: "\E602";
}

.vw-icon-close:before {
  content: "\E60F";
}

.vw-icon-check:before {
  content: "\E611";
}

.vw-icon-circle-close:before {
  content: "\E607";
}

.vw-icon-circle-check:before {
  content: "\E639";
}

.vw-icon-circle-close-outline:before {
  content: "\E609";
}

.vw-icon-circle-check-outline:before {
  content: "\E63E";
}

.vw-icon-zoom-out:before {
  content: "\E645";
}

.vw-icon-zoom-in:before {
  content: "\E641";
}

.vw-icon-d-caret:before {
  content: "\E615";
}

.vw-icon-sort:before {
  content: "\E640";
}

.vw-icon-sort-down:before {
  content: "\E630";
}

.vw-icon-sort-up:before {
  content: "\E631";
}

.vw-icon-tickets:before {
  content: "\E63F";
}

.vw-icon-document:before {
  content: "\E614";
}

.vw-icon-goods:before {
  content: "\E618";
}

.vw-icon-sold-out:before {
  content: "\E63B";
}

.vw-icon-news:before {
  content: "\E625";
}

.vw-icon-message:before {
  content: "\E61B";
}

.vw-icon-date:before {
  content: "\E608";
}

.vw-icon-printer:before {
  content: "\E62F";
}

.vw-icon-time:before {
  content: "\E642";
}

.vw-icon-bell:before {
  content: "\E622";
}

.vw-icon-mobile-phone:before {
  content: "\E624";
}

.vw-icon-service:before {
  content: "\E63A";
}

.vw-icon-view:before {
  content: "\E643";
}

.vw-icon-menu:before {
  content: "\E620";
}

.vw-icon-more:before {
  content: "\E646";
}

.vw-icon-more-outline:before {
  content: "\E626";
}

.vw-icon-star-on:before {
  content: "\E637";
}

.vw-icon-star-off:before {
  content: "\E63D";
}

.vw-icon-location:before {
  content: "\E61D";
}

.vw-icon-location-outline:before {
  content: "\E61F";
}

.vw-icon-phone:before {
  content: "\E627";
}

.vw-icon-phone-outline:before {
  content: "\E628";
}

.vw-icon-picture:before {
  content: "\E629";
}

.vw-icon-picture-outline:before {
  content: "\E62A";
}

.vw-icon-delete:before {
  content: "\E612";
}

.vw-icon-search:before {
  content: "\E619";
}

.vw-icon-edit:before {
  content: "\E61C";
}

.vw-icon-edit-outline:before {
  content: "\E616";
}

.vw-icon-rank:before {
  content: "\E632";
}

.vw-icon-refresh:before {
  content: "\E633";
}

.vw-icon-share:before {
  content: "\E636";
}

.vw-icon-setting:before {
  content: "\E638";
}

.vw-icon-upload:before {
  content: "\E60D";
}

.vw-icon-upload2:before {
  content: "\E644";
}

.vw-icon-download:before {
  content: "\E617";
}

.vw-icon-loading:before {
  content: "\E61E";
}

.vw-icon-loading {
  animation: rotating 2s linear infinite;
}

.vw-icon--right {
  margin-left: 5px;
}

.vw-icon--left {
  margin-right: 5px;
}

@keyframes rotating {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}

.vw-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  border-color: #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  & [class*="vw-icon-"] + span {
    margin-left: 5px;
  }

  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  &:active {
    color: #3a8ee6;
    border-color: #3a8ee6;
    outline: none;
  }
  &.is-plain:hover,
  &.is-plain:focus {
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }
  &.is-plain:active {
    background: #fff;
    border-color: #3a8ee6;
    color: #3a8ee6;
    outline: none;
  }
  &.is-active {
    color: #3a8ee6;
    border-color: #3a8ee6;
  }
  &.is-round {
    border-radius: 20px;
    padding: 12px 23px;
  }
  &.is-circle {
    border-radius: 50%;
    padding: 12px;
  }
  &.is-disabled,
  &.is-disabled:hover,
  &.is-disabled:focus {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }
  &.is-loading {
    position: relative;
    pointer-events: none;
  }
  &.is-loading:before {
    pointer-events: none;
    content: "";
    position: absolute;
    left: -1px;
    top: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: inherit;
    background-color: rgba(255, 255, 255, 0.35);
  }
}

.vw-button--default {
}

.vw-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;

  &:hover,
  &:focus {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
  &:active {
    background: #3a8ee6;
    border-color: #3a8ee6;
    color: #fff;
    outline: none;
  }
  &.is-plain {
    color: #409eff;
    background: #ecf5ff;
    border-color: #b3d8ff;
  }
  &.is-plain:hover,
  &.is-plain:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
  &.is-disabled,
  &.is-disabled:hover,
  &.is-disabled:focus,
  &.is-disabled:active {
    color: #fff;
    background-color: #a0cfff;
    border-color: #a0cfff;
  }
}

.vw-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
  &:active {
    background: #5daf34;
    border-color: #5daf34;
    color: #fff;
    outline: none;
  }
  &.is-plain {
    color: #67c23a;
    background: #f0f9eb;
    border-color: #c2e7b0;
  }
  &.is-plain:hover,
  &.is-plain:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
  &.is-plain:active {
    background: #5daf34;
    border-color: #5daf34;
    color: #fff;
    outline: none;
  }
  &.is-disabled,
  &.is-disabled:hover,
  &.is-disabled:focus,
  &.is-disabled:active {
    color: #fff;
    background-color: #b3e19d;
    border-color: #b3e19d;
  }
}

.vw-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;

  &:hover,
  &:focus {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }
  &:active {
    background: #82848a;
    border-color: #82848a;
    color: #fff;
    outline: none;
  }
  &.is-plain {
    color: #909399;
    background: #f4f4f5;
    border-color: #d3d4d6;
  }
  &.is-plain:hover,
  &.is-plain:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
  &.is-plain:active {
    background: #82848a;
    border-color: #82848a;
    color: #fff;
    outline: none;
  }
  &.is-disabled,
  &.is-disabled:hover,
  &.is-disabled:focus,
  &.is-disabled:active {
    color: #fff;
    background-color: #c8c9cc;
    border-color: #c8c9cc;
  }
}

.vw-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
  &:active {
    background: #cf9236;
    border-color: #cf9236;
    color: #fff;
    outline: none;
  }
  &.is-plain {
    color: #e6a23c;
    background: #fdf6ec;
    border-color: #f5dab1;
  }
  &.is-plain:hover,
  &.is-plain:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
  &.is-plain:active {
    background: #cf9236;
    border-color: #cf9236;
    color: #fff;
    outline: none;
  }
  &.is-disabled,
  &.is-disabled:hover,
  &.is-disabled:focus,
  &.is-disabled:active {
    color: #fff;
    background-color: #f3d19e;
    border-color: #f3d19e;
  }
}

.vw-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;

  &:hover,
  &:focus {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
  &:active {
    background: #dd6161;
    border-color: #dd6161;
    color: #fff;
    outline: none;
  }
  &.is-plain {
    color: #f56c6c;
    background: #fef0f0;
    border-color: #fbc4c4;
  }
  &.is-plain:hover,
  &.is-plain:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
  &.is-plain:active {
    background: #dd6161;
    border-color: #dd6161;
    color: #fff;
    outline: none;
  }
  &.is-disabled,
  &.is-disabled:hover,
  &.is-disabled:focus,
  &.is-disabled:active {
    color: #fff;
    background-color: #fab6b6;
    border-color: #fab6b6;
  }
}

.vw-button--text {
  border-color: transparent;
  color: #409eff;
  background: transparent;
  padding-left: 0;
  padding-right: 0;
  &:hover,
  &:focus {
    color: #66b1ff;
    border-color: transparent;
    background-color: transparent;
  }
  &:active {
    color: #3a8ee6;
    border-color: transparent;
    background-color: transparent;
  }
  &.is-disabled,
  &.is-disabled:hover,
  &.is-disabled:focus {
    border-color: transparent;
  }
}

.vw-button--medium {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
  &.is-round {
    padding: 10px 20px;
  }
  &.is-circle {
    padding: 10px;
  }
}

.vw-button--small {
  padding: 9px 15px;
  font-size: 12px;
  border-radius: 3px;
  &.is-round {
    padding: 9px 15px;
  }
  &.is-circle {
    padding: 9px;
  }
}

.vw-button--mini {
  padding: 7px 15px;
  font-size: 12px;
  border-radius: 3px;
  &.is-round {
    padding: 7px 15px;
  }
  &.is-circle {
    padding: 7px;
  }
}

.vw-button--tiny {
  padding: 5px 15px;
  font-size: 10px;
  border-radius: 3px;
  &.is-round {
    padding: 5px 15px;
  }
  &.is-circle {
    padding: 5px;
  }
}
</style>


