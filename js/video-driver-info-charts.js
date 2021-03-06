/**
 * Dark theme for Highcharts JS
 * @author Torstein Honsi
 */

 var heartRates = [];

  $.ajax({
      url: 'https://DEV_3AFTW8HX5C20XFIA31D8GZN93:Abcd1234@s11hanaxs.hanatrial.ondemand.com/i848739trial/fabian/test/Callee.xsjs',
      data: {},
      type: 'GET',
      cache: false,
      success: function(resultStr){
          var result = JSON.parse(resultStr);
          heartRates.concat(result.heartRates);
          console.log(heartRates);
      },
      error: function(){
        heartRates.concat([120, 124, 150, 173, 180, 160, 140, 130, 128, 120, 22, 42, 22, 42, 22, 42, 22, 42]);
      }
  });


// Load the fonts
Highcharts.createElement('link', {
   href: '//fonts.googleapis.com/css?family=Unica+One',
   rel: 'stylesheet',
   type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);

Highcharts.theme = {
   colors: ["#000", "#90ee7e", "#f45b5b", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
      "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
   chart: {
      backgroundColor: "#3EAD96",
      style: {
         fontFamily: "'Unica One', sans-serif"
      },
      plotBorderColor: '#606063'
   },
   title: {
      style: {
         color: '#E0E0E3',
         textTransform: 'uppercase',
         fontSize: '10pt'
      }
   },
   subtitle: {
      style: {
         color: '#E0E0E3',
         textTransform: 'uppercase'
      }
   },
   xAxis: {
      gridLineColor: '#707073',
      labels: {
         style: {
            color: '#E0E0E3'
         }
      },
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      title: {
         style: {
            color: '#A0A0A3'

         }
      }
   },
   yAxis: {
      gridLineColor: '#707073',
      labels: {
         style: {
            color: '#E0E0E3'
         }
      },
      lineColor: '#E0E0E3',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      tickWidth: 1,
      title: {
         style: {
            color: '#E0E0E3'
         }
      }
   },
   tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      style: {
         color: '#F0F0F0'
      }
   },
   plotOptions: {
      series: {
         dataLabels: {
            color: '#B0B0B3'
         },
         marker: {
            lineColor: '#333'
         }
      },
      boxplot: {
         fillColor: '#505053'
      },
      candlestick: {
         lineColor: 'white'
      },
      errorbar: {
         color: 'white'
      }
   },
   legend: {
      itemStyle: {
         color: '#E0E0E3'
      },
      itemHoverStyle: {
         color: '#FFF'
      },
      itemHiddenStyle: {
         color: '#606063'
      }
   },
   credits: {
      style: {
         color: '#3EAD96'
      }
   },
   labels: {
      style: {
         color: '#707073'
      }
   },

   drilldown: {
      activeAxisLabelStyle: {
         color: '#F0F0F3'
      },
      activeDataLabelStyle: {
         color: '#F0F0F3'
      }
   },

   navigation: {
      buttonOptions: {
         symbolStroke: '#3EAD96',
         theme: {
            fill: '#3EAD96'
         }
      }
   },

   // scroll charts
   rangeSelector: {
      buttonTheme: {
         fill: '#505053',
         stroke: '#000000',
         style: {
            color: '#CCC'
         },
         states: {
            hover: {
               fill: '#707073',
               stroke: '#000000',
               style: {
                  color: 'white'
               }
            },
            select: {
               fill: '#000003',
               stroke: '#000000',
               style: {
                  color: 'white'
               }
            }
         }
      },
      inputBoxBorderColor: '#505053',
      inputStyle: {
         backgroundColor: '#333',
         color: 'silver'
      },
      labelStyle: {
         color: 'silver'
      }
   },

   navigator: {
      handles: {
         backgroundColor: '#666',
         borderColor: '#AAA'
      },
      outlineColor: '#CCC',
      maskFill: 'rgba(255,255,255,0.1)',
      series: {
         color: '#7798BF',
         lineColor: '#A6C7ED'
      },
      xAxis: {
         gridLineColor: '#505053'
      }
   },

   scrollbar: {
      barBackgroundColor: '#808083',
      barBorderColor: '#808083',
      buttonArrowColor: '#CCC',
      buttonBackgroundColor: '#606063',
      buttonBorderColor: '#606063',
      rifleColor: '#FFF',
      trackBackgroundColor: '#404043',
      trackBorderColor: '#404043'
   },

   // special colors for some of the
   legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
   background2: '#505053',
   dataLabelsColor: '#B0B0B3',
   textColor: '#C0C0C0',
   contrastTextColor: '#F0F0F3',
   maskColor: 'rgba(255,255,255,0.3)'
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);

$(function () {
    $('#highcharts-container').highcharts({
      chart: {
        events: {
          load: function () {
             // HEARTRATE
             var xStart = 90;
                    var seriesHeartRate = this.series[0];
                    var seriesFatigue = this.series[1];
                    setInterval(function () {
                      xStart += 10;
                        var x = xStart, // current time
                            yHeartRate = Math.random() * (160 - 140) + 140; ;
                            $("#info-heartrate").text(Math.floor(yHeartRate) + " bpm");
                            if(x %100 == 0) {
                              yFatigue = 20 + (x/200);
                               $("#info-fatigue").text(Math.floor(yFatigue) + "%" );
                            }
                            yPupils = Math.random() * (82 - 79) + 79; ;
                            $("#info-pupils").text(Math.floor(yPupils) + "%" );

                        seriesHeartRate.addPoint([x, yHeartRate], true, true);
                        seriesFatigue.addPoint([x, yFatigue], true, true);

                    }, 1000);


             // HEARTRATE
             // var xFatigueStart = 90;
             //        var series = this.series[1];
             //        setInterval(function () {
             //          xFatigueStart += 10;
             //            var x2 = xFatigueStart, // current time
             //                yFatigue = Math.random() * (24 - 22) + 22; ;
             //            series.addPoint([x2, yFatigue], true, true);
             //        }, 1000);
          }
        }
      },
        title: {
            text: 'Driver Stats',
            x: -20 //center
        },

        xAxis: {
            categories: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
        },
        yAxis: {
            title: {
                text: 'Heartrate [bpm]'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: 'bpm'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Heartrate',
            data: [120, 124, 150, 173, 180, 160, 140, 130, 128, 120]
        }
        , {
            name: 'Fatigue Index',
            data: [20,20,20,20,20,20,20,20,20,21,21]
        }
        ]
    });
});