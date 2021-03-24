<template>
  <div>
        <section class="section bg-light">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 text-center">
                        <div class="section-title">
                            <h4 class="title font-weight-bold mb-4">Compra más inteligente, antes que todos. <br> Mejor calidad y precio por pre-venta.</h4>
                            <p class="text-muted para-desc mb-0 mx-auto">No te preocupes por las subidas de precio <span class="text-primary font-weight-bold">Compra Ahora</span> y mantendremos el precio de venta hasta la entrega</p>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->

            <div class="container mt-100 mt-60">
                <div class="row align-items-center">
                    <div class="col-lg-5 col-md-6">
                        <img src="images/store/cosecha-papa.jpg" class="img-fluid rounded shadow-md" alt="Cosecha y compra de futuro de papa en flopp">
                    </div><!--end col-->

                    <div class="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div class="section-title ml-lg-4">
                            <h4 class="title mb-4">Precio Garantizado & <br> Sin Preocupaciones</h4>
                            <p class="text-muted">Dejarás de preocuparte por la subída inesperada de precios, y podrás adelantarte a los movimientos del mercado, comprando tus alimentos con nosotros.</p>
                            <ul class="list-unstyled text-muted">
                                <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uim uim-check-circle"></i></span>Altos estandares de calídad</li>
                                <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uim uim-check-circle"></i></span>Entregas Diarias y optimizadas</li>
                                <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uim uim-check-circle"></i></span>Precios Bajos</li>
                            </ul>
                            <a href="#pedido" class="mt-3 h6 text-primary">Solicitar Cotización <i class="mdi mdi-chevron-right"></i></a>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->
            
            <div class="container mt-100 mt-60" id="pedido">
                <div class="row align-items-center">
                    <div class="col-lg-5 col-md-6 order-1 order-md-2">
                        <div class="card login_page shadow rounded border-0">
                            <div class="card-body">
                                <h5 class="card-title">Solicitar cotización</h5>

                                <form class="login-form">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group position-relative">                                               
                                                <label>Nombre completo <span class="text-danger">*</span></label>
                                                <input type="text" class="form-control" placeholder="Nombre" name="s" required="is required">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group position-relative">
                                                <label>Correo Electrónico <span class="text-danger">*</span></label>
                                                <input type="email" class="form-control" placeholder="Email" name="email" required="">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group position-relative">
                                                <label>Pedido <span class="text-danger">*</span></label>
                                                <textarea class="form-control" placeholder="Requicisión" required=""></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck1">
                                                    <label class="custom-control-label" for="customCheck1">Acepto <a href="#" class="text-primary">Terminos y condiciones </a>así como entiendo y he leído la <a href="#" class="text-primary">Política de privacidad </a>y comprendo el resguardo de mis datos</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <button class="btn btn-success w-100">Realizar Pedído</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-lg-7 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div class="section-title mr-lg-5">
                            <h4 class="title mb-4">Realiza un pedido 100% <br> Garantizado o te devolvemos tu dinero</h4>
                            <p class="text-muted">Servicio garantizado y seguro para todos nuestros clientes, podrás pedir otro servicio o la devolución total e integra de tu dinero.</p>
                            <div class="faq-content mt-4 pt-2">
                                <div class="accordion" id="accordionExampleone">
                                    <div class="card border-0 rounded shadow mb-2">
                                        <a class="faq position-relative" @click="showOne = !showOne" >
                                            <div class="card-header border-0 bg-light p-3 pr-5" id="headingfifone">
                                                <h6 class="title mb-0"> ¿Cómo  <span class="text-primary">Solicitar</span> un pedído ? </h6>
                                            </div>
                                        </a>
                                        <div class="collapse" :class="{show: showOne}" aria-labelledby="headingfifone">
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">Descarga nuestra app y comprá a futuro (pre-venta) productos que que garantiza su calidad y valor, o puedes solicitar una cotización a travez de este formularío.</p>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div class="card border-0 rounded shadow mb-2">
                                        <a class="faq position-relative collapsed" @click="showTwo = !showTwo">
                                            <div class="card-header border-0 bg-light p-3 pr-5">
                                                <h6 class="title mb-0">¿Qué y quién me garantiza mi producto y su precio ? </h6>
                                            </div>
                                        </a>
                                        <div class="collapse" :class="{show: showTwo}">
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">Tu dinero cubre el precio de producto en modalidad pre-venta, por lo que nosotros tenemos la obligación de cumplir con el producto que compraste con su respectivo precio, te garantizamos la atención y seguimiento que podrás ver en nuestra app móvil y en caso de un siniestro un seguro absorbe la perdida.</p>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div class="card border-0 rounded shadow mb-2">
                                        <a class="faq position-relative collapsed" @click="showTree = !showTree">
                                            <div class="card-header border-0 bg-light p-3 pr-5">
                                                <h6 class="title mb-0">¿ Cómo es el pago y cuando se realíza ? </h6>
                                            </div>
                                        </a>
                                        <div class="collapse" :class="{show: showTree}">
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">Paga mediante tarjeta de crédito y/o débito, tranferencia bancaría y se realizá al momento de solicitar un pedído.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->

            <div class="container mt-100 mt-60" id="descarga">
                <div class="row align-items-center">
                    <div class="col-lg-5 col-md-5 col-12">
                        <img src="images/concept/app.svg" class="img-fluid mx-auto d-block" alt="">
                    </div><!--end col-->
        
                    <div class="col-lg-7 col-md-7 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div class="section-title">
                            <div class="alert alert-light alert-pills" role="alert">
                                <span class="badge badge-primary badge-pill mr-1">Apps</span>
                                <span class="content">Descarga ahora <i data-feather="chevron-right" class="fea icon-sm"></i></span>
                            </div>
                            <h4 class="title mb-4">Disponíble para  todos los <br> Smartphones</h4>
                            <p class="text-muted para-desc mb-0">Con nuestra <span class="text-primary font-weight-bold">app</span> podrás realizar todos tus pedidos, darle seguimiento, comparar precios, ver promociones, buscar provedores cerca  de ti, explorar mejores opciones.</p>
                            <div class="my-4">
                                <a href="#pedido" class="btn btn-lg btn-dark mt-2 mr-2"><i class="mdi mdi-apple"></i> App Store</a>
                                <a href="#pedido" class="btn btn-lg btn-dark mt-2"><i class="mdi mdi-google-play"></i> Play Store</a>
                            </div>
        
                            <div class="d-inline-block">
                                <div class="pt-4 d-flex align-items-center border-top">
                                    <i data-feather="smartphone" class="fea icon-md mr-2 text-primary"></i>
                                    <div class="content">
                                        <h6 class="mb-0">Nuestra app tiene muchas caracteristicas que pueden hacerte la vida mas sencilla</h6>
                                        <a href="#pedido" class="text-primary">Aprende como <i class="mdi mdi-arrow-right"></i></a> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->
        </section>
  </div>
</template>

<script>
export default {
    data(){
        return {
            showOne: true,
            showTwo: false,
            showTree: false
        }
    }
}
</script>

<style>

</style>