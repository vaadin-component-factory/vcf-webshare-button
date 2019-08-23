/* eslint-disable max-len */
import '@polymer/iron-iconset-svg/iron-iconset-svg.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

const template = html`
  <iron-iconset-svg name="vcf" size="24">
    <svg>
      <defs>
        <g id="share">
          <path
            d="m13 4.41421356v10.58578644c0 .5522847-.4477153 1-1 1s-1-.4477153-1-1v-10.58578644l-2.29289322 2.29289322c-.39052429.39052429-1.02368927.39052429-1.41421356 0s-.39052429-1.02368927 0-1.41421356l3.99999998-4c.3905243-.39052429 1.0236893-.39052429 1.4142136 0l4 4c.3905243.39052429.3905243 1.02368927 0 1.41421356s-1.0236893.39052429-1.4142136 0zm-10 7.58578644c0-.5522847.44771525-1 1-1s1 .4477153 1 1v8c0 .5522847.44771525 1 1 1h12c.5522847 0 1-.4477153 1-1v-8c0-.5522847.4477153-1 1-1s1 .4477153 1 1v8c0 1.6568542-1.3431458 3-3 3h-12c-1.65685425 0-3-1.3431458-3-3z"
          />
        </g>
      </defs>
    </svg>
  </iron-iconset-svg>
`;

document.head.appendChild(template.content);
