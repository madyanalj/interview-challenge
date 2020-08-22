const { fetchItems } = require("./item");

describe('Items service', () => {
  describe('fetchItems', () => {
    it('returns value of the "items" property of the JSON response', async () => {
      const items = [{ id: 1 }, { id: 2 }];
      const json = jest.fn().mockResolvedValueOnce({ items });
      window.fetch = jest.fn().mockResolvedValueOnce({ json });

      const results = fetchItems();

      await expect(results).resolves.toBe(items);
    });
  });
});
