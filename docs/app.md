# nome do Aplicativo
Podcast Maneger

### Dominio
PodCasts feitos em videos

### Descrição
Um app ao estilo netflix, onde possa centralizar cdiferentes episódios podcasts separados por categorias

### FEATURES
- Listar os podcasts em sessões de categorias 
  -[SAUDE , FITNESS, MENTALIDADE , HUMOR ETC]
  -[Filtrar epsodios por node de podcast]

## Como faremos
 Vamos no planejamento usar a ideia de ZOOM-OUT que seria olhar feature por features 

 vamos definir primeiro o [- Listar os podcasts em sessões de categorias ]
 como implementar :
 Vou retornar em uma api rest(JSON) para que consiga alimentar um frontEnd.
 retornando o nome , nome do epsodio , imagem de capa e o link.

```js
[
{
    podcastName:"flow",
    episode:"CBUM - FLOW #319",
    videoId:"pQSuQmUfS30",
    cover:"https://i.ytimg.com/vi/pQSuQmUfS30/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC4StKVMSNz3eXH6WV2s3PHLbt8KQ",
    link:"https://www.youtube.com/watch?vpQSuQmUfS30",
    category:["Saúde","bodybuilder"]
},
{
    podcastName:"flow",
    episode:"RUBENS BARRICHELLO - FLOW #339",
    videoId:"4KDGTdiOV4I",
    cover:"https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    link:"https://www.youtube.com/watch?v4KDGTdiOV4I",
    category:["Esporte","Corrida"]
}
]
```
usado o comando npm init -y para iniciar um projeto e npm i typescript tsx tsup -D para instalar o typescript somente no ambiente de desenvolvimento send o tsup um facilitador para leitura do aquivo
e para criar o arquivo do typescript usamos o npx tsc --init depois modificar o tsconfig
