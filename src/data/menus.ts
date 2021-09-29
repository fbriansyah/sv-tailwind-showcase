import type { IMenu } from "../global";

export const menus: IMenu[] = [
  {code: 'dashboard', name: 'Dashboard', icon: 'home'},
  {code: 'master', name: 'Master', icon: 'table', children: [
    {code: 'master/user', name: 'Users', icon: 'user'},
    {code: 'master/tagihan', name: 'Tagihan', icon: 'money-bill-alt'},
    {code: 'master/unit', name: 'Unit', icon: 'building'},
  ]},
  {code: 'laporan', name: 'Laporan', icon: 'file-alt', children: [
    {code: 'laporan/bulanan', name: 'Laporan Bulanan', icon: 'file'},
    {code: 'laporan/tagihan', name: 'Laporan Tagihan', icon: 'file-alt'},
    {code: 'laporan/perunit', name: 'Laporan per Unit', icon: 'file'}
  ]}
]