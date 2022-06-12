import { ForceGraph3D } from 'react-force-graph';
import { LatMockData } from 'src/mocks';

export function TGraph() {
  const randomizeLinks = () => {
    const ids = LatMockData.nodes.map((node) => node.id);
    const links = [];

    for (const id in ids) {
      console.log(ids);
      // for (const id2 in ids) {
      //   // console.log(links);
      //   links.push({
      //     source: id,
      //     target: id2,
      //   });
      //   // console.log(links);
      //   break;
      // }
    }

    for (const link in links) {
      console.log(link);
    }

    // console.log(links.length);
    // console.log(LatMockData.nodes.length)

    return links;
  };

  return (
    <ForceGraph3D
      graphData={{
        nodes: LatMockData.nodes,
        links: randomizeLinks(),
      }}
      // nodeId={}
    />
  );
}
