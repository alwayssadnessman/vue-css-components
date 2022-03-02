<template>
    <div>
        <video id="videoPlayer" muted class="video-js vjs-default-skin" controls preload="none" width="640" height="264" autoplay>
        </video>
    </div>
</template>
<script lang='ts'>
    import videojs from "video.js";
    import 'videojs-contrib-hls';
    import {
        onMounted,
        watch,
        getCurrentInstance
    } from 'vue'
    export default {
        name: 'app',
        data() {
            return {
                player: '',
                playerOptions: {
                    controls: true, // 是否显示控制条
                    // 是否关闭音频
                    muted: true,
                    // 初始语言，默认为英语，code参见：https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
                    language: 'zh-CN',
                    // 播放速度，指定后Video.js将显示一个控件(vjs-playback-rate类的控件)，允许用户从选项数组中选择播放速度
                    playbackRates: [0.5, 1.0, 1.5, 2.0],
                    // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值，表示长宽比例
                    aspectRatio: '4:3',
                    // 等同于原生<video>标签中的一组<source>子标签，可实现优雅降级；type 属性规定媒体资源的 MIME 类型，标准类型可参见：https://www.iana.org/assignments/media-types/media-types.xhtml；
                    sources: [
                        // {
                        // type: "rtmp/flv",
                        // src: "rtmp://58.200.131.2:1935/livetv/hunantv"
                        // }, 
                        {
                            type: "application/x-mpegURL",
                            src: "http://220.161.87.62:8800/hls/1/index.m3u8"
                        }
                    ],
                    // 兼容顺序，默认值是['html5']，这意味着html5技术是首选，其他已注册的技术将按其注册的顺序在该技术之后添加。
                    techOrder: ['html5'],
                    // 在视频开始播放之前显示的图像的URL（封面），这通常是一个视频帧或自定义标题屏幕，一旦用户点击“播放”，图像就会消失。
                    poster: '',
                }
            }
        },
        methods: {
            initPlayer() {
                let _this = this;
                this.$nextTick(() => {
                    this.player = videojs("videoPlayer", _this.playerOptions)
                })

            }
        },
        mounted() {
            this.initPlayer();
        },
        unmounted() {
            this.player.dispose()
        },
        setup() {
            const internalInstance = getCurrentInstance()
            //书写变量
            onMounted(() => { //挂载前执行

            })
            //watch('监听的对象',(newValue,oldValue)=>{})
            return {

            }
        }
    }
</script>
<style scoped>
</style>