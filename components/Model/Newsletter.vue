<template>
    <div class="modal fade" id="mypopup" role="dialog">
        <div class="modal-dialog">

            <!-- Modal content-->
            <div class="modal-content">

                <div id="lorem">
                    <div class="left_pop">
                        <img src="~assets/images/que.png">
                    </div>
                    <div class="right_pop">
                        <button type="button" class="close in" data-dismiss="modal"><img src="~assets/images/close.svg" class="popup_cross"></button>
                        <span>Sign up to our newsletter and receive 10% off your first order.
		         </span>
                        <input type="text" name="Email" placeholder="Email Address">
                        <div class="form-group">
                            <button type="button" class="submit_btn">SUBMIT</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Newsletter"
    }
</script>

<style scoped>

</style>