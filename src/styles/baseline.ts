import { createGlobalStyle } from "styled-components";
// Remedy CSS browser default style
const RemedyCss= createGlobalStyle`
/* @docs
license: Mozilla Public License 2.0
Permissions of this weak copyleft 
license are conditioned on making available 
source code of licensed files and modifications of those 
files under the same license (or in certain cases, one of the GNU licenses). 
Copyright and license notices must be preserved. 
Contributors provide an express grant of patent rights. 
However, a larger work using the licensed work may be distributed 
under different terms and without source code for files added in the larger work.

label: Core Remedies
version: 0.1.0-beta.2
note: |
  These remedies are recommended
  as a starter for any project.
category: file
https://github.com/jensimmons/cssremedy/blob/master/css/remedy.css
*/
*, ::before, ::after { box-sizing: border-box; }

html { line-sizing: normal; }

body { margin: 0; }

[hidden] { display: none; }

h1 { font-size: 2rem; }
h2 { font-size: 1.5rem; }
h3 { font-size: 1.17rem; }
h4 { font-size: 1.00rem; }
h5 { font-size: 0.83rem; }
h6 { font-size: 0.67rem; }

h1 { margin: 0.67em 0; }

pre { white-space: pre-wrap; }

hr {
  border-style: solid;
  border-width: 1px 0 0;
  color: inherit;
  height: 0;
  overflow: visible;
}

img, svg, video, canvas, audio, iframe, embed, object {
  display: block;
  vertical-align: middle;
  max-width: 100%;
}
audio:not([controls]) { display:none; }

picture { display: contents; }

source { display: none; }

img, svg, video, canvas {
  height: auto;
}

audio { width: 100%; }

img { border-style: none; }

svg { overflow: hidden; }

article, aside, details, figcaption, figure, footer, header, hgroup, main, nav, section {
  display: block;
}

[type='checkbox'],
[type='radio'] {
  box-sizing: border-box;
  padding: 0;
}
`
export default RemedyCss;