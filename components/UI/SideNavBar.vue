<template>
    <nav class="flex flex-col bg-gray-200 dark:bg-gray-900 w-64 px-12 pt-4 pb-6">
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