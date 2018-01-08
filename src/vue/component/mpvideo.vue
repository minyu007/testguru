<template>
    <!-- <div> -->
    <div id='mp-front-plv'>
    </div>
    <!-- <button @click.prevent='starta()'>start</button> -->
    <!-- <button @click.prevent='pausea()'>pause</button> -->
    <!-- <button @click.prevent='playovera()'>playover</button> -->
    <!-- </div> -->
</template>
<script>
    import { mapGetters, mapActions } from 'vuex'
    import socket from '../service/socket'
    const COMPONENT_NAME = 'mpvideo'
    const polyvObject = window.polyvObject
    // let start, pause, playOver

    export default {
        name: COMPONENT_NAME,
        data () {
            return {
                player: null
            }
        },

        computed: {
            ...mapGetters([
                'video', 'speed', 'bullet'
            ])
        },

        methods: {
            ...mapActions([
                'updateLastRecord', 'updateBulletStatus'
            ])
        },

        watch: {
            'video': function (v, ov) {
                this.player.changeVid(v.vpathX10)
            }
        },

        mounted () {
            let vx = this
            this.player = polyvObject('#mp-front-plv').videoPlayer({
                width: '100%',
                height: '100%',
                'vid': this.video.vpathX10
            })

            window.s2j_onVideoPause = () => {
                // alert('test play pause')
                socket.changeVideoStatus({
                    videoId: vx.video.videoId,
                    vid: vx.video.vpathX10,
                    goodsId: vx.video.goodsId,
                    subjectId: vx.video.subjectId,
                    bulletId: vx.video.bulletId,
                    action: 'pause',
                    deviceType: 1
                })
            }

            window.s2j_onPlayOver = () => {
                // alert('test play playover')
                socket.changeVideoStatus({
                    videoId: vx.video.videoId,
                    vid: vx.video.vpathX10,
                    goodsId: vx.video.goodsId,
                    subjectId: vx.video.subjectId,
                    bulletId: vx.video.bulletId,
                    action: 'playOver',
                    deviceType: 1
                })
                if (vx.bullet.status !== 1) {
                    vx.updateBulletStatus(1)
                }
            }

            window.s2j_onPlayStart = () => {
                // alert('test play start')
                socket.changeVideoStatus({
                    videoId: vx.video.videoId,
                    vid: vx.video.vpathX10,
                    goodsId: vx.video.goodsId,
                    subjectId: vx.video.subjectId,
                    bulletId: vx.video.bulletId,
                    action: 'start',
                    deviceType: 1
                })
                vx.updateLastRecord({
                    subjectId: vx.video.subjectId,
                    bulletId: vx.video.bulletId
                })
                if (vx.bullet.status == -1) {
                    vx.updateBulletStatus(0)
                }
            }
        }
    }
</script>