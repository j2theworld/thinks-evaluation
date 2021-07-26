<template>
  <div>
    <TheSidebar/>
      <div class="main">
        <TheToolbar/>
        <TheSummary />
        <TheDashboard />

      </div>
  </div>
</template>

<script>
import TheSidebar from '@/components/TheSidebar'
import TheToolbar from '@/components/TheToolbar'
import TheDashboard from '@/components/TheDashboard'
import TheSummary from '@/components/TheSummary'

export default {
  name: 'Dashboard',
    components: {
    TheSidebar,
    TheToolbar,
    TheSummary,
    TheDashboard
  }
 
}
</script>
