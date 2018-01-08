<template>
    <div class="period-page pb-5">
        
        <div class="page-header">
            <h1 class="page-title">The following shows the analysis of {{Today.day}}'s results</h1>
        </div>
        <div class='page-content py-0 container-fluid'>
            <div class='row'>
                <div class="col-xl-6 col-md-12">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="card card-block p-10 mb-10 bg-blue-600">
                                <div class="counter counter-lg counter-inverse">
                                    <span class="counter-number">{{Today.instock}}</span>
                                    <div class="counter-label text-uppercase">In Stock</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="card card-block p-10 mb-10">
                                <div class="counter counter-lg ">
                                    <span class="counter-number">{{Today.priceincrease}}  <i style='font-size: 20px;font-weight: normal; color: ' class="green-700 fa fa-long-arrow-up" aria-hidden="true"></i> {{Today.pricereduction}} <i class="red-700 fa fa-long-arrow-down" style='font-size: 20px;font-weight: normal;' aria-hidden="true"></i> </span>
                                    <div class="counter-label text-uppercase">price fluncuation</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="card card-block p-10 bg-purple-600">
                                <div class="counter counter-lg counter-inverse">
                                    <div class="counter-label text-uppercase">New listings</div>
                                    <div class="counter-number-group">
                                        <span class="counter-number-related">+</span>
                                        <span class="counter-number">{{Today.in}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="card card-block p-10 bg-orange-600">
                                <div class="counter counter-lg counter-inverse">
                                    <div class="counter-label text-uppercase">Sold</div>
                                    <div class="counter-number-group">
                                        <span class="counter-number-related">-</span>
                                        <span class="counter-number">{{Today.out}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6">
                    <div class="card card-shadow" id="chartPie1">
                        <div class="card-block p-0 p-30 h-full">
                            <div class="row no-space">
                                <div class="col-7">
                                    <p>
                                        <span class="icon md-circle green-700 mr-5"></span>{{(Math.round(Today.increasepercent * 10000) / 100)}}% increase</p>
                                    <p class="mb-20">
                                        <span class="icon md-circle red-700 mr-5"></span>{{(Math.round(Today.reductionpercent * 10000) / 100)}}% reduction</p>
                                    <!-- <p>Price Fluncuation Total</p>
                                    <p class="font-size-20 mb-10" style="line-height:1;">{{priceflunc}}</p> -->
                                    <p>PSF average change</p>
                                    <p class="font-size-20 mb-0" style="line-height:1;">S$ {{Today.priceaverage>0?'+': ''}}{{(Math.round(Today.priceaverage * 100) / 100)}} psf</p>
                                </div>
                                <div class="col-5">
                                    <div class="ct-chart chart-pie" style="height: 151px;">
                                        <div class="vertical-align text-center" style="height:100%; width:100%; position:absolute; left:0; top:0;">
                                            <div class="font-size-20  vertical-align-middle" style="line-height:1.1 ">
                                                <div>{{Today.instock}}</div>
                                                <div>Total</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6">
                    <div class="card card-shadow" id="chartPie2">
                        <div class="card-block p-0 p-30 h-full">
                            <div class="row no-space">
                                <div class="col-7">
                                    <p>
                                        <span class="icon md-circle purple-600 mr-5"></span>{{(Math.round(Today.inpercent * 10000) / 100)}}% New listings</p>
                                    <p class="mb-20">
                                        <span class="icon md-circle orange-600 mr-5"></span>{{(Math.round(Today.outpercent * 10000) / 100)}}% Sold</p>
                                    <p>How long</p>
                                    <p class="font-size-20 mb-0" style="line-height:1;">{{(Math.round(Today.howlongaverage * 100) / 100)}} days</p>
                                </div>
                                <div class="col-5">
                                    <div class="ct-chart chart-pie" style="height: 151px;">
                                        <div class="vertical-align text-center" style="height:100%; width:100%; position:absolute; left:0; top:0;">
                                            <div class="font-size-20  vertical-align-middle" style="line-height:1.1 ">
                                                <div>{{Today.instock + Today.out}}</div>
                                                <div>Total</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-md-12">
                    <div class="widget widget-shadow">
                        <div class="widget-content padding-30 bg-white height-full container-fluid">
                            <canvas id="charLineareaTwo"></canvas>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-md-12">
                    <div class="widget widget-shadow">
                        <div class="widget-content padding-30 bg-white height-full container-fluid">
                            <canvas id="charLinePriceAverage"></canvas>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-md-12">
                    <div class="widget widget-shadow">
                        <div class="widget-content padding-30 bg-white height-full container-fluid">
                            <canvas id="charLineHowLongAverage"></canvas>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-md-12">
                    <div class="widget widget-shadow">
                        <div class="widget-content padding-30 bg-white height-full container-fluid">
                            <canvas id="charLineInOut"></canvas>
                        </div>
                    </div>
                </div>
                <!-- <div class="col-xl-6 col-md-12">
                    <div class="widget widget-shadow">
                        <div class="widget-content padding-30 bg-white height-full container-fluid">
                            <canvas id="charLineOut"></canvas>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>
<script src='../func/period.js'></script>
<style scoped>
.page-content{
	padding: 30px 30px;
}
.period-page{
    position: relative;
    min-height: -webkit-calc(100% - 44px);
    min-height: calc(100% - 44px);
    background: #f1f4f5;
}
#chartPie .ct-chart .ct-series.ct-series-a .ct-slice-donut{
  stroke: #36ab7a!important;
}
#chartPie .ct-chart .ct-series.ct-series-b .ct-slice-donut{
  stroke: #e9595b!important;
}
#chartPie .ct-chart .ct-series.ct-series-c .ct-slice-donut{
  stroke: #926dde!important;
}
</style>