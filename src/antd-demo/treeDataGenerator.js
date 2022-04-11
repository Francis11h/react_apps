// let newArr = [
//   {
//     inputTypeId: 2,
//     maintenanceId: 64,
//     name: "室内设施",
//     id: 100133,
//     parentId: 0,
//     children: [
//       {
//         inputTypeId: 2,
//         maintenanceId: 64,
//         name: "室内设施一",
//         id: 10012,
//         parentId: 100133,
//       },
//       {
//         inputTypeId: 2,
//         maintenanceId: 64,
//         name: "室内设施二",
//         id: 10011,
//         parentId: 100133,
//         children: [
//           {
//             inputTypeId: 2,
//             maintenanceId: 64,
//             name: "室内设施二",
//             id: 3333,
//             parentId: 10011,
//           },
//         ],
//       },
//     ],
//   },
// ];

// renderTreeData = (data, id = 0) => {
//   let treeData = [];
//   data.forEach((item) => {
//     if (item.parentId == id) {
//       const { checkResult = "", remark = "", id } = item;
//       let newItem = {};
//       newItem = {
//         ...item,
//         key: id,
//         checkResult,
//         remark,
//       };
//       newItem.children = this.renderTreeData(data, id);
//       !newItem.children.length && delete newItem.children;
//       treeData.push(newItem);
//     }
//   });
//   return treeData;
// };

const collection = {
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

collection.attributes.map((attr, i) => {
  console.log(attr);

});


