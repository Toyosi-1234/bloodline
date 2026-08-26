const Blood = require("../models/Blood");
const getBloodOffers = async (req, res) => {
    try {
        const bloodOffers = await
            Blood.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: bloodOffers.lenght,
            data: bloodOffers
        });
    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: "failed to catch blood offers",
            error: error.message
        });
    }
};

const getBloodOffer = async (req, res) => {
    try {
        const bloodOffer = await Blood.findById(req.params.id);

        if (!bloodOffer) {
            return res.status(404).json({
                success: false,
                message: "blood offer not found"
            });
        }

        res.status(200).json({
            success: true,
            data: bloodOffer
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "invalid blood offer id",
        });
    }
};

const createBloodOffer = async (req, res) => {
    try {
        const bloodOffer = await Blood.create(req.body);

        res.status(201).json({
            success: true,
            message: "blood offer created successfully",
            data: bloodOffer
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "failed to create blood offer",
            error: error.message
        });
    }
};

const updateBloodOffer = async (req, res) => {
    try {
        const bloodOffer = await Blood.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        res.status(200).json({
            success: true,
            message: "blood offer updated successfully",
            data: bloodOffer
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "failed to update blood offer",
            error: error.message
        });
    }
};

const deleteBloodOffer = async (req, res) => {
    try {
        const bloodOffer = await Blood.findByIdAndDelete(req.params.id);

        if (!bloodOffer) {
            return res.status(404).json({
                success: false,
                message: "blood offer not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "blood offer deleted successfully",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "invalid blood offer id"
        });
    }
};

module.exports = {
    getBloodOffers,
    getBloodOffer,
    createBloodOffer,
    updateBloodOffer,
    deleteBloodOffer
};