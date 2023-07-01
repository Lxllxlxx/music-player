<template>
    <div style="margin-top: 30px;text-align: center;">
        <van-nav-bar title="注册" left-arrow @click-left="tologin"></van-nav-bar>
        <van-image round width="6rem" height="6rem" src="https://inews.gtimg.com/newsapp_bt/0/14766134657/641"
            style="margin-top: 10px;" />
        <van-form style="margin-top: 20px;">
            <van-cell-group>
                <van-field v-model="user.phone" required label="手机号" placeholder="请输入手机号" :rules="[
                    { required: true },
                    { pattern: /^1[3456789]\d{9}$/, message: '手机号码格式错误！' },
                ]" />
                <van-field v-model="user.password" required type="password" label="密码" placeholder="请输入密码" />
                <van-field v-model="user.password1" required type="password" label="确认密码" placeholder="请再次输入密码" />
            </van-cell-group>
        </van-form>
        <div style="margin: 16px">
            <van-button round block type="info" @click="onsubmit">注册</van-button>
        </div>
    </div>
</template>
 
<script>
import { showSuccessToast, showFailToast } from 'vant';
export default {
    data() {
        return {
            user: {
                phone: '',
                password: '',
                password1: ''
            },
            userL: []

        };
    },
    mounted() {
        this.userL = JSON.parse(localStorage.getItem("userList"));
        if (this.userL === null) {
            this.userL = [];
        }
    },
    methods: {
        tologin() {
            this.$router.go(-1);
        },
        onsubmit() {
            if (this.user.phone == "" || this.user.password == "" || this.user.password1 == "") {
                showFailToast('注册失败！信息未完善');
            }
            else if (this.user.password != this.user.password1) {
                showFailToast('密码输入两次不一致！');
            }
            else {
                showSuccessToast('注册成功');
                this.userL.push({ phone: this.user.phone, password: this.user.password, password1: this.user.password1 })
                localStorage.setItem("userList", JSON.stringify(this.userL))
                setTimeout(() => {
                    this.$router.go(-1);
                }, 3000);
            }
        }
    },
};
</script>
 
<style scoped>
.icon-back {
    position: absolute;
    left: 2px;
    top: 15px
}
</style>
 
 