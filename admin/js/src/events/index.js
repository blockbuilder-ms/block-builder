export default {
  "bb-builder-add-after": {
    "spawn-browse": import("./bb-builder-add-after/spawn-browse"),
  },
  "bb-builder-add-before": {
    "spawn-column-chooser": import(
      "./bb-builder-add-before/spawn-column-chooser"
    ),
  },
  "bb-block-rendering-after": {
    "spawn-action-bar": import("./bb-block-rendering-after/spawn-action-bar"),
  },
  "bb-column-append-before": {
    resolve: import("./bb-column-append-before/resolve"),
  },
  "bb-content-save-before": {
    "save-content": import("./bb-content-save-before/save-content"),
  },
  "bb-control-checkbox_change-before": {
    "update-control-target": import(
      "./bb-control-checkbox_change-before/update-control-target"
    ),
  },
  "bb-control-hidden_change-before": {
    "update-control-target": import(
      "./bb-control-hidden_change-before/update-control-target"
    ),
  },
  "bb-control-number_keyup-before": {
    "update-control-target": import(
      "./bb-control-number_keyup-before/update-control-target"
    ),
  },
  "bb-control-radio_change-before": {
    "update-control-target": import(
      "./bb-control-radio_change-before/update-control-target"
    ),
  },
  "bb-control-range_change-before": {
    "update-control-target": import(
      "./bb-control-range_change-before/update-control-target"
    ),
  },
  "bb-control-select_change-before": {
    "update-control-target": import(
      "./bb-control-select_change-before/update-control-target"
    ),
  },
  "bb-control-text_keyup-before": {
    "update-control-target": import(
      "./bb-control-text_keyup-before/update-control-target"
    ),
  },
  "bb-footer-save-before": {
    "save-footer": import("./bb-footer-save-before/save-footer"),
  },
  "bb-builder-synced-before": {
    "ensure-row-controls": import(
      "./bb-builder-synced-before/ensure-row-controls"
    ),
    "ensure-columns-controls": import(
      "./bb-builder-synced-before/ensure-columns-controls"
    ),
    "maybe-update-collections": import(
      "./bb-builder-synced-before/maybe-update-collections"
    ),
  },
  "bb-header-save-before": {
    "save-header": import("./bb-header-save-before/save-header"),
  },
  "bb-font-load-before": {
    "load-google-font": import("./bb-font-load-before/load-google-font"),
  },
  "bb-builder-save-before": {
    "on-save": import("./bb-builder-save-before/on-save"),
  },
  "bb-style-save-before": {
    save: import("./bb-style-save-before/save"),
  },
  "bb-walker-build-before": {
    "build-walker": import("./bb-walker-build-before/build-walker"),
    "register-root-changer-events": import(
      "./bb-walker-build-before/register-root-changer-events"
    ),
  },
  "bb-walker-build-after": {
    "load-actions": import("./bb-walker-build-after/load-actions"),
  },
  "bb-block-drag-before": {
    "hide-browse": import("./bb-block-drag-before/hide-browse"),
    "apply-drag-view": import("./bb-block-drag-before/apply-drag-view"),
    "remember-drag-item": import("./bb-block-drag-before/remember-drag-item"),
  },
  "bb-block-drag_end-before": {
    "spawn-browse": import("./bb-block-drag_end-before/spawn-browse"),
    "apply-standard-view": import(
      "./bb-block-drag_end-before/apply-standard-view"
    ),
  },
  "bb-block-drop-before": {
    "add-to-dom": import("./bb-block-drop-before/add-to-dom"),
  },
  "bb-block-delete-before": {
    "confirm-delete": import("./bb-block-delete-before/confirm-delete"),
  },
  "bb-block-delete-after": {
    "cancel-delete": import("./bb-block-delete-after/cancel-delete"),
    "delete-block": import("./bb-block-delete-after/delete-block"),
  },
  "bb-block-duplicate-before": {
    "confirm-duplicate": import(
      "./bb-block-duplicate-before/confirm-duplicate"
    ),
  },
  "bb-block-duplicate-after": {
    "cancel-duplicate": import("./bb-block-duplicate-after/cancel-duplicate"),
    "duplicate-block": import("./bb-block-duplicate-after/duplicate-block"),
  },
  "bb-block-move-before": {
    "show-dropable": import("./bb-block-move-before/show-dropable"),
  },
  "bb-block-move_end-before": {
    "hide-dropable": import("./bb-block-move_end-before/hide-dropable"),
  },
  "bb-block-move_drop-before": {
    "on-drop": import("./bb-block-move_drop-before/on-drop"),
  },
  "bb-block-move_drag_over-before": {
    "drag-over": import("./bb-block-move_drag_over-before/on-drag-over"),
  },
  "bb-plugin-activate-before": {
    resolve: import("./bb-plugin-activate-before/resolve"),
  },
  "bb-plugin-deactivate-before": {
    resolve: import("./bb-plugin-deactivate-before/resolve"),
  },
  "bb-column-rebuild_sizes-before": {
    rebuild: import("./bb-column-rebuild_sizes-before/rebuild"),
  },
  "bb-block-edit-before": {
    "spawn-container": import("./bb-block-edit-before/spawn-container"),
  },
  "bb-tab-spawn-before": {
    "maybe-lazyload-content": import(
      "./bb-tab-spawn-before/maybe-lazyload-content"
    ),
  },
  "bb-block-edit-after": {
    "load-tabs": import("./bb-block-edit-after/load-tabs"),
    "handle-conditionals": import("./bb-block-edit-after/handle-conditionals"),
  },
  "bb-builder-load-before": {
    "initial-data-load": import("./bb-builder-load-before/initial-data-load"),
    "hide-loading-screen": import(
      "./bb-builder-load-before/hide-loading-screen"
    ),
  },
  "bb-post-save_settings-before": {
    resolve: import("./bb-post-save_settings-before/resolve"),
  },
  "bb-responsive-update-before": {
    resolve: import("./bb-responsive-update-before/resolve"),
  },
  "bb-responsive-toggle_view-before": {
    resolve: import("./bb-responsive-toggle_view-before/resolve"),
  },
  "bb-builder-loaded-before": {
    "maybe-autosave": import("./bb-builder-loaded-before/maybe-autosave"),
  },
  "bb-builder-fix-before": {
    resolve: import("./bb-builder-fix-before/resolve"),
  },
  "bb-builder-reload-before": {
    resolve: import("./bb-builder-reload-before/resolve"),
  },
  "bb-walker-hover_step-before": {
    resolve: import("./bb-walker-hover_step-before/resolve"),
  },
};
