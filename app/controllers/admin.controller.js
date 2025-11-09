import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { writeFile } from "node:fs/promises";
import sharp from "sharp";
import datamapper from "../datamapper/datamapper.js";

// get the current file path in __dirname
const __dirname = dirname(fileURLToPath(import.meta.url));

const controller = {
  getAddCoffeePage: async (_, res) => {
    try {
      const countries = await datamapper.findAllCountries();
      const categories = await datamapper.findAllCategories();
      return res.render("add-coffee", {
        page: "add-coffee",
        countries,
        categories,
      });
    } catch (err) {
      return res.status(500).render("error", {
        status: 500,
        message: err.message,
        page: "error",
      });
    }
  },
  PostCoffee: async (req, res) => {
    try {
      // transform req.body.categories into an array if the user has select only one category (allowing datamapper.createCoffeeProduct() to use .map() on it)
      req.body.categories = Array.isArray(req.body.categories)
        ? req.body.categories
        : [req.body.categories];

      req.body.price_per_kg = parseInt(req.body.price_per_kg, 10);

      if (!Number.isNaN(req.body.price_per_kg)) {
        await datamapper.createCoffeeProduct(req.body);
      }
      // build the image name with it reference
      const filename = `${req.body.reference}.png`;
      // build the path where the files will be save
      const filepath = join(
        __dirname,
        "../../docs/integration/images/coffees",
        filename
      );
      console.log(req.file);
      // Resize the image with sharp API and write it to buffer as a png image
      const pngBuffer = await sharp(req.file.buffer)
        .resize(1000, 1000, {
          fit: "inside",
          withoutEnlargement: true,
        })
        .png()
        .toBuffer();
      // Create a file and write the image in it
      await writeFile(filepath, pngBuffer);

      return res.redirect("/catalog");
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
