const theme = document.createElement('dom-module');
theme.id = 'vcf-webshare-button-lumo';
theme.setAttribute('theme-for', 'vcf-webshare-button');
theme.innerHTML = `
    <template>
      <style>
        :host {}
      </style>
    </template>
  `;
theme.register(theme.id);
