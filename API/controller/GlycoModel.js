const GlycoModel = (req, res) => {
    const { lectin, glycans } = req.body

    return res.status(200).json({
        "status": 200,
        "data": [
            {
                "lectin": "AAL",
                "glycan": "ABC",
                "specificity": 70.587
            },
            {
                "lectin": "AAL",
                "glycan": "DEF",
                "specificity": 99.483
            },
            {
                "lectin": "AAL",
                "glycan": "XYZ",
                "specificity": 73.874
            }
        ]
    })
}

module.exports = {
    GlycoModel
}