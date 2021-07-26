<template>
    <div class="dashboard col-sm-12">
        <div class="dashboard__card pl-0">
            <div class="card" >
                <div class="card-body dashboard__cardbody">
                    <div class="dashboard__icon btn-group" ><img src="@/assets/images/plug.svg" alt=""> </div>
                    <div class="dashboard__summary">
                        <h2 class="dashboard--subtitle text--black text--semibold text-uppercase">Devices Summary</h2>
                        <p class="dashboard--title text--grey">Total Devices: {{ devices.length}}  </p>
                    </div>
                </div>
            </div>
        </div>

       <div class="dashboard__card pl-0">
            <div class="card" >
                <div class="card-body dashboard__cardbody">
                    <div class="dashboard__icon btn-group" ><img src="@/assets/images/bell.svg" alt=""> </div>
                    <div class="dashboard__summary">
                        <h2 class="dashboard--subtitle text--black text--semibold text-uppercase">Incidents Summary</h2>
                        <p class="dashboard--title text--grey">Total Incidents: {{ alerts.length }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getAllAlerts } from '../services/data.service.js'

export default {
    name: 'TheSummary',
   
    data() {
        return { 
            alerts: [],
            devices: []
        }
    },
    created(){
        getAllAlerts().then(response => {
            this.alerts = response.alerts;
            this.devices = response.device_list;
        })
    }
   
}
</script>
