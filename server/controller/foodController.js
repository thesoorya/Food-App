const Food = require('../model/foodSchema');

exports.createFood = async (req, res) => {
    try {
        // Check if name or price is missing
        if (!req.body.name || !req.body.price) {
            return res.status(400).json({
                'message': 'Name or price is missing'
            });
        }

        const newFood = await Food.create(req.body);
        res.status(200).json(newFood);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getFoods = async (req, res) => {
    try {
        const food = await Food.find();
        res.status(200).json({
            count: food.length,
            data: food
        });
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getFood = async (req, res) => {
    try {
        const food = await Food.findById(req.params.id);
        if (!food) {
            return res.status(404).json({
                'message': 'Item not found'
            });
        }
        res.status(200).json({
            'data': food
        });
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getFoodByName = async (req, res) => {
    try {
        const food = await Food.findOne({ name: req.params.name });
        if (!food) {
            return res.status(404).json({
                error: "Item not found"
            });
        }
        res.status(200).json({
            data: food
        });
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.updateFood = async (req, res) => {
    try {
        const food = await Food.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        if (!food) {
            return res.status(404).json({
                'message': 'Item not found'
            });
        }
        res.status(200).json(food);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.deleteFood = async (req, res) => {
    try {
        const food = await Food.findByIdAndDelete(req.params.id);
        if (!food) {
            return res.status(404).json({
                'message': 'Item not found'
            });
        }
        res.status(200).json({
            'message': 'Item deleted'
        });
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.deleteFood = async (req, res) => {
    try {
        const food = await Food.findDelete(req.params.id);
        if (!food) {
            return res.status(404).json({
                'message': 'Item not found'
            });
        }
        res.status(200).json({
            'message': 'Item deleted'
        });
    } catch (err) {
        res.status(500).json(err);
    }
};