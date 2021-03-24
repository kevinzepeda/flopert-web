<template>
  <div>
        <!-- Bootstrap -->
        <link href="/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <!-- Icons -->
        <link href="/css/materialdesignicons.min.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v2.1.9/css/unicons.css">
        <!-- FLEXSLIDER -->
        <link href="/css/flexslider.css" rel="stylesheet" type="text/css" />
        <!-- Magnific -->
        <link href="/css/magnific-popup.css" rel="stylesheet" type="text/css" /> 
        <!-- Slider -->               
        <link rel="stylesheet" href="/css/owl.carousel.min.css"/> 
        <link rel="stylesheet" href="/css/owl.theme.default.min.css"/> 
        <!-- Main Css -->
        <link href="/css/style.css" rel="stylesheet" type="text/css" id="theme-opt" />
        <link href="/css/colors/default.css" rel="stylesheet" id="color-opt">

        <!-- Navbar STart -->
        <header id="topnav" class="defaultscroll sticky">
            <div class="container">
                <!-- Logo container-->
                <div>
                    <nuxt-link class="logo" to="/">
                        <img src="/images/concept/flopert.png" height="40" alt="Logo de Flopert app">
                    </nuxt-link>
                </div>   
                <div class="buy-button">
                    <nuxt-link to="/" class="btn btn-primary">Descargar App</nuxt-link>
                </div>
        
                <div id="navigation">
                    <!-- Navigation Menu-->   
                    <ul class="navigation-menu">
                        <li><nuxt-link to="/">Inicio</nuxt-link></li>
                        <li class="has-submenu">
                            <a>Categorías</a><span class="menu-arrow"></span>
                            <!-- <ul class="submenu">
                                <li class="has-submenu"><a href="javascript:void(0)"> Company <span class="badge badge-primary rounded">Added</span></a><span class="submenu-arrow"></span>
                                    <ul class="submenu">
                                        <li><a href="page-aboutus.html"> About Us</a></li>
                                        <li><a href="page-aboutus-two.html"> About Us Two <span class="badge badge-success rounded">New</span></a></li>
                                        <li><a href="page-services.html">Services</a></li>
                                        <li><a href="page-history.html">History <span class="badge badge-success rounded">New</span></a></li>
                                        <li><a href="page-team.html"> Team</a></li>
                                        <li><a href="page-pricing.html">Pricing</a></li>
                                    </ul> 
                                </li>
                                <li class="has-submenu"><a href="javascript:void(0)"> Account <span class="badge badge-primary rounded">Added</span></a><span class="submenu-arrow"></span>
                                    <ul class="submenu">
                                        <li><a href="account-profile.html">Profile</a></li>
                                        <li><a href="account-members.html">Members <span class="badge badge-success rounded">New</span></a></li>
                                        <li><a href="account-works.html">Works <span class="badge badge-success rounded">New</span></a></li>
                                        <li><a href="account-messages.html">Messages <span class="badge badge-success rounded">New</span></a></li>
                                        <li><a href="account-payments.html">Payments <span class="badge badge-success rounded">New</span></a></li>
                                        <li><a href="account-setting.html">Setting</a></li>
                                        <li><a href="page-invoice.html">Invoice</a></li>
                                    </ul>  
                                </li>
                                <li class="has-submenu"><a href="javascript:void(0)"> Shop </a><span class="submenu-arrow"></span>
                                    <ul class="submenu">
                                        <li><a href="shop-products.html">All Products</a></li>
                                        <li><a href="shop-product-detail.html">Product Details</a></li>
                                        <li><a href="shop-cart.html">Shop Cart</a></li>
                                        <li><a href="shop-checkouts.html">Checkouts</a></li>
                                        <li><a href="shop-myaccount.html">My Account</a></li>
                                    </ul>  
                                </li>
                                <li class="has-submenu"><a href="javascript:void(0)"> Help center </a><span class="submenu-arrow"></span>
                                    <ul class="submenu">
                                        <li><a href="helpcenter-overview.html">Helpcenter</a></li>
                                        <li><a href="helpcenter-faqs.html">Faqs</a></li>
                                        <li><a href="helpcenter-guides.html">Guides</a></li>
                                        <li><a href="helpcenter-support-request.html">Support Call</a></li>
                                    </ul>  
                                </li>
                                <li class="has-submenu"><a href="javascript:void(0)"> Forums <span class="badge badge-danger rounded">v2.5</span></a><span class="submenu-arrow"></span>
                                    <ul class="submenu">
                                        <li><a href="forums.html">Overview <span class="badge badge-success rounded">New</span></a></li>
                                        <li><a href="forums-topic.html">Forum Topic <span class="badge badge-success rounded">New</span></a></li>
                                        <li><a href="forums-comments.html">Forum Comments <span class="badge badge-success rounded">New</span></a></li>
                                    </ul>  
                                </li>
                                <li class="has-submenu"><a href="javascript:void(0)"> Email Template</a><span class="submenu-arrow"></span>
                                    <ul class="submenu">
                                        <li><a href="email-confirmation.html">Confirmation</a></li>
                                        <li><a href="email-password-reset.html">Reset Password</a></li>
                                        <li><a href="email-alert.html">Alert</a></li>
                                        <li><a href="email-invoice.html">Invoice</a></li>
                                    </ul>  
                                </li>
                                <li class="has-submenu"><a href="javascript:void(0)">Careers</a><span class="submenu-arrow"></span>
                                    <ul class="submenu">
                                        <li><a href="page-jobs.html">Jobs</a></li>
                                        <li><a href="page-jobs-sidebar.html">Jobs - Sidebar</a></li>
                                        <li><a href="page-job-detail.html">Job Detail</a></li>
                                        <li><a href="page-job-apply.html">Job Apply</a></li>
                                        <li><a href="page-job-company.html">Company</a></li>
                                        <li><a href="page-job-candidate.html">Candidate</a></li>
                                    </ul>  
                                </li>
                                <li class="has-submenu"><a href="javascript:void(0)"> Blog <span class="badge badge-primary rounded">Added</span></a><span class="submenu-arrow"></span>
                                    <ul class="submenu">
                                        <li><a href="page-blog-grid.html">Blog Grid</a></li>
                                        <li><a href="page-blog-sidebar.html">Blog with Sidebar</a></li>
                                        <li><a href="page-blog-list.html">Blog Listing</a></li>
                                        <li><a href="page-blog-list-sidebar.html">Blog List & Sidebar</a></li>
                                        <li><a href="page-blog-detail.html">Blog Detail</a></li>
                                        <li><a href="page-blog-detail-two.html">Blog Detail 2 <span class="badge badge-success rounded">New</span></a></li>
                                    </ul>  
                                </li>
                                <li class="has-submenu"><a href="javascript:void(0)"> Case Study <span class="badge badge-danger rounded">v2.5</span></a><span class="submenu-arrow"></span>
                                    <ul class="submenu">
                                        <li><a href="page-cases.html">All Cases <span class="badge badge-success rounded">New</span></a></li>
                                        <li><a href="page-case-detail.html">Case Detail <span class="badge badge-success rounded">New</span></a></li>
                                    </ul>
                                </li>
                                <li class="has-submenu"><a href="javascript:void(0)"> Works</a><span class="submenu-arrow"></span>
                                    <ul class="submenu">
                                        <li><a href="page-work-modern.html">Works Modern</a></li>
                                        <li><a href="page-work-classic.html">Works Classic</a></li>
                                        <li><a href="page-work-grid.html">Works Grid</a></li>
                                        <li><a href="page-work-masonry.html">Works Masonry</a></li>
                                        <li><a href="page-work-detail.html">Work Detail</a></li>
                                    </ul>  
                                </li>
                                <li class="has-submenu"><a href="javascript:void(0)"> Auth Pages</a><span class="submenu-arrow"></span>
                                    <ul class="submenu">
                                        <li><a href="auth-login.html">Login</a></li>
                                        <li><a href="auth-cover-login.html">Login Cover</a></li>
                                        <li><a href="auth-login-three.html">Login Simple</a></li>
                                        <li><a href="auth-signup.html">Signup</a></li>
                                        <li><a href="auth-cover-signup.html">Signup Cover</a></li>
                                        <li><a href="auth-signup-three.html">Signup Simple</a></li>
                                        <li><a href="auth-re-password.html">Reset Password</a></li>
                                        <li><a href="auth-cover-re-password.html">Reset Password Cover</a></li>
                                        <li><a href="auth-re-password-three.html">Reset Password Simple</a></li>
                                    </ul>  
                                </li>
                                <li class="has-submenu"><a href="javascript:void(0)"> Utility </a><span class="submenu-arrow"></span>
                                    <ul class="submenu">
                                        <li><a href="page-terms.html">Terms of Services</a></li>
                                        <li><a href="page-privacy.html">Privacy Policy</a></li>
                                    </ul>  
                                </li>
                                <li class="has-submenu"><a href="javascript:void(0)"> Special </a><span class="submenu-arrow"></span>
                                    <ul class="submenu">
                                        <li><a href="page-comingsoon.html">Coming Soon</a></li>
                                        <li><a href="page-comingsoon2.html">Coming Soon Two</a></li>
                                        <li><a href="page-maintenance.html">Maintenance</a></li>
                                        <li><a href="page-error.html">Error</a></li>
                                    </ul>
                                </li>
                                <li class="has-submenu"><a href="javascript:void(0)"> Contact </a><span class="submenu-arrow"></span>
                                    <ul class="submenu">
                                        <li><a href="page-contact-detail.html">Contact Detail</a></li>
                                        <li><a href="page-contact-one.html">Contact One</a></li>
                                        <li><a href="page-contact-two.html">Contact Two</a></li>
                                        <li><a href="page-contact-three.html">Contact Three</a></li>
                                    </ul>  
                                </li>
                            </ul> -->
                        </li>
                        <li class="has-submenu">
                            <a>Registro</a><span class="menu-arrow"></span>
                            <!-- <ul class="submenu megamenu">
                                <li>
                                    <ul>
                                        <li><nuxt-link to="/">Menu</nuxt-link></li>
                                        <li><nuxt-link to="/">Classic Saas</nuxt-link></li>
                                        <li><nuxt-link to="/">Agency</nuxt-link></li>
                                        <li><nuxt-link to="/">Application</nuxt-link></li>
                                        <li><nuxt-link to="/">Classic Application</nuxt-link></li>
                                        <li><nuxt-link to="/">Studio</nuxt-link></li>
                                        <li><nuxt-link to="/">Business</nuxt-link></li>
                                        <li><nuxt-link to="/">Modern Business</nuxt-link></li>
                                        <li><nuxt-link to="/">Hotel</nuxt-link></li>
                                        <li><nuxt-link to="/">Marketing</nuxt-link></li>
                                        <li><nuxt-link to="/">Enterprise</nuxt-link></li>
                                        <li><nuxt-link to="/">Insurance</nuxt-link></li>
                                        <li><nuxt-link to="/">Shop</nuxt-link></li>
                                        <li><nuxt-link to="/">Coworking</nuxt-link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li><nuxt-link to="/">IT Solution <span class="badge badge-danger rounded">v2.5</span></nuxt-link></li>
                                        <li><nuxt-link to="/">Corporate Business<span class="badge badge-danger rounded">v2.5</span></nuxt-link></li>
                                        <li><nuxt-link to="/">Task Management <span class="badge badge-danger rounded">v2.5</span></nuxt-link></li>
                                        <li><nuxt-link to="/">Email Inbox <span class="badge badge-danger rounded">v2.5</span></nuxt-link></li>
                                        <li><nuxt-link to="/">Landing One <span class="badge badge-danger rounded">v2.5</span></nuxt-link></li>
                                        <li><nuxt-link to="/">Landing Two <span class="badge badge-danger rounded">v2.5</span></nuxt-link></li>
                                        <li><nuxt-link to="/">Landing Three <span class="badge badge-danger rounded">v2.5</span></nuxt-link></li>
                                        <li><nuxt-link to="/">Travel <span class="badge badge-danger rounded">v2.5</span></nuxt-link></li>
                                        <li><nuxt-link to="/">Blog <span class="badge badge-danger rounded">v2.5</span></nuxt-link></li>
                                        <li><nuxt-link to="/">Forums <span class="badge badge-danger rounded">v2.5</span></nuxt-link></li>
                                        <li><nuxt-link to="/">Personal</nuxt-link></li>
                                        <li><nuxt-link to="/">Service</nuxt-link></li>
                                        <li><nuxt-link to="/">Payments</nuxt-link></li>
                                        <li><nuxt-link to="/">Cryptocurrency</nuxt-link></li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li><nuxt-link to="/">Course</nuxt-link></li>
                                        <li><nuxt-link to="/">Online Learning</nuxt-link></li>
                                        <li><nuxt-link to="/">Hosting & Domain</nuxt-link></li>
                                        <li><nuxt-link to="/">Event</nuxt-link></li>
                                        <li><nuxt-link to="/">Product</nuxt-link></li>
                                        <li><nuxt-link to="/">Portfolio</nuxt-link></li>
                                        <li><nuxt-link to="/">Job</nuxt-link></li>
                                        <li><nuxt-link to="/">Social Media</nuxt-link></li>
                                        <li><nuxt-link to="/">Digital Agency</nuxt-link></li>
                                        <li><nuxt-link to="/">Car Ride</nuxt-link></li>
                                        <li><nuxt-link to="/">Customer</nuxt-link></li>
                                        <li><nuxt-link to="/">Software</nuxt-link></li>
                                        <li><nuxt-link to="/">E-Book</nuxt-link></li>
                                        <li><nuxt-link to="/">Saas <span class="badge badge-pill badge-warning ml-2">Onepage</span></nuxt-link></li>
                                    </ul>
                                </li>   
                            </ul> -->
                        </li>
                        <li class="has-submenu">
                            <a>Entrar</a><span class="menu-arrow"></span>
                            <!-- <ul class="submenu">
                                <li><nuxt-link to="/">Documentation</nuxt-link></li>
                                <li><nuxt-link to="/">Changelog</nuxt-link></li>
                                <li><nuxt-link to="/">Components</nuxt-link></li>
                                <li><nuxt-link to="/">Widget</nuxt-link></li>
                            </ul> -->
                        </li>
                    </ul><!--end navigation menu-->
                    <div class="buy-menu-btn d-none">
                        <nuxt-link to="/" class="btn btn-primary">Descargar App</nuxt-link>
                    </div><!--end login button-->
                </div><!--end navigation-->
            </div><!--end container-->
        </header><!--end header-->
        <!-- Navbar End -->
        
  </div>
</template>

<script>
export default {

}
</script>

<style>
#topnav {
    backdrop-filter: blur(5px);
    background-color: #ffffff63 !important;
}
@media (max-width: 375px){
    #topnav .buy-button {
        display: block !important;
    }
}
</style>