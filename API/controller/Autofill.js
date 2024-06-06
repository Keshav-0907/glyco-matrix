//DONE
const AutoFillLactins = (req, res) => {
    const { query } = req.body

    if (query === 'Ab') {
        return res.status(200).json({
            "status": 200,
            "data": [
                {
                    "result": "Abrus Precatorius Agglutinin"
                },
                {
                    "result": "Laburnum alpinum Lectin"
                },
                {
                    "result": "Vicia Faba Lectin"
                },
                {
                    "result": "ABA / ABL"
                }
            ]
        })
    }

}

//DONE
const AutoFillGlycans = (req, res) => {
    const { query } = req.body

    if (query === 'Ace') {
        return res.status(200).json({
            "status": 200,
            "data": [
                {
                    result: "N-Acetyl-6-deoxy-L-altrosamine"
                },
                {
                    result: "N-Acetyl-6-deoxy-D-talosamine"
                },
                {
                    result: "N-Acetyl-D-allosamine"
                },
                {
                    result: "N-Acetyl-L-altrosamine"
                },
                {
                    result: "N-Acetyl-L-fucosamine"
                },
                {
                    result: "N-Acetyl-D-galactosamine"
                },
                {
                    result: "N-Acetyl-D-glucosamine"
                },
                {
                    result: "N-Acetyl-D-gulosamine"
                },
                {
                    result: "N-Acetyl-L-idosamine"
                },
                {
                    result: "N-Acetyl-D-mannosamine"
                },
                {
                    result: "N-Acetylmuramic acid"
                },
                {
                    result: "N-Acetylneuraminic acid"
                },
                {
                    result: "N-Acetyl-D-quinovosamine"
                },
                {
                    result: "N-Acetyl-L-rhamnosamine"
                },
                {
                    result: "N-Acetyl-D-talosamine"
                }
            ]
        })
    }
}

module.exports = { AutoFillGlycans, AutoFillLactins }