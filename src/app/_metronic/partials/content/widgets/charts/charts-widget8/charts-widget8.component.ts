import { Component, OnInit } from '@angular/core';
import { getCSSVariableValue } from '../../../../../kt/_utils';

@Component({
  selector: 'app-charts-widget8',
  templateUrl: './charts-widget8.component.html',
})
export class ChartsWidget8Component implements OnInit {
  chartOptions: any = {};

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = getChartOptions(350);
  }
}

function getChartOptions(height: number) {
  const labelColor = getCSSVariableValue('--kt-gray-500');
  const borderColor = getCSSVariableValue('--kt-gray-200');
  const strokeColor = getCSSVariableValue('--kt-gray-300');

  const color1 = getCSSVariableValue('--kt-warning');
  const color1Light = getCSSVariableValue('--kt-warning-light');

  const color2 = getCSSVariableValue('--kt-success');
  const color2Light = getCSSVariableValue('--kt-success-light');

  const color3 = getCSSVariableValue('--kt-primary');
  const color3Light = getCSSVariableValue('--kt-primary-light');

  return {
    series: [
    {
                name: 'Inbound Calls',
                data: [80, 80, 70, 70, 90, 90, 80, 80, 80, 60, 60, 50]
            }, {
                name: 'Outbound Calls',
                data: [95, 85, 85, 95, 95, 115, 115, 100, 100, 115, 115, 95]
    }],
    chart: {
      fontFamily: 'inherit',
      type: 'area',
      height: height,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'gradient',
      gradient: 
      {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.2,
        stops: [15, 120, 100]
      }
    },
    stroke: {
      curve: 'smooth',
      show: true,
      width: 3,
      colors: [color1, color2],
    },
    xaxis: {
      categories: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tickAmount: 6,
      labels: {
          rotate: 0,
          rotateAlways: true,
          style: {
              colors: labelColor,
              fontSize: '12px'
          }
      },
      crosshairs: {
        show: true,
        position: 'front',
        stroke: {
          color: [color1, color2],
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: true,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      max: 120,
      min: 30,
      tickAmount: 6,
      labels: {
          style: {
              colors: labelColor,
              fontSize: '12px'
          } 
      }
    },
    states: {
        normal: {
            filter: {
                type: 'none',
                value: 0
            }
        },
        hover: {
            filter: {
                type: 'none',
                value: 0
            }
        },
        active: {
            allowMultipleDataPointsSelection: false,
            filter: {
                type: 'none',
                value: 0
            }
        }
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
    },
    colors: [color1Light, color2Light],
    grid: {
      borderColor: borderColor,
      strokeDashArray: 4,
      yaxis: {
          lines: {
              show: true
          }
      }
    },
    markers: {
      colors: [color1, color2],
      strokeWidth: 3,
    },
  };
}
