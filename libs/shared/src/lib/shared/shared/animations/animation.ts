import { animate, state, style, transition, trigger } from '@angular/animations';

// -----------------------------------------------------------------------------------------------------
// @ Expand / collapse
// -----------------------------------------------------------------------------------------------------
const expandCollapse = trigger('expandCollapse',
  [
    state('void, collapsed',
      style({
        height: '0',
        display: 'none',
        opacity: '0.1'
      })
    ),

    state('*, expanded',
      style({
        height: 'max-content',
        display: 'block',
        opacity: '1'
      })
    ),

    // Prevent the transition if the state is false
    transition('void <=> false, collapsed <=> false, expanded <=> false', []),

    transition('void => *',
      animate('{{timings}}'),
      {
        params: {
          timings: `250ms`
        }
      }
    ),

    transition('* => void',
      animate('{{timings}}'),
      {
        params: {
          timings: `250ms`
        }
      }
    ),

    transition('collapsed <=> expanded',
      animate('{{timings}}'),
      {
        params: {
          timings: `250ms cubic-bezier(0.0, 0.0, 0.2, 1)`
          // timings: `250ms`
        }
      }
    )
  ]
);

export { expandCollapse };

export const SEAnimations = [
  expandCollapse
];

