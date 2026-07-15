const express = require("express");
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post("/crop-advice", async (req, res) => {
  try {
    const { crop, question } = req.body;

    const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash"
});

    const prompt = `
You are an expert agricultural assistant.

Crop: ${crop}

Farmer Question:
${question}

Provide practical farming advice in simple points.
`;

    const response = `
    Recommendations for ${crop} cultivation:

    1. Use high-quality certified seeds.
    2. Apply fertilizers in recommended doses.
    3. Monitor crops regularly for pests and diseases.
    4. Ensure proper irrigation and drainage.
    5. Follow crop rotation practices for better soil health.
    `;

    res.json({
    success: true,
    advice: response
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "AI service failed"
    });
  }
});

module.exports = router;