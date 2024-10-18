import config from "../config/env.js";
import Farm from "../models/farm.js";
import Farmer from "../models/farmer.js";
import Produce from "../models/produce.js";
import { ErrorResponse } from "../utils/errorResponse.js";
import { farmerDetails } from "../validators/waitlist.js";

export const farmerWaitlist = async (req, res, next) => {
  try {
    // Log the request body for debugging purposes
    console.log("Request body:", req.body);

    // Validate request body using Joi schema
    const { error, value } = farmerDetails.validate(req.body);
    if (error) {
      console.log("Validation error:", error);
      return res.status(400).json({ message: 'Validation error', details: error.details });
    }

    const { fullName, farmName, location, email, phoneNumber, typeOfProduce, size, supplyFrequency, distributionChannels, mainChallenge, additionalOfferings, updateAndNotification } = value;

    // Check if farmer with email already exists
    const userExist = await Farmer.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "Farmer already exists!" });
    }

    // Create and save new farmer
    const newFarmer = new Farmer({
      fullName,
      email,
      phoneNumber,
      notifications: updateAndNotification
    });
    await newFarmer.save();

    // Create and save new farm
    const newFarm = new Farm({
      farmName,
      location,
      size,
      supplyFrequency,
      distributionChannels,
      mainChallenge,
      additionalOfferings,
      farmerId: newFarmer._id  // Reference the new farmer's ID
    });
    await newFarm.save();

    console.log(newFarm);

    // Create and save new produce
    const newProduce = new Produce({
      typeOfProduce,
      farmId: newFarm._id  // Reference the new farm's ID
    });
    await newProduce.save();

    // Send a success response with farmer, farm, and produce details
    console.log(newFarm, newFarmer, newProduce);
    res.status(201).redirect(config.COMMUNITY_LINK);
  } catch (error) {
    console.error("Error registering new farmer:", error.message);
    
    // Handle MongoDB unique constraint error
    if (error.code === 11000) {
      return res.status(400).json({ message: "Duplicate entry detected", details: error.message });
    }

    // Handle other errors with a generic 500 error
    res.status(500).json({ message: "Server error", error: error.message });
  }
};