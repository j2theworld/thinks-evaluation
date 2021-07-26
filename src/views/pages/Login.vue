<template>
	<div class="login col-sm-12">
		<div class="fluid-image-block">
			<picture>
				<source media="(min-width: 1026px)" srcset="@/assets/images/landing_desktop.jpg">
				<source media="(min-width: 767px)" srcset="@/assets/images/landing_tablet.jpg">  
				<img srcset="@/assets/images/landing_mobile.jpg" alt="">
			</picture>
		</div>

		<div class="login__container col-sm-10 col-lg-6 col-xl-4 mx-auto">
			<div class="login__hero_container">
				<div class="login__hero">
					<div class="login__logo"><img src="../../assets/images/logo_login.png" alt="Canary"></div>
					<div class="login__logon">
						<button class="btn btn-primary login__login_btn" type="button" role="button"

						@click="toggleLoginCont();">Login</button>
					</div>
				</div>
					<Form @submit="handleLogin" :validation-schema="schema">	
						<div id="login_container" class="login__login_container col-sm-12">						
							<div class="login__login_form">
								<div class="form-group mb-2">
									<Field name="email" type="email" placeholder="Email Address" class="form-control" />
									<ErrorMessage name="email" class="error-feedback" />
								</div>
								<div class="form-group mb-2">
									<Field name="password" placeholder="Password..." type="password" class="form-control" />
									<ErrorMessage name="password" class="error-feedback" />
								</div>
								<div class="form-group form-check col-8 float-left">
									<input type="checkbox" name="remember" value="true" class="form-check-input" id="exampleCheck1">
									<label class="form-check-label" for="exampleCheck1">Remember me</label>
								</div>
							</div>
							<div class="login__submit">
								<button type="submit" class="btn btn-primary float-right login__login_btn login__login_btn--white float-right">LOGIN</button>
							</div>					
						</div>
						<div class="form-group">
							<div v-if="message" class="alert alert-danger" role="alert">
								{{ message }}
							</div>
						</div>
					</Form>
			</div>
		</div>
	</div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: 'Login',
  components: {
    Form,
    Field,
    ErrorMessage,
  },
   data() {
    const schema = yup.object().shape({
      email: yup.string().required("Email is required!"),
      password: yup.string().required("Password is required!"),
    });

    return {
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/dashboard");
    }
  },
  methods: {
	handleLogin(user) {
      this.loading = true;

      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/dashboard");
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
    toggleLoginCont: () => {
        let login__hero=document.querySelector('.login__hero');
        let login__login_container=document.querySelector('.login__login_container');
        login__hero.classList.toggle("open");
        login__login_container.classList.toggle("open");
    }
  }
}
</script>
