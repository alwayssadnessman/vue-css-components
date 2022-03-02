<template>
    <div>
        <div>
            <video controls width="1000" height="500" id="videoElement" autoplay></video>
        </div>
    </div>
</template>
<script lang='ts'>
    import flvjs from 'flv.js'
    import {
        onMounted,
        watch,
        getCurrentInstance,
        nextTick
    } from 'vue'
    export default {
        name: 'app',
        setup() {
            const internalInstance = getCurrentInstance()
            const createVideo = () => {
                if (flvjs.isSupported()) {
                    let videoElement = document.getElementById('videoElement');
                    setTimeout(function () {
                        videoElement = document.getElementById('videoElement');
                        this.flvPlayer = flvjs.createPlayer({
                            type: 'flv',
                            url: 'http://r.ossrs.net/live/bbb.flv',
                        });
                        this.flvPlayer.attachMediaElement(videoElement);
                        this.flvPlayer.load();
                        this.flvPlayer.play();
                    }, 100);
                }
            }
            //书写变量
            onMounted(() => { //挂载前执行
                nextTick(() => {
                    createVideo()
                })
            })
            //watch('监听的对象',(newValue,oldValue)=>{})
            return {

            }
        }
    }
</script>
<style scoped>
</style>