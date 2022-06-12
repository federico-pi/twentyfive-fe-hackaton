import { ForceGraph3D } from 'react-force-graph';
import { LatMockData } from 'src/mocks';

export function TGraph() {
  const randomizeLinks = () => {
    const ids = LatMockData.nodes.map((node) => node.id);
    const links = [];

    ids.forEach((id) => {
      const reversedIds = ids.reverse();

      reversedIds.forEach((rev) => {
        links.push({
          source: id,
          target: rev,
        });
      });
    });

    return links;
  };

  return (
    <ForceGraph3D
      graphData={{
        nodes: LatMockData.nodes,
        links: randomizeLinks(),
      }}
      // nodeAutoColorBy='green'
      linkAutoColorBy="blue"
      linkCurvature={2}
      linkOpacity={0.1}
      nodeRelSize={4}
      linkCurveRotation={5}
      linkWidth={0.5}
      width={550}
      height={500}
      scale={1.5}
    />
  );
}
