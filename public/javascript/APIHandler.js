
class APIHandler {
  constructor (baseUrl) {


    this.api = axios.create({
      baseURL: baseUrl
    });
  }

  getFullList () {
    this.api.get("/characters").then((result)=> {
      console.log(result.data)
      return result.data
    })
  }

  getOneRegister (characterId) {
 
    this.api.get(`/characters/${characterId}`).then((result)=> {
      console.log(result.data)
      return result.data
    })
  }

  createOneRegister (characterInfo) {

    this.api.post(`/characters`, characterInfo).then((response) => {
      // Success 🎉
      console.log(response);
    }).catch((error) => {
      console.log(error)
    })
  }

  updateOneRegister (characterId, characterInfo) {
    this.api.put(`/characters/${characterId}`, characterInfo).then((response) => {
      // Success 🎉
      
      return "Character has been successfully edited"
    }).catch((error) => {
      return "Character not found"
    })
  }

  deleteOneRegister (characterId) {

    
    this.api.delete(`/characters/${characterId}`).then((response) => {
        // Success 🎉
        return "Character has been successfully deleted"
      }).catch((error) => {
        return "Character not found"
      })
  }
}
