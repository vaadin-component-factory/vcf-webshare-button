import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import { ThemableMixin } from '@vaadin/vaadin-themable-mixin';
import { ElementMixin } from '@vaadin/vaadin-element-mixin';

class VcfWebshareButton extends ElementMixin(ThemableMixin(PolymerElement)) {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
    `;
  }

  static get is() {
    return 'vcf-webshare-button';
  }

  static get version() {
    return '0.1.0';
  }

  static get properties() {
    return {};
  }
}

customElements.define(VcfWebshareButton.is, VcfWebshareButton);

/**
 * @namespace Vaadin
 */
window.Vaadin.VcfWebshareButton = VcfWebshareButton;

if (window.Vaadin.runIfDevelopmentMode) {
  window.Vaadin.runIfDevelopmentMode('vaadin-license-checker', VcfWebshareButton);
}
