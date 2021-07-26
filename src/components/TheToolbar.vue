<template>
     <nav class="toolbar">
        <nav class="navbar col-sm-10 col-lg-12 ">
            <div class="navbar__account col-sm-6 col-lg-10 no-gutters">
                <div><a href="" data-toggle="dropdown tooltip" data-placement="left" title="user"> <img width="30px" height="30px" src="@/assets/images/people.svg" /> </a></div>
                <div class="pl-3">
                    <p>James</p>
                    <strong>Admin</strong>
                </div>
            </div>
            <ul class="navbar-nav col-sm-6 col-lg-2 pr-0" id="navactions">  
                <li class="nav-item dropdown ">
                    <a href="" class="nav-link navbarDropdown" role="button" data-toggle="dropdown tooltip" data-placement="left" title="Settings"><img width="30px" height="30px" src="@/assets/images/settings.svg" /> </a>
                    <div class="nav__dropdown shadow-lg" >   
                        <a href="{{ action('UserController@create') }}" class="dropdown-item"
                        >Add New User</a>
                       
                    </div>
                </li>
            
                <li class="nav-item dropdown ">
                    <a @click.prevent="logOut" class="nav-link" role="button" data-toggle="logout tooltip" data-placement="left" title="Logout"><img width="30px" height="30px" src="@/assets/images/power-button.svg"  /></a>
                </li>
            </ul>
        </nav>
        <div class="toolbar__menu d-md-none">
            <div class="navigation__logo"></div>
            <div class="toolbar__hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>    
</template>

<script>
export default {
  name: 'TheToolbar',
   computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
}
</script>
