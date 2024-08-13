import { SeItem } from "@poc-monorepo/shared";

export const routes: SeItem[] = [
  {
    id: 'pending',
    code: '001',
    title: 'Example',
    type: 'basic',
    icon: 'description',
    link: '/app/fo',
    children: []
  },
  {
    id: 'profile',
    code: '002',
    title: 'MockChildeMenu',
    type: 'collapsable',
    ischildActive: false,
    icon: 'paid',
    role: [
      '01'
    ],
    children: [
      {
        id: 'report1-1',
        code: '002-004-001',
        title: 'submenu',
        type: 'basic',
        icon: 'fiber_manual_record',
        link: '/app/example',
        ischildActive: false,
      },
      {
        id: 'report1',
        code: '002-004',
        title: 'Submenu2',
        type: 'collapsable',
        icon: 'description',
        ischildActive: false,
        role: ['01-01'],
        children: [
          {
            id: 'report1-1',
            code: '002-004-001',
            title: 'Submenu21',
            type: 'basic',
            icon: 'fiber_manual_record',
            link: '/app/example',
            ischildActive: false,
            role: ['01-01-01'],
          },
          {
            id: 'report-budget-asset-1',
            code: '004-004-asset-1',
            title: 'Submenu22',
            type: 'basic',
            icon: 'fiber_manual_record',
            link: '/app/example',
            ischildActive: false,
          },
          {
            id: 'report-budget-building-2',
            code: '004-004-building-2',
            title: 'Submenu23',
            type: 'basic',
            icon: 'fiber_manual_record',
            link: '/app/example',
            ischildActive: false,
          },
          {
            id: 'report-budget-overall-project2',
            code: '011-004-budget-overall-project',
            title: 'Submenu24',
            type: 'basic',
            icon: 'fiber_manual_record',
            link: '/app/example1',
            ischildActive: false,
          },
        ]
      },
    ]
  }
]
