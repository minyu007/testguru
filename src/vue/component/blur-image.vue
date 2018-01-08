<template>
        <div>
        <img :src='oSrc' :class='getOriginalClass' :width='width' :height='height'></img>
        <img v-if='thumb' :src='tSrc' :class='getThumbClass' :width='width' :height='height'></img></div >
    
</template>

<script>
    const COMPONENT_NAME = 'blur-image'

    export default {
        name: COMPONENT_NAME,
        props: ['qr', 'original', 'thumb', 'parentClass', 'width', 'height', 'fast'],
        data () {
            return {
                oSrc: this.original,
                tSrc: this.thumb,
                thumbClass: this.parentClass,
                originalClass: this.parentClass
            }
        },

        computed: {
            getOriginalClass () {
                return this.originalClass
            },

            getThumbClass () {
                return this.thumbClass
            }
        },

        methods: {
            loadImg (src, time) {
                const vx = this
                return new Promise((resolve, reject) => {
                    let img = new Image()
                    img.src = src
                    img.onload = function () {
                        setTimeout(() => {
                            resolve({
                                src: img.src
                            })
                            if (vx.qr) {
                                vx.$emit('loaded')
                            }
                        }, time)
                    }
                    img.onerror = function (e) {
                        reject(e)
                    }
                })
            },
            async hasThumb (fast) {
                const t = await this.loadImg(this.thumb, 10)
                this.tSrc = t.src
                this.thumbClass = this.parentClass + ' thumb-loaded'
                let time = Math.floor(300 + Math.random() * (600 - 300))
                const o = await this.loadImg(this.original, fast ? 20 : time)
                this.oSrc = o.src
                this.thumbClass = this.parentClass + ' thumb-hidden'
                this.originalClass = this.parentClass + ' src-loaded'
            },

            async noThumb () {
                this.thumbClass = this.parentClass + ' thumb-hidden'
                const o = await this.loadImg(this.original, 0)
                this.oSrc = o.src
                this.originalClass = this.parentClass + ' src-loaded'
            }
        },

        mounted () {
            try {
                if (!this.thumb || this.thumb == '') {
                    this.noThumb()
                } else {
                    if (this.fast) {
                        this.hasThumb(true)
                    } else {
                        this.hasThumb()
                    }
                }
            } catch (e) {
                console.log(e)
            }
        }
    }
</script>
<style scoped>
    .blur-image-container{
        background-color: #d2d1d1;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
   /* .blur-image-container span{
        text-align: center;
        line-height: 100%
    }*/
    img {
        opacity: 0;
        transition: all 0.4s ease-in-out;
    }

    .thumb-loaded {
        opacity: 1;
        /*filter: blur(10px);
        transform: scale(1);*/
    }

    .src-loaded {
        opacity: 1;
    }

    .thumb-hidden {
        opacity: 0;
    }
</style>