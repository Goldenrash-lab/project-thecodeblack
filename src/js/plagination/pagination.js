import Pagination from "tui-pagination";

const container = document.querySelector("#tui-pagination-container");

const instance = new Pagination(container, {
  totalItems: 41,
  itemsPerPage: 3,
  visiblePages: 3,
  centerAlign: true,
  firstItemClassName: "tui-first-child",
  lastItemClassName: "tui-last-child",
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
            '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
    disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
            '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
    moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
            '<span class="tui-ico-ellip">...</span>' +
        '</a>'
}
});

// template: {
//   page: '<a href="#" class="tui-page-btn">{{page}}</a>',
//   currentPage:
//     '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
//   moveButton:
//     '<a href="#" class="tui-page-btn tui-{{type}}">' +
//     '<svg class="star" width="16" height="16">' +
//     '<use href="./icon.svg#icon-right-arrow"></use>' +
//     "</svg>" +
//     "</a>",
//   disabledMoveButton:
//     '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
//     '<svg class="star" width="16" height="16">' +
//     '<use href="./icon.svg#icon-right-arrow"></use>' +
//     "</svg>" +
//     "</span>",
//   moreButton:
//     '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
//     '<span class="tui-ico-ellip">...</span>' +
//     "</a>",
// },