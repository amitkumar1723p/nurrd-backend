const User = require("../models/User");
const generateToken = require("../utils/generateToken");



exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body, "req.body");
        console.log("email");

        let user = await User.findOne({ email });

        // 1️⃣ If user does NOT exist → AUTO REGISTER
        if (!user) {
            const randomName = "user_" + Math.floor(10000 + Math.random() * 90000);

            // Create using save() instead of create()
            const newUser = new User({
                name: randomName,
                email,
                password,
            });

            await newUser.save(); // ⭐ NEXT() NO ERROR WITH save()

            user = newUser;

            return res.json({
                message: "User created & logged in successfully",
                id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id),
            });
        }

        // 2️⃣ User exists → check password
        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // 3️⃣ Login success
        res.json({
            message: "Login successful",
            id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });

    } catch (err) {
        console.log("ERROR:", err);
        res.status(500).json({ error: err.message });
    }
};


