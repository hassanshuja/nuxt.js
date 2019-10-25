<template>
    <div>
<div class="wrapper fadeInDown">
  <div id="formContent">

     <!-- Login Form -->
                <div class="row">
                    <div class="col-md-12">

                        <div class="row">
                            <div class="col-md-12" >
                                <div class="tab-content">
                                    <div class="tab-pane active" id="Login">
                                        <form role="form" class="form-horizontal">
                                            <div class="form-group">
                                                <label for="email" class="col-sm-12 control-label" >
                                                    Email</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" v-model="email" required/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="password" class="col-sm-12 control-label">
                                                    Password</label>
                                                <div class="col-sm-12">
                                                    <input type="password" class="form-control" v-model="password" required/>
                                                </div>
                                            </div>
                                            <div class="col-sm-10">
                                                <div class="form-group">
                                                    <a href="#forgot_form" class="forgot_link" data-toggle="modal" data-target="#forgot_form">Forgot your password?</a>
                                                </div>
                                            </div>
                                            <div class="form-group" id="email_another" v-if="login_err">
                                                <div class="col-sm-12">
                                                    *Email and Password do not match.
                                                </div>
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="form-group">
                                                    <button type="button" class="login_submit" @click="login">SIGN IN</button>
                                                </div>
                                            </div>
                                        </form>
                                        <!-- <div class="spocial_mediapopup">

                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-sm-6 col-md-6">
                                                        <div class="left_sociallink">
                                                            <a href="#"><i class="fa fa-facebook-f"></i>
                                                                <div class="link_another">
                                                                    Login with Facebook
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6 col-md-6">
                                                        <div class="right_sociallink">
                                                            <a href="#"><i class="fa fa-google" aria-hidden="true"></i>
                                                                <div class="link_another">
                                                                    Login with Google
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> -->
                                        </div>
                                    </div>
                                    <div class="tab-pane" id="Registration">
                                        
                                        <!-- <div class="spocial_mediapopup">

                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-sm-6 col-md-6">
                                                        <div class="left_sociallink">
                                                            <a href="#"><i class="fa fa-facebook-f"></i>
                                                                <div class="link_another">
                                                                    Login with Facebook
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6 col-md-6">
                                                        <div class="right_sociallink">
                                                            <a href="#"><i class="fa fa-google" aria-hidden="true"></i>
                                                                <div class="link_another">
                                                                    Login with Google
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ----------------------------------forgot Model ------------------------>
                <div class="modal" id="forgot_form">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <button type="button" class="close in" data-dismiss="modal" style="text-align: -webkit-right;padding: 0px 9px;">×</button>
                            <!-- Modal Header -->
                            <div class="modal-header">
                                <h4 class="modal_title">FORGOT PASSWORD</h4>
                            </div>

                            <!-- Modal body -->
                            <div class="modal-body inner">
                                <div class="col-sm-12 col-md-12 three_part"><div class="forgot_content">Please enter your email address and we’ll send you instructios to reset your password.</div></div>
                                <div class="col-sm-12 col-md-12 three_part">
                                    <div class="title_block">
                                        Email*
                                    </div>
                                    <div class="form-group">
                                        <input type="text" name="email" class="form-control input-lg">
                                    </div>
                                </div>

                                <div class="col-sm-12 col-md-12 three_part">
                                    <div class="form-group">
                                        <button type="button" class="login_submit">SIGN IN</button>
                                    </div>

                                </div>
                                <div class="col-sm-12 col-md-12 three_part">
                                    <div class="form-group">
                                        <a href="#" class="close_link" data-dismiss="modal">Close</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Modal footer -->
                    </div>
                </div>
                <!-- ----------------------------------End forgot Model ------------------------>

                <!---------------------------------------- thankyou popup----------------->
                <div class="modal" id="forgot_thamkyou">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <button type="button" class="close in" data-dismiss="modal" style="text-align: -webkit-right;padding: 0px 9px;">×</button>
                            <!-- Modal Header -->
                            <div class="modal-header">
                                <h4 class="modal_title">FORGOT PASSWORD</h4>
                            </div>

                            <!-- Modal body -->
                            <div class="modal-body inner">
                                <div class="col-sm-12 col-md-12 three_part"><div class="forgot_content">Thank you! You should receive an email with a link to reset your password momentarily.</div></div>
                                <div class="col-sm-12 col-md-12 three_part">
                                    <div class="form-group">
                                        <button type="button" class="login_submit">CLOSE</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <!-- Modal footer -->
                    </div>
                </div>
                <!-- ---------------------------------End thamf Model ------------------------>

    <!-- Remind Passowrd -->
    <!-- <div id="formFooter">
      <a class="underlineHover" href="#">Forgot Password?</a>
    </div> -->

  </div>
</div>
        </div>
</template>

<script scoped>

		export default {
            name: "login",
            middleware: 'guest',
            data: function () {
        return {
            email:'',
            password: '',
            login_err:'',
        }
      },
      methods: {
          
        async login(){
             this.$axios.defaults.baseURL = process.env.baseURL;
            this.$toast.show('Logging in...').goAway(1000);
            await this.$auth.login({
                  data: { email : this.email, password : this.password}
            }).then(data => {
              this.$router.push({
                path: '/mybag'
            });
            console.log('not working')
              this.$toast.success('Successfully authenticated').goAway(1500);
            //   $("#login").css('display', 'none');
            }).catch((e) => {
              console.log(e)
              this.login_err = 'Unable to authenticate';
              this.$toast.error('Error while authenticating').goAway(1500)
            })
       
       
        },
      }
        }
</script>

<style >
.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column; 
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 111px;
}

#formContent {
  /* -webkit-border-radius: 10p x 10px 10px 10px; */
  /* border-radius: 10px 10px 10px 10px; */
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  padding: 0px;
  border: 1px solid rgba(4, 4, 4, 19.42);
  /* -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3); */
  text-align: left;
  text-align: left;
  padding-bottom: 20px;
}

#formFooter {
  background-color: #f6f6f6;
  border-top: 1px solid #dce8f1;
  padding: 25px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
}



/* TABS */

h2.inactive {
  color: #cccccc;
}

h2.active {
  color: #0d0d0d;
  border-bottom: 2px solid #5fbae9;
}



/* FORM TYPOGRAPHY*/

#formContent input[type=button], #formContent input[type=submit], #formContent input[type=reset]  {
  background-color: #56baed;
  border: none;
  color: white;
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

#formContent input[type=button]:hover, #formContent input[type=submit]:hover, #formContent input[type=reset]:hover  {
  background-color: #39ace7;
}

#formContent input[type=button]:active, #formContent input[type=submit]:active, #formContent input[type=reset]:active  {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}

#formContent input[type=text] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

#formContent input[type=text]:focus {
  background-color: #fff;
  border-bottom: 2px solid #5fbae9;
}

#formContent input[type=text]:placeholder {
  color: #cccccc;
}



/* ANIMATIONS */

/* Simple CSS3 Fade-in-down Animation */
.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

/* Simple CSS3 Fade-in Animation */
@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }

.fadeIn {
  opacity:0;
  -webkit-animation:fadeIn ease-in 1;
  -moz-animation:fadeIn ease-in 1;
  animation:fadeIn ease-in 1;

  -webkit-animation-fill-mode:forwards;
  -moz-animation-fill-mode:forwards;
  animation-fill-mode:forwards;

  -webkit-animation-duration:1s;
  -moz-animation-duration:1s;
  animation-duration:1s;
}

.fadeIn.first {
  -webkit-animation-delay: 0.4s;
  -moz-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.fadeIn.second {
  -webkit-animation-delay: 0.6s;
  -moz-animation-delay: 0.6s;
  animation-delay: 0.6s;
}

.fadeIn.third {
  -webkit-animation-delay: 0.8s;
  -moz-animation-delay: 0.8s;
  animation-delay: 0.8s;
}

.fadeIn.fourth {
  -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  animation-delay: 1s;
}

/* Simple CSS3 Fade-in Animation */
.underlineHover:after {
  display: block;
  left: 0;
  bottom: -10px;
  width: 0;
  height: 2px;
  background-color: #56baed;
  content: "";
  transition: width 0.2s;
}

.underlineHover:hover {
  color: #0d0d0d;
}

.underlineHover:hover:after{
  width: 100%;
}



/* OTHERS */

*:focus {
    outline: none;
} 

#icon {
  width:60%;
}

</style>