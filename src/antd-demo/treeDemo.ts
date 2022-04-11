interface DataNode {
  title: string;
  key: string;
  isLeaf?: boolean;
  children?: DataNode[];
}

const initTreeData: DataNode[] = [
  { title: 'Expand to load', key: '0' },
  { title: 'Expand to load', key: '1' },
  { title: 'Tree Node', key: '2', isLeaf: true },
];


let cl = {
  id: "625030005647354722b87c9c",
  game_id: "",
  name: "PlayVRS Platform NFT",
  type: "ERC721",
  network: "Rinkeby",
  address: "0x5E94EC4FE91E34582f5f97177d2Bac72E4D559d7",
  description: "Hold PlayVRS Platform NFT to earn your profit.",
  attributes: [
    {
      k: "rarity",
      name: "rarity",
      type: "enum",
      values: ["N", "R", "SR", "SSR"],
    },
    {
      k: "round",
      name: "round",
      type: "enum",
      values: ["Round1: Genesis"],
    },
  ],
};



// It's just a simple demo. You can use tree map to optimize update perf.
function updateTreeData(list: DataNode[], key: string, children: DataNode[]): DataNode[] {
  return list.map(node => {
    if (node.key === key) {
      return {
        ...node,
        children,
      };
    }
    if (node.children) {
      return {
        ...node,
        children: updateTreeData(node.children, key, children),
      };
    }
    return node;
  });
}


console.log(updateTreeData(initTreeData, '0', []))

console.log(cl)