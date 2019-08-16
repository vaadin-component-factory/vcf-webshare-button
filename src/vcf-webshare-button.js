import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import { ThemableMixin } from '@vaadin/vaadin-themable-mixin';
import { ElementMixin } from '@vaadin/vaadin-element-mixin';
import '@vaadin/vaadin-button';
import '@polymer/iron-icon';
import './icons';

class VcfWebshareButton extends ElementMixin(ThemableMixin(PolymerElement)) {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        :host([hidden]) {
          display: none !important;
        }
      </style>
      <vaadin-button
        id="button"
        theme="tertiary small"
        on-click="openWebShare"
        title="[[shareButtonText]]"
        hidden$="[[!browserCompatible]]"
      >
        <iron-icon icon="taskmob:share" slot="prefix"></iron-icon>
        <span>[[shareButtonText]]</span>
      </vaadin-button>
    `;
  }

  static get is() {
    return 'vcf-webshare-button';
  }

  static get version() {
    return '0.1.1';
  }

  static get properties() {
    return {
      shareUrl: String,
      shareTitle: {
        type: String,
        value: document.title
      },
      shareText: {
        type: String,
        value: ''
      },
      shareButtonText: {
        type: String,
        value: 'Share...'
      },
      browserCompatible: {
        type: Boolean,
        value: 'share' in navigator
      }
    };
  }

  ready() {
    super.ready();
    this.shareUrl = this.shareUrl || this.getDefaultUrl();
  }

  openWebShare() {
    if (window.ga) {
      window.ga('send', 'event', 'Sharing', 'native api used');
    }
    navigator
      .share({
        title: this.shareTitle,
        text: this.shareText,
        url: this.shareUrl
      })
      .catch(console.error);
  }

  getDefaultUrl() {
    let url = window.location.href;
    const canonical = document.querySelector('link[rel=canonical]');
    if (canonical) {
      url = canonical.href;
    }
    return url;
  }

  /**
   * @protected
   */
  get focusElement() {
    return this.$.button;
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
