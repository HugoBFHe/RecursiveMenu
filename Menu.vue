<template>
    <div>
        <el-menu
            :default-active="defaultActive"
            class="el-menu-vertical-demo"
            router
            @select="handleSelect"
        >
            <div v-for="r in routers" :key="r.path">
                <menu-item v-if="r.menu" :r="r"></menu-item>
            </div>
        </el-menu>
    </div>
</template>

<script>
import MenuItem from "./MenuItem";

export default {
    name: "Menu",
    components: { MenuItem },
    data() {
        return {
            defaultActive: "/index",
            routers: this.$router.options.routes
        };
    },
    created() {
        this.defaultActive = this.$route.path;
    },
    methods: {
        handleSelect(path) {
            this.defaultActive = path;
        }
    }
};
</script>

<style lang="scss" scoped></style>
