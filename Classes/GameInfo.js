import Person from './Person'

export default class GameInfo{
    constructor(gameInfoObject=null){
        
        //if constructor received an object
        if(gameInfoObject)
        {
            //gameId is using setter.
            this.gameId = gameInfoObject.gameId
            gameInfoObject.gameName  ? this.gameName = gameInfoObject.gameName : this.gameName = "not set"
            gameInfoObject.steamLink  ? this.steamLink = gameInfoObject.steamLink : this.steamLink = "not set"
            gameInfoObject.mainContact ? this.mainContact = gameInfoObject.mainContact : this.mainContact = "No contact"
        }
    }

    set gameId(id)
    {
        //console.log("Got id type of:"+typeof id)
        //if it is a string, try to convert.
        id = +id
        //if not null and is a number, set as gameId
        id && typeof id === 'number' ? this._gameId = id : this._gameId = null
    }

    get gameId(){
        return this._gameId
    }

    //mainContact can be only Person class object or null
    set mainContact(contact){
        //Class check before setting
        contact instanceof Person ? this._mainContact = contact : this._mainContact = null
    }

    get mainContact(){
        return this._mainContact
    }

    PrintGameInfo(){      
        let msg ="Game Info \n"
        msg +="---------------"
        msg +="\nGame name:"+this.gameName+"\nID:"+this.gameId+"\nsteamLink:"+this.steamLink
        if(this.mainContact){
            msg +="\nContact name:"+this.mainContact.firstName+" "+this.mainContact.lastName
        }
        msg +="\n-------------\n"
        console.log(msg)
    }
    
    static GetGameInfoFromDBWithID(id){
        //Not implemented yet.
        //retrieves a gameinfo data with id.
        //Connects to db, searches the game and makes a new instance of the class.
        let mockObjectForDataFromDB = {gameId:id,gameName:"The Retrieved Game",steamLink:"https://store.steampowered.com/app/361420/ASTRONEER/"}
        let gi = new GameInfo(mockObjectForDataFromDB)
        return gi
    }
}