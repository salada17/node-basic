
const {
    DB_URL
} = process.env;



import {MongoClient} from "mongodb"

let conn = new MongoClient(DB_URL, {useUnifiedTopology: true});

export default {
    /**
     * Singleton-like Database Object that connects to the mongodb database
     */
    async getDbo(){
        if(!conn.isConnected())
            await conn.connect();
        return conn.db();
    }
}

