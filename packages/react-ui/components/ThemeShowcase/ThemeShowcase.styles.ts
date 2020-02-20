import { css, cssName } from '../../lib/theming/Emotion';

export const jsStyles = {
  searchBar() {
    return css`
      position: relative;
      box-sizing: border-box;
      height: 40px;
      padding: 5px;
      background-color: #fff;

      &::after {
        content: attr(data-perf-info);
        position: absolute;
        top: 11px;
        right: 20px;
        color: #808080;
        height: 20px;
        line-height: 20px;
      }
    `;
  },

  heading() {
    return css`
      padding: 24px 0 16px 5px;
      margin: 0;
      background-color: #fff;
    `;
  },

  headingSticky() {
    return css`
      border-bottom: 1px solid #e8e8e8;
    `;
  },

  table() {
    return css`
      width: 880px;
      border-collapse: collapse;

      & tbody tr:hover {
        background-color: #f8f8f8;
      }

      & th {
        text-align: left;
        padding-left: 5px;
      }

      & td {
        border-top: 1px solid #e8e8e8;
        border-bottom: 1px solid #e8e8e8;
        vertical-align: top;
        padding: 10px 5px;
      }
    `;
  },

  invisibleRow() {
    return css`
      padding: 0 !important;
      height: 0 !important;

      ${cssName(jsStyles.table())} tbody tr:not(&) > td {
        border-top: 0 none;
      }

      ${cssName(jsStyles.table())} tbody tr&:hover ~ tr:not(&) {
        background-color: #f8f8f8;
      }

      ${cssName(jsStyles.table())} tbody tr&:hover ~ & ~ tr {
        background-color: transparent;
      }
    `;
  },

  suspiciousRow() {
    return css`
      background-color: red;
    `;
  },

  //noinspection CssReplaceWithShorthandSafely
  invisibleCell() {
    return css`
      padding: 0 !important;
      height: 0 !important;
      font-size: 0 !important;
      line-height: 0 !important;
      border: 0 none !important;
      border-top: 1px solid #e8e8e8 !important;
    `;
  },

  suspiciousCell() {
    return css`
      background-color: #fff0bc;
    `;
  },

  elementName() {
    return css`
      color: #7f9a44;
      font-weight: 400;
      cursor: pointer;
    `;
  },

  relativeCss() {
    return css`
      white-space: pre;
      color: #333;
    `;
  },

  variableName() {
    return css`
      color: #b77daa;
      font-weight: 400;
      cursor: pointer;
    `;
  },

  colorExample() {
    return css`
      display: inline-block;
      box-sizing: border-box;
      width: 16px;
      height: 16px;
      border: 1px solid transparent;
      margin-right: 4px;
      vertical-align: -3px;
    `;
  },

  undefined() {
    return css`
      text-decoration: line-through;
    `;
  },

  unusedVariablesWarning() {
    return css`
      padding: 16px;
      margin: 20px 0;
      background-color: #fff0bc;
      border-radius: 3px;
    `;
  },

  cssClassObject() {
    return css`
      color: #d28445;
    `;
  },

  cssClassName() {
    return css`
      color: #7f9a44;
    `;
  },

  cssThemeObject() {
    return css`
      color: #ac4142;
    `;
  },

  cssThemeProp() {
    return css`
      color: #b77daa;
    `;
  },
};
