function tempo(request, response) {
  const dynamicDate = new Date();

  response.json({
      date: dynamicDate.toGMTString(),
      phrase: 'bro, a API tá deployed!'
  })
}

export default tempo;