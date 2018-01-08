import {
    mapGetters,
    mapActions
} from 'vuex'
const COMPONENT_NAME = 'dashboard-page'


export default {
    name: COMPONENT_NAME,

    data() {
        return {
            excelCreating: false,
            zoomControl: true,
            markers: [{
                position: {lat:1.38, lng:103.8},
                icon: {
                    path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
                    fillColor: '#5f60b3',
                    fillOpacity: .5,
                    strokeColor: '#5f60b3',
                    strokeWeight: 1,
                    scale:  1.5
                },
                label: '21000'
            }, {
                position: {lat:1.38, lng:103.9},
                icon: {
                    path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
                    fillColor: '#5f60b3',
                    fillOpacity: .5,
                    strokeWeight: 1,
                    strokeColor: '#5f60b3',
                    scale:  1.5
                },
                label: '2301'
            }]
        }
    },

    components: {

    },

    computed: {
        ...mapGetters([
            'loading', 'periodData'
        ])
    },

    methods: {
        ...mapActions([
            'getPeriodData'
        ]),

        async getData() {
            await this.getPeriodData()
        },
        toDistrict(pos){
            console.log(pos)
        }
    },

    created() {
        this.getData()

    },

    mounted() {

    }
}