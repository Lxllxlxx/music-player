<template>
    <div>

        <div v-if="active == 0" style="margin-top: 40px;">
            <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
                您还未登录哦！请前去登录
            </van-divider>
        </div>
        <van-row v-for="obj, index in filMusic" :key="obj.id">
            <van-col span="2">{{ index + 1 }}</van-col>
            <van-col span="3"><van-image :src="obj.pic"></van-image></van-col>
            <van-col span="19">
                <van-cell center :title="obj.name" route :label="obj.artist + ' - ' + obj.album"
                    :to="{ path: '/play', query: { songid: obj.id } }">
                    <template #right-icon>
                        <van-icon name="like" color="red" size="1.2rem" @click.stop="remove(obj.id)" />
                    </template>
                </van-cell>
                <!-- <MusicList :title="obj.name" route :label="obj.artist + ' - ' + obj.album"
                        :to="{ path: '/play', query: { songid: obj.id } }"></MusicList> -->
            </van-col>
        </van-row>
        <div v-if="active != 0" v-show="show" style="margin-top: 40px;">
            <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
                收藏歌单为空哦！快去添加歌曲吧！
            </van-divider>
        </div>
    </div>
</template>
<script>
import { showSuccessToast, showFailToast } from 'vant';
import MusicList from "../components/MusicList.vue"
export default {
    components: {
        MusicList
    },
    data() {
        return {
            active: 1,
            userLike: [],
            user: {},
            show: false

        };
    },
    mounted() {
        //获取登录信息
        this.user = JSON.parse(localStorage.getItem("userLogin"))
        if (this.user == null) {
            this.active = 0
        }
        // console.log(this.user);
        //获取localStorage中所有的收藏歌曲
        this.userLike = JSON.parse(localStorage.getItem("userLike"))
        if (this.userLike == null) {
            this.userLike = []
        }
        if (this.filMusic.length == 0) {
            this.show = true
        }
    },
    computed: {
        filMusic() {  //用户登录情况下，过滤出该用户收藏的歌曲
            if (this.user != null) {
                return this.userLike.filter((p) => {
                    // console.log(p.phone);
                    return p.phone.indexOf(this.user.phone) != -1
                })
            }
            else {
                return []
            }
        }

    },
    methods: {
        remove(id) {        //移除歌单
            //存在有多个用户收藏同一首歌曲 只有当id和手机号都满足时 才移除该歌曲
            let index = this.userLike.findIndex((arr) => arr.id == id && arr.phone == this.user.phone);
            this.userLike.splice(index, 1)
            localStorage.setItem("userLike", JSON.stringify(this.userLike))
            // console.log('remove');
        },

    }
}

</script>
<style scoped>
.van-swipe-cell__right {
    display: flex;
    align-items: center;
}

.tr-color {
    background: rgb(234, 245, 252);
}

.van-col {
    display: flex;
    justify-content: center;
    align-items: center;

}
</style>