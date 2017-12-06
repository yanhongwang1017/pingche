<template>
    <div class="index">
        <header-and-ban></header-and-ban>
        <pos-box></pos-box>
        <recommend-box></recommend-box>
        <footer1></footer1>
    </div>
</template>

<script>
    import HeaderAndBan from "./headerAndBan.vue";
    import PosBox from "./posBox.vue";
    import RecommendBox from "./recommendBox.vue";
    import Footer1 from "./footer1.vue";

    export default {
        components: {Footer1, RecommendBox, PosBox, HeaderAndBan},
        name: "index"
    }
</script>

<style scoped>
    .index{
        width: 100%;
        height: 100vh;
        position: absolute;
        left: 0;
        top: 0;
        background: #f2f2f2;
    }
</style>
