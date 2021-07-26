<template>
    <div class="main__container">
        <h1 class="show__title">Dashboard</h1>
        <div class="show col-12">
            <div class="show__container col-12 col-lg-5">
                <div class="show__container overflow-hidden mb-3 mt-3">
                    <h2 class="show__subtitle">Incidents By Description </h2>
                     <div class="show__list">
                       
                     </div>
                </div>
               
            </div>

            <div class="show__container col-12 col-lg-5">
                <div class=" overflow-hidden mb-3 mt-3">
                    <h2 class="show__subtitle">Incidents By Device </h2>
                        <div class="show__list">
                        
                        </div>
                </div>
            </div>

        </div>
</div>
</template>

<script>
import { getAllAlerts } from '../services/data.service.js'
//import Vue3ChartJs from '@j-t-mcc/vue3-chartjs'

export default {
    name: 'TheDashboard',
  
 
    data() {
        return { 
            alerts: [],
            alertType: []
        }
    },
    created(){
        getAllAlerts().then(response => {
            this.alerts = response.alerts;  
            this.genPieChart()

        })
    },
    methods:{
        genPieChart(){
          this.alertType = this.alerts.reduce(function (r, a) {
                r[a.description] = r[a.description] || [];
                r[a.description].push(a);
                return r;
            }, Object.create(null));

        }
    }
}
</script>
