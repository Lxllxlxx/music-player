<template>
    <div v-if="show">
        <van-row style="margin-top: 25px;margin-left: 20px;">
            <van-col span="8"><van-image round width="6rem" height="6rem"
                    src="https://inews.gtimg.com/newsapp_bt/0/14766134657/641" /></van-col>
            <van-col span="16">欢迎您！{{ user.phone }}</van-col>
        </van-row>
        <van-cell title="修改密码" is-link icon="notes-o" style="line-height: 2em;margin-top: 70px;"
            @click="showDialog = true"></van-cell>
        <van-cell title="设置" is-link icon="setting-o" style="line-height: 2em;"></van-cell>
        <van-cell title="退出登录" is-link icon="wap-home" style="line-height: 2em;" @click="exit"></van-cell>
        <van-dialog v-model:show="showDialog" @confirm="Sure">
            <van-form>
                <van-cell-group>
                    <van-field v-model="change.oldPwd" required type="password" label="密码" placeholder="请输入旧密码" />
                    <van-field v-model="change.newPwd" required type="password" label="密码" placeholder="请输入新密码" />
                    <van-field v-model="change.newPwd1" required type="password" label="确认密码" placeholder="请再次输入新密码" />
                </van-cell-group>
            </van-form>
        </van-dialog>
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
            user: {},
            show: false,
            showDialog: false,
            change: {
                oldPwd: '',
                newPwd: '',
                newPwd1: ''
            },
            userlist:[]
        };
    },
    mounted() {
        this.user = JSON.parse(localStorage.getItem("userLogin"))
        if (this.user == null) {
            this.$router.push('/login')
        } else {
            this.show = true
        }
    },
    methods: {
        exit() {
            showSuccessToast('退出登录成功！')
            this.$router.push('/login')
            localStorage.removeItem("userLogin")
        },
        Sure() {
            if (this.user.password != this.change.oldPwd) {
                showFailToast('旧密码错误！修改失败！');
            }
            else if (this.change.newPwd != this.change.newPwd1) {
                showFailToast('新密码输入两次不一致！');
            } 
            else{
                this.userlist=JSON.parse(localStorage.getItem("userList"))
                for (var i = 0; i < this.userlist.length; i++) {
                    //找到自己的记录 进行修改
                    if(this.userlist[i].phone==this.user.phone){
                        this.userlist[i].password=this.change.newPwd
                        this.userlist[i].password1=this.change.newPwd1
                        localStorage.setItem("userList", JSON.stringify(this.userlist))
                    }
                }
            }
                

        }
    }
}

</script>
<style scoped>
.van-col {

    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center
}
</style>