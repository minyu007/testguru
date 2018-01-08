<template>
    <div class="login-page pb-5">
        <div class='container'>
            <div class='form-generate mt-5'>
                <div class='card outter'>
                    <div style='text-align: center'>
                        <h1>Best Money</h1>
                    </div>
                    <form class="">
                        <div class="tab-content">
                            <div class="tab-pane active" >
                                <div class="form-row m-t-15">
                                    <div class="form-group col-md-6">
                                        <label class='mytitle'><span :class='{"input-error": startTimeError}'>StartTime</span></label>
                                        <date-picker class="form-control no-border" :date="startTime" :option='option'></date-picker>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label class='mytitle'><span :class='{"input-error": endTimeError}'>EndTime</span></label>
                                        <date-picker class="form-control no-border" :date="endTime" :option='option'></date-picker>
                                    </div>
                                </div>
                                <div class="form-group row  m-t-15">
                                    <label class='col-sm-12 mytitle'><span :class='{"input-error": frequencyError}'>Frequency</span></label>
                                    <div class='col-sm-12'>
                                        <div class='row'>
                                            <div class='col-sm-4'>
                                                <label class="custom-control custom-radio">
                                                    <input type="radio" class="custom-control-input" v-model='frequency' id='day' value='day'>
                                                    <span class="custom-control-indicator"></span>
                                                    <span class="custom-control-description">Day</span>
                                                </label>
                                            </div>
                                            <div class='col-sm-4'>
                                                <label class="custom-control custom-radio">
                                                    <input type="radio" class="custom-control-input" v-model='frequency' id='week' value='week'>
                                                    <span class="custom-control-indicator"></span>
                                                    <span class="custom-control-description">Week</span>
                                                </label>
                                            </div>
                                            <div class='col-sm-4'>
                                                <label class="custom-control custom-radio">
                                                    <input type="radio" class="custom-control-input" v-model='frequency' id='month' value='month'>
                                                    <span class="custom-control-indicator"></span>
                                                    <span class="custom-control-description">Month</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row  m-t-15">
                                    <label class='col-sm-12 mytitle'><span :class='{"input-error": monthsError}'>Months </span></label>
                                    <div class='col-sm-12'>
                                        <div class='row'>
                                            <div class='col-sm-4'>
                                                <label class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" v-model='months' id='months3' value='0'>
                                                    <span class="custom-control-indicator"></span>
                                                    <span class="custom-control-description">3 Months</span>
                                                </label>
                                            </div>
                                            <div class='col-sm-4'>
                                                <label class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" v-model='months' id='months6' value='1'>
                                                    <span class="custom-control-indicator"></span>
                                                    <span class="custom-control-description">6 Months</span>
                                                </label>
                                            </div>
                                            <div class='col-sm-4'>
                                                <label class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" v-model='months' id='months12' value='2'>
                                                    <span class="custom-control-indicator"></span>
                                                    <span class="custom-control-description">12 Months</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row  m-t-15">
                                    <label class='col-sm-12 mytitle'><span :class='{"input-error": currencyError}'>Currency </span></label>
                                    <div class='col-sm-12'>
                                        <div class='row'>
                                            <div class='col-sm-4'>
                                                <label class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" v-model='currency'  id='us$' value='US$'>
                                                    <span class="custom-control-indicator"></span>
                                                    <span class="custom-control-description">US$</span>
                                                </label>
                                            </div>
                                            <div class='col-sm-4'>
                                                <label class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" v-model='currency' id='hk$' value='HK$'>
                                                    <span class="custom-control-indicator"></span>
                                                    <span class="custom-control-description">HK$</span>
                                                </label>
                                            </div>
                                            <div class='col-sm-4'>
                                                <label class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" v-model='currency' id='rmb' value='RMB'>
                                                    <span class="custom-control-indicator"></span>
                                                    <span class="custom-control-description">RMB</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p class='input-error no-border' v-if='frequencyError||currencyError||monthsError'>Please input the required item correctly</p>
                                <button type="button" @click='generatePeriod()' class="btn btn-primary btn-lg btn-block">Generate Period Data <i v-if='loading' class='fa fa-spinner fa-spin'></i></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script src='../func/generate.js'></script>
<style scoped>
	.mytitle{
		font-weight: bold;
		
	}
	.mytitle span{
		border-left: 3px solid #77aa43;
		padding-left: 5px;
	}
	
	.form-generate {
	    max-width: 630px;
	    padding: 15px;
	    margin: 0 auto;
	}
	.outter{
	   padding: 30px;
       border: 4px solid #eaeff2;
	}
	.m-t-15{
		margin-top: 15px;
	}
	.custom-control-input:checked~.custom-control-indicator {
	    color: #fff;
    	background-color: #77aa43;
	}
	.custom-control-indicator{
		top: 0.40rem;
	}

    .input-error {
        color: #dc3545;
        border-left: 3px solid #dc3545!important;
    }
    .no-border {
        border: none!important;
    }
    .no-bg {
        background: #fff!important;
        border-bottom: none!important;
    }
    .cov-vue-date{
        padding-left: 0px;
    }
</style>