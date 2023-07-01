<template>
    <div style="text-align: center;">
        <van-image round width="6rem" height="6rem" src="https://inews.gtimg.com/newsapp_bt/0/14766134657/641" />
        <div>
            <van-form>
                <van-field v-model="phone" name="用户名" label="用户名" placeholder="请输入手机号"
                    :rules="[{ required: true, message: '请填写手机号' }]" />
                <van-field v-model="password" type="password" name="密码" label="密码" placeholder="请输入密码"
                    :rules="[{ required: true, message: '请填写密码' }]" />
            </van-form>
        </div>
        <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit" @click="onSubmit">登录</van-button>
        </div>
        <div class="reg">
            <div @click="toRegister">没有账号？立即注册</div>
        </div>
    </div>
</template>

<script>
import { showSuccessToast, showFailToast } from 'vant';

export default {
    name: "Login",
    data() {
        return {
            phone: '',
            password: '',
            userlist: []
        };
    },
    methods: {
        onSubmit() {
            let flag = 0
            var list = localStorage.getItem("userList");
            if (list == null) {   //用户为空
                showFailToast('账户不存在，请注册！')
                this.username = '';
                this.password = '';

            } else {
                this.userlist = JSON.parse(list);
                for (var i = 0; i < this.userlist.length; i++) {
                    if (this.userlist[i].phone == this.phone && this.userlist[i].password == this.password) {
                        //手机号与密码均符合 登录成功
                        flag = 1
                        showSuccessToast('登录成功！')
                        this.$router.replace({ path: '/info' });  //跳转到个人中心页面
                        localStorage.setItem("userLogin", JSON.stringify(this.userlist[i])); //存入登录用户信息
                        return;
                    }
                    else if (this.userlist[i].phone == this.phone && this.userlist[i].password != this.password) {
                        //手机号存在  密码错误
                        flag = 1
                        showFailToast('密码错误！')
                    }
                }
                if (!flag) {
                    showFailToast('账户不存在，请注册！')
                    this.phone = '';
                    this.password = '';
                }

            }

        },
        toRegister() {
            this.$router.push('/register')
        }
    }
}

</script>

<style scoped>
.title {
    /* border-radius: 15px; */
    size: 1px;
    height: 50px;
    line-height: 50px;
    background-color: #20a0ff;
    color: #fff;
    text-align: center;
}

div {
    margin-top: 30px;
}
</style>

