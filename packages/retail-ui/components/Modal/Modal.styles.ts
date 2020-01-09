import { css } from '../../lib/theming/Emotion';
import { Theme } from '../../lib/theming/Theme';
import { resetButton } from '../../lib/styles/Mixins';

import styles from './Modal.module.less';

export const jsStyles = {
  bg(t: Theme) {
    return css`
      background: ${t.modalBackBg};
      opacity: ${t.modalBackOpacity};
    `;
  },

  window(t: Theme) {
    return css`
      background: ${t.bgDefault};
    `;
  },
  centerContainer(t: Theme) {
    return css`
      margin: 40px 20px;

      @media screen and (max-width: ${t.modalAdaptiveThreshold}) {
        margin: 0;
        width: 100%;
      }
    `;
  },

  close(t: Theme) {
    return css`
      ${resetButton()};

      background: none;
      margin: 2px 2px 0 0;
      width: 76px;
      height: 65px;

      &.${styles.disabled} {
        color: ${t.modalCloseButtonDisabledColor};
      }

      &:after,
      &:before {
        background: ${t.modalCloseButtonColor};
      }

      &:focus::before,
      &:focus::after,
      &:hover::before,
      &:hover::after {
        background: ${t.modalCloseButtonHoverColor};
      }

      &:focus {
        &.${styles.closeOutline} {
          border: 2px solid ${t.borderColorFocus};
        }
      }
    `;
  },

  closeWrapper() {
    return css`
      position: relative;
    `;
  },

  footer(t: Theme) {
    return css`
      &.${styles.panel} {
        background: ${t.modalFooterBg};
      }
    `;
  },

  fixedHeader(t: Theme) {
    return css`
      background: ${t.modalFixedHeaderBg};

      &:after {
        box-shadow: ${t.modalFixedHeaderShadow};
      }
    `;
  },

  fixedFooter(t: Theme) {
    return css`
      background: ${t.modalFixedHeaderBg};

      &:before {
        box-shadow: ${t.modalFixedFooterShadow};
      }
    `;
  },
};
