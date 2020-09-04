<template>
    <div>
        <el-submenu v-if="isSubmenu" :index="r.path">
            <template slot="title">
                <span> {{ r.cn }} </span>
            </template>
            <div v-for="i in r.children" :key="i.path">
                <menu-item v-if="i.meta.isMenu" :r="i"></menu-item>
            </div>
        </el-submenu>
        <el-menu-item v-else :index="r.path">
            <span>{{ r.meta.cn }}</span>
        </el-menu-item>
    </div>
</template>

<script>
export default {
    name: "MenuItem",
    props: ["r"],
    computed: {
        isSubmenu() {
            if (this.r.children && this.r.children.some(i => i.meta.isMenu)) {
                return true;
            }
            return false;
        }
    }
};
</script>

<style scoped lang="scss"></style>
