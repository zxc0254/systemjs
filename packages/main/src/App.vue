<template>
    <div class="h-main-wrappers">
        <Headers/>
        <router-view></router-view>
        <Footers/>
    </div>
</template>
<style>
    html, body, .h-main-wrappers {
        padding: 0;
        margin: 0;
        height: 100%;
    }
</style>
<script>
    import Headers from "./component/Headers";
    import Footers from "./component/Footers";

    export default {
        components: {Footers, Headers},
        data() {
            return {}
        },
        mounted() {
        }
    }
</script>
