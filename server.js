const express = require('express')
 const nunjucks = require('nunjucks')
 const recipes_content = require('./data')



const server = express()
server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    noCache: true
}) 


server.get("/", (req, res) => {
    res.render("index")
})

server.get("/sobre", (req, res)=>{
    res.render("sobre")
})

server.get("/receitas", (req, res) =>{
    res.render("receitas", {items: recipes_content})
})

server.get("/receitas/:index", function(req, res){
        //const recipes = []
        const recipeIndex = req.params.index
        const recipe_info = recipes_content.find(function(recipe){
            return recipe.id == recipeIndex

        })
        if(!recipe_info){
            return res.render("not-found")
        }
        return res.render("recipe_info", {item:recipe_info })


        //console.log(`o indice da rota é: ${recipes[recipeIndex]}`)
})








server.listen(5000, () => {
    console.log('initalizing server...')
})