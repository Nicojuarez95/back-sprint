/**
 * @User
 * @fields mail,password,photo,is_online,is_admin,is_author,is_company,is_verified,verify_code
 */

/**
 * @Category
 * @fields name,description,admin_id
 */

/**
 * @Books
 * @fields title,date,category_id
 * inventar datos de 2 libros para la categoria marvel y 2 libros para la categoria shonen (respetar los id de categorias y referenciar correctamente)
 */

/**
 * @data
 */
let users = [
    {
        mail: "alejandro@mh.com.ar",
        password: "$2a$10$XZBDuOYHcHSzZNzf2ws7Quvu3YmKgSagWRUG1eGlBLSdxJunpN1LC",
        is_author: true,
        is_company: false,
        is_admin: false,
        is_verified: true,
        verify_code: "acvnewi92emodsqisj129mxskal2121wsaz",
        is_online: false,
        photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg"
    },{
        mail: "lucas@mh.com.ar",
        password: "$2a$10$XZBDuOYHcHSzZNzf2ws7Quvu3YmKgSagWRUG1eGlBLSdxJunpN1LC",
        is_author: true,
        is_company: false,
        is_admin: false,
        is_verified: true,
        verify_code: "acvnewi92emodsqisj129mxskal2121wsaz",
        is_online: false,
        photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg"
    },{
        mail: "jose@mh.com.ar",
        password: "$2a$10$XZBDuOYHcHSzZNzf2ws7Quvu3YmKgSagWRUG1eGlBLSdxJunpN1LC",
        is_author: true,
        is_company: false,
        is_admin: false,
        is_verified: true,
        verify_code: "acvnewi92emodsqisj129mxskal2121wsaz",
        is_online: false,
        photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg"
    },{
        mail: "eric@mh.com.ar",
        password: "$2a$10$XZBDuOYHcHSzZNzf2ws7Quvu3YmKgSagWRUG1eGlBLSdxJunpN1LC",
        is_author: true,
        is_company: false,
        is_admin: false,
        is_verified: true,
        verify_code: "acvnewi92emodsqisj129mxskal2121wsaz",
        is_online: false,
        photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg"
    },{
        mail: "igna@mh.com.ar",
        password: "$2a$10$XZBDuOYHcHSzZNzf2ws7Quvu3YmKgSagWRUG1eGlBLSdxJunpN1LC",
        is_author: true,
        is_company: false,
        is_admin: false,
        is_verified: true,
        verify_code: "acvnewi92emodsqisj129mxskal2121wsaz",
        is_online: false,
        photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg"
    },{
        mail: "silvina@mh.com.ar",
        password: "$2a$10$XZBDuOYHcHSzZNzf2ws7Quvu3YmKgSagWRUG1eGlBLSdxJunpN1LC",
        is_author: true,
        is_company: false,
        is_admin: false,
        is_verified: true,
        verify_code: "acvnewi92emodsqisj129mxskal2121wsaz",
        is_online: false,
        photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg"
    },{
        mail: "purple@team.com.ar",
        password: "chau7890",
        is_author: false,
        is_company: true,
        is_admin: false,
        is_verified: true,
        verify_code: "acvnewi92emodsqisj129mxskal2121wsaz",
        is_online: false,
        photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg"
    },{
        mail: "blue@team.com.ar",
        password: "chau7890",
        is_author: false,
        is_company: true,
        is_admin: false,
        is_verified: true,
        verify_code: "acvnewi92emodsqisj129mxskal2121wsaz",
        is_online: false,
        photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg"
    },{
        mail: "orange@team.com.ar",
        password: "chau7890",
        is_author: false,
        is_company: true,
        is_admin: false,
        is_verified: true,
        verify_code: "acvnewi92emodsqisj129mxskal2121wsaz",
        is_online: false,
        photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg"
    },{
        mail: "red@team.com.ar",
        password: "chau7890",
        is_author: false,
        is_company: false,
        is_admin: false,
        is_verified: true,
        verify_code: "acvnewi92emodsqisj129mxskal2121wsaz",
        is_online: false,
        photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg"
    }
]

let categories = [
    {
        name: "shonen",
        detail: "Shonen manga are characterized by having a lot of action and often humorous situations with male protagonists.",
        admin_id: "63f66f8daea87ce097984ac9"
    },{
        name: "manhwa",
        detail: "The Manhwa is from South Korea and is read in the same direction as western books (horizontally and from left to right).",
        admin_id: "63f66f8daea87ce097984ac9"
    },{
        name: "marvel",
        detail: "American superhero comics",
        admin_id: "63f66f8daea87ce097984ac9"
    },{
        name: "dc",
        detail: "American superhero comics",
        admin_id: ""
    },{
        name: "shojo",
        detail: "It is aimed especially at the adolescent female audience, being mostly starring a girl.",
        admin_id: ""
    },{
        name: "seinen",
        detail: "Japanese seinen tells stories with a mature tone.",
        admin_id: ""
    }
]

let books = [
    {
        title: 'avengers',
        date: new Date('2019-12-10'),
        category_id: "pegar el id que corresponda a marvel"
    }
]