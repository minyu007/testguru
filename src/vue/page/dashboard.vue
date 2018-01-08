<template>
    <div class="dashboard-page pb-5">
        <main class="main-wrapper clearfix">
            <div class="widget-list widget-list-full-width my-0  bg-color-scheme row">
                <gmap-map :center="{lat:1.351947129182841, lng:103.86819290664062}"  :zoom="12" map-type-id="roadmap" style="width: 100%; height:450px">
                    <!-- <gmap-marker :position="{lat:1.38, lng:103.8}">
                    </gmap-marker> -->
                    <gmap-marker
                    :zIndex='12'
                    :label='m.label'
                    :icon.sync="m.icon"
                      :key="index"
                      v-for="(m, index) in markers"
                      :position="m.position"
                      :clickable="true"
                      :draggable="false"
                      @click="toDistrict(m)"
                    ></gmap-marker>
                </gmap-map>

            </div>
            <div class="tabs tabs-page" style='margin-top: -57px;'>
                <ul class="nav nav-tabs d-flex justify-content-center  neg-wrapper-padding" style='background-color: rgba(95,96,179,0.8)!important;    border-color: #5f60b3 !important;
    color: #fff;'>
                    <li class="nav-item"><a href="#jobs-board" class="nav-link active" data-toggle="tab" aria-expanded="true">Total</a>
                    </li>
                    <li class="nav-item"><a href="#jobs-board" class="nav-link" data-toggle="tab" aria-expanded="false">Second-hand</a>
                    </li>
                    <li class="nav-item"><a href="#jobs-board" class="nav-link" data-toggle="tab" aria-expanded="false">New house</a>
                    </li>
                </ul>
                <div class="tab-content px-0 pb-0 pt-4 bg-none">
                    <div class="tab-pane active" id="jobs-board" aria-expanded="true">
                        <div class="widget-list row">
                            <div class="widget-holder widget-sm widget-border-radius col-md-3">
                                <div class="widget-bg">
                                    <div class="widget-heading"><span class="widget-title my-0 fs-12 fw-600">In Stock</span> <i class="widget-heading-icon feather feather-box"></i>
                                    </div>
                                    <!-- /.widget-heading -->
                                    <div class="widget-body">
                                        <div class="counter-w-info">
                                            <div class="counter-title color-color-scheme"><span class="counter" id="counter-0">397</span>k</div>
                                            <!-- /.counter-title -->
                                            <div class="counter-info">
                                                <span class="badge bg-success-contrast">
                                                    + 23% New Listings </span>
                                                <span class="badge bg-danger-contrast"> - 6% Sold </span>
                                            </div>
                                            <!-- /.counter-info -->
                                        </div>
                                        <!-- /.counter-w-info -->
                                    </div>
                                    <!-- /.widget-body -->
                                </div>
                                <!-- /.widget-bg -->
                            </div>
                            <!-- /.widget-holder -->
                            <div class="widget-holder widget-sm widget-border-radius col-md-3">
                                <div class="widget-bg">
                                    <div class="widget-heading"><span class="widget-title my-0 fs-12 fw-600">PSF Average Change</span> <i class="widget-heading-icon feather feather-briefcase"></i>
                                    </div>
                                    <!-- /.widget-heading -->
                                    <div class="widget-body">
                                        <div class="counter-w-info">
                                            <div class="counter-title color-color-scheme">+ $<span class="counter" id="counter-1">76</span>PSF</div>
                                            <!-- /.counter-title -->
                                            <div class="counter-info"><span class="badge bg-success-contrast">
                                                    <i class="feather feather-arrow-up"></i> 23% New Listings </span> <span class="badge bg-danger-contrast"><i class="feather feather-arrow-down"></i> 6% decrease </span></div>
                                            <!-- /.counter-info -->
                                        </div>
                                        <!-- /.counter-w-info -->
                                    </div>
                                    <!-- /.widget-body -->
                                </div>
                                <!-- /.widget-bg -->
                            </div>
                            <!-- /.widget-holder -->
                            <div class="widget-holder widget-sm widget-border-radius col-md-3">
                                <div class="widget-bg">
                                    <div class="widget-heading"><span class="widget-title my-0 fs-12 fw-600">Venture Capital</span> <i class="widget-heading-icon feather feather-zap"></i>
                                    </div>
                                    <!-- /.widget-heading -->
                                    <div class="widget-body">
                                        <div class="counter-w-info">
                                            <div class="counter-title color-color-scheme">
                                                <div class="d-flex justify-content-center align-items-baseline"><span data-toggle="sparklines" sparkheight="25" sparktype="bar" sparkchartrangemin="0" sparkbarspacing="3" sparkbarcolor="#947AE8"><canvas width="46" height="25" style="display: inline-block; width: 46px; height: 25px; vertical-align: top;"></canvas></span><span class="align-bottom ml-2 ml-0-rtl mr-2-rtl">$<span class="counter" id="counter-3">541</span>m</span>
                                                </div>
                                                <!-- /.d-flex -->
                                            </div>
                                            <!-- /.counter-title -->
                                            <div class="counter-info"><span class="badge bg-success-contrast"><i class="feather feather-arrow-up"></i> 5% increase </span>in funding</div>
                                            <!-- /.counter-info -->
                                        </div>
                                        <!-- /.counter-w-info -->
                                    </div>
                                    <!-- /.widget-body -->
                                </div>
                                <!-- /.widget-bg -->
                            </div>
                            <!-- /.widget-holder -->
                            <div class="widget-holder widget-sm widget-border-radius col-md-3">
                                <div class="widget-bg">
                                    <div class="widget-heading"><span class="widget-title my-0 fs-12 fw-600">How Long</span> <i class="widget-heading-icon feather feather-anchor"></i>
                                    </div>
                                    <!-- /.widget-heading -->
                                    <div class="widget-body">
                                        <div class="counter-w-info">
                                            <div class="counter-title color-color-scheme">
                                                <div class="d-flex justify-content-center align-items-end">
                                                    <div data-toggle="circle-progress" data-start-angle="30" data-thickness="6" data-size="40" data-value="0.58" data-line-cap="round" data-empty-fill="#E2E2E2" data-fill="{&quot;gradient&quot;: [&quot;#40E4C2&quot;, &quot;#0087FF&quot;], &quot;gradientAngle&quot;: -90}">
                                                        <canvas width="40" height="40"></canvas>
                                                    </div><span class="counter ml-3" id="counter-2">5.3</span>%</div>
                                                <!-- /.d-flex -->
                                            </div>
                                            <!-- /.counter-title -->
                                            <div class="counter-info"><span class="badge bg-success-contrast"><i class="feather feather-arrow-up"></i> 5% increase</span>
                                            </div>
                                            <!-- /.counter-info -->
                                        </div>
                                        <!-- /.counter-w-info -->
                                    </div>
                                    <!-- /.widget-body -->
                                </div>
                                <!-- /.widget-bg -->
                            </div>
                            <!-- /.widget-holder -->
                        </div>
                        <!-- /.widget-list -->
                        <hr>
                    </div>
                    <!-- /.tab-pane -->
                    <div class="tab-pane" id="pricing" aria-expanded="false">
                        <p>Pricing</p>
                    </div>
                    <div class="tab-pane" id="enterprises" aria-expanded="false">
                        <p>Enterprises</p>
                    </div>
                    <!-- /.tab-pane -->
                </div>
                <!-- /.tab-content -->
            </div>
        </main>
    </div>
</template>
<script src='../func/dashboard.js'></script>
<style scoped>
     #map {
        height: 100%;
      }
</style>