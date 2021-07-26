<template>
    <div class="sidenav d-none d-md-block">
        <div class="sidenav__container">
            <div class="sidenav__logo"><a href="/dashboard"><img src="@/assets/images/logo.png" alt=""></a> </div>
          
            <ul  class="sidenav__list">
                <li class=""><a href="/dashboard">Dashboard</a></li>
                <li class="submenu typcn-group">
                    <p class="sidenav_toggle" href=""
                          @click="e => e.target.parentElement.classList.toggle('open')">User Manager</p>
                    <span class="sidenav__chevron"></span>
                    <ul  class="sidenav__list_submenu">
                        <li ><a href="{{ action('UserController@index') }}">View Users</a></li>
                        <li ><a href="{{ action('UserController@create') }}">Add a User</a></li>
                    </ul>
                </li>

               
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TheSidebar',
  methods: {
      sidenavToggle: (event) => {
          console.log(event.target.parentElement);
          return false;
      }
  }
}
</script>
