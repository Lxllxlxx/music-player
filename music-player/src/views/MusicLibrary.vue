<template>
    <div>
        <van-swipe :autoplay="3000" lazy-render>
            <van-swipe-item v-for="image in images" :key="image">
                <van-image :src="image" fit="fill" style="width: 100%;height: 200px;"></van-image>
            </van-swipe-item>
        </van-swipe>
        <van-tabs v-model:active="active" shrink>
            <van-tab v-for="item, index in musicKind" :title="item">
            </van-tab>
        </van-tabs>
        <MusicList v-if="active == 0" :List="reList"></MusicList>
        <Music v-if="active == 1" :List="chList"></Music>
        <Music v-if="active == 2" :List="uList"></Music>
        <Music v-if="active == 3" :List="kList"></Music>
        <Music v-if="active == 4" :List="jList"></Music>
    </div>
</template>
<script>

import { recommendMusicAPI, uMusicAPI, chineseMusicAPI, kMusicAPI, jMusicAPI } from "@/api"
import MusicList from "../components/MusicList.vue"
import Music from "../components/music.vue"
export default {
    components: {
        MusicList,
        Music
    },
    data() {
        return {
            reList: [],
            uList: [],
            chList: [],
            kList: [],
            jList: [],
            musicKind: ['最新音乐', '华语', '欧美', '韩国', '日本'],
            images: [
                require('../images/1.jpg'),
                require('../images/2.jpg'),
                require('../images/3.jpg'),
                require('../images/4.jpg'),],
            active: 0,
        }

    },
    async beforeCreate() {
        const res = await recommendMusicAPI({
            limit: 10,
        });
        const ress = await uMusicAPI(); //获取音乐数据
        const resss = await chineseMusicAPI();
        const ressss = await kMusicAPI();
        const resssss = await jMusicAPI();
        // console.log(res);
        // console.log(ress.data.data);
        this.reList = res.data.result;//将音乐数据存入对象数组中
        this.uList = ress.data.data.slice(0, 10);
        this.chList = resss.data.data.slice(0, 10);
        this.kList = ressss.data.data.slice(0, 10);
        this.jList = resssss.data.data.slice(0, 10);
        localStorage.setItem("playlist", JSON.stringify(this.reList))
        localStorage.setItem("playlist", JSON.stringify(this.uList))
        localStorage.setItem("playlist", JSON.stringify(this.chList))
        localStorage.setItem("playlist", JSON.stringify(this.kList))
        localStorage.setItem("playlist", JSON.stringify(this.jList))
    },

}
</script>
<style scoped>
.van-col {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
