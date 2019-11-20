<template>
  <div id='app'>
    <router-view />
    <div class="context" v-if="this.$route.path=='/'">
      <div class="logo">
        <img src='./common/img/logo.jpg' />
        <span>雪鹰云</span>
      </div>
      <!-- <span style="color: white">{{lcAcsB128.mac}}</span> -->
      <div class="input">
        <label>用户名：</label>
        <input type='text' />
        <label>密码：</label>
        <input type='password' />
        <button type='button' class @click='login()'>登陆</button>
      </div>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
// import {mapState} from 'vuex'
export default {
  name: 'App',
  created () {
    // 异步获取address
    // this.$store.dispatch('getLcAcsB128')
  },
  mounted () {
    // console.log('app:'+this.$route.path)
  },
  data () {
    return {
      arg: '',
      lcAcsB128: {}
    }
  },
  methods: {
    login () {
      this.$router.replace('/devsys')
      // this.$router.push({path: 'devsys'})
      // this.$store.dispatch('getLcAcsB128')
      // console.log('jj:'+lcAcsB128.mac)
    }
  },
      computed: {
      // ...mapState(['lcAcsB128', 'address', 'categorys', 'userInfo']),
      /*
      根据categorys一维数组生成一个2维数组
      小数组中的元素个数最大是8
       */
      categorysArr () {
        const {categorys} = this
        // 准备空的2维数组
        const arr = []
        // 准备一个小数组(最大长度为8)
        let minArr = []
        // 遍历categorys
        categorys.forEach(c => {
          // 如果当前小数组已经满了, 创建一个新的
          if (minArr.length===8) {
            minArr = []
          }
          // 如果minArr是空的, 将小数组保存到大数组中
          if (minArr.length===0) {
            arr.push(minArr)
          }
          // 将当前分类保存到小数组中
          minArr.push(c)
        })

        return arr
      }
    }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
#app {
  text-align: center;

  .context {
    position: absolute;
    background-color: #131313;
    height: 900px;
    width: 100%;

    .logo {
      position: absolute;
      top: 10px;
      left: 10px;

      img {
        height: 35px;
        vertical-align: middle; // 居中对齐
      }

      span {
        font-size: 25px;
        color: #F2F2F2;
        border-left: 3px solid #F2F2F2;
        padding-left: 15px;
        margin-left: 15px;
        vertical-align: middle; // 居中对齐
      }
    }

    .input {
      margin-top: 350px;

      label {
        color: #F2F2F2;
      }

      input {
        height: 25px;
      }

      button {
        background-color: #E7EAED;
        height: 25px;
        margin-left: 15px;
      }
    }
  }
}
</style>
