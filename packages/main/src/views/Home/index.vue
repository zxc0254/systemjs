<template>
    <div class="h-main-wrapper">
        <div class="h-main-title"></div>
        <video class="h-main-video" autoplay="autoplay" loop muted>
            <source :src="videos" type="video/m4v"/>
        </video>
    </div>

</template>
<style>
    .h-main-title {
        position: absolute;
        z-index: 10;
        display: inline-block;
        height: 192px;
        width: 737px;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background: url("../../assest/title.svg") no-repeat center center;
    }
    .h-main-wrapper {
        height: 100%;
        overflow: hidden;
    }

    .h-main-video {
        width: 100%;
    }
</style>
<script>
    import videos from '../../assest/sources.m4v'

    export default {
        data() {
            return {
                videos,
            }
        }
    }
</script>