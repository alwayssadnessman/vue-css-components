<template>
    <div id="app">
        <video id="hlsVideo" ref="hlsVideo" controls preload="true"></video>
    </div>
</template>

<script>
    import Hls from 'hls.js';
    export default {
        name: 'dHelp',
        data() {
            return {
                hls: ''
            }
        },
        methods: {
            destroyHls: function () {
                if (this.hls) {
                    this.$refs.hlsVideo.pause();
                    this.hls.destroy();
                    this.hls = null;
                }
            },
            loadVideoFn: function () {
                if (Hls.isSupported()) {
                    this.hls = new Hls();
                    this.hls.loadSource("/apple/iphone/samples/bipbop/bipbopall.m3u8"); // CCTV1直播源
                    this.hls.attachMedia(this.$refs.hlsVideo);
                    this.hls.on(Hls.Events.MANIFEST_PARSED, () => {
                        console.log('加载成功');
                        this.$refs.hlsVideo.play();
                    });
                    this.hls.on(Hls.Events.ERROR, (event, data) => {
                         console.log(event, data);
                        // 监听出错事件
                        console.log('加载失败');
                    });
                }
            },
        },
        computed: {

        },

        // created(){
        //     let _this = this;

        //     _this.$once('hook:beforeDestroy', () => {
        //         _this.destroyHls()
        //     })
        // },

        mounted() {
            let _this = this;
            _this.loadVideoFn()
        },

        watch: {},

        components: {

        },
    }
</script>

<style scoped>
    #hlsVideo {
        width: 100%;
        height: 100%;
        border: none;
    }
</style>