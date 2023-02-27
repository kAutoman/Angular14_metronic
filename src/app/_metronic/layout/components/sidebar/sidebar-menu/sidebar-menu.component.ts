import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {

  constructor() { }

  protected sidebarList = [
    {
      title: 'Purchases',
      children: [
        {
          'Purchase Order':[
            'overview',
            'return purchases'
          ],
        },
        {
          'Back Order':[
            'overview',
            'return purchases'
          ],
        },
        {
          'Pre Order':[
            'overview',
            'return purchases'
          ],
        },
        {
          'Hold Purchase':[
            'overview',
            'return purchases'
          ],
        }]
    },
    {
      title: 'Sale',
      children: [
        {
          'Purchase Order':[
            'overview',
            'return purchases'
          ],
        },
        {
          'Back Order':[
            'overview',
            'return purchases'
          ],
        },
        {
          'Pre Order':[
            'overview',
            'return purchases'
          ],
        },
        {
          'Hold Purchase':[
            'overview',
            'return purchases'
          ],
        }]
    },
    {
      title: 'Accounts',
      children: [
        {
          'Purchase Order':[
            'overview',
            'return purchases'
          ],
        },
        {
          'Back Order':[
            'overview',
            'return purchases'
          ],
        },
        {
          'Pre Order':[
            'overview',
            'return purchases'
          ],
        },
        {
          'Hold Purchase':[
            'overview',
            'return purchases'
          ],
        }]
    },
    {
      title: 'Catalog',
      children: [
        {
          'Purchase Order':[
            'overview',
            'return purchases'
          ],
        },
        {
          'Back Order':[
            'overview',
            'return purchases'
          ],
        },
        {
          'Pre Order':[
            'overview',
            'return purchases'
          ],
        },
        {
          'Hold Purchase':[
            'overview',
            'return purchases'
          ],
        }]
    },
    {
      title: 'Reports',
      children: [
        {
          'Purchase Order':[
            'overview',
            'return purchases'
          ],
        },
        {
          'Back Order':[
            'overview',
            'return purchases'
          ],
        },
        {
          'Pre Order':[
            'overview',
            'return purchases'
          ],
        },
        {
          'Hold Purchase':[
            'overview',
            'return purchases'
          ],
        }]
    },
    {
      title: 'Supply Chain',
      children: [
        {
          'Purchase Order':[
            'overview',
            'return purchases'
          ],
        },
        {
          'Back Order':[
            'overview',
            'return purchases'
          ],
        },
        {
          'Pre Order':[
            'overview',
            'return purchases'
          ],
        },
        {
          'Hold Purchase':[
            'overview',
            'return purchases'
          ],
        }]
    },
    {
      title: 'System',
      children: [
        {
          'Purchase Order':[
            'overview',
            'return purchases'
          ],
        },
        {
          'Back Order':[
            'overview',
            'return purchases'
          ],
        },
        {
          'Pre Order':[
            'overview',
            'return purchases'
          ],
        },
        {
          'Hold Purchase':[
            'overview',
            'return purchases'
          ],
        }]
    },
  ];

  ngOnInit(): void {
  }

}
