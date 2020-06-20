<template>
  <div class="container">
    <div class="day">
      <span v-if="this.status === 'home'" class="day-tips">{{ level }}</span>
      <span v-if="this.status === 'item'" class="day-tips">
        题目{{ itemNum }}
      </span>
    </div>
    <div v-if="this.status === 'home'">
      <div class="container_logo container_logo_style"></div>
      <router-link to="item" class="start button_style"></router-link>
    </div>
    <div v-if="this.status === 'item'">
      <div class="item_back item_container_style">
        <div class="item_list_container">
          <ul class="">
            <li
              v-for="(item, index) in itemDetail[itemNum - 1].topic_answer"
              :key="index"
              :data-index="index"
              class="item_list tet_left"
              @click="chooseItem(item.topic_answer_id, index)"
            >
              <span
                class="option_style"
                :class="{ has_choosed: choosedNum === index }"
                >{{ changeIndex(index) }}</span
              >
              <span class="option_detail">{{ item.answer_name }}</span>
            </li>
          </ul>
        </div>
      </div>
      <span
        v-if="itemNum < itemDetail.length"
        @click="nextItem"
        class="next_item button_style"
      >
      </span>
      <span
        v-if="itemNum === itemDetail.length"
        @click="endScore"
        class="submit_item button_style"
      >
      </span>
    </div>
    <div class="footer"></div>
  </div>
</template>
<script>
import bodyImg from "../images/1-1.jpg";
import { mapActions, mapState } from "vuex";
export default {
  created() {
    document.body.style.backgroundImage = "url(" + bodyImg + ")";
    this.init();
  },
  props: {
    status: {
      type: String,
      default: "home"
    }
  },
  data() {
    return {
      itemId: null, //题目ID
      choosedNum: null, //选中答案索引
      choosedId: null //选中答案id
    };
  },
  methods: {
    ...mapActions(["init", "saveItem"]),
    changeIndex(index) {
      let obj = {
        "0": "A",
        "1": "B",
        "2": "C",
        "3": "D"
      };
      return obj[index];
    },
    chooseItem(id, index) {
      this.choosedNum = index;
      this.choosedId = id;
    },
    nextItem() {
      if (this.choosedNum !== null) {
        this.choosedNum = null;

        //记录答案，跳转下一题
        this.saveItem(this.choosedId);
      } else {
        alert("请您选择答案!");
      }
    },
    endScore() {
      this.$router.push("/endPage");
    }
  },
  computed: {
    ...mapState(["itemNum", "level", "itemDetail"])
  }
};
</script>
<style lang="less" scoped>
.container {
  position: relative;
  .day {
    position: absolute;
    height: 7.35rem;
    width: 3.25rem;
    top: -1.3rem;
    right: 1.6rem;
    background: url(../images/WechatIMG2.png) no-repeat;
    background-size: 100% 100%;
    z-index: 10;
    .day-tips {
      position: absolute;
      left: 0.48rem;
      bottom: 1.1rem;
      height: 0.7rem;
      width: 2.5rem;
      font-size: 0.6rem;
      font-family: "黑体";
      font-weight: 600;
      color: #a57c50;
      text-align: center;
    }
  }
  .container_logo {
    background-image: url(../images/1-2.png);
    background-size: 13.142rem 100%;
    background-position: right center;
  }
  .container_logo_style {
    height: 11.625rem;
    width: 13.15rem;
    background-repeat: no-repeat;
    position: absolute;
    top: 4.1rem;
    left: 1rem;
  }
  .start {
    background-image: url(../images/1-4.png);
  }
  .option_style {
    height: 0.725rem;
    width: 0.725rem;
    border: 1px solid #fff;
    border-radius: 50%;
    line-height: 0.725rem;
    text-align: center;
    margin-right: 0.3rem;
    font-size: 0.5rem;
    font-family: "Arial";
  }
  .option_detail {
    width: 7.5rem;
    padding-top: 0.11rem;
  }
  .item_list {
    font-size: 0;
    margin-top: 0.4rem;
    width: 10rem;
    span {
      display: inline-block;
      font-size: 0.6rem;
      color: #fff;
      vertical-align: middle;
    }
  }
  .item_back {
    background-image: url(../images/2-1.png);
    background-size: 100% 100%;
  }
  .item_container_style {
    height: 11.625rem;
    width: 13.15rem;
    background-repeat: no-repeat;
    position: absolute;
    top: 4.1rem;
    left: 1rem;
  }
  .item_list_container {
    position: absolute;
    height: 7rem;
    width: 8rem;
    top: 2.4rem;
    left: 3rem;
    -webkit-font-smoothing: antialiased;
  }
  .next_item {
    background-image: url(../images/2-2.png);
  }
  .submit_item {
    background-image: url(../images/3-1.png);
  }
  .button_style {
    display: block;
    height: 2.1rem;
    width: 4.35rem;
    background-size: 100% 100%;
    position: absolute;
    top: 16.5rem;
    left: 50%;
    margin-left: -2.4rem;
    background-repeat: no-repeat;
  }
  .has_choosed {
    background-color: #ffd400;
    color: #575757;
    border-color: #ffd400;
  }
}
</style>
