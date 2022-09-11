export default window.getAppLoader().filter.apply("bb-actions-load", {
  "accordion-toggle": () => import("./accordion-toggle/module.js"),
  click: () => import("./click/module.js"),
  drag: () => import("./drag/module.js"),
  drop: () => import("./drop/module.js"),
  dropdown: () => import("./dropdown/module.js"),
  event: () => import("./event/module.js"),
  modal: () => import("./modal/module.js"),
  media: () => import("./media/module.js"),
  select: () => import("./select/module.js"),
  sync: () => import("./sync/module.js"),
  tab: () => import("./tab/module.js"),
  toggle: () => import("./toggle/module.js"),
});
