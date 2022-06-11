import { grey } from '@mui/material/colors';
import {
  Sigma,
  RandomizeNodePositions,
  RelativeSize,
  EdgeShapes,
  NodeShapes,
  NOverlap,
  ForceAtlas2,
} from 'react-sigma';
import { GraphMockData } from 'src/mocks';

export function GraphViewer() {
  let myGraph = {
    nodes: GraphMockData.nodes,
    // edges: [{ id: 'e1', source: 'n1', target: 'n2', label: 'SEES' }],
  };

  return (
    <Sigma
      onOverNode={function noRefCheck() {}}
      renderer="webgl"
      settings={{
        animationsTime: 3000,
      }}
      graph={myGraph}
      style={{
        backgroundColor: grey,
      }}
      // settings={{ drawEdges: true, clone: false }}
    >
      <EdgeShapes default="tapered" />
      <NodeShapes default="star" />
      {/* <RelativeSize initialSize={15} /> */}
      <ForceAtlas2
        worker
        barnesHutOptimize
        barnesHutTheta={0.6}
        iterationsPerRender={10}
        linLogMode
        timeout={3000}
      />
      <NOverlap
        duration={3000}
        easing="quadraticInOut"
        gridSize={20}
        maxIterations={100}
        nodeMargin={10}
        scaleNodes={4}
        speed={10}
      />
      <RandomizeNodePositions />
    </Sigma>
  );
}
