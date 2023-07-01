<template>
    <div style="padding-left: 10px;">
        <h3 style="text-align: left;line-height: 0;">官方榜</h3>
        <div style="padding-top: 10px;">
            <SortList :url="boosturl" :SongList="boostSongList"></SortList>
            <SortList :url="hoturl" :SongList="HotSongList"></SortList>
            <SortList :url="newurl" :SongList="newSongList"></SortList>
            <SortList :url="makeurl" :SongList="makeSongList"></SortList>
        </div>
    </div>
</template>

<script>

import { getTopListAPI, getTopListAPI1, getTopListAPI2, getTopListAPI3, getSongByIdAPI } from "@/api"

import SortList from "../components/SortList.vue"
export default {
    components: {
        SortList
    },
    data() {
        return {
            newSongList: [],
            HotSongList: [],
            makeSongList: [],
            boostSongList: [],
            boosturl: '',
            hoturl: '',
            newurl: '',
            makeurl: '',
            songInfo: { name: '', id: '', artist: '' },
        }
    },
    // methods: {
    //     aaa(id) {
    //         this.$router.push('/play'+'?songid='+id);
    //     }
    // },
   
    async beforeCreate() {
        const res = await getTopListAPI(); //获取排行榜数据
        const res1 = await getTopListAPI1();
        const res2 = await getTopListAPI2();
        const res3 = await getTopListAPI3();
        // console.log(res.data.privileges);
        for (let i = 0; i < 4; i++) {
            const re = await getSongByIdAPI(res.data.privileges[i].id) //获取排行榜中该音乐的具体信息
            //将音乐id、歌曲名、歌手存入对象数组中
            this.boostSongList.push({ name: re.data.songs[0].name, id: re.data.songs[0].id, artist: re.data.songs[0].ar[0].name })
            // console.log(this.boostSongList);
        }
        this.boosturl = res.data.playlist.coverImgUrl
        for (let i = 0; i < 4; i++) {
            const re = await getSongByIdAPI(res1.data.privileges[i].id)
            this.newSongList.push({ name: re.data.songs[0].name, id: re.data.songs[0].id, artist: re.data.songs[0].ar[0].name })
            // console.log(this.newSongList);
        }
        this.newurl = res1.data.playlist.coverImgUrl
        for (let i = 0; i < 4; i++) {
            const re = await getSongByIdAPI(res2.data.privileges[i].id)
            this.makeSongList.push({ name: re.data.songs[0].name, id: re.data.songs[0].id, artist: re.data.songs[0].ar[0].name })
            // console.log(this.makeSongList);
        }
        this.makeurl = res2.data.playlist.coverImgUrl
        for (let i = 0; i < 4; i++) {
            const re = await getSongByIdAPI(res3.data.privileges[i].id)
            this.HotSongList.push({ name: re.data.songs[0].name, id: re.data.songs[0].id, artist: re.data.songs[0].ar[0].name })
            // console.log(this.HotSongList);
        }
        this.hoturl = res3.data.playlist.coverImgUrl
        // console.log(this.hoturl)
        // console.log(this.newSongList)
    },
}

</script>
