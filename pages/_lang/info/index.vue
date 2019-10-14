<template>
  <div id="account_details">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-2">
          <div class="inner_aps">
            <button
              class="tablinks active aboutus"
              @click="openCity('aboutus', $event)"
              id="defaultOpen"
            >
              ABOUT US
            </button>

            <button 
            class="tablinks contactus" 
            @click="openCity('contactus', $event)"
            id=""
            >
              CONTACT US
            </button>

            <div class="tab_space">
              <button 
              class="tablinks smartsizing" 
              @click="openCity('smartsizing', $event)"
              >
                SMART SIZING
              </button>

              <button
                class="tablinks ordershipping"
                @click="openCity('ordershipping', $event)"
              >
                ORDER &amp; SHIPPING
              </button>

              <button
                class="tablinks returnexchange"
                @click="openCity('returnexchange', $event)"
              >
                RETURNS &amp; EXCHANGES
              </button>

              <button
                class="tablinks paymentmethod"
                @click="openCity('paymentmethod', $event)"
              >
                PAYMENT METHODS
              </button>

              <button class="tablinks partnership" @click="openCity('partnership', $event)">
                PARTNERSHIP
              </button>

              <button
                class="tablinks termscondition"
                @click="openCity('termscondition', $event)"
              >
                TERMS &amp; CONDITIONS
              </button>

              <button
                class="tablinks privacypolicy"
                @click="openCity('privacypolicy', $event)"
              >
                PRIVACY POLICY
              </button>
            </div>
          </div>
          <div class="box">
            <button class="promo_code_in">
              <div id="fold_in">
                <span>ACCOUNT DETAILS</span>
                <p id="fold_pi">Open</p>
              </div>
            </button>
            <div class="panel">
              <div class="container">
                <div class="row">
                  <div class="filter_brand">
                    <ul>
                      <li>
                        {" "}
                        <button
                          class="tablinks"
                          @click="openCity('aboutus', $event)"
                          id="defaultOpen"
                        >
                          ABOUT US
                        </button>
                      </li>

                      <li>
                        <button
                          class="tablinks"
                          @click="openCity('contactus', $event)"

                        >
                          CONTACT US
                        </button>
                      </li>
                      <li>
                        <button
                          class="tablinks"
                          @click="openCity('smartsizing', $event)"
                        >
                          SMART SIZING
                        </button>
                      </li>
                      <li>
                        <button
                          class="tablinks"
                          @click="openCity('ordershipping', $event)"
                        >
                          ORDER &amp; SHIPPING
                        </button>
                      </li>
                      <li>
                        <button
                          class="tablinks"
                          @click="openCity('returnexchange', $event)"
                        >
                          PAYMENT METHODS
                        </button>
                      </li>
                      <li>
                        <button
                          class="tablinks"
                          @click="openCity('partnership', $event)"
                        >
                          PARTNERSHIP
                        </button>
                      </li>
                      <li>
                        <button
                          class="tablinks"
                          @click="openCity('termscondition', $event)"
                        >
                          TERMS &amp; CONDITIONS
                        </button>
                      </li>
                      <li>
                        <button
                          class="tablinks"
                          @click="openCity('privacypolicy', $event)"
                        >
                          PRIVACY POLICY
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-md-12 col-lg-10">
          <div id="aboutus" class="tabcontent" style="display: block;">
            <div class="about_sub">
              <div class="col-sm-12 col-md-12 col-lg-8 left_in">
                <div class="about-block">
                  <img src="~assets/images/what.png" />
                </div>
              </div>

              <div class="col-sm-12 col-md-12 col-lg-8 left_in">
                <h3>ABOUT US</h3>
                <span v-html="description"></span>
              </div>
            </div>
          </div>

          <div id="contactus" class="tabcontent" style="display: none;">
            <h3>CONTACT US</h3>

            <div class="contact_us">
              <h5>Operational Time:</h5>
              <table id="sedual_time">
                <tbody>
                  <tr>
                    <td>Monday - Friday</td>
                    <td>: 08:00 - 21:00 (GMT +7)</td>
                  </tr>
                  <tr>
                    <td>Saturday</td>
                    <td>: 09:00 - 16:00 (GMT +7)</td>
                  </tr>
                </tbody>
              </table>

              <h5 class="reach_issue">Reach Us At</h5>
              <table id="sedual_info">
                <tbody>
                  <tr>
                    <td>Email</td>
                    <td>: support@apstrofi.com</td>
                  </tr>
                  <tr>
                    <td>Whatsapp Chat</td>
                    <td>: +62 812 11064615</td>
                  </tr>
                  <tr>
                    <td>Phone</td>
                    <td>: + 62 819 3369 1330</td>
                  </tr>
                </tbody>
              </table>

              <div
                class="col-sm-12 col-md-6 col-lg-8"
                style="padding-left: 0px;"
              >
                <div class="contact_para">
                <span v-html="description"></span>
                </div>
              </div>
              <div class="recpach_form">
                <div class="col-sm-12 col-md-12 fit_span">
                  <div class="col-sm-12 col-md-6 col-lg-4 left_in">
                    <div class="left-block">
                      <div class="cont-label">Name*</div>

                      <div class="cont-field">
                        <input type="text" name="name" />
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-12 col-md-6 col-lg-4 left_in">
                    <div class="right-block">
                      <div class="cont-label">Email*</div>

                      <div class="cont-field">
                        <input type="email" name="email" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-md-12 fit_span">
                  <div class="col-sm-12 col-md-6 col-lg-4 left_in">
                    <div class="left-block">
                      <div class="cont-label">Phone Number*</div>

                      <div class="cont-field">
                        <input type="text" name="name" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-md-12 fit_span">
                  <div class="col-sm-12 col-md-6 col-lg-8 left_in">
                    <div class="cont-label" style="padding-top: 10px;">
                      Notes
                    </div>

                    <div class="cont-field">
                      <textarea rows="3" cols="50"></textarea>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-md-12 fit_span">
                  <div class="col-sm-12 col-md-6 col-lg-4 left_in">
                    <div class="left-block">
                      <div class="capbox">
                        <div id="CaptchaDiv"></div>

                        <input type="hidden" id="txtCaptcha" />
                        <input
                          type="text"
                          name="CaptchaInput"
                          id="CaptchaInput"
                          size="15"
                        />
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-md-12 fit_span">
                  <div class="form_group_btn">
                    <div class="col-sm-12 col-md-6 col-lg-4 left_in">
                      <button type="button" class="join_btn" id="btnClick">
                        SUBMIT
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="smartsizing" class="tabcontent" style="display: none;">
            <h3>SMART SIZING</h3>
            <div class="col-sm-12 col-md-12 fit_span">
              <div class="col-sm-12 col-md-12 col-lg-8 left_in">
                <span v-html="description"></span>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-8 left_in">
                <div class="about-block">
                  <img src="~assets/images/what.png" />
                </div>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-8 left_in">
                <div class="member_sizing">
                  <h3>SUBHEADLINE</h3>
                  <button class="collapsible">Subcategory 1</button>
                  <div class="content">
                    <p>
                      Your favorite Champion hoodie, now available in colors we
                      love that are only at Urban Outfitters! Classic pullover
                      silhouette in a durable reverse weave cotton fleece
                      features a soft brushed interior to keep you cozy. Cut
                      with a slightly dropped shoulder for a slouchy look and
                      rib-knit banding at the cuffs + hem for a comfortable fit.
                      Complete with an adjustable drawstring hood, front kanga
                      pocket and a small logo patch at the chest + left sleeve.
                      Champion has been offering its innovative athletic apparel
                      for men and women since 1919.
                    </p>
                  </div>
                  <button class="collapsible">Subcategory 2</button>
                  <div class="content" style="display: none;">
                    <p>• Cotton, polyester</p>
                    <p> • Machine wash</p>
                    <p> • Imported</p>
                  </div>
                  <button class="collapsible">Subcategory 3</button>
                  <div class="content" style="display: none;">
                    <p>
                      • Shipping: Free shipping all over Indonesia for any
                      purchase over IDR 500,000. The product will be delivered
                      to your door by our Logistic Partner.
                    </p>

                    <p>
                      • Returns/Exchanges: This product is eligible for Return
                      and Exchange within 14 days.
                    </p>
                  </div>
                </div>
                <div class="sizing_teb">
                  <div class="col-sm-12 col-md-12 fit_span">
                    <div class="col-sm-12 col-md-12 col-lg-6 left_in">
                      <div class="banner_ratio">
                        <img src="~assets/images/member_benifit.png" />
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-6 left_in">
                      <div class="banner_ratio">
                        <img src="~assets/images/member_benifit.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="ordershipping" class="tabcontent" style="display: none;">
            <div class="col-sm-12 col-md-12 fit_span">
              <div class="col-sm-12 col-md-12 col-lg-8 left_in">
                <h3>ORDER &amp; SHIPPING</h3>

                <p class="sub_shipping">SUBHEADLINE</p>
                <button class="collapsible">Subcategory 1</button>
                <div class="content">
                  <p>
                    Your favorite Champion hoodie, now available in colors we
                    love that are only at Urban Outfitters! Classic pullover
                    silhouette in a durable reverse weave cotton fleece features
                    a soft brushed interior to keep you cozy. Cut with a
                    slightly dropped shoulder for a slouchy look and rib-knit
                    banding at the cuffs + hem for a comfortable fit. Complete
                    with an adjustable drawstring hood, front kanga pocket and a
                    small logo patch at the chest + left sleeve. Champion has
                    been offering its innovative athletic apparel for men and
                    women since 1919.
                  </p>
                </div>
                <button class="collapsible">Subcategory 2</button>
                <div class="content">
                  <p>
                    Your favorite Champion hoodie, now available in colors we
                    love that are only at Urban Outfitters! Classic pullover
                    silhouette in a durable reverse weave cotton fleece features
                    a soft brushed interior to keep you cozy. Cut with a
                    slightly dropped shoulder for a slouchy look and rib-knit
                    banding at the cuffs + hem for a comfortable fit. Complete
                    with an adjustable drawstring hood, front kanga pocket and a
                    small logo patch at the chest + left sleeve. Champion has
                    been offering its innovative athletic apparel for men and
                    women since 1919.
                  </p>
                </div>
                <button class="collapsible">Subcategory 2</button>
                <div class="content">
                  <p>
                    Your favorite Champion hoodie, now available in colors we
                    love that are only at Urban Outfitters! Classic pullover
                    silhouette in a durable reverse weave cotton fleece features
                    a soft brushed interior to keep you cozy. Cut with a
                    slightly dropped shoulder for a slouchy look and rib-knit
                    banding at the cuffs + hem for a comfortable fit. Complete
                    with an adjustable drawstring hood, front kanga pocket and a
                    small logo patch at the chest + left sleeve. Champion has
                    been offering its innovative athletic apparel for men and
                    women since 1919.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="returnexchange" class="tabcontent" style="display: none;">
            <div class="col-sm-12 col-md-12 fit_span">
              <div class="col-sm-12 col-md-12 col-lg-8 left_in">
                <h3>RETURNS &amp; EXCHANGES</h3>

                <p class="sub_shipping">SUBHEADLINE</p>
                <button class="collapsible">Subcategory 1</button>
                <div class="content">
                  <p>
                    Your favorite Champion hoodie, now available in colors we
                    love that are only at Urban Outfitters! Classic pullover
                    silhouette in a durable reverse weave cotton fleece features
                    a soft brushed interior to keep you cozy. Cut with a
                    slightly dropped shoulder for a slouchy look and rib-knit
                    banding at the cuffs + hem for a comfortable fit. Complete
                    with an adjustable drawstring hood, front kanga pocket and a
                    small logo patch at the chest + left sleeve. Champion has
                    been offering its innovative athletic apparel for men and
                    women since 1919.
                  </p>
                </div>
                <button class="collapsible">Subcategory 2</button>
                <div class="content">
                  <p>
                    Your favorite Champion hoodie, now available in colors we
                    love that are only at Urban Outfitters! Classic pullover
                    silhouette in a durable reverse weave cotton fleece features
                    a soft brushed interior to keep you cozy. Cut with a
                    slightly dropped shoulder for a slouchy look and rib-knit
                    banding at the cuffs + hem for a comfortable fit. Complete
                    with an adjustable drawstring hood, front kanga pocket and a
                    small logo patch at the chest + left sleeve. Champion has
                    been offering its innovative athletic apparel for men and
                    women since 1919.
                  </p>
                </div>
                <button class="collapsible">Subcategory 2</button>
                <div class="content">
                  <p>
                    Your favorite Champion hoodie, now available in colors we
                    love that are only at Urban Outfitters! Classic pullover
                    silhouette in a durable reverse weave cotton fleece features
                    a soft brushed interior to keep you cozy. Cut with a
                    slightly dropped shoulder for a slouchy look and rib-knit
                    banding at the cuffs + hem for a comfortable fit. Complete
                    with an adjustable drawstring hood, front kanga pocket and a
                    small logo patch at the chest + left sleeve. Champion has
                    been offering its innovative athletic apparel for men and
                    women since 1919.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="paymentmethod" class="tabcontent" style="display: none;">
            <div class="col-sm-12 col-md-12 fit_span">
              <div class="col-sm-12 col-md-12 col-lg-8 left_in">
                <h3>PAYMENT METHODS</h3>
                
                <p class="sub_shipping">SUBHEADLINE</p>
                <button class="collapsible">Subcategory 1</button>
                <div class="content">
                  <p>
                    Your favorite Champion hoodie, now available in colors we
                    love that are only at Urban Outfitters! Classic pullover
                    silhouette in a durable reverse weave cotton fleece features
                    a soft brushed interior to keep you cozy. Cut with a
                    slightly dropped shoulder for a slouchy look and rib-knit
                    banding at the cuffs + hem for a comfortable fit. Complete
                    with an adjustable drawstring hood, front kanga pocket and a
                    small logo patch at the chest + left sleeve. Champion has
                    been offering its innovative athletic apparel for men and
                    women since 1919.
                  </p>
                </div>
                <button class="collapsible">Subcategory 2</button>
                <div class="content">
                  <p>
                    Your favorite Champion hoodie, now available in colors we
                    love that are only at Urban Outfitters! Classic pullover
                    silhouette in a durable reverse weave cotton fleece features
                    a soft brushed interior to keep you cozy. Cut with a
                    slightly dropped shoulder for a slouchy look and rib-knit
                    banding at the cuffs + hem for a comfortable fit. Complete
                    with an adjustable drawstring hood, front kanga pocket and a
                    small logo patch at the chest + left sleeve. Champion has
                    been offering its innovative athletic apparel for men and
                    women since 1919.
                  </p>
                </div>
                <button class="collapsible">Subcategory 2</button>
                <div class="content">
                  <p>
                    Your favorite Champion hoodie, now available in colors we
                    love that are only at Urban Outfitters! Classic pullover
                    silhouette in a durable reverse weave cotton fleece features
                    a soft brushed interior to keep you cozy. Cut with a
                    slightly dropped shoulder for a slouchy look and rib-knit
                    banding at the cuffs + hem for a comfortable fit. Complete
                    with an adjustable drawstring hood, front kanga pocket and a
                    small logo patch at the chest + left sleeve. Champion has
                    been offering its innovative athletic apparel for men and
                    women since 1919.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="partnership" class="tabcontent" style="display: none;">
            <div class="col-sm-12 col-md-12 fit_span">
              <div class="col-sm-12 col-md-12 col-lg-8 left_in">
                <h3>PARTNERSHIP</h3>

                <p class="sub_shipping">SUBHEADLINE</p>
                <button class="collapsible">Subcategory 1</button>
                <div class="content">
                  <p>
                    Your favorite Champion hoodie, now available in colors we
                    love that are only at Urban Outfitters! Classic pullover
                    silhouette in a durable reverse weave cotton fleece features
                    a soft brushed interior to keep you cozy. Cut with a
                    slightly dropped shoulder for a slouchy look and rib-knit
                    banding at the cuffs + hem for a comfortable fit. Complete
                    with an adjustable drawstring hood, front kanga pocket and a
                    small logo patch at the chest + left sleeve. Champion has
                    been offering its innovative athletic apparel for men and
                    women since 1919.
                  </p>
                </div>
                <button class="collapsible">Subcategory 2</button>
                <div class="content">
                  <p>
                    Your favorite Champion hoodie, now available in colors we
                    love that are only at Urban Outfitters! Classic pullover
                    silhouette in a durable reverse weave cotton fleece features
                    a soft brushed interior to keep you cozy. Cut with a
                    slightly dropped shoulder for a slouchy look and rib-knit
                    banding at the cuffs + hem for a comfortable fit. Complete
                    with an adjustable drawstring hood, front kanga pocket and a
                    small logo patch at the chest + left sleeve. Champion has
                    been offering its innovative athletic apparel for men and
                    women since 1919.
                  </p>
                </div>
                <button class="collapsible">Subcategory 2</button>
                <div class="content">
                  <p>
                    Your favorite Champion hoodie, now available in colors we
                    love that are only at Urban Outfitters! Classic pullover
                    silhouette in a durable reverse weave cotton fleece features
                    a soft brushed interior to keep you cozy. Cut with a
                    slightly dropped shoulder for a slouchy look and rib-knit
                    banding at the cuffs + hem for a comfortable fit. Complete
                    with an adjustable drawstring hood, front kanga pocket and a
                    small logo patch at the chest + left sleeve. Champion has
                    been offering its innovative athletic apparel for men and
                    women since 1919.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="termscondition" class="tabcontent" style="display: none;">
            <div class="col-sm-12 col-md-12 fit_span">
              <div class="col-sm-12 col-md-12 col-lg-8 left_in">
                <h3>TERMS &amp; CONDITIONS</h3>

                <p class="sub_shipping">SUBHEADLINE</p>
                <button class="collapsible active">Subcategory 1</button>
                <div class="content" style="display: block;">
                  <p>
                    Your favorite Champion hoodie, now available in colors we
                    love that are only at Urban Outfitters! Classic pullover
                    silhouette in a durable reverse weave cotton fleece features
                    a soft brushed interior to keep you cozy. Cut with a
                    slightly dropped shoulder for a slouchy look and rib-knit
                    banding at the cuffs + hem for a comfortable fit. Complete
                    with an adjustable drawstring hood, front kanga pocket and a
                    small logo patch at the chest + left sleeve. Champion has
                    been offering its innovative athletic apparel for men and
                    women since 1919.
                  </p>
                </div>
                <button class="collapsible">Subcategory 2</button>
                <div class="content">
                  <p>
                    Your favorite Champion hoodie, now available in colors we
                    love that are only at Urban Outfitters! Classic pullover
                    silhouette in a durable reverse weave cotton fleece features
                    a soft brushed interior to keep you cozy. Cut with a
                    slightly dropped shoulder for a slouchy look and rib-knit
                    banding at the cuffs + hem for a comfortable fit. Complete
                    with an adjustable drawstring hood, front kanga pocket and a
                    small logo patch at the chest + left sleeve. Champion has
                    been offering its innovative athletic apparel for men and
                    women since 1919.
                  </p>
                </div>
                <button class="collapsible">Subcategory 2</button>
                <div class="content">
                  <p>
                    Your favorite Champion hoodie, now available in colors we
                    love that are only at Urban Outfitters! Classic pullover
                    silhouette in a durable reverse weave cotton fleece features
                    a soft brushed interior to keep you cozy. Cut with a
                    slightly dropped shoulder for a slouchy look and rib-knit
                    banding at the cuffs + hem for a comfortable fit. Complete
                    with an adjustable drawstring hood, front kanga pocket and a
                    small logo patch at the chest + left sleeve. Champion has
                    been offering its innovative athletic apparel for men and
                    women since 1919.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="privacypolicy" class="tabcontent" style="display: none;">
            <div class="col-sm-12 col-md-12 fit_span">
              <div class="col-sm-12 col-md-12 col-lg-8 left_in">
                <h3>PRIVACY POLICY</h3>
                <p class="sub_shipping">SUBHEADLINE</p>
                <button class="collapsible active">Subcategory 1</button>
                <div class="content" style="display: block;">
                  <p>
                    Your favorite Champion hoodie, now available in colors we
                    love that are only at Urban Outfitters! Classic pullover
                    silhouette in a durable reverse weave cotton fleece features
                    a soft brushed interior to keep you cozy. Cut with a
                    slightly dropped shoulder for a slouchy look and rib-knit
                    banding at the cuffs + hem for a comfortable fit. Complete
                    with an adjustable drawstring hood, front kanga pocket and a
                    small logo patch at the chest + left sleeve. Champion has
                    been offering its innovative athletic apparel for men and
                    women since 1919.
                  </p>
                </div>
                <button class="collapsible">Subcategory 2</button>
                <div class="content">
                  <p>
                    Your favorite Champion hoodie, now available in colors we
                    love that are only at Urban Outfitters! Classic pullover
                    silhouette in a durable reverse weave cotton fleece features
                    a soft brushed interior to keep you cozy. Cut with a
                    slightly dropped shoulder for a slouchy look and rib-knit
                    banding at the cuffs + hem for a comfortable fit. Complete
                    with an adjustable drawstring hood, front kanga pocket and a
                    small logo patch at the chest + left sleeve. Champion has
                    been offering its innovative athletic apparel for men and
                    women since 1919.
                  </p>
                </div>
                <button class="collapsible">Subcategory 2</button>
                <div class="content">
                  <p>
                    Your favorite Champion hoodie, now available in colors we
                    love that are only at Urban Outfitters! Classic pullover
                    silhouette in a durable reverse weave cotton fleece features
                    a soft brushed interior to keep you cozy. Cut with a
                    slightly dropped shoulder for a slouchy look and rib-knit
                    banding at the cuffs + hem for a comfortable fit. Complete
                    with an adjustable drawstring hood, front kanga pocket and a
                    small logo patch at the chest + left sleeve. Champion has
                    been offering its innovative athletic apparel for men and
                    women since 1919.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
    import {mapGetters} from 'vuex';
    export default {
        name: "index",
        data() {
            return {
                skip: 0,
                title: null,
                title_l: null,
                description: null,
                description_l: null,

            }
        },
        async fetch ({app,store, route}) {
          var page;
          if(route.hash == '' || route.hash == '#'){
              page = 'about'
            }else{
              page = route.hash.split('#')[1];
            }
            let response = await app.$axios.$get('page/commonpagecontent/'+page);
            return {
              title : response.data.title,
              title_l : response.data.title_l,
              description: response.data.description,
              description_l: response.data.description_l,

            }
        },
        mounted() {
          this.documentReady();
        },
        watch: {
          '$route.hash':function(hash){
            this.documentReady();
          }
        },
        methods: {
           openCity: async function(cityName, evt) {

						this.$axios.defaults.baseURL = process.env.baseURL
            let response = await this.$axios.$get('page/commonpagecontent/'+cityName);
              this.title  = response.data.title;
              this.title_l = response.data.title_l;
              this.description = response.data.description;
              this.description_l = response.data.description_l;

            // console.log(evt.target.className, cityName)
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
              tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
              tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(cityName).style.display = "block";
              evt.target.className += " active";
          },
          documentReady() {
            console.log(this.$route.hash)

            if(this.$route.hash == '' || this.$route.hash == '#'){
              document.querySelector('#defaultOpen').click();
            }else{
              document.querySelector('.'+this.$route.hash.split('#')[1]).click();
            }
            // document.querySelector('#defaultOpen').click();
            /// First functon
            $(document).on('click','.close',function(){
              $('.search-input').removeClass('show');
            });

            $(document).on('click', '.slicknav_btn', function() {

              $('body').toggleClass("overflow");
              var header = $('div#header .container-fluid').height();
              var header_top = $('div#header_top').height();
              var new_height = parseInt(header) + parseInt(header_top);
              var win_height = $(window).height();
              var final_height = parseInt(win_height) - parseInt(new_height) + parseInt(7);
              setInterval(function(){ 
              $('.slicknav_nav').css('height', final_height);
              }, 300);
              
            });


            var coll = document.getElementsByClassName("collapsible");
            var i;

            for (i = 0; i < coll.length; i++) {
              coll[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.display === "block") {
                  content.style.display = "none";
                } else {
                  content.style.display = "block";
                }
              });
            }

              /*-----Accoration------*/

            var acc = document.getElementsByClassName("promo_code_in");
            var i;

            for (i = 0; i < acc.length; i++) {
              acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight){
                  panel.style.maxHeight = null;
                } else {
                  panel.style.maxHeight = panel.scrollHeight + "px";
                
                } 
              });
            }
            /* View Details Code*/
            $(document).ready(function () {
                $("#fold_in").click(function () {
                    $("#fold_pi").fadeOut(function () {
                        $("#fold_pi").text(($("#fold_pi").text() == 'Open') ? 'Close' : 'Open').fadeIn();
                    })
                })
            });
          }
        }

    }

    

</script>

<style scoped>
    
</style>