/*jshint browser: true*/
/*global jQuery: true*/

(function(window, document, $, undefined){
    'use strict';
    
    //-----------------------------------------------
    //variable declarations
    
    var million = 1000000;
    var pageSize = 300;
    //million = 15;
    pageSize = 5;
    var dataSet;
    var $progressbarStrip = $('.progress-strip');
    var $progressbarText = $('.progress-text');
    
    updateProgressbar(0);
    
    //-----------------------------------------------
    //event listeners
    $(document).on('click', '#btn-gen-forloop-data', function (event) {
        event.preventDefault();
        dataSet = generateDataWithForloop();
        console.log(dataSet);
        console.log(dataSet.length);
    });
    
    $(document).on('click', '.btn-plus', function (event) {
        event.preventDefault();
        alert('just testing...');
    });
    
    
    //-----------------------------------------------
    //generic function defenitions
    
    function updateProgressbar (completePercent) {
        $progressbarStrip.css('width', completePercent + '%');
        $progressbarText.text(completePercent + '%');
    }
    
    function generateDataWithForloop () {
        var dataArray = [];
        updateProgressbar(0);
        for(var i = 0; i < million; ++i){
            dataArray.push({name: 'User-'+i});
            updateProgressbar((i+1)/million*100);
        }
        return dataArray;
    }
    
})(window, document, jQuery);