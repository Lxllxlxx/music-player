<template>
    <van-row style="padding-top: 15px;">
        <van-col span="8">
            <van-image width="98" :src="url"></van-image>
        </van-col>
        <van-col span="16">
            <van-row v-for="item, index in SongList" :class="{ 'tr-color': index % 2 == 1 }" @click="play(item.id)">
                <van-col span="2">{{ index + 1 }}</van-col>
                <van-col span="12">{{ item.name }} </van-col>
                <van-col span="10">{{ item.artist }} </van-col>
            </van-row>
        </van-col>
    </van-row>
</template>
<script>
export default {
    props: {
        url: String,
        SongList: Object
    },
    methods: {
        play(id) {
            this.$router.push('/play' + '?songid=' + id);
        }
    }
};
</script>
  
<style scoped>
.van-col {
    display: grid;
    align-items: center;
    font-size: small;
}

.tr-color {
    background-color: rgb(244, 244, 230);
}
</style>