import INTWithAi from "../services/aiService.js";


const INTcontrollers=async(req,res)=>{

    try {
        const {text}=req.body;
        console.log(text)

        if (!text) {
        return res.status(400).json({ error: "Text is required" });
    }

    const result = await INTWithAi(text);
    res.json(result);


    } catch (error) {
         res.status(500).json({ error: "AI Reading failed" });
         console.log(error.message)
    }
}

export {
    INTcontrollers
}