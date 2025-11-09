import datamapper from "../datamapper/datamapper.js";

const controller = {
  getCoffeeProductsList: async (_, res) => {
    try {
      const coffeeProducts = await datamapper.findAllCoffeeProducts();
      return res.render("catalog", { page: "catalog", coffeeProducts });
    } catch (err) {
      return res.status(500).render("error", {
        status: 500,
        message: err.message,
        page: "error",
      });
    }
  },
  getCoffeeProductdetails: async (req, res) => {
    const coffeeId = parseInt(req.params.coffeeId, 10);
    if (Number.isNaN(coffeeId)) {
      return res.status(400).render("error", {
        status: 400,
        message: "Bad request",
        page: "error",
      });
    }
    try {
      const allCoffeeId = await datamapper.findCoffeeId();
      if (!allCoffeeId.find((element) => element.id === coffeeId)) {
        return res.status(400).render("error", {
          status: 404,
          message: "Not found",
          page: "error",
        });
      }
      const coffeeProductdetails = await datamapper.findOneCoffeeProduct(
        coffeeId
      );
      return res.render("coffee-details", {
        page: "coffee-details",
        product: coffeeProductdetails,
      });
    } catch (err) {
      return res.status(500).render("error", {
        status: 500,
        message: err.message,
        page: "error",
      });
    }
  },
};

export default controller;
