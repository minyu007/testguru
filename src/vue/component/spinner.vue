<template>
<div>
    <div class='vx-container' v-show='payload'>
        <div class='vx-blocker'></div>
        <div class='vx-spinner' >
            <h5>{{txt}}</h5>
            <!-- <br> -->
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                <rect x="0" y="9.29055" width="4" height="11.4189" fill="#333" opacity="0.2">
                    <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
                    <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
                    <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
                </rect>
                <rect x="8" y="6.79055" width="4" height="16.4189" fill="#333" opacity="0.2">
                    <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
                    <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
                    <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
                </rect>
                <rect x="16" y="5.70945" width="4" height="18.5811" fill="#333" opacity="0.2">
                    <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
                    <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
                    <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
                </rect>
            </svg>
        </div>  
    </div>
</div>
</template>
<script>
    const COMPONENT_NAME = 'spinner'
    export default {
        name: COMPONENT_NAME,
        props: ['txt', 'payload'],
        data () {
            return {}
        }
    }
</script>
<style scoped>
    .vx-container{
        position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          /*background: #000;*/
          z-index: 9999;
          /*opacity: 0.1;*/
    }
    .vx-blocker{
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background: #000;
      z-index: 9999;
      opacity: 0.1;
    }
    .vx-spinner{
        margin: 0 auto;
        text-align: center;
        font-size: 10px;
        position: relative;
        top: 35%;
    }
    .vx-spinner svg rect{
      fill: #009688;
    }
</style>