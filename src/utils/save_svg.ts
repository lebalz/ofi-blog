import { removeAnimations } from "./svg_without_animations";
const saveSvg = (svgEl: SVGSVGElement, name: string, code?: string, animated?: boolean) => {
    svgEl.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    
    const bbox = svgEl.getBBox();
    const svgProps = {
      viewBox: `${bbox.x - 5},${bbox.y - 5},${bbox.width + 10},${bbox.height + 10}`,
      width: bbox.width + 10,
      height: bbox.height + 10
    }
    var svgData = svgEl.outerHTML;
    var preface = '<?xml version="1.0" standalone="no"?>';
    const wrapper = document.createElement('div');
    
    // if animations should be rendered, set window.__KEEP_TURTLE_ANIMATIONS__ = true
    if (animated || (window as any).__KEEP_TURTLE_ANIMATIONS__) {
      const saveSvg = svgEl.cloneNode(true) as SVGSVGElement;
      const anims = saveSvg.querySelectorAll('animate');
      const frameIds =Array.from(anims).map((n) => (n.id.match(/\d+/) || [])[0]).filter((nr) => nr).map(nr => Number.parseInt(nr)).sort((a,b) => a > b ? 1 : -1);
      if (frameIds.length > 0) {
        const lastAnim = frameIds[frameIds.length - 1];
        const firstAnim = saveSvg.getElementById('animation_frame0') as SVGAnimateElement;
        if (firstAnim) {
          const looper = document.createElement("rect");
          looper.innerHTML = `  <rect><animate id="looper_animation" begin="0;animation_frame${lastAnim}.end" dur="1ms" attributeName="visibility" from="hide" to="hide"/></rect>`
          firstAnim.parentElement.insertBefore(looper, firstAnim);
          firstAnim.setAttribute('begin', 'looper_animation.end');
          firstAnim.setAttribute('width', `${svgProps.width}`);
        }
      }
      saveSvg.querySelectorAll('animate[attributeName="width"]').forEach((anim) => {
        if (anim.getAttribute('from') === anim.getAttribute('to')) {
          anim.setAttribute('from', `${svgProps.width}`);
        }
        anim.setAttribute('to', `${svgProps.width}`);
      })
      saveSvg.setAttribute('viewBox', svgProps.viewBox);
      saveSvg.setAttribute('height', `${svgProps.height}`);
      saveSvg.setAttribute('width', `${svgProps.width}`);
      wrapper.innerHTML = `${preface}\r\n${saveSvg.outerHTML}`;
    } else {
      const svgWithoutAnim = removeAnimations(`${preface}${svgData}`, svgProps)
      wrapper.innerHTML = svgWithoutAnim;
    }
    // if no metadata should be added, set window.__DISABLE_TURTLE_METADATA__ = true
    if (!(window as any).__DISABLE_TURTLE_METADATA__) {
      const svg = wrapper.querySelector('svg');
      const metadata = document.createElement('metadata');
      const script = document.createElement('raw');
      script.innerHTML = code || ''
      metadata.appendChild(script);
      svg.appendChild(metadata)
    }

    var svgBlob = new Blob([wrapper.innerHTML], { type: "image/svg+xml;charset=utf-8" });
    var svgUrl = URL.createObjectURL(svgBlob);
    var downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = name;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  export {saveSvg};