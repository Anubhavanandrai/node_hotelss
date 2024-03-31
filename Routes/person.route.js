import express from "express";
import { Person } from "../models/person.js";

const router = express.Router();



router.delete("/deleteEmp/:id", async (req, res) => {
  try {
    const ide = req.params.id;
    await Person.deleteOne({ _id: ide });
    res.status(200).json({
      isSuccess: true,
      message: "User has been Deleted",
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({
      isSuccess: false,
      msg: "An error occurred during deletion.",
    });
  }
});

router.get("/chicken", (req, res) => {
  res.send("checken bn rha h sir");
});

router.get("/idli", (req, res) => {
  const variety = {
    name: "brijwasi",
    menu: "idlii rava",
    spices: "fungi chicku",
  };
  res.send(variety);
});

router.get("/emp/:work", async (req, res) => {
  const workrequired = req.params.work;
  try {
    if (
      workrequired == "chef" ||
      workrequired == "waiter" ||
      workrequired == "manager"
    ) {
      const resp = await Person.find({ work: workrequired });
      res.status(200).json(resp);
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/emp", async (req, res) => {
  try {
    const resp = await Person.find();
    res.status(200).json(resp);
  } catch (error) {
    console.log(error);
  }
});

router.post("/persondetails", async (req, res) => {
  try {
    const data = req.body;
    const newperson = new Person(data);
    console.log("saved ");
    const response = await newperson.save();

    res.status(200).json(response);
  } catch (error) {
    console.log("i am getting error of something ", error);
  }
});

export default router;
