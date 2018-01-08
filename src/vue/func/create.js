import {
    mapGetters,
    mapActions
} from 'vuex'

const COMPONENT_NAME = 'create-page'

export default {
    name: COMPONENT_NAME,

    data() {
        return {
            mday:''
        }
    },

    components: {
        
    },

    computed: {
        ...mapGetters([
            'loading'
        ])
    },

    methods: {
        ...mapActions([
            'createDailyData', 'createDailyDataByPhone', 'reduplicateDailyData' , 'analysisDailyData'
        ]),
        
        async create(){
            await this.createDailyData()
        }, 

        async createByPhone(){
            await this.createDailyDataByPhone()
        },

        async reduplicate(){
            await this.reduplicateDailyData(this.mday)
        },

        async analysis(){
            await this.analysisDailyData()
        }
    }
}