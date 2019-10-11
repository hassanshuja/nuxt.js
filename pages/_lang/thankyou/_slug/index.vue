<template>
    <div>
<div class="wrapper fadeInDown heading-section">
  <div class="jumbotron text-center">
  <h2 class="display-5">Thank You! for Your Order</h2>
  <p class="lead"><strong>Please check your email</strong> for further instructions.</p>
  <hr>
  <p>
    Having trouble? <a href="">Contact us</a>
  </p>
  <p class="lead">
    <a class="btn btn-primary btn-sm" href="https://apstrofi.com" role="button">Continue to homepage</a>
  </p>
</div>
</div>
        </div>
</template>

<script scoped>

		export default {
            name: "login",
            middleware: 'guest',
            
        }
</script>

<style >

.heading-section {
    float: left;
    width: 100%;
    padding: 135px 0 0;
}

.jumbotron{
    background-color: #fff;
}
</style>