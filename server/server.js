const express = require("express");
const app = express();
const cors = require("cors");
const mercadopago = require("mercadopago");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

mercadopago.configure({
	access_token: "TEST-3292984318481657-092814-92c68c79bcb19ca5d49d297c2d4a1b69-218528843",
});

app.get("/", function(req,res){
    res.send("servidor de mercado pago")
})

app.post("/create_preference", (req, res) => {

	let preference = {
		items: [
			{
				title: req.body.description,
				unit_price: Number(req.body.price),
				quantity: Number(req.body.quantity),
			}
		],
		back_urls: {
			"success": "http://localhost:3000",
			"failure": "http://localhost:3000",
			"pending": "http://localhost:3000"
		},
		auto_return: "approved",
	};

	mercadopago.preferences.create(preference)
		.then(function (response) {
			res.json({
				id: response.body.id
			});
		}).catch(function (error) {
			console.log(error);
		});
});

app.listen(8080, ()=>{
    console.log("the server in now running on port 3000")
})
