import { Router } from "express";
import homeController from "./controllers/home.controller.js";
import catalogController from "./controllers/catalog.controller.js";
import adminController from "./controllers/admin.controller.js";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = Router();

router.get("/", homeController.getHomePage);
router.get("/about-shop", homeController.getAboutPage);

router.post("/contact", homeController.sendContactMail);

router.get("/catalog", catalogController.getCoffeeProductsList);
router.get("/catalog/:coffeeId", catalogController.getCoffeeProductdetails);

router.get("/admin/add-coffee", adminController.getAddCoffeePage);
router.post(
  "/admin/add-coffee",
  upload.single("coffee-image"),
  adminController.PostCoffee
);

export default router;
