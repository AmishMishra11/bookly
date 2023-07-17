import { loadAllProducts } from "../../Redux/Features/productSlice";

export const loadProducts = (dispatch) => {
  async function getPageAndParse() {
    try {
      let url = "https://api.nexaflow.xyz/api/page/64b2235454887ee679cadb1c";
      url += "?websiteId=64b2233a54887ee679cadb0c";
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "x-api-key": "hi47Yp6+U_-tuZm",
        },
      });
      const responseJSON = await response.json();
      let result = {};
      responseJSON.blocks.map((block) => {
        if (block.nested) {
          return;
        }
        if (Array.isArray(block.blockData)) {
          let arr = block.blockData.map((nestedObj) => {
            return Object.values(nestedObj).reduce((acc, obj) => {
              let blockData = obj.blockData;
              if (typeof blockData === "string") {
                let nested = responseJSON.blocks.find(
                  (block) => block.id === blockData
                );
                let blockName = obj.fieldName;
                if (Array.isArray(nested.blockData)) {
                  nested = nested.blockData.map((nestedObj) => {
                    return Object.values(nestedObj).reduce(
                      (acc, { blockData }) => {
                        return { ...acc, ...blockData };
                      },
                      {}
                    );
                  });
                  blockData = { [blockName]: nested };
                }
                if (typeof nested.blockData === "object") {
                  nested = Object.values(nested.blockData).reduce(
                    (acc, { blockData }) => {
                      return { ...acc, ...blockData };
                    },
                    {}
                  );
                  blockData = { [blockName]: nested };
                }
              }
              return { ...acc, ...blockData };
            }, {});
          });
          result[block.blockName] = arr;
          return;
        }
        if (block.blockType === "group") {
          result[block.blockName] = Object.values(block.blockData).reduce(
            (acc, { blockData }) => {
              return { ...acc, ...blockData };
            },
            {}
          );
          return;
        }

        result[block.blockName] = block.blockData[block.blockName];
      });
      return result;
    } catch (e) {
      console.log(e);
    }
  }

  getPageAndParse()
    .then((cms_parsed_data) => {
      //this variable contains whole page data;
      const cms_page_product = cms_parsed_data;
      //this variables contains each block data;

      const cms_products = cms_parsed_data["Books"];
      /** your code goes here **/

      dispatch(loadAllProducts(cms_products));
    })
    .catch((e) => {
      console.log(e);
    });
};
