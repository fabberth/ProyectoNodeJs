var Noticias = [
    {idNoticia: "1",Title: "Francia Paso a semifinal", Descripcion : "fue un partido muy fuerte para francia pero paso", Imagen: "francia.jpg"},
    {idNoticia: "2",Title: "Argentina Paso a semifinal", Descripcion : "despues de ir ganando lo empataron y tuvo que definir desde los penales", Imagen: "Argentina.jpg"},
    {idNoticia: "3",Title: "Croacia Paso a semifinal", Descripcion : "partido luchado pero logro pasar", Imagen: "Groacia.jpg"},
    {idNoticia: "4",Title: "Marruecos Paso a semifinal", Descripcion : "jugo a sacar el resultado y lo logro", Imagen: "Marrueco.jpg"}
]

const inicio = (req,res, next)=>{
    res.render("inicio",{title:"Costa Radio", noticias: Noticias});
}

const viewNoticia = (req,res, next)=>{
    const {idNoticia} = req.query;
    //console.log(idNoticia);
    var item = Noticias.filter(x => x.idNoticia == idNoticia)[0];
    res.render("viewNoticia",{title:item.Title, Noticia: item});
}

var pro = [
    {id:"Lunes", day:[ {name:"Moviendo Tu Ritmo",hour:"12:00-03:00"}]},
    {id:"Martes", day:[ {name:"Moviendo Tu Ritmo",hour:"12:00-03:00"}]},
    {id:"Miercoles", day:[ {name:"Moviendo Tu Ritmo",hour:"12:00-03:00"}]},
    {id:"Jueves", day:[ {name:"Moviendo Tu Ritmo",hour:"12:00-03:00"}]},
    {id:"Viernes", day:[ {name:"Moviendo Tu Ritmo",hour:"12:00-03:00"}]},
    {id:"Sabados", day:[ {name:"Moviendo Tu Ritmo",hour:"12:00-03:00"}]},
    {id:"Domingos", day:[ {name:"Moviendo Tu Ritmo",hour:"12:00-03:00"}]}
]

const horario = (req,res)=>{
    res.render("horario",{
        title:"Horario",
        programas: pro
    });
}

const newPrograma = (req,res)=>{
    const {newPrograma} = req.body;
    //console.log(newPrograma)
    pro.push({id: pro.length+1, name: newPrograma})
    res.redirect("/horario");
}

module.exports = {
    inicio,
    horario,
    newPrograma,
    viewNoticia
}