// 文件名-尽量和模块页面文件名统一(方便查找)
import request from '@/utils/request'

// 最新音乐
export const recommendMusic = params => request({
  url: 'personalized/newsong',
  params
  // 将来外面可能传入params的值 {limit: 20}
})
//华语歌单
export const chineseMusic = params => request({
  url: '/top/song?type=7',
  params
})
//欧美歌单
export const uMusic = params => request({
  url: '/top/song?type=96',
  params
})
//韩国歌单
export const kMusic = params => request({
  url: '/top/song?type=16',
  params
})
//日本歌单
export const jMusic = params => request({
  url: '/top/song?type=8',
  params
})
// 播放页 - 获取歌曲详情
export const getSongById = (id) => request({
  url: `/song/detail?ids=${id}`,
  method: "GET"
})

// 播放页 - 获取歌词
export const getLyricById = (id) => request({
  url: `/lyric?id=${id}`,
  method: "GET"
})
//飙升榜
export const getTopList1 = params => request({
  url: '/playlist/detail?id=19723756',
  params
})
//新歌榜
export const getTopList2 = params => request({
  url: '/playlist/detail?id=3779629',
  params
})
//原创榜
export const getTopList3 = params => request({
  url: '/playlist/detail?id=2884035',
  params
})
//热歌榜
export const getTopList4 = params => request({
  url: '/playlist/detail?id=3778678',
  params
})