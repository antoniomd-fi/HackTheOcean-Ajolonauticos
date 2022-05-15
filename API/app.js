// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})

app.get('/v1/explorers', (req, res) => {
    const Totoaba = {id: 1, name: "Totoaba", habitat:"Norte del Golfo California", states: ["Baja California Norte", "Baja California Sur", "Sonora", "Sinaloa"], threat: "Caza exesiva"}
    const TortugaCarey = {id: 2, name: "Tortuga Carey", habitat:"Pricnipalmente en el Golfo de México", states:["Veracruz", "Campeche", "Yucatán", "Quintana Roo", "Michoacán", "Jalisco", "Sinaloa", "Oaxaca"], threats:"Perdida de los arrecifes de coral, su principal alimento"}
    const VaquitaMarina = {id: 3, name: "Vaquita Marina", habitat:"Golfo de California", states:["Baja California Norte", "Baja California Sur", "Sonora", "Sinaloa"], threats:"Redes de pesca donde queda atrapada"}
    const BallenaAzul = {id: 4, name: "Ballena Azul", habitat:"Parque Nacional Bahía de Loreto", states:["Baja California Sur"], threats:"Pesca comercial exesiva"}
    const TortugaLora = {id:5, name: "Tortuga Lora", habitat:"Golfo de México", states:["Tamaulipas", "Veracruaz", "Tabasco", "Campeche", "Yucatán", "Quintana Roo"], threats:["Contaminación de su habitat", "Redes de pesca donde quedan atrapadas"]}
    const TiburonMartilloGigante = {id: 6, name: "Tiburón Martillo Gigante", habitat:"Golfo de México", states:["Tamaulipas", "Veracruaz", "Tabasco", "Campeche", "Yucatán", "Quintana Roo"], threats:"Caza ilegal por su aleta altamente valiosa en el mercado asiático"}
    const RorcualComun = {id: 7, name: "Rorcual Común", habitat:["Golfo de California", "Golfo de México"], states:["Tamaulipas", "Veracruaz", "Tabasco", "Campeche", "Yucatán", "Quintana Roo", "Baja California Norte", "Baja California Sur", "Sonora", "Sinaloa"], threats:"Pesca exesiva"}
    const TortugaVerde = {id: 8, name: "Tortuga Verde", habitat:"Mares tropicales y subtropicales", states:["Veracruaz"], threats:["Caza exesiva", "Destrucción de sus nidos"]}
    const Animales_en_Peligro = [Totoaba, TortugaCarey, VaquitaMarina, BallenaAzul, TortugaLora, TiburonMartilloGigante, RorcualComun, TortugaVerde]
    res.status(200).json(Animales_en_Peligro)
