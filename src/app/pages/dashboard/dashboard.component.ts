import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalConfig, ModalComponent } from '../../_metronic/partials';
import $ from "jquery";
import moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  modalConfig: ModalConfig = {
    modalTitle: 'Modal title',
    dismissButtonLabel: 'Submit',
    closeButtonLabel: 'Cancel'
  };
  @ViewChild('modal') private modalComponent: ModalComponent;
  constructor() {}

  ngOnInit(): void {
    var picker = $('#kt_dashboard_daterangepicker');
    var start = moment();
    var end = moment();
    picker.daterangepicker({
      direction: false,
      startDate: start,
      endDate: end,
      opens: 'left',
      applyClass: 'btn-primary',
      cancelClass: 'btn-light-primary',
      ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
      }
    }, this.cb);
    this.cb(start, end, '');
  }

  protected cb = (start:any, end:any, label:string): any => {
      var title = '';
      var range = '';

      if ((end - start) < 100 || label == 'Today') {
          title = 'Today:';
          range = start.format('MMM D');
      } else if (label == 'Yesterday') {
          title = 'Yesterday:';
          range = start.format('MMM D');
      } else {
          range = start.format('MMM D') + ' - ' + end.format('MMM D');
      }

      $('#kt_dashboard_daterangepicker_date').html(range);
      $('#kt_dashboard_daterangepicker_title').html(title);
  }



  async openModal() {
    return await this.modalComponent.open();
  }
}
