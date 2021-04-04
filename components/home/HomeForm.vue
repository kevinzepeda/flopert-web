<template>
  <div>
        <section class="section bg-light">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 text-center">
                        <div class="section-title">
                            <h4 class="title font-weight-bold mb-4">Compra más inteligente, compra con causa social. <br> #SinDesperdicioDeComída</h4>
                            <p class="text-muted para-desc mb-0 mx-auto">Unéte junto con tu organización al  <span class="text-primary font-weight-bold"> Movimiento </span> y juntos combatamos el desperdicio de alimentos en Latinoamerica.</p>
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
                            <h4 class="title mb-4">Organizaciones & <br> Empresas que colaboran.</h4>
                            <p class="text-muted">Ya somos más de 5K+ empresas en flopert que juntos contribuimos para reducir el desperdicio de alimentos. Unidos todos podemos beneficiarnos.</p>
                            <ul class="list-unstyled text-muted">
                                <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uil uil-check-circle"></i></span>Altos estandares de calídad</li>
                                <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uil uil-check-circle"></i></span>Entregas Diarias</li>
                                <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uil uil-check-circle"></i></span>Uso eficiente de recursos</li>
                                <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uil uil-check-circle"></i></span>Entregas optimizadas</li>
                                <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uil uil-check-circle"></i></span>Trazabilidad de productos</li>
                            </ul>
                            
                            <button-action action="¿Cómo puedo formar parte?" className="mt-3 h6 text-primary" place="/proveedores/registro" icon='mdi-chevron-right'></button-action>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->
            
            <div class="container mt-100 mt-60" id="pedido">
                <div class="row align-items-center">
                    <div class="col-lg-5 col-md-6 order-1 order-md-2">
                        <div class="card login_page shadow rounded border-0">
                            <div class="card-body">
                                <h5 class="card-title">Nos comunicamos contigo</h5>

                                <form action="https://send.pageclip.co/KAsWScOtNswP8sg5q5QFSaAHVwJWWHDP/Afiliados" class="login-form pageclip-form" method="post">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group position-relative">                                               
                                                <label>Nombre completo <span class="text-danger">*</span></label>
                                                <input type="text" class="form-control" placeholder="Nombre" name="Nombre" required="is required">
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
                                                <label>Teléfono <span class="text-danger">*</span></label>
                                                <input type="number" class="form-control" placeholder="Número telefónico" name="Teléfono" required="">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <label>¿Cuál es tu interés? <span class="text-danger">*</span></label>
                                            <select class="form-group position-relative custom-select" name="interes" required>
                                                <option selected="NA">Selecciona tu Interés</option>
                                                <option value="proveedor">Ser proveedor</option>
                                                <option value="comprador">Comprar</option>
                                                <option value="afiliado">Ser Afiliado</option>
                                                <option value="distribuidor">Ser Distribuidor</option>
                                                <option value="conductor">Ser Conductor</option>
                                                <option value="otro">Otro</option>
                                            </select>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck1" checked>
                                                    <label class="custom-control-label" for="customCheck1">Acepto <a href="#" class="text-primary">Terminos y condiciones </a>así como entiendo y he leído la <a href="#" class="text-primary">Política de privacidad </a>y comprendo el resguardo de mis datos</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                             <button type="submit" class="btn btn-success w-100 pageclip-form__submit">
                                                <span>Quiero que me contacten</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-lg-7 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div class="section-title mr-lg-5">
                            <h4 class="title mb-4">Realiza un pedido 100% <br> Garantizado o te devolvemos tu dinero</h4>
                            <p class="text-muted">Servicio garantizado y seguro para todos, podrás pedir otro servicio o la devolución total e integra de tu dinero.</p>
                            <div class="faq-content mt-4 pt-2">
                                <div class="accordion" id="accordionExampleone">
                                    <div class="card border-0 rounded shadow mb-2">
                                        <a class="faq position-relative" @click="showOne = !showOne" >
                                            <div class="card-header border-0 bg-light p-3 pr-5" id="headingfifone">
                                                <h6 class="title mb-0"> ¿Cómo  <span class="text-primary">funciona</span> la plataforma ? </h6>
                                            </div>
                                        </a>
                                        <div class="collapse" :class="{show: showOne}" aria-labelledby="headingfifone">
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">Solicita tus alimentos o ingredientes en nuestra plataforma (flopert), programa tu envío o solicitalo lo más pronto posible, tu entrega estará puntual y lista para recibirla, si no es lo que esperabas, puedes rechazar la entrega y tu dinero será devuelto.</p>
                                                <button-link url="https://flopp.com" className="btn-primary" action="Entrar"></button-link>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div class="card border-0 rounded shadow mb-2">
                                        <a class="faq position-relative collapsed" @click="showTwo = !showTwo">
                                            <div class="card-header border-0 bg-light p-3 pr-5">
                                                <h6 class="title mb-0">¿Qué me garantiza que el producto llegara en buen estado? </h6>
                                            </div>
                                        </a>
                                        <div class="collapse" :class="{show: showTwo}">
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">El proveedor no recibirá el dinero hasta que tu producto esté en óptimas condiciones en tu puerta, es la garantia floopert, se recaba una firma y evidencia fotográfica para validar los envíos y las condiciones.</p>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div class="card border-0 rounded shadow mb-2">
                                        <a class="faq position-relative collapsed" @click="showTree = !showTree">
                                            <div class="card-header border-0 bg-light p-3 pr-5">
                                                <h6 class="title mb-0">¿Cómo puedo ser <span class="text-primary">proveedor</span>?</h6>
                                            </div>
                                        </a>
                                        <div class="collapse" :class="{show: showTree}">
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">Si te interesa generar un cambio y unirte a más de 5K+ marcas que apoyan este movimiento con flopert, puedes afiliar tu negocio de distribución de alimentos, mientras nosotros nos encargamos de la logística.</p>
                                                <button-action action="Registrate como proveedor" place="/proveedores/registro" className="btn-primary"></button-action>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card border-0 rounded shadow mb-2">
                                        <a class="faq position-relative collapsed" @click="showFour = !showFour">
                                            <div class="card-header border-0 bg-light p-3 pr-5">
                                                <h6 class="title mb-0">¿Cómo es el pago y cuando se realíza? </h6>
                                            </div>
                                        </a>
                                        <div class="collapse" :class="{show: showFour}">
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">Paga mediante tarjeta de crédito y/o débito de forma segura con flopert pay y se realizá al momento de solicitar un pedído.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card border-0 rounded shadow mb-2">
                                        <a class="faq position-relative collapsed" @click="showFive = !showFive">
                                            <div class="card-header border-0 bg-light p-3 pr-5">
                                                <h6 class="title mb-0">¿Soy empresa de <span class="text-primary">transporte</span>, como puedo afiliarme?</h6>
                                            </div>
                                        </a>
                                        <div class="collapse" :class="{show: showFive}">
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">Puedes obtener una ganancia extras en tu empresa de transporte si procesas nuestros envíos. Registrate aquí y nos pondremos en contacto contigo. </p>
                                                <button-action action="Registrate como transportista" place="/transportistas/registro" className="btn-primary"></button-action>
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
                                <span class="badge badge-primary badge-pill mr-1">Mobile App</span>
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
                                        <h6 class="mb-0">Nuestra app tiene muchas caracteristicas que pueden hacerte la vida más fácil</h6>
                                        <a href="#pedido" class="text-primary">Aprende como <i class="mdi mdi-arrow-right"></i></a> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->
        </section>
        <script src="https://s.pageclip.co/v1/pageclip.js" charset="utf-8"></script>
  </div>
</template>

<script>
import buttonAction from "../buttons/buttonAction.vue"
import ButtonLink from '../buttons/buttonLink.vue'

export default {
  components: { buttonAction, ButtonLink },
    data(){
        return {
            showOne: true,
            showTwo: false,
            showTree: false,
            showFour: false,
            showFive: false
        }
    }
}
</script>

<style>
@import url("https://s.pageclip.co/v1/pageclip.css");
</style>