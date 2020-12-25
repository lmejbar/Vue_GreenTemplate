<template>
    <nav class="bg-gray-200 dark:bg-gray-900 px-5 pt-2 pb-2 w-2/12 ">
        <SideNavBarHeader/>
        <SideNavBarInfo/>
        <SideNavBarButton/>
        <SideNavBarCategories/>
        <SideNavBarBottom/>
    </nav>
</template>

<script>
import SideNavBarHeader from "@/components/UI/SideNavBarHeader.vue"
import SideNavBarInfo from "@/components/UI/SideNavBarInfo.vue"
import SideNavBarButton from "@/components/UI/SideNavBarButton.vue"
import SideNavBarCategories from "@/components/UI/SideNavBarCategories.vue"
import SideNavBarBottom from "@/components/UI/SideNavBarBottom.vue"
export default {
    components:{
        SideNavBarHeader,
        SideNavBarInfo,
        SideNavBarButton,
        SideNavBarCategories,
        SideNavBarBottom
    }
}
</script>

<style >
    .navbar{
        display: flex;
    }
</style>