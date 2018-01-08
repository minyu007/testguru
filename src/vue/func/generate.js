import { mapGetters, mapActions } from 'vuex'
import swal from 'sweetalert'
import myDatepicker from 'vue-datepicker'
const COMPONENT_NAME = 'generate-page'

const getToday = function() {
    let today = new Date()
    let dd = today.getDate()
    let mm = today.getMonth() + 1 //January is 0!
    let yyyy = today.getFullYear()

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }
    today = yyyy + '-' + mm + '-' + dd
    return today
}

const getOneMonthAgo = function() {
    let today = new Date(new Date().getTime())
    let dd = today.getDate()
    let mm = today.getMonth() //January is 0!
    let yyyy = today.getFullYear()

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }
    today = yyyy + '-' + mm + '-' + dd
    return today
}

export default {
    name: COMPONENT_NAME,
    components: {
        'date-picker': myDatepicker
    },
    data () {
        return {
            frequency: 'day',
            startTime: {
                time: getOneMonthAgo()
            },
            endTime: {
                time: getToday()
            },
            option: {
                type: 'day',
                week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                format: 'YYYY-MM-DD',
                placeholder: 'when?',
                inputStyle: {
                    'display': 'block',
                    'width': '100%',
                    'padding': '.375rem 5px',
                    'font-size': '1rem',
                    'line-height': '1.5',
                    'color': '#495057',
                    'background-color': '#fff',
                    'background-image': 'none',
                    'background-clip': 'padding-box',
                    'border': '1px solid #ced4da',
                    'border-radius': '.25rem',
                    'transition': 'border-color ease-in-out .15s,box-shadow ease-in-out .15s'
                },
               
                buttons: {
                    ok: 'Ok',
                    cancel: 'Cancel'
                },
                overlayOpacity: 0.5, 
                dismissible: true
            },

            currency: ['US$', 'HK$', 'RMB'],
            months: [0, 1, 2],
            currencyError: false,
            monthsError: false,
            startTimeError: false,
            endTimeError: false,
            frequencyError: false
        }
    },

    computed: {
        ...mapGetters([
            'loading', 'immloading'
        ])
    },
    watch: {
        frequency: function (val, oldVal) {
            if(val && val.length > 0){
                this.frequencyError = false
            } 
        },
        currency: function (val, oldVal) {
            if(val && val.length > 0){
                this.currencyError = false
            } 
        },
        months: function (val, oldVal) {
            if(val && val.length > 0){
                this.monthsError = false
            } 
        }
    },
    methods: {
        ...mapActions([
            'getPeriodData'
        ]),

        prevCheck (){
            let _this = this
           
            if(!_this.startTime || _this.startTime == '' ){
                _this.startTimeError = true
                return false
            }

            if(!_this.endTime || _this.endTime == '' ){
                _this.endTimeError = true
                return false
            }

            if(!_this.frequency || _this.frequency == '' ){
                _this.frequencyError = true
                return false
            }
            if(!_this.months || _this.months.length == 0 ){
                _this.monthsError = true
                return false
            }
            if(!_this.currency || _this.currency.length == 0 ){
                _this.currencyError = true
                return false
            }
            
            return true
        },

        async generatePeriod(){
            let _this = this
            if(!_this.prevCheck()){
                return
            }
            await _this.getPeriodData({
                startTime: _this.startTime,
                endTime: _this.endTime,
                frequency: _this.frequency,
                currency: _this.currency,
                months: _this.months
            })
            _this.$router.push('/period/' + _this.frequency)
        }
    }
}
