import React from "react";
import { runForceGraph } from "./ForceGraphGenerator";

export function ForceGraph({ linksData, nodesData, nodeHoverTooltip, onClickNode }) {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    let destroyFn;

    if (containerRef.current) {
      const { destroy } = runForceGraph(containerRef.current, linksData, nodesData, nodeHoverTooltip);
      destroyFn = destroy;
    }

    return destroyFn;
  }, []);

  return <div ref={containerRef} className="container" />;
}