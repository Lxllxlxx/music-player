<template>
    <div>
        <van-row v-for="obj, index in List" :key="obj.id">
            <van-col span="2">{{ index + 1 }}</van-col>
            <van-col span="3"><van-image :src="obj.album.picUrl"></van-image></van-col>
            <van-col span="19">
                <van-cell center :title="obj.name" :label="obj.artists[0].name + ' - ' + obj.album.name" route
                    :to="{ path: '/play', query: { songid: obj.id } }">
                    <template #right-icon>
                        <van-icon name="play-circle-o" size="1.2rem" />
                    </template>
                </van-cell>
            </van-col>
        </van-row>
    </div>
</template>
<script>
export default {
    props: {
        List: Object
    }
};
</script>
  
<style scoped>
.van-col {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>