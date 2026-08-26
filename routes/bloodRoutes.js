const express = require("express");

const {
    getBloodOffers,
    getBloodOffer,
    createBloodOffer,
    updateBloodOffer,
    deleteBloodOffer,
} = require("../controllers/bloodController");

const router = express.Router();

router.get("/", getBloodOffers);
router.get("/:id", getBloodOffer);
router.post("/", createBloodOffer);
router.put("/:id", updateBloodOffer);
router.delete("/:id", deleteBloodOffer);

module.exports = router;