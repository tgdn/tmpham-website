import { css } from "@emotion/core"
import logo from "../../images/logo/logo-goldenrod-transparent.png";

const styles = {
  layout: css`
    margin-bottom: 1.45rem;
    top: 5rem;

    @media only screen and (max-width: 480px) {
      z-index: 1;
      width: 100%;
    }

    position: relative;
    overflow: hidden;
    &::before{
      content: "";
      position: fixed;
      width: 200%;
      height: 200%;
      top: -50%;
      left: -50%;
      z-index: 0;
      background: url(${logo});
      background-repeat: no-repeat;
      background-position: right 45% center;
      background-size: 25%;
      -webkit-transform: rotate(20deg);
      -moz-transform: rotate(20deg);
      -ms-transform: rotate(20deg);
      -o-transform: rotate(20deg);
      transform: rotate(20deg);
      filter: blur(12px);
      -webkit-filter: blur(12px);
      @media only screen and (max-width: 480px) {
        background-position: right 30% center;
        background-size: 50%;
      }
    }
  `,
}

export default styles
