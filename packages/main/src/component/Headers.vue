<template>
    <header>
        <img :src="logo" alt="" height="50"/>
    </header>
</template>
<style lang="scss">
    header {
        position: absolute;
        padding: 20px 50px;
    }
</style>
<script>
    import logo from '../assest/huanet.svg'

    export default {
        name: "Headers",
        data() {
            return {
                logo,
            }
        }
    }
</script>

