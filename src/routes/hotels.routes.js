import express from "express";
import { HotelController } from "../app/api/v1/controllers/hotel.controller.js";
const router = express.Router();

const hotelController = new HotelController();

router.get("/hotels", hotelController.getHotels);
router.get("/hotels/paginated", hotelController.getPaginatedHotels);
router.post("/hotels", hotelController.createHotel);
router.get("/hotels/:id", hotelController.getHotel);
router.put("/hotels/:id", hotelController.updateHotel);   

export default router;
