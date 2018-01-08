import {
    mapGetters,
    mapActions
} from 'vuex'
import '../lib/jquery-easing-min.js'
import $ from '../lib/jquery-min.js'
const COMPONENT_NAME = 'period-page'
import Chart from 'chart.js'
import Chartist from 'chartist'

const dragScroll = function($outter, $inner) {
    var startX = null;
    var startScrollX = null;
    var arr = [];
    $inner.off('mousedown mousemove mouseup mouseleave');
    $outter.off('scroll mouseup');

    $inner.on('mousedown', function(e) {
        e.preventDefault();
        startX = e.pageX;
        startScrollX = $outter.scrollLeft();
        arr = [];
    }).on('mousemove', function(e) {
        if (startX === null) return;
        e.preventDefault();
        $outter.scrollLeft(startScrollX - e.pageX + startX);
    }).on('mouseup', function(e) {
        e.preventDefault();
        startX = null;
        startScrollX = null;
    }).on('mouseleave', function(e) {
        e.preventDefault();
        startX = null;
        startScrollX = null;
    });
    $outter.on('scroll', function(e) {
        e.preventDefault();
        arr.push($outter.scrollLeft());
        if (arr.length > 5) arr.shift();
    }).on('mouseup', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (arr.length >= 2) {
            var d = arr[arr.length - 1] - arr[arr.length - 2];
            $outter.animate({
                scrollLeft: '+=' + (d * 10)
            }, 400);
        }
        arr = [];
    })
}
export default {
    name: COMPONENT_NAME,

    data() {
        return {
            excelCreating: false
        }
    },

    components: {

    },

    computed: {
        ...mapGetters([
            'loading', 'periodData'
        ]),

        Today() {
            return this.periodData.length != 0 ? this.periodData[this.periodData.length - 1] : {}
        },
        priceflunc() {
            return this.Today ? this.Today.priceincrease + this.Today.pricereduction : 0
        }
    },

    methods: {
        ...mapActions([
            'getPeriodData'
        ]),

        async getData() {
            await this.getPeriodData()

            let instock = this.Today.instock
            let priceincrease = this.Today.priceincrease
            let pricereduction = this.Today.pricereduction

            let newlistings = this.Today.in
            let sold = this.Today.out
            new Chartist.Pie('#chartPie1 .ct-chart', {
                series: [20 * priceincrease, 20 * pricereduction, instock - 20 * priceincrease - 20 * pricereduction]
            }, {
                donut: true,
                donutWidth: 10,
                startAngle: 0,
                showLabel: false
            })

            new Chartist.Pie('#chartPie2 .ct-chart', {
                series: [10 * newlistings, 10 * sold, instock - 10 * newlistings + 10 * sold]
            }, {
                donut: true,
                donutWidth: 10,
                startAngle: 0,
                showLabel: false
            })


            let labels = this.periodData.map(v => {
                return v.day
            })
            let instocks = this.periodData.map(v => {
                return v.instock
            })

            let priceaverage = this.periodData.map(v => {
                return Math.round(v.priceaverage * 100) / 100
            })
            let howlongaverage = this.periodData.map(v => {
                return Math.round(v.howlongaverage * 100) / 100
            })

            let ins = this.periodData.map(v => {
                return v.in
            })
            let outs = this.periodData.map(v => {
                return v.out
            })

            new Chart(document.getElementById("charLineareaTwo").getContext("2d"), {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: "instock",
                        backgroundColor: "rgb(54, 162, 235)",
                        borderColor: "rgb(54, 162, 235)",
                        data: instocks,
                        fill: false,
                    }]
                },
                options: {
                    legend: {
                        display: false
                    },
                    responsive: true,
                    title: {
                        display: true,
                        text: 'Instock changes'
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false,
                    },
                    hover: {
                        mode: 'nearest',
                        intersect: true
                    }

                }
            });

            new Chart(document.getElementById("charLinePriceAverage").getContext("2d"), {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: "PSF",
                        backgroundColor: "rgb(255, 99, 132)",
                        borderColor: "rgb(255, 99, 132)",
                        data: priceaverage,
                        fill: false,
                    }]
                },
                options: {
                    legend: {
                        display: false
                    },
                    responsive: true,
                    title: {
                        display: true,
                        text: 'PSF changes'
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false,
                    },
                    hover: {
                        mode: 'nearest',
                        intersect: true
                    }

                }
            });
            new Chart(document.getElementById("charLineHowLongAverage").getContext("2d"), {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: "days",
                        backgroundColor: "rgb(75, 192, 192)",
                        borderColor: "rgb(75, 192, 192)",
                        data: howlongaverage,
                        fill: false,
                    }]
                },
                options: {
                    legend: {
                        display: false
                    },
                    responsive: true,
                    title: {
                        display: true,
                        text: 'How long'
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false,
                    },
                    hover: {
                        mode: 'nearest',
                        intersect: true
                    }

                }
            });
            
            new Chart(document.getElementById("charLineInOut").getContext("2d"), {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: "New listing",
                        backgroundColor: "rgb(146,109,222)",
                        borderColor: "rgb(146,109,222)",
                        data: ins,
                        fill: false,
                    },{
                        label: "Sold",
                        backgroundColor: "rgb(255, 159, 64)",
                        borderColor: "rgb(255, 159, 64)",
                        data: outs,
                        fill: false,
                    }]
                },
                options: {
                    legend: {
                        display: false
                    },
                    responsive: true,
                    title: {
                        display: true,
                        text: 'New Listings & Sold'
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false,
                    },
                    hover: {
                        mode: 'nearest',
                        intersect: true
                    }

                }
            });

            // new Chart(document.getElementById("charLineOut").getContext("2d"), {
            //     type: 'line',
            //     data: {
            //         labels: labels,
            //         datasets: [{
            //             label: "days",
            //             backgroundColor: "rgb(255, 159, 64)",
            //             borderColor: "rgb(255, 159, 64)",
            //             data: outs,
            //             fill: false,
            //         }]
            //     },
            //     options: {
            //         legend: {
            //             display: false
            //         },
            //         responsive: true,
            //         title: {
            //             display: true,
            //             text: 'Sold'
            //         },
            //         tooltips: {
            //             mode: 'index',
            //             intersect: false,
            //         },
            //         hover: {
            //             mode: 'nearest',
            //             intersect: true
            //         }

            //     }
            // });

            //
        }
    },

    created() {
        this.getData()
    },

    mounted() {

    }
}