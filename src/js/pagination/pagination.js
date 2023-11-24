import Pagination from 'tui-pagination';
import icon from '../../images/icons.svg';

console.log(icon);

const container = document.querySelector('#tui-pagination-container');

const instance = new Pagination(container, {
  totalItems: 41,
  itemsPerPage: 3,
  visiblePages: 3,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton: `<a href="#" class="icon tui-page-btn tui-{{type}}">
      <span class="tui-ico-{{type}}">{{type}}>
     </span> 
      </a>`,
    disabledMoveButton: `<span class="tui-page-btn tui-is-disabled tui-{{type}}">
      <span class="tui-ico-{{type}}">{{type}}>
      </span>
      </span>`,
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
});

/* <svg class="" width="10" height="10">
    <use href="${icon}#icon-nav_button_{{type}}_big"></use>
  </svg> */
