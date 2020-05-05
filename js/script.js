function progressPlus1() {
    $('.progress-bar').width(function(index, value){
        let oneProcentValue = $('.progress-bar').parent().width() / 100;
        let changeValue = value + oneProcentValue;
        let changeValueProcent = changeValue / oneProcentValue;
        
        if (Math.round(changeValueProcent) < 100) {
            $('.progress-bar').html(Math.round(changeValueProcent) + '%');
        } else {
            $('.progress-bar').html(100 + '%');
        };
        
        return changeValue;
    });
};

function progressPlus3() {
    $('.progress-bar').width(function(index, value){
        let oneProcentValue = $('.progress-bar').parent().width() / 100;
        let changeValue = value + oneProcentValue * 3;
        let changeValueProcent = changeValue / oneProcentValue;
        
        if (Math.round(changeValueProcent) < 100) {
            $('.progress-bar').html(Math.round(changeValueProcent) + '%');
        } else {
            $('.progress-bar').html(100 + '%');
        };

        return changeValue;
    });
};

function progressPlus7() {
    $('.progress-bar').width(function(index, value){
        let oneProcentValue = $('.progress-bar').parent().width() / 100;
        let changeValue = value + oneProcentValue * 7;
        let changeValueProcent = changeValue / oneProcentValue;
        
        if (Math.round(changeValueProcent) < 100) {
            $('.progress-bar').html(Math.round(changeValueProcent) + '%');
        } else {
            $('.progress-bar').html(100 + '%');
        };

        return changeValue;
    });
};

function init() {
    $("#but-1").click(progressPlus1);
    $("#but-3").click(progressPlus3);
    $("#but-7").click(progressPlus7);
};

$(document).ready(init);
